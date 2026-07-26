import asyncio, json, os, sys
import edge_tts

BASE = 'E:/1/2026-07-26-16-28-59/assets/voices'
lines = json.load(open(os.path.join(BASE, '_lines.json'), encoding='utf-8'))

voice_files = {}  # key -> info
sem = asyncio.Semaphore(6)

async def gen_one(item):
    key = item['key']
    out = os.path.join(BASE, key + '.mp3')
    voice_files[key] = {
        'speaker': item['speaker'],
        'voice': item['voice'],
        'text': item['text'],
        'file': key + '.mp3'
    }
    if os.path.exists(out) and os.path.getsize(out) > 1000:
        return f'skip {key}'
    async with sem:
        try:
            comm = edge_tts.Communicate(item['text'], item['voice'])
            await comm.save(out)
            return f'ok   {key} ({item["speaker"]})'
        except Exception as e:
            return f'ERR  {key}: {e}'

async def main():
    tasks = [gen_one(it) for it in lines]
    done = 0
    for fut in asyncio.as_completed(tasks):
        res = await fut
        done += 1
        if done % 10 == 0 or res.startswith('ERR'):
            print(f'[{done}/{len(lines)}] {res}', flush=True)
    # 写清单
    json.dump(voice_files, open(os.path.join(BASE, 'voices_manifest.json'), 'w', encoding='utf-8'),
              ensure_ascii=False, indent=2)
    ok = sum(1 for r in voice_files if os.path.exists(os.path.join(BASE, r + '.mp3')))
    print(f'DONE 生成 {ok}/{len(lines)} 个音频文件', flush=True)

asyncio.run(main())
