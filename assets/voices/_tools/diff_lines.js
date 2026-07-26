// 从新 game.js 抽台词，与已生成清单比对，找出缺失项
const fs = require('fs');
const crypto = require('crypto');

const NEW = 'E:/2/--main/--main/js/game.js';
const MANIFEST = 'E:/2/--main/--main/assets/voices/voices_manifest.json';

const src = fs.readFileSync(NEW, 'utf8');
const start = src.indexOf('const SCRIPT = [');
let i = src.indexOf('[', start);
let depth = 0, end = -1;
for (let j = i; j < src.length; j++) {
  const c = src[j];
  if (c === '[' || c === '{') depth++;
  else if (c === ']' || c === '}') { depth--; if (depth === 0) { end = j; break; } }
}
const SCRIPT = eval('(' + src.slice(i, end + 1) + ')');

// 现有清单：hash -> {speaker,text,file,skip}
const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
const have = {}; // speaker::text -> file
for (const k in manifest) {
  const e = manifest[k];
  have[(e.speaker || 'narrator') + '::' + e.text] = k + '.mp3';
}

const lines = [];
SCRIPT.forEach((cmd) => {
  if (cmd.type === 'dialogue') {
    const speaker = cmd.speaker || 'narrator';
    const text = (cmd.text || '').trim();
    if (text) lines.push({ speaker, text });
  } else if (cmd.type === 'narrator') {
    const text = (cmd.text || '').trim();
    if (text) lines.push({ speaker: 'narrator', text });
  }
});

console.log('新剧本可配音行数:', lines.length);
const missing = lines.filter(l => !have[l.speaker + '::' + l.text]);
console.log('已匹配:', lines.length - missing.length, ' | 缺失:', missing.length);
if (missing.length) {
  console.log('--- 缺失列表 ---');
  missing.forEach(m => console.log(`[${m.speaker}] ${m.text}`));
}
// 保存新剧本抽出的行（供生成脚本用）
fs.writeFileSync('E:/2/--main/--main/assets/voices/_tools/new_lines.json', JSON.stringify(lines, null, 2));
