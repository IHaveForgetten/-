// ============================================================
//  《夏日课间的邂逅》 - 视觉小说游戏引擎
//  双男主BL校园恋爱 Galgame
// ============================================================

(function () {
    'use strict';

    // ===== 资源路径配置 =====
    const ASSETS = {
        chars: {
            pangju: {
                name: '胖橘',
                color: '#f5a623',
                normal: 'assets/chars/pangju_normal.png',
                shy: 'assets/chars/pangju_shy.png',
                happy: 'assets/chars/pangju_happy.png',
                surprised: 'assets/chars/pangju_surprised.png',
                sad: 'assets/chars/pangju_sad.png',
                serious: 'assets/chars/pangju_serious.png'
            },
            wangbc: {
                name: '王炳程',
                color: '#4a90d9',
                normal: 'assets/chars/wangbc_normal.png',
                shy: 'assets/chars/wangbc_shy.png',
                smile: 'assets/chars/wangbc_smile.png',
                surprised: 'assets/chars/wangbc_surprised.png',
                sad: 'assets/chars/wangbc_sad.png',
                serious: 'assets/chars/wangbc_serious.png'
            }
        },
        bg: {
            classroom: 'assets/bg/classroom.png',
            playground: 'assets/bg/playground.png',
            library: 'assets/bg/library.png',
            sunset: 'assets/bg/sunset.png'
        }
    };

    // ===== 完整剧本数据 =====
    const SCRIPT = [
        // ========== 序幕 ==========
        { type: 'bg', scene: 'classroom', fade: true },
        { type: 'narrator', text: '高二夏天，期末考试前的最后一个午休。' },
        { type: 'narrator', text: '教室里的人走得差不多了，只剩下窗外的蝉鸣声。' },

        // ========== 第一幕：午休的可乐 ==========
        { type: 'show', char: 'pangju', expr: 'normal', pos: 'left' },
        { type: 'dialogue', speaker: 'pangju', expr: 'normal', text: '（假装收拾书包……其实是在等某人）' },
        { type: 'dialogue', speaker: 'pangju', expr: 'happy', text: '（嘿嘿，按照他的习惯，这个点应该快来了吧……）' },
        { type: 'hide', char: 'pangju' },

        { type: 'narrator', text: '后门被轻轻推开——' },
        { type: 'show', char: 'wangbc', expr: 'normal', pos: 'right' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'normal', text: '……' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'normal', text: '你还没走啊。' },

        { type: 'show', char: 'pangju', expr: 'happy', pos: 'left' },
        { type: 'dialogue', speaker: 'pangju', expr: 'happy', text: '哎呀王同学！这不是在等你嘛～' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'shy', text: '……谁要你等了。' },

        { type: 'narrator', text: '他走到桌边，把一瓶冰可乐轻轻放在你的桌上。' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'shy', text: '……我看你还没去食堂。' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'normal', text: '刚好便利店买一送一，多了而已。' },

        { type: 'dialogue', speaker: 'pangju', expr: 'happy', text: '哇！专门给我买的？感动死了王炳程你果然是个大好人！' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'smile', text: '……吃你的饭吧。' },

        { type: 'dialogue', speaker: 'pangju', expr: 'normal', text: '（冰可乐罐上还带着水珠……这家伙，嘴硬心软）' },
        { type: 'hide', char: 'pangju' },
        { type: 'hide', char: 'wangbc' },

        { type: 'narrator', text: '两人一起走向操场。午后的阳光透过树叶洒下来，斑驳地落在小路上。' },

        // ========== 第二幕：操场边的真心话 ==========
        { type: 'bg', scene: 'playground', fade: true },
        { type: 'show', char: 'pangju', expr: 'normal', pos: 'left' },
        { type: 'show', char: 'wangbc', expr: 'normal', pos: 'right' },

        { type: 'dialogue', speaker: 'pangju', expr: 'normal', text: '话说，期末考完就放暑假了诶。你有什么打算？' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'normal', text: '……也就看看书吧。没什么特别的。' },

        { type: 'dialogue', speaker: 'pangju', expr: 'happy', text: '看书？暑假诶！年轻人不要这么宅嘛！' },
        { type: 'dialogue', speaker: 'pangju', expr: 'happy', text: '要不要出来玩？我带你上分！' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'smile', text: '……你那个技术，还是算了吧。' },

        { type: 'dialogue', speaker: 'pangju', expr: 'surprised', text: '喂！我很强的好不好！' },

        { type: 'narrator', text: '笑声渐渐安静下来。王炳程忽然不说话了，低头看着手里的可乐。' },
        { type: 'setExpr', char: 'wangbc', expr: 'serious' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'serious', text: '……胖橘。' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'serious', text: '暑假……你有什么打算？' },

        { type: 'setExpr', char: 'pangju', expr: 'surprised' },
        { type: 'dialogue', speaker: 'pangju', expr: 'surprised', text: '嗯？不是刚问过吗？就宅家打游戏呗……' },
        { type: 'dialogue', speaker: 'pangju', expr: 'normal', text: '咋了，你想约我？（半开玩笑）' },

        { type: 'setExpr', char: 'wangbc', expr: 'shy' },
        { type: 'narrator', text: '沉默了几秒。' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'shy', text: '……如果我说想呢。' },

        { type: 'setExpr', char: 'pangju', expr: 'surprised' },
        { type: 'narrator', text: '胖橘愣住了。这不像平时那个总是面无表情的王炳程。' },

        // ===== 选项分支 =====
        {
            type: 'choice',
            choices: [
                {
                    text: '「哈？你说啥？再说一遍？」',
                    next: 'branch_tease',
                    tooltip: '装傻试探路线'
                },
                {
                    text: '「……你是认真的吗？」',
                    next: 'branch_direct',
                    tooltip: '直球路线'
                }
            ]
        },

        // ----- 分支A：装傻试探 -----
        { type: 'label', id: 'branch_tease' },
        { type: 'setExpr', char: 'pangju', expr: 'happy' },
        { type: 'dialogue', speaker: 'pangju', expr: 'happy', text: '哈？你说啥？没听清，再说一遍？' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'sad', text: '……算了，当我没说。' },
        { type: 'setExpr', char: 'pangju', expr: 'serious' },
        { type: 'dialogue', speaker: 'pangju', expr: 'serious', text: '等等——' },
        { type: 'narrator', text: '胖橘一把抓住王炳程的袖子。' },
        { type: 'dialogue', speaker: 'pangju', expr: 'shy', text: '（心跳好快……冷静冷静胖橘你可以的）' },
        { type: 'dialogue', speaker: 'pangju', expr: 'serious', text: '……我听清了。你是认真的对吧。' },
        { type: 'setExpr', char: 'wangbc', expr: 'surprised' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'surprised', text: '……嗯。' },
        { type: 'goto', label: 'merge_act3' },

        // ----- 分支B：直球 -----
        { type: 'label', id: 'branch_direct' },
        { type: 'setExpr', char: 'pangju', expr: 'serious' },
        { type: 'narrator', text: '胖橘收起了平时嬉皮笑脸的样子，认真地看着王炳程的眼睛。' },
        { type: 'dialogue', speaker: 'pangju', expr: 'serious', text: '……你是认真的吗？' },
        { type: 'setExpr', char: 'wangbc', expr: 'serious' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'serious', text: '嗯。我是认真的。' },
        { type: 'setExpr', char: 'pangju', expr: 'shy' },
        { type: 'dialogue', speaker: 'pangju', expr: 'shy', text: '（……啊啊啊他说他是认真的）' },
        { type: 'goto', label: 'merge_act3' },

        // ========== 第三幕：图书馆的纸条 ==========
        { type: 'label', id: 'merge_act3' },
        { type: 'hide', char: 'pangju' },
        { type: 'hide', char: 'wangbc' },

        { type: 'bg', scene: 'library', fade: true },
        { type: 'narrator', text: '几天后的放学后。图书馆。' },
        { type: 'narrator', text: '胖橘正在复习数学，随手从书架上抽出一本习题集。' },
        { type: 'narrator', text: '翻开封面——一张折好的纸条掉了出来。' },

        { type: 'show', char: 'pangju', expr: 'surprised', pos: 'left' },
        { type: 'dialogue', speaker: 'pangju', expr: 'surprised', text: '嗯？这是……' },
        { type: 'narrator', text: '纸条上写着熟悉的字迹——' },
        { type: 'narrator', text: '「今天放学后，老地方（操场后面的花坛），等你。——W」' },

        { type: 'setExpr', char: 'pangju', expr: 'shy' },
        { type: 'dialogue', speaker: 'pangju', expr: 'shy', text: '（心脏……怎么跳得这么快……）' },
        { type: 'dialogue', speaker: 'pangju', expr: 'happy', text: '（W……这家伙，还挺浪漫的嘛）' },
        { type: 'hide', char: 'pangju' },

        { type: 'narrator', text: '——操场后面，花坛边。' },
        { type: 'narrator', text: '夕阳把天空染成了橙红色。王炳程已经站在那里了。' },

        // ========== 第四幕：答案 ==========
        { type: 'bg', scene: 'sunset', fade: true },
        { type: 'show', char: 'wangbc', expr: 'serious', pos: 'right' },
        { type: 'show', char: 'pangju', expr: 'normal', pos: 'left' },

        { type: 'dialogue', speaker: 'wangbc', expr: 'serious', text: '你来了。' },
        { type: 'dialogue', speaker: 'pangju', expr: 'normal', text: '嗯……让你久等了。' },

        { type: 'narrator', text: '风轻轻吹过，花坛里的向日葵微微摇曳。' },
        { type: 'setExpr', char: 'wangbc', expr: 'serious' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'serious', text: '胖橘。其实我一直想问你一件事。' },
        { type: 'setExpr', char: 'pangju', expr: 'surprised' },
        { type: 'dialogue', speaker: 'pangju', expr: 'surprised', text: '什么事？' },

        { type: 'dialogue', speaker: 'wangbc', expr: 'serious', text: '从开学换座位那天起，你就总爱找我说话、逗我笑、给我带零食……' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'serious', text: '那些……都是无意的吗？' },

        { type: 'setExpr', char: 'pangju', expr: 'sad' },
        { type: 'narrator', text: '空气仿佛凝固了。胖橘看着王炳程的眼睛——那双藏在镜片后的眼睛，此刻正认真地注视着自己。' },

        // ===== 最终选项 =====
        {
            type: 'choice',
            choices: [
                {
                    text: '「王炳程你这个笨蛋……我逗你是因为喜欢你啊！」',
                    next: 'ending_sweet',
                    tooltip: '甜蜜告白线 → 好结局A'
                },
                {
                    text: '「对，全部都是有意的。从第一天就是。」',
                    next: 'ending_gentle',
                    tooltip: '温柔确认线 → 好结局B'
                },
                {
                    text: '「让我再想想……可以吗？」',
                    next: 'ending_normal',
                    tooltip: '犹豫线 → 普通结局'
                }
            ]
        },

        // ----- 好结局A：甜蜜告白线 -----
        { type: 'label', id: 'ending_sweet' },
        { type: 'setExpr', char: 'pangju', expr: 'serious' },
        { type: 'narrator', text: '胖橘不再逃避了。' },
        { type: 'dialogue', speaker: 'pangju', expr: 'serious', text: '王炳程你这个笨蛋……' },
        { type: 'narrator', text: '胖橘上前一步，一把拉住了王炳程的手。' },
        { type: 'dialogue', speaker: 'pangju', expr: 'happy', text: '我逗你是因为喜欢你啊！从很早以前就是了！' },
        { type: 'setExpr', char: 'wangbc', expr: 'surprised' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'surprised', text: '……！' },
        { type: 'narrator', text: '王炳程愣了一秒。然后——' },
        { type: 'setExpr', char: 'wangbc', expr: 'smile' },
        { type: 'narrator', text: '他笑了。那种从眼底漾开的、从未见过的笑容。' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'smile', text: '……笨蛋。' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'smile', text: '那以后只准逗我一个人。' },
        { type: 'setExpr', char: 'pangju', expr: 'shy' },
        { type: 'dialogue', speaker: 'pangju', expr: 'shy', text: '（脸好烫……但好开心）' },
        { type: 'dialogue', speaker: 'pangju', expr: 'happy', text: '成交！那说好了，暑假一起去海边！' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'normal', text: '嗯。说好了，不许反悔哦。' },
        { type: 'hide', char: 'pangju' },
        { type: 'hide', char: 'wangbc' },
        { type: 'narrator', text: '夕阳下，两人的影子被拉得很长很长。' },
        { type: 'narrator', text: '这个夏天，才刚刚开始。' },
        { type: 'ending', title: '好结局 - 夏日的约定', text: '「从今天起，你是我的专属开心果了。」\n\n—— 胖橘 & 王炳程\n暑假海边之旅，即将开始 ❤' },

        // ----- 好结局B：温柔确认线 -----
        { type: 'label', id: 'ending_gentle' },
        { type: 'setExpr', char: 'pangju', expr: 'serious' },
        { type: 'dialogue', speaker: 'pangju', expr: 'serious', text: '……对。全部都是有意的。' },
        { type: 'dialogue', speaker: 'pangju', expr: 'serious', text: '从第一天就是。' },
        { type: 'setExpr', char: 'wangbc', expr: 'surprised' },
        { type: 'narrator', text: '王炳程的眼镜后闪过一丝惊讶，随即化为释然的微笑。' },
        { type: 'setExpr', char: 'wangbc', expr: 'smile' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'smile', text: '……那就好。' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'smile', text: '我也一样。从第一天起就在注意你了。' },
        { type: 'setExpr', char: 'pangju', expr: 'shy' },
        { type: 'dialogue', speaker: 'pangju', expr: 'shy', text: '（原来……是双向的吗）' },
        { type: 'narrator', text: '不需要太多言语。两人在黄昏中牵起手，慢慢往教室的方向走去。' },
        { type: 'narrator', text: '有些事情不用说出口，彼此都懂。' },
        { type: 'narrator', text: '这就够了。' },
        { type: 'ending', title: '好结局 - 心意相通', text: '「原来我们一直在看向同一个方向。」\n\n—— 胖橘 & 王炳程\n未来的每一天，都会在一起 ✿' },

        // ----- 普通结局 -----
        { type: 'label', id: 'ending_normal' },
        { type: 'setExpr', char: 'pangju', expr: 'sad' },
        { type: 'dialogue', speaker: 'pangju', expr: 'sad', text: '让我再想想……可以吗？' },
        { type: 'setExpr', char: 'wangbc', expr: 'sad' },
        { type: 'narrator', text: '王炳程的眼神黯淡了一瞬，但他很快恢复了温和的表情。' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'sad', text: '……好。我可以等。' },
        { type: 'dialogue', speaker: 'wangbc', expr: 'normal', text: '不用有压力。先做朋友也挺好的。' },
        { type: 'setExpr', char: 'pangju', expr: 'sad' },
        { type: 'dialogue', speaker: 'pangju', expr: 'sad', text: '（看着他转身离开的背影……脚步好像比平时慢了很多）' },
        { type: 'narrator', text: '胖橘望着那个渐行渐远的背影，心里某个地方隐隐作痛。' },
        { type: 'narrator', text: '也许……有些答案，需要更多勇气才能给出。' },
        { type: 'narrator', text: '故事，还没有结束。' },
        { type: 'ending', title: '普通结局 - 未完成的答案', text: '「有些话，下次一定要说出来。」\n\n—— 胖橘 & 王炳程\n故事待续…… ☆' }
    ];

    // ===== 游戏状态 =====
    let state = {
        currentIndex: 0,
        isTyping: false,
        autoMode: false,
        autoTimer: null,
        skipMode: false,
        dialogueLog: [],
        currentBg: null,
        characters: {
            left: null,
            right: null
        }
    };

    // ===== DOM 元素缓存 =====
    const DOM = {};

    function cacheDOM() {
        DOM.titleScreen = document.getElementById('title-screen');
        DOM.gameScreen = document.getElementById('game-screen');
        DOM.endingScreen = document.getElementById('ending-screen');
        DOM.logScreen = document.getElementById('log-screen');
        DOM.menuScreen = document.getElementById('menu-screen');
        DOM.background = document.getElementById('background');
        DOM.charLeft = document.getElementById('char-left');
        DOM.charRight = document.getElementById('char-right');
        DOM.charLeftImg = document.getElementById('char-left-img');
        DOM.charRightImg = document.getElementById('char-right-img');
        DOM.speakerName = document.getElementById('speaker-name');
        DOM.dialogueText = document.getElementById('dialogue-text');
        DOM.dialogueHint = document.getElementById('dialogue-hint');
        DOM.dialogueBox = document.getElementById('dialogue-box');
        DOM.choiceArea = document.getElementById('choice-area');
        DOM.startBtn = document.getElementById('start-btn');
        DOM.continueBtn = document.getElementById('continue-btn');
        DOM.endingBtn = document.getElementById('ending-btn');
        DOM.endingTitle = document.getElementById('ending-title');
        DOM.endingText = document.getElementById('ending-text');
        DOM.logList = document.getElementById('log-list');
        DOM.logClose = document.getElementById('log-close');
        DOM.btnAuto = document.getElementById('btn-auto');
        DOM.btnSave = document.getElementById('btn-save');
        DOM.btnLoad = document.getElementById('btn-load');
        DOM.btnLog = document.getElementById('btn-log');
        DOM.btnSkip = document.getElementById('btn-skip');
        DOM.btnMenu = document.getElementById('btn-menu');
        DOM.menuResume = document.getElementById('menu-resume');
        DOM.menuRestart = document.getElementById('menu-restart');
        DOM.menuTitle = document.getElementById('menu-title');
        DOM.titlePangju = document.getElementById('title-pangju');
        DOM.titleWangbc = document.getElementById('title-wangbc');
    }

    // ===== 屏幕切换 =====
    function showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        if (screenId) {
            const el = document.getElementById(screenId);
            if (el) el.classList.add('active');
        }
    }

    // ===== 背景切换 =====
    function setBackground(sceneName, fade = false) {
        const url = ASSETS.bg[sceneName];
        if (!url) return;
        if (fade) {
            DOM.background.classList.add('fade-out');
            setTimeout(() => {
                DOM.background.style.backgroundImage = `url('${url}')`;
                DOM.background.classList.remove('fade-out');
            }, 400);
        } else {
            DOM.background.style.backgroundImage = `url('${url}')`;
        }
        state.currentBg = sceneName;
    }

    // ===== 角色显示/隐藏 =====
    function showCharacter(charId, expr, pos) {
        const charData = ASSETS.chars[charId];
        if (!charData) return;

        const el = pos === 'left' ? DOM.charLeft : DOM.charRight;
        const imgEl = pos === 'left' ? DOM.charLeftImg : DOM.charRightImg;

        const exprUrl = charData[expr] || charData.normal;
        imgEl.src = exprUrl;

        state.characters[pos] = { id: charId, expr };

        // 清除其他位置的同角色
        const otherPos = pos === 'left' ? 'right' : 'left';
        if (state.characters[otherPos] && state.characters[otherPos].id === charId) {
            hideCharacter(otherPos);
        }

        requestAnimationFrame(() => {
            el.classList.add('active');
            el.classList.remove('dimmed');
        });
    }

    function hideCharacter(pos) {
        const el = pos === 'left' ? DOM.charLeft : DOM.charRight;
        el.classList.remove('active', 'dimmed');
        state.characters[pos] = null;
    }

    function dimCharacter(pos) {
        const el = pos === 'left' ? DOM.charLeft : DOM.charRight;
        el.classList.add('dimmed');
    }

    function setCharacterExpression(charId, expr) {
        const charData = ASSETS.chars[charId];
        if (!charData) return;

        const exprUrl = charData[expr] || charData.normal;

        // 找到角色所在位置并更新
        ['left', 'right'].forEach(pos => {
            if (state.characters[pos] && state.characters[pos].id === charId) {
                const imgEl = pos === 'left' ? DOM.charLeftImg : DOM.charRightImg;
                imgEl.src = exprUrl;
                state.characters[pos].expr = expr;
            }
        });
    }

    // ===== 打字机效果 =====
    let typewriterTimer = null;

    function typeText(text, callback) {
        state.isTyping = true;
        DOM.dialogueHint.style.opacity = '0';
        DOM.dialogueText.textContent = '';
        let i = 0;
        const speed = 35; // ms per character

        function type() {
            if (i < text.length) {
                DOM.dialogueText.textContent += text.charAt(i);
                i++;
                typewriterTimer = setTimeout(type, speed);
            } else {
                state.isTyping = false;
                DOM.dialogueHint.style.opacity = '1';
                if (callback) callback();
                handleAutoAdvance();
            }
        }
        type();
    }

    function skipTypewriter() {
        if (!state.isTyping) return;
        clearTimeout(typewriterTimer);
        state.isTyping = false;
        DOM.dialogueHint.style.opacity = '1';
    }

    function completeCurrentText(cmd) {
        if (state.isTyping) {
            skipTypewriter();
            // 显示完整文本
            DOM.dialogueText.textContent = cmd.text;
            handleAutoAdvance();
        } else {
            advanceScript();
        }
    }

    // ===== 对话框显示 =====
    function showDialogue(speaker, text, expr) {
        const charData = ASSETS.chars[speaker];

        if (speaker === 'narrator') {
            DOM.speakerName.textContent = '';
            DOM.speakerName.className = 'speaker-name narrator';
            DOM.speakerName.style.display = 'none';
        } else if (charData) {
            DOM.speakerName.textContent = charData.name;
            DOM.speakerName.className = 'speaker-name';
            DOM.speakerName.style.display = 'block';
            DOM.speakerName.style.background = `linear-gradient(135deg, ${charData.color}dd 0%, ${charData.color}99 100%)`;
            DOM.speakerName.style.boxShadow = `0 2px 10px ${charData.color}40`;

            // 高亮当前说话者
            highlightSpeaker(speaker);

            // 记录对话日志
            state.dialogueLog.push({
                speaker: charData.name,
                text: text,
                time: new Date().toLocaleTimeString()
            });
        }

        typeText(text);
    }

    function showNarrator(text) {
        DOM.speakerName.textContent = '';
        DOM.speakerName.className = 'speaker-name narrator';
        DOM.speakerName.style.display = 'none';

        // 叙述时稍微调暗角色
        if (state.characters.left) dimCharacter('left');
        if (state.characters.right) dimCharacter('right');

        typeText(text);
    }

    function highlightSpeaker(speakerId) {
        // 恢复所有角色亮度
        ['left', 'right'].forEach(pos => {
            if (state.characters[pos]) {
                const el = pos === 'left' ? DOM.charLeft : DOM.charRight;
                if (state.characters[pos].id === speakerId) {
                    el.classList.remove('dimmed');
                    el.classList.add('active');
                } else {
                    el.classList.add('dimmed');
                }
            }
        });
    }

    // ===== 选项系统 =====
    function showChoices(choices) {
        DOM.choiceArea.innerHTML = '';
        DOM.choiceArea.style.display = 'flex';
        DOM.dialogueBox.style.cursor = 'default';
        DOM.dialogueHint.style.opacity = '0';

        choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.dataset.next = choice.next;
            if (choice.tooltip) {
                btn.title = choice.tooltip;
            }
            btn.addEventListener('click', () => selectChoice(choice));
            DOM.choiceArea.appendChild(btn);
        });
    }

    function selectChoice(choice) {
        DOM.choiceArea.style.display = 'none';
        DOM.dialogueBox.style.cursor = 'pointer';

        // 记录选择到日志
        state.dialogueLog.push({
            speaker: '➤ 选择',
            text: choice.text,
            time: new Date().toLocaleTimeString()
        });

        // 跳转到对应标签
        jumpToLabel(choice.next);
    }

    // ===== 标签跳转 =====
    function jumpToLabel(labelId) {
        for (let i = 0; i < SCRIPT.length; i++) {
            if (SCRIPT[i].type === 'label' && SCRIPT[i].id === labelId) {
                state.currentIndex = i + 1;
                executeCommand();
                return;
            }
        }
    }

    // ===== Goto 指令处理 =====
    function handleGoto(labelId) {
        for (let i = state.currentIndex + 1; i < SCRIPT.length; i++) {
            if (SCRIPT[i].type === 'label' && SCRIPT[i].id === labelId) {
                state.currentIndex = i + 1;
                executeCommand();
                return;
            }
        }
    }

    // ===== 结局处理 =====
    function showEnding(title, text) {
        setTimeout(() => {
            DOM.endingTitle.textContent = title;
            DOM.endingText.textContent = text;
            showScreen('ending-screen');

            // 清除存档标记（已通关）
            localStorage.removeItem('vn_save');
        }, 1500);
    }

    // ===== 自动播放 =====
    function handleAutoAdvance() {
        if (state.autoMode && !state.isTyping) {
            state.autoTimer = setTimeout(() => {
                advanceScript();
            }, 1800); // 等待1.8秒后自动继续
        }
    }

    function toggleAuto() {
        state.autoMode = !state.autoMode;
        DOM.btnAuto.classList.toggle('active', state.autoMode);
        if (!state.autoMode) {
            clearTimeout(state.autoTimer);
        }
    }

    // ===== 存档/读档 =====
    function saveGame() {
        const saveData = {
            index: state.currentIndex,
            log: state.dialogueLog,
            bg: state.currentBg,
            timestamp: new Date().toLocaleString()
        };
        localStorage.setItem('vn_save', JSON.stringify(saveData));
        alert('✓ 游戏已保存\n' + saveData.timestamp);
    }

    function loadGame() {
        const raw = localStorage.getItem('vn_save');
        if (!raw) {
            alert('没有找到存档');
            return;
        }
        try {
            const saveData = JSON.parse(raw);
            state.currentIndex = saveData.index;
            state.dialogueLog = saveData.log || [];

            // 恢复背景
            if (saveData.bg) {
                setBackground(saveData.bg, false);
            }

            showScreen('game-screen');
            resetUI();
            executeCommand();
        } catch (e) {
            alert('存档数据损坏');
        }
    }

    // ===== 对话记录 =====
    function showLog() {
        DOM.logList.innerHTML = '';
        if (state.dialogueLog.length === 0) {
            DOM.logList.innerHTML = '<div style="color:rgba(255,255,255,0.4);text-align:center;padding:2rem;">暂无对话记录</div>';
        } else {
            state.dialogueLog.forEach(entry => {
                const div = document.createElement('div');
                div.className = 'log-entry';
                div.innerHTML = `<div class="log-speaker">${entry.speaker}</div><div class="log-text">${entry.text}</div>`;
                DOM.logList.appendChild(div);
            });
        }
        showScreen('log-screen');
    }

    // ===== UI 重置 =====
    function resetUI() {
        DOM.choiceArea.style.display = 'none';
        DOM.dialogueBox.style.cursor = 'pointer';
        DOM.dialogueText.textContent = '';
        DOM.speakerName.style.display = 'none';
        DOM.charLeft.classList.remove('active', 'dimmed');
        DOM.charRight.classList.remove('active', 'dimmed');
        state.characters.left = null;
        state.characters.right = null;
        state.autoMode = false;
        state.skipMode = false;
        DOM.btnAuto.classList.remove('active');
        clearTimeout(state.autoTimer);
        clearTimeout(typewriterTimer);
    }

    // ===== 剧本执行引擎 =====
    function executeCommand() {
        if (state.currentIndex >= SCRIPT.length) {
            return; // 剧本结束
        }

        const cmd = SCRIPT[state.currentIndex];

        switch (cmd.type) {
            case 'bg':
                setBackground(cmd.scene, cmd.fade !== false);
                state.currentIndex++;
                executeCommand();
                break;

            case 'show':
                showCharacter(cmd.char, cmd.expr || 'normal', cmd.pos || 'right');
                state.currentIndex++;
                executeCommand();
                break;

            case 'hide':
                hideCharacter(cmd.pos || (cmd.char === 'pangju' ? 'left' : 'right'));
                state.currentIndex++;
                executeCommand();
                break;

            case 'setExpr':
                setCharacterExpression(cmd.char, cmd.expr);
                state.currentIndex++;
                executeCommand();
                break;

            case 'dialogue':
                showDialogue(cmd.speaker, cmd.text, cmd.expr);
                state.currentIndex++;
                break;

            case 'narrator':
                showNarrator(cmd.text);
                state.currentIndex++;
                break;

            case 'choice':
                showChoices(cmd.choices);
                state.currentIndex++;
                break;

            case 'label':
                // 标签只是跳转目标，直接跳过
                state.currentIndex++;
                executeCommand();
                break;

            case 'goto':
                handleGoto(cmd.label);
                break;

            case 'ending':
                showEnding(cmd.title, cmd.text);
                break;

            default:
                state.currentIndex++;
                executeCommand();
        }
    }

    function advanceScript() {
        clearTimeout(state.autoTimer);
        if (state.currentIndex >= SCRIPT.length) return;
        executeCommand();
    }

    // ===== 事件绑定 =====
    function bindEvents() {
        // 开始按钮
        DOM.startBtn.addEventListener('click', () => {
            state.currentIndex = 0;
            state.dialogueLog = [];
            resetUI();
            setBackground('classroom', true);
            showScreen('game-screen');
            executeCommand();
        });

        // 继续按钮
        DOM.continueBtn.addEventListener('click', loadGame);

        // 对话框点击继续
        DOM.dialogueBox.addEventListener('click', () => {
            if (state.isTyping) {
                // 如果正在打字，立即完成当前文字
                const cmd = SCRIPT[state.currentIndex - 1];
                if (cmd && (cmd.type === 'dialogue' || cmd.type === 'narrator')) {
                    skipTypewriter();
                    DOM.dialogueText.textContent = cmd.text;
                    handleAutoAdvance();
                }
            } else {
                advanceScript();
            }
        });

        // 结局界面返回
        DOM.endingBtn.addEventListener('click', () => {
            showScreen('title-screen');
            checkSaveData();
        });

        // 日志关闭
        DOM.logClose.addEventListener('click', () => {
            showScreen('game-screen');
        });

        // 控制按钮
        DOM.btnAuto.addEventListener('click', toggleAuto);
        DOM.btnSave.addEventListener('click', saveGame);
        DOM.btnLoad.addEventListener('click', loadGame);
        DOM.btnLog.addEventListener('click', showLog);

        DOM.btnSkip.addEventListener('click', () => {
            state.skipMode = !state.skipMode;
            DOM.btnSkip.classList.toggle('active', state.skipMode);
        });

        DOM.btnMenu.addEventListener('click', () => {
            showScreen('menu-screen');
        });

        // 菜单按钮
        DOM.menuResume.addEventListener('click', () => {
            showScreen('game-screen');
        });
        DOM.menuRestart.addEventListener('click', () => {
            state.currentIndex = 0;
            state.dialogueLog = [];
            resetUI();
            showScreen('game-screen');
            setBackground('classroom', true);
            executeCommand();
        });
        DOM.menuTitle.addEventListener('click', () => {
            showScreen('title-screen');
            checkSaveData();
        });

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (DOM.gameScreen.classList.contains('active')) {
                switch (e.code) {
                    case 'Space':
                    case 'Enter':
                        e.preventDefault();
                        DOM.dialogueBox.click();
                        break;
                    case 'Escape':
                        if (DOM.menuScreen.classList.contains('active')) {
                            showScreen('game-screen');
                        } else {
                            showScreen('menu-screen');
                        }
                        break;
                }
            }
        });
    }

    // ===== 检查存档 =====
    function checkSaveData() {
        const hasSave = !!localStorage.getItem('vn_save');
        DOM.continueBtn.style.display = hasSave ? 'inline-block' : 'none';
    }

    // ===== 初始化标题画面立绘预览 =====
    function initTitlePreview() {
        DOM.titlePangju.style.backgroundImage = `url('${ASSETS.chars.pangju.happy}')`;
        DOM.titleWangbc.style.backgroundImage = `url('${ASSETS.chars.wangbc.smile}')`;
    }

    // ===== 启动 =====
    function init() {
        cacheDOM();
        bindEvents();
        initTitlePreview();
        checkSaveData();
        showScreen('title-screen');
    }

    // DOM 加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
