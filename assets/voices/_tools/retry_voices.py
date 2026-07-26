import asyncio, json, os, re
import edge_tts

BASE = 'E:/1/2026-07-26-16-28-59/assets/voices'
lines = json.load(open(os.path.join(BASE, '_lines.json'), encoding='utf-8'))
manifest = json.load(open(os.path.join(BASE, 'voices_manifest.json'), encoding='utf-8'))

# 仅处理缺失的
missing = [it for it in lines
           if not (os.path.exists(os.path.join(BASE, it['key']+'.mp3'))
                   and os.path.getsize(os.path.join(BASE, it['key']+'.mp3')) > 1000)]
print('需补生成:', len(missing))

sem = asyncio.Semaphore(2)

def is_speakable(t):
    # 去掉常见中文标点/空白后是否还有内容
    stripped = re.sub(r'[\s。，！？、：；…—~～“”‘’（）【】《》\.\,\!\?\:\;]', '', t)
    return len(stripped) > 0

async def retry_one(it):
    key = it['key']
    out = os.path.join(BASE, key + '.mp3')
    if os.path.exists(out) and os.path.getsize(out) > 1000:
        return f'skip-exists {key}'
    if not is_speakable(it['text']):
        manifest[key] = {**manifest.get(key, {}), 'skip': True}
        return f'silent {key} (无可朗读内容: {it["text"]})'
    async with sem:
        for attempt in range(5):
            try:
                comm = edge_tts.Communicate(it['text'], it['voice'])
                await comm.save(out)
                if os.path.getsize(out) > 1000:
                    return f'ok {key}'
            except Exception as e:
                await asyncio.sleep(1.5)
        return f'FAIL {key} (仍失败: {it["text"]})'

async def main():
    res = await asyncio.gather(*[retry_one(it) for it in missing])
    for r in res:
        print(r, flush=True)
    json.dump(manifest, open(os.path.join(BASE, 'voices_manifest.json'), 'w', encoding='utf-8'),
              ensure_ascii=False, indent=2)
    ok = sum(1 for k in manifest if os.path.exists(os.path.join(BASE, k+'.mp3')) and os.path.getsize(os.path.join(BASE, k+'.mp3'))>1000)
    skipped = sum(1 for k,v in manifest.items() if v.get('skip'))
    print(f'DONE 有效音频 {ok} 个, 静音跳过 {skipped} 个, 总计记录 {len(manifest)}', flush=True)

asyncio.run(main())
