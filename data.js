export const types = {
    nuan: { id: 'nuan', name: '暖女', emoji: '😊', desc: '温柔体贴、善解人意，总是为他人着想。你就像春风一样，能抚慰身边人的心。' },
    fenghuang: { id: 'fenghuang', name: '凤凰女', emoji: '🦚', desc: '出身平凡但努力上进，渴望通过自身奋斗改变命运。你坚韧不拔，是自己人生的主宰。' },
    baoma: { id: 'baoma', name: '宝妈女', emoji: '👩‍👧', desc: '母性光辉强烈，喜欢照顾他人，有时过度保护。你身边的人总能感受到你无微不至的关怀。' },
    zha: { id: 'zha', name: '渣女', emoji: '💔', desc: '感情中较为随性，擅长处理复杂关系。享受被追捧的感觉，有时会让人觉得难以捉摸。' },
    lao: { id: 'lao', name: '捞女', emoji: '💰', desc: '极其现实，目标明确。在关系中注重物质和实际利益的交换，懂得如何为自己争取最大化利益。' },
    jiabao: { id: 'jiabao', name: '家暴女', emoji: '👊', desc: '情绪张力大，掌控欲强。容易在激烈的情境中表达自我，需要学习更好地管理情绪。' }
};

export const questions =[
    {
        q: "周末朋友约你出去玩，但你其实有点累，你会：",
        options:[
            { text: "强打精神陪他们去，不想扫兴", type: "nuan" },
            { text: "拒绝，利用时间考证或加班", type: "fenghuang" },
            { text: "把他们叫来家里，给他们做顿大餐", type: "baoma" },
            { text: "看局里有没有自己感兴趣或有钱的人再决定", type: "lao" }
        ]
    },
    {
        q: "伴侣忘记了你们的纪念日，你的第一反应是：",
        options:[
            { text: "微笑着提醒他，表示没关系", type: "nuan" },
            { text: "大发雷霆，甚至砸东西", type: "jiabao" },
            { text: "暗示他需要用昂贵的礼物来补偿", type: "lao" },
            { text: "觉得无所谓，刚好自己周末约了另一个小哥哥", type: "zha" }
        ]
    },
    {
        q: "在职场遇到不公平待遇时，你会：",
        options:[
            { text: "默默忍受，不想起冲突", type: "nuan" },
            { text: "暗自发誓要爬到更高的位置，让他们好看", type: "fenghuang" },
            { text: "跟同事抱怨，像个老母亲一样操心公司发展", type: "baoma" },
            { text: "当场爆发，拍桌子跟领导吵架", type: "jiabao" }
        ]
    },
    {
        q: "对于金钱，你的态度是：",
        options:[
            { text: "够用就好，感情比钱重要", type: "nuan" },
            { text: "只有钱能给我安全感，越多越好", type: "lao" },
            { text: "钱要靠自己努力赚，每一分都有血汗", type: "fenghuang" },
            { text: "钱就是用来给家人改善生活的", type: "baoma" }
        ]
    },
    {
        q: "和刚认识的异性聊天，对方抛出暧昧话题，你会：",
        options:[
            { text: "礼貌回避，觉得不太合适", type: "nuan" },
            { text: "游刃有余地接招，甚至反向撩拨", type: "zha" },
            { text: "评估对方的经济实力再决定态度", type: "lao" },
            { text: "直接警告对方放尊重点，否则拉黑", type: "jiabao" }
        ]
    },
    {
        q: "看到路边有流浪猫，你会：",
        options:[
            { text: "觉得好可怜，去买点火腿肠喂它", type: "nuan" },
            { text: "立刻带回家洗澡治病，当儿子养", type: "baoma" },
            { text: "没空管，急着去见客户/加班", type: "fenghuang" },
            { text: "拍个照发朋友圈装一下有爱心", type: "zha" }
        ]
    },
    {
        q: "你的前任突然联系你求复合，你会：",
        options:[
            { text: "心软，考虑给他一次机会", type: "nuan" },
            { text: "吊着他，刚好最近缺个跑腿的", type: "zha" },
            { text: "看他现在混得怎么样，有没有钱", type: "lao" },
            { text: "让他滚，再来烦人就打断他的腿", type: "jiabao" }
        ]
    },
    {
        q: "朋友失恋了找你哭诉，你会怎么做？",
        options:[
            { text: "陪她一起哭，整夜安慰她", type: "nuan" },
            { text: "把她接到家里，照顾她的一日三餐", type: "baoma" },
            { text: "带她去酒吧认识新的帅哥", type: "zha" },
            { text: "骂醒她，告诉她搞钱才是正事", type: "fenghuang" }
        ]
    },
    {
        q: "买衣服时，你最看重什么？",
        options:[
            { text: "穿着舒服，别人看着顺眼", type: "nuan" },
            { text: "必须是奢侈品大牌，能彰显身份", type: "lao" },
            { text: "性价比高，不能太贵", type: "fenghuang" },
            { text: "布料结实耐穿，适合干活/带娃", type: "baoma" }
        ]
    },
    {
        q: "跟伴侣吵架到了极点，你通常的反应是：",
        options:[
            { text: "委屈流泪，主动妥协", type: "nuan" },
            { text: "动手打人，摔砸物品", type: "jiabao" },
            { text: "冷暴力，同时找别人聊天排解", type: "zha" },
            { text: "没空吵架，我要去工作了", type: "fenghuang" }
        ]
    },
    {
        q: "如果你突然中了一百万，第一件事是？",
        options:[
            { text: "给父母买礼物，请朋友吃饭", type: "nuan" },
            { text: "全部存起来或者投资，钱生钱", type: "fenghuang" },
            { text: "买各种奢侈品包包和首饰", type: "lao" },
            { text: "给孩子/家人买套学区房或重疾险", type: "baoma" }
        ]
    },
    {
        q: "异性送你贵重礼物，但你并不喜欢他，你会：",
        options:[
            { text: "果断拒绝，不想欠人情", type: "nuan" },
            { text: "照单全收，反正不要白不要", type: "lao" },
            { text: "收下，并暗示他还能送更好的", type: "zha" },
            { text: "觉得受到了冒犯，严词拒绝", type: "jiabao" }
        ]
    },
    {
        q: "你认为维系一段长期关系的基石是：",
        options:[
            { text: "互相理解和包容", type: "nuan" },
            { text: "对方能持续提供物质价值", type: "lao" },
            { text: "共同进步，跨越阶层", type: "fenghuang" },
            { text: "像亲人一样互相照顾", type: "baoma" }
        ]
    },
    {
        q: "当有人对你提出不合理的批评时：",
        options:[
            { text: "心里难受，但反思是不是自己的错", type: "nuan" },
            { text: "直接怼回去，甚至动手推搡", type: "jiabao" },
            { text: "一笑而过，用成绩打他们的脸", type: "fenghuang" },
            { text: "把批评者当小孩子看，不去计较", type: "baoma" }
        ]
    },
    {
        q: "在聚会中，你通常扮演什么角色？",
        options:[
            { text: "默默倾听，照顾大家的感受", type: "nuan" },
            { text: "交际花，游走在各种异性之间", type: "zha" },
            { text: "烤肉/倒水/收盘子的后勤大总管", type: "baoma" },
            { text: "寻找有用的人脉，递名片", type: "lao" }
        ]
    },
    {
        q: "对于婚姻的看法，你更倾向于：",
        options:[
            { text: "两人相爱最重要，哪怕穷一点", type: "nuan" },
            { text: "婚姻是阶层跨越的跳板", type: "lao" },
            { text: "想要一个安稳的家，生儿育女", type: "baoma" },
            { text: "不想被束缚，结不结无所谓，多谈几个更好", type: "zha" }
        ]
    },
    {
        q: "当伴侣生病时，你会：",
        options:[
            { text: "嘘寒问暖，买药倒水", type: "nuan" },
            { text: "熬夜照顾，像照顾婴儿一样无微不至", type: "baoma" },
            { text: "让他自己吃药，我还有项目要赶", type: "fenghuang" },
            { text: "嫌烦，借口有事出去玩", type: "zha" }
        ]
    },
    {
        q: "遇到困难时，你的第一反应是：",
        options:[
            { text: "找个有钱人帮我解决", type: "lao" },
            { text: "咬紧牙关，靠自己死磕到底", type: "fenghuang" },
            { text: "找备胎们诉苦，看谁愿意出力", type: "zha" },
            { text: "发脾气，摔东西发泄情绪", type: "jiabao" }
        ]
    },
    {
        q: "你对另一半的手机查岗态度：",
        options:[
            { text: "绝对信任，从来不看", type: "nuan" },
            { text: "必须每天检查，有嫌疑就严刑拷打", type: "jiabao" },
            { text: "当妈式管理，主要看他有没有乱花钱", type: "baoma" },
            { text: "只关心他的银行卡余额和转账记录", type: "lao" }
        ]
    },
    {
        q: "如果你是一个团队的领导，你会：",
        options:[
            { text: "极其严厉，达不到要求就大发雷霆", type: "jiabao" },
            { text: "拼命工作，带领团队拿业绩第一", type: "fenghuang" },
            { text: "像大姐姐一样关心下属的生活", type: "baoma" },
            { text: "利用下属完成工作，功劳自己揽", type: "zha" }
        ]
    },
    {
        q: "发现伴侣出轨，你会：",
        options:[
            { text: "悲痛欲绝，但如果他道歉可能会原谅", type: "nuan" },
            { text: "直接拿刀冲进现场，打个你死我活", type: "jiabao" },
            { text: "马上找律师查封财产，让他净身出户", type: "lao" },
            { text: "无所谓，其实我也出轨了", type: "zha" }
        ]
    },
    {
        q: "休息日你最喜欢做的事情是：",
        options:[
            { text: "宅在家里做家务，整理房间", type: "baoma" },
            { text: "去高档场所打卡拍照，发小红书", type: "lao" },
            { text: "同时和几个不同的男生约会", type: "zha" },
            { text: "看书充电，或者做兼职赚钱", type: "fenghuang" }
        ]
    },
    {
        q: "评价一下你自己的性格：",
        options:[
            { text: "温柔随和，没什么脾气", type: "nuan" },
            { text: "暴躁易怒，点火就着", type: "jiabao" },
            { text: "现实理智，目标导向", type: "lao" },
            { text: "吃苦耐劳，不认命", type: "fenghuang" }
        ]
    },
    {
        q: "你认为女人最强大的武器是：",
        options:[
            { text: "温柔和眼泪", type: "nuan" },
            { text: "能力和事业", type: "fenghuang" },
            { text: "美貌和手腕", type: "zha" },
            { text: "武力和气场", type: "jiabao" }
        ]
    },
    {
        q: "如果有男生主动帮你提重物：",
        options:[
            { text: "非常感谢，心里觉得很暖", type: "nuan" },
            { text: "不用了，我自己完全能行", type: "fenghuang" },
            { text: "理所当然，顺便让他帮我买杯奶茶", type: "zha" },
            { text: "叮嘱他小心点别闪到腰，像嘱咐儿子", type: "baoma" }
        ]
    },
    {
        q: "面对比你优秀的女性，你会：",
        options:[
            { text: "真心赞美，希望和她成为朋友", type: "nuan" },
            { text: "暗暗较劲，发誓一定要超过她", type: "fenghuang" },
            { text: "研究她是靠什么男人上位的", type: "lao" },
            { text: "看她不顺眼，想找茬骂她", type: "jiabao" }
        ]
    },
    {
        q: "收到推销电话，你会：",
        options:[
            { text: "不好意思直接挂，听完再委婉拒绝", type: "nuan" },
            { text: "直接破口大骂对方骚扰", type: "jiabao" },
            { text: "教育对方找个正经工作，别骗人", type: "baoma" },
            { text: "马上挂断，浪费我赚钱的时间", type: "fenghuang" }
        ]
    },
    {
        q: "关于相亲，你的看法是：",
        options:[
            { text: "随缘，看能不能遇到合适的人", type: "nuan" },
            { text: "必须提供房产证和银行流水才去", type: "lao" },
            { text: "去蹭顿好饭，然后说不合适", type: "zha" },
            { text: "没兴趣，靠自己也能过得很好", type: "fenghuang" }
        ]
    },
    {
        q: "你最讨厌的男性类型是：",
        options:[
            { text: "穷还不上进的", type: "lao" },
            { text: "管太多的，影响我养鱼的", type: "zha" },
            { text: "冷漠自私，不会照顾人的", type: "nuan" },
            { text: "大男子主义，还不扛揍的", type: "jiabao" }
        ]
    },
    {
        q: "最后一道题：你做这个测试的原因是？",
        options:[
            { text: "朋友发的，不好意思不测", type: "nuan" },
            { text: "看看准不准，顺便分享给我的备胎们", type: "zha" },
            { text: "想更了解自己，以便提升自我", type: "fenghuang" },
            { text: "测着玩玩，如果说我不好我就砸手机", type: "jiabao" }
        ]
    }
];
