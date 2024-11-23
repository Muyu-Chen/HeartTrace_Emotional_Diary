function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInt = getRandomInt(1, 46);
console.log(randomInt);

switch (randomInt) {
    case 1:
        document.getElementById('quoteContents').textContent = '你生命的前半辈子或许属于别人，活在别人的认知里。那把后半辈子还给你自己，去追随你内在的声音。';
        document.getElementById('quoteWritorName').textContent = '——卡尔·荣格';

        break;
    case 2:
        document.getElementById('quoteContents').textContent = '每个人都有不同程度的自卑感，而优越感是自卑的补偿。自卑感的存在并不是一件坏事，因为它激励了人不断追求卓越，克服自身的障碍，在有限的生命空间内发挥出最大的价值。  ';
        document.getElementById('quoteWritorName').textContent = '——阿德勒';
        break;
    case 3:
        document.getElementById('quoteContents').textContent = '无法成为我们自己，是一切绝望的根源。';
        document.getElementById('quoteWritorName').textContent = '——卡伦·霍妮';
        break;
    case 3:
        document.getElementById('quoteContents').textContent = '孤独并不是来自身边无人，感到孤独的真正原因是，无法与他人交流最紧要的感受。';
        document.getElementById('quoteWritorName').textContent = '——卡尔·荣格';
        break;
    case 4:
        document.getElementById('quoteContents').textContent = '勇气就是克服困难的活力，缺乏勇气的人一旦遇到困难就会坠入人生的黑暗深渊。';
        document.getElementById('quoteWritorName').textContent = '——阿尔弗雷德·阿德勒';
        break;
    case 5:
        document.getElementById('quoteContents').textContent = '心态健全的人不会试图改变对方而改变自己。';
        document.getElementById('quoteWritorName').textContent = '——阿尔弗雷德·阿德勒';
        break;
    case 6:
        document.getElementById('quoteContents').textContent = '纵使被说坏话，被讨厌，也并没什么好在意的。因为对方如何看你，那是对方的课题。';
        document.getElementById('quoteWritorName').textContent = '——阿尔弗雷德·阿德勒';
        break;
    case 7:
        document.getElementById('quoteContents').textContent = '就算有不幸的童年如果你决定要幸福，而且朝着目标前进留在你心中的记忆和赋予记忆的意义也会不同。';
        document.getElementById('quoteWritorName').textContent = '——阿尔弗雷德·阿德勒';
        break;
    case 8:
        document.getElementById('quoteContents').textContent = '逞强是自卑感的另一种表现，不要努力看起来很强而是努力变得更强。';
        document.getElementById('quoteWritorName').textContent = '——阿尔弗雷德·阿德勒';
        break;

    case 9:
        document.getElementById('quoteContents').textContent = '我们不能期待别人随时体察我们的情绪如果我们需要帮助，就需要用语言表达出来。';
        document.getElementById('quoteWritorName').textContent = '——阿尔弗雷德·阿德勒';
        break;
    case 10:
        document.getElementById('quoteContents').textContent = '在生命中，最微不足道但有意义的事物，也比最伟大但无意义的事物更有价值。';
        document.getElementById('quoteWritorName').textContent = '——卡尔 荣格';
        break;
    case 11:
        document.getElementById('quoteContents').textContent = '没有必要为眼前的错误怀疑自己，而应该直面错误，并在以后避免类似的错误。';
        document.getElementById('quoteWritorName').textContent = '——阿尔弗雷德·阿德勒';
        break;
    case 12:
        document.getElementById('quoteContents').textContent = '所有心理问题都是“人际关系”问题，不仅是你和别人，也有你和自己的关系。';
        document.getElementById('quoteWritorName').textContent = '——戴维·迈尔斯《社会心理学》';
        break;
    case 13:
        document.getElementById('quoteContents').textContent = '人生的意义不在于拿一手好牌，而在于打好一手坏牌。';
        document.getElementById('quoteWritorName').textContent = '——卡耐基《人性的弱点》';
        break;
    case 14:
        document.getElementById('quoteContents').textContent = '只要从不同角度看待否定自己和他人的话语，世界就会骤然改变。';
        document.getElementById('quoteWritorName').textContent = '——阿尔弗雷德·阿德勒';
        break;
    case 15:
        document.getElementById('quoteContents').textContent = '一个人能够，并且应该让自己做到的，不是感到安全，而是能够接纳不安全的现实。';
        document.getElementById('quoteWritorName').textContent = '——艾瑞克·弗洛姆';
        break;
    case 16:
        document.getElementById('quoteContents').textContent = '我们才是自己生命最好的专家，因为没有任何人能知道我们是如何感知世界的。';
        document.getElementById('quoteWritorName').textContent = '——卡尔·罗杰斯';
        break;


    case 17:
        document.getElementById('quoteContents').textContent = ' 好的人生是一种过程，而不是一种状态；它是一个方向，而不是终点。';
        document.getElementById('quoteWritorName').textContent = '——卡尔·罗杰斯';
        break;
    case 18:
        document.getElementById('quoteContents').textContent = '乐观不等于盲目期待最好事情发生，而是相信无论发生什么，你都能处理好。';
        document.getElementById('quoteWritorName').textContent = '——露易丝·海《生命的重建》';
        break;
    case 19:
        document.getElementById('quoteContents').textContent = '每个人自己都是一个海岛，只有他首先乐意成为自己并得到容许成为他自己，他才能够同其他的海岛搭起桥梁。';
        document.getElementById('quoteWritorName').textContent = '——艾瑞克·弗洛姆';
        break;
    case 20:
        document.getElementById('quoteContents').textContent = '亲爱的，请找到真正的自己，让自己变得更像自己。你不必为了被爱而去努力，你只需要成为自己。';
        document.getElementById('quoteWritorName').textContent = '——伊迪丝·伊娃·埃格尔';
        break;
    case 21:
        document.getElementById('quoteContents').textContent = '一个人要想真正的成长，必须在洞悉自己并坦然接受的同时又有所追求。';
        document.getElementById('quoteWritorName').textContent = '——卡伦·霍妮';
        break;
    case 22:
        document.getElementById('quoteContents').textContent = '没有口误这回事，所有的口误都是潜意识真实的流露。';
        document.getElementById('quoteWritorName').textContent = '——西格蒙德·弗洛伊德';
        break;
    case 23:
        document.getElementById('quoteContents').textContent = '人生有两大悲剧: 一个是没有得到你心爱的东西;另一个是得到了你心爱的东西。';
        document.getElementById('quoteWritorName').textContent = '——西格蒙德·弗洛伊德';
        break;
    case 24:
        document.getElementById('quoteContents').textContent = '人生有两大快乐: 一个是没有得到你心爱的东西，于是可以寻求和创造;另一个是得到了你心爱的东西，于是可以去品味和体验。';
        document.getElementById('quoteWritorName').textContent = '——西格蒙德·弗洛伊德';
        break;
    case 25:
        document.getElementById('quoteContents').textContent = '没有一个没有理智的人，能够接受理智。';
        document.getElementById('quoteWritorName').textContent = '——西格蒙德·弗洛伊德';
        break;
    case 26:
        document.getElementById('quoteContents').textContent = '应付生活中各种问题的勇气，能说明一个人如何定义生活的意义。';
        document.getElementById('quoteWritorName').textContent = '——阿尔弗雷德·阿德勒';
        break;
    case 27:
        document.getElementById('quoteContents').textContent = '一个人毕其一生的努力，就是在整合他自童年时代起就已形成的性格。';
        document.getElementById('quoteWritorName').textContent = '——卡尔·荣格';
        break;
    case 28:
        document.getElementById('quoteContents').textContent = '要对这残缺的世界保持耐性，也别高估自己的完美。';
        document.getElementById('quoteWritorName').textContent = '——卡尔·荣格';
        break;
    case 29:
        document.getElementById('quoteContents').textContent = '每件促使我们注意到他人的事，都能使我们更好地理解自己。';
        document.getElementById('quoteWritorName').textContent = '——卡尔·荣格';
        break;
    case 30:
        document.getElementById('quoteContents').textContent = '创造不是来自智力，而是来自源于内在需要的游戏本能。创造性头脑与它所钟爱的对象玩耍。';
        document.getElementById('quoteWritorName').textContent = '——卡尔·荣格';
        break;
    case 31:
        document.getElementById('quoteContents').textContent = '对于任何事务，要改变它就要先接受它。谴责不会解放，而只会压迫。';
        document.getElementById('quoteWritorName').textContent = '——卡尔·荣格';
        break;
    case 32:
        document.getElementById('quoteContents').textContent = '我们看待事物的方式、而不是事物本身如何，决定着一切。';
        document.getElementById('quoteWritorName').textContent = '——卡尔·荣格';
        break;
    case 33:
        document.getElementById('quoteContents').textContent = '只有彻底接受自己的真实存在，我们才能够有所变化，才能超越自己现有的存在样式。';
        document.getElementById('quoteWritorName').textContent = '——卡尔·罗杰斯';
        break;
    case 34:
        document.getElementById('quoteContents').textContent = '细心倾听的能力、有人倾听所带来的深度喜悦、做更真实的自己、更自由地给予和接受爱的能力......这些在我的经历中，是促成人际关系扩大和增强的重大因素。';
        document.getElementById('quoteWritorName').textContent = '——卡尔·罗杰斯';
        break;
    case 35:
        document.getElementById('quoteContents').textContent = '如果我爱他人，我应该感到和他一致，而且接受他本来的面目。而不是要求他成为我希望的样子，以便使我能把他当作使用的对象。';
        document.getElementById('quoteWritorName').textContent = '——艾瑞克·弗洛姆';
        break;
    case 36:
        document.getElementById('quoteContents').textContent = '最重要的是学会一个人单独地待着，而且不看书、不听广播、不抽烟、不喝酒。有没有集中的能力表现在能不能单独地待着，而这种能力又是学会爱的一个条件。';
        document.getElementById('quoteWritorName').textContent = '——艾瑞克·弗洛姆';
        break;
    case 37:
        document.getElementById('quoteContents').textContent = '对于只有一把锤子的人来说，他遇见的每样东西看起来都像一颗钉子。';
        document.getElementById('quoteWritorName').textContent = '——亚伯林罕·马斯洛';
        break;
    case 38:
        document.getElementById('quoteContents').textContent = '如果你有意地避重就轻，去做比你尽力所能做到的更小的事情，那么我警告你，今后的日子里，你将是不幸的。因为你总是要逃避那些和你能力相联系的各种机会和可能性。';
        document.getElementById('quoteWritorName').textContent = '——亚伯林罕·马斯洛';
        break;
    case 39:
        document.getElementById('quoteContents').textContent = '只有当我们愿意承受打击时，我们才能有希望成为自己的主人。';
        document.getElementById('quoteWritorName').textContent = '——卡伦·霍妮';
        break;
    case 40:
        document.getElementById('quoteContents').textContent = '在焦虑的情形中，危险感是由内在的心理因素所激发和夸张了的，无能为力的感觉也是由个人自己的态度所决定的。';
        document.getElementById('quoteWritorName').textContent = '——卡伦·霍妮';
        break;
    case 41:
        document.getElementById('quoteContents').textContent = '一方面希望统治一切人，另一方面又希望被一切人爱;一方面顺从他人，另一方面又把自己的意志强加在他们身上;一方面疏远他人，另一方面又渴望得到他们的爱。正是这种完全不能解决的冲突控制着我们的生活。';
        document.getElementById('quoteWritorName').textContent = '——卡伦·霍妮';
        break;
    case 42:
        document.getElementById('quoteContents').textContent = '变得有智慧的方法是了解什么应该忽视。';
        document.getElementById('quoteWritorName').textContent = '——威廉·詹姆斯';
        break;
    case 43:
        document.getElementById('quoteContents').textContent = '人必须要拥有一种自我效能感，才能应对人生中不可避免的阻碍和不公，走向成功。';
        document.getElementById('quoteWritorName').textContent = '——阿尔伯特·班杜拉';
        break;
    case 44:
        document.getElementById('quoteContents').textContent = '外在结果虽然每每给予行为以影响，但是，它不是决定人的行为的唯一结果。人是在观察的结果和自己形成的结果的支配下，引导自己的行为。';
        document.getElementById('quoteWritorName').textContent = '——阿尔伯特·班杜拉';
        break;
    case 45:
        document.getElementById('quoteContents').textContent = '对生活环境进行控制的努力几乎渗透于人一生中的所有行为之中，人越能够对生活中的有关事件施加影响，就越能够将自己按照自己喜爱的那样进行塑造。相反，不能对事件施加影响会对生活造成不利的影响，它将滋生忧惧、冷漠和绝望。';
        document.getElementById('quoteWritorName').textContent = '——阿尔伯特·班杜拉';
        break;
    case 46:
        document.getElementById('quoteContents').textContent = '学会爱自己的最好方法之一，就是给予自己我们常常梦想他人给予我们的那种爱。';
        document.getElementById('quoteWritorName').textContent = '——贝尔·霍克斯';
        break;
    default:
        console.log('The number is something else');
}

function toggleActive(button) {
    button.classList.toggle('active'); // 切换选中状态
}


