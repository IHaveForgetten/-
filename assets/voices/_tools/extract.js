// 从 game.js 的 SCRIPT 中提取所有可配音行（dialogue + narrator），输出 JSON
const fs = require('fs');
const crypto = require('crypto');

const path = 'E:/1/2026-07-26-16-28-59/js/game.js';
const src = fs.readFileSync(path, 'utf8');

// 定位 const SCRIPT = [ ... ];
const start = src.indexOf('const SCRIPT = [');
if (start < 0) throw new Error('未找到 SCRIPT');
let i = src.indexOf('[', start);
let depth = 0, end = -1;
for (let j = i; j < src.length; j++) {
  const c = src[j];
  if (c === '[' || c === '{') depth++;
  else if (c === ']' || c === '}') {
    depth--;
    if (depth === 0) { end = j; break; }
  }
}
const arrText = src.slice(i, end + 1);
const SCRIPT = eval('(' + arrText + ')');

const VOICE = {
  pangju: 'zh-CN-YunxiNeural',     // 青春阳光男声
  wangbc: 'zh-CN-YunyangNeural',   // 沉稳男声
  narrator: 'zh-CN-XiaoxiaoNeural' // 温暖女声旁白
};

const lines = [];
SCRIPT.forEach((cmd, idx) => {
  if (cmd.type === 'dialogue') {
    const speaker = cmd.speaker || 'narrator';
    const text = (cmd.text || '').trim();
    if (!text) return;
    const voice = VOICE[speaker] || VOICE.narrator;
    const key = crypto.createHash('sha1').update(speaker + '::' + text).digest('hex').slice(0, 12);
    lines.push({ order: idx, speaker, voice, text, key });
  } else if (cmd.type === 'narrator') {
    const text = (cmd.text || '').trim();
    if (!text) return;
    const key = crypto.createHash('sha1').update('narrator::' + text).digest('hex').slice(0, 12);
    lines.push({ order: idx, speaker: 'narrator', voice: VOICE.narrator, text, key });
  }
});

fs.writeFileSync('E:/1/2026-07-26-16-28-59/assets/voices/_lines.json', JSON.stringify(lines, null, 2));
console.log('可配音行数:', lines.length);
const bySpeaker = {};
lines.forEach(l => bySpeaker[l.speaker] = (bySpeaker[l.speaker] || 0) + 1);
console.log('按角色统计:', JSON.stringify(bySpeaker));
console.log('示例:', JSON.stringify(lines.slice(0, 3), null, 2));
