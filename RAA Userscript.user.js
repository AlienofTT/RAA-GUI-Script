// ==UserScript==
// @name         RAA Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fuck RAA's UI
// @author       AlienofTT
// @match        https://worldofwarships.com.cn/index.php
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    var $=jQuery;
    var server="cns";

    var shipList=[{"name":"博格","id":"pasa002","type":"cv","nation":"usa","tier":"t5"},{"name":"兰利","id":"pasa004","type":"cv","nation":"usa","tier":"t4"},{"name":"独立","id":"pasa006","type":"cv","nation":"usa","tier":"t6"},{"name":"游骑兵","id":"pasa010","type":"cv","nation":"usa","tier":"t7"},{"name":"列克星敦","id":"pasa012","type":"cv","nation":"usa","tier":"t8"},{"name":"埃塞克斯","id":"pasa013","type":"cv","nation":"usa","tier":"t9"},{"name":"中途岛","id":"pasa015","type":"cv","nation":"usa","tier":"t10"},{"name":"塞班","id":"pasa507","type":"cv","nation":"usa","tier":"t7"},{"name":"企业","id":"pasa508","type":"cv","nation":"usa","tier":"t8"},{"name":"游骑兵","id":"pasa906","type":"cv","nation":"usa","tier":"t7"},{"name":"南卡罗莱纳","id":"pasb001","type":"bb","nation":"usa","tier":"t3"},{"name":"怀俄明","id":"pasb004","type":"bb","nation":"usa","tier":"t4"},{"name":"纽约","id":"pasb006","type":"bb","nation":"usa","tier":"t5"},{"name":"科罗拉多","id":"pasb008","type":"bb","nation":"usa","tier":"t7"},{"name":"北卡罗莱纳","id":"pasb012","type":"bb","nation":"usa","tier":"t8"},{"name":"阿肯色(beta)","id":"pasb013","type":"bb","nation":"usa","tier":"t4"},{"name":"蒙大拿","id":"pasb017","type":"bb","nation":"usa","tier":"t10"},{"name":"依阿华","id":"pasb018","type":"bb","nation":"usa","tier":"t9"},{"name":"新墨西哥","id":"pasb034","type":"bb","nation":"usa","tier":"t6"},{"name":"亚利桑那","id":"pasb506","type":"bb","nation":"usa","tier":"t6"},{"name":"阿拉巴马","id":"pasb508","type":"bb","nation":"usa","tier":"t8"},{"name":"密苏里","id":"pasb509","type":"bb","nation":"usa","tier":"t9"},{"name":"马萨诸塞","id":"pasb518","type":"bb","nation":"usa","tier":"t8"},{"name":"德克萨斯","id":"pasb705","type":"bb","nation":"usa","tier":"t5"},{"name":"阿拉巴马(st)","id":"pasb708","type":"bb","nation":"usa","tier":"t8"},{"name":"南卡罗莱纳","id":"pasb801","type":"bb","nation":"usa","tier":"t3"},{"name":"密西根","id":"pasb802","type":"bb","nation":"usa","tier":"t3"},{"name":"伊利","id":"pasc001","type":"cl","nation":"usa","tier":"t1"},{"name":"切斯特","id":"pasc002","type":"cl","nation":"usa","tier":"t2"},{"name":"奥尔巴尼","id":"pasc003","type":"cl","nation":"usa","tier":"t2"},{"name":"圣·路易斯","id":"pasc004","type":"cl","nation":"usa","tier":"t3"},{"name":"奥马哈","id":"pasc005","type":"cl","nation":"usa","tier":"t5"},{"name":"亚特兰大","id":"pasc006","type":"cl","nation":"usa","tier":"t7"},{"name":"克利夫兰","id":"pasc007","type":"cl","nation":"usa","tier":"t6"},{"name":"彭萨科拉","id":"pasc012","type":"cl","nation":"usa","tier":"t7"},{"name":"新奥尔良","id":"pasc014","type":"cl","nation":"usa","tier":"t8"},{"name":"伍斯特","id":"pasc016","type":"cl","nation":"usa","tier":"t10"},{"name":"巴尔的摩","id":"pasc017","type":"cl","nation":"usa","tier":"t9"},{"name":"布法罗","id":"pasc019","type":"cl","nation":"usa","tier":"t9"},{"name":"德梅因","id":"pasc020","type":"cl","nation":"usa","tier":"t10"},{"name":"菲尼克斯","id":"pasc024","type":"cl","nation":"usa","tier":"t4"},{"name":"马布尔黑德","id":"pasc044","type":"cl","nation":"usa","tier":"t5"},{"name":"辛辛那提","id":"pasc045","type":"cl","nation":"usa","tier":"t5"},{"name":"盐湖城","id":"pasc106","type":"cl","nation":"usa","tier":"t6"},{"name":"阿斯托利亚","id":"pasc107","type":"cl","nation":"usa","tier":"t7"},{"name":"匹兹堡","id":"pasc108","type":"cl","nation":"usa","tier":"t8"},{"name":"布法罗","id":"pasc109","type":"cl","nation":"usa","tier":"t9"},{"name":"印第安纳波蒂斯","id":"pasc507","type":"cl","nation":"usa","tier":"t7"},{"name":"弗林特","id":"pasc707","type":"cl","nation":"usa","tier":"t7"},{"name":"萨勒姆","id":"pasc710","type":"cl","nation":"usa","tier":"t10"},{"name":"伊利","id":"pasc804","type":"cl","nation":"usa","tier":"t1"},{"name":"伊利","id":"pasc805","type":"cl","nation":"usa","tier":"t1"},{"name":"桑普森","id":"pasd002","type":"dd","nation":"usa","tier":"t2"},{"name":"法拉格特","id":"pasd005","type":"dd","nation":"usa","tier":"t6"},{"name":"马汉","id":"pasd006","type":"dd","nation":"usa","tier":"t7"},{"name":"本森","id":"pasd008","type":"dd","nation":"usa","tier":"t8"},{"name":"基林","id":"pasd013","type":"dd","nation":"usa","tier":"t10"},{"name":"尼古拉斯","id":"pasd014","type":"dd","nation":"usa","tier":"t5"},{"name":"克莱蒙森","id":"pasd019","type":"dd","nation":"usa","tier":"t4"},{"name":"弗莱彻","id":"pasd021","type":"dd","nation":"usa","tier":"t9"},{"name":"维克斯","id":"pasd027","type":"dd","nation":"usa","tier":"t3"},{"name":"西姆斯","id":"pasd029","type":"dd","nation":"usa","tier":"t7"},{"name":"史密斯","id":"pasd502","type":"dd","nation":"usa","tier":"t2"},{"name":"莫纳干","id":"pasd506","type":"dd","nation":"usa","tier":"t6"},{"name":"基德","id":"pasd508","type":"dd","nation":"usa","tier":"t8"},{"name":"布莱克","id":"pasd709","type":"dd","nation":"usa","tier":"t9"},{"name":"桑普森","id":"pasd801","type":"dd","nation":"usa","tier":"t2"},{"name":"厌战","id":"pbsb002","type":"bb","nation":"uk","tier":"t6"},{"name":"柏勒洛丰","id":"pbsb103","type":"bb","nation":"uk","tier":"t3"},{"name":"猎户座","id":"pbsb104","type":"bb","nation":"uk","tier":"t4"},{"name":"铁公爵","id":"pbsb105","type":"bb","nation":"uk","tier":"t5"},{"name":"伊丽莎白女王","id":"pbsb106","type":"bb","nation":"uk","tier":"t6"},{"name":"英王乔治五世","id":"pbsb107","type":"bb","nation":"uk","tier":"t7"},{"name":"君王","id":"pbsb108","type":"bb","nation":"uk","tier":"t8"},{"name":"狮","id":"pbsb109","type":"bb","nation":"uk","tier":"t9"},{"name":"征服者","id":"pbsb110","type":"bb","nation":"uk","tier":"t10"},{"name":"胡德","id":"pbsb507","type":"bb","nation":"uk","tier":"t7"},{"name":"纳尔逊","id":"pbsb517","type":"bb","nation":"uk","tier":"t7"},{"name":"约克公爵","id":"pbsb527","type":"bb","nation":"uk","tier":"t7"},{"name":"黑天鹅","id":"pbsc101","type":"cl","nation":"uk","tier":"t1"},{"name":"韦茅斯","id":"pbsc102","type":"cl","nation":"uk","tier":"t2"},{"name":"卡利登","id":"pbsc103","type":"cl","nation":"uk","tier":"t3"},{"name":"黛娜耶","id":"pbsc104","type":"cl","nation":"uk","tier":"t4"},{"name":"翡翠","id":"pbsc105","type":"cl","nation":"uk","tier":"t5"},{"name":"利安德","id":"pbsc106","type":"cl","nation":"uk","tier":"t6"},{"name":"斐济","id":"pbsc107","type":"cl","nation":"uk","tier":"t7"},{"name":"爱丁堡","id":"pbsc108","type":"cl","nation":"uk","tier":"t8"},{"name":"海王星","id":"pbsc109","type":"cl","nation":"uk","tier":"t9"},{"name":"米诺陶","id":"pbsc110","type":"cl","nation":"uk","tier":"t10"},{"name":"贝尔法斯特","id":"pbsc507","type":"cl","nation":"uk","tier":"t7"},{"name":"坎贝尔敦","id":"pbsd503","type":"dd","nation":"uk","tier":"t3"},{"name":"英勇","id":"pbsd506","type":"dd","nation":"uk","tier":"t6"},{"name":"哥萨克","id":"pbsd507","type":"dd","nation":"uk","tier":"t7"},{"name":"蒂雷纳","id":"pfsb103","type":"bb","nation":"france","tier":"t3"},{"name":"孤拔","id":"pfsb104","type":"bb","nation":"france","tier":"t4"},{"name":"布列塔尼","id":"pfsb105","type":"bb","nation":"france","tier":"t5"},{"name":"諾曼底","id":"pfsb106","type":"bb","nation":"france","tier":"t6"},{"name":"里昂","id":"pfsb107","type":"bb","nation":"france","tier":"t7"},{"name":"黎塞留","id":"pfsb108","type":"bb","nation":"france","tier":"t8"},{"name":"阿尔萨斯","id":"pfsb109","type":"bb","nation":"france","tier":"t9"},{"name":"共和","id":"pfsb110","type":"bb","nation":"france","tier":"t10"},{"name":"敦刻尔克","id":"pfsb506","type":"bb","nation":"france","tier":"t6"},{"name":"加斯科涅","id":"pfsb508","type":"bb","nation":"france","tier":"t8"},{"name":"布干维尔","id":"pfsc101","type":"cl","nation":"france","tier":"t1"},{"name":"尤里安·格拉维","id":"pfsc102","type":"cl","nation":"france","tier":"t2"},{"name":"弗利昂","id":"pfsc103","type":"cl","nation":"france","tier":"t3"},{"name":"迪盖·特鲁安","id":"pfsc104","type":"cl","nation":"france","tier":"t4"},{"name":"白劳易","id":"pfsc105","type":"cl","nation":"france","tier":"t5"},{"name":"加利索尼埃","id":"pfsc106","type":"cl","nation":"france","tier":"t6"},{"name":"阿尔及利亚","id":"pfsc107","type":"cl","nation":"france","tier":"t7"},{"name":"查理·马特","id":"pfsc108","type":"cl","nation":"france","tier":"t8"},{"name":"路易九世","id":"pfsc109","type":"cl","nation":"france","tier":"t9"},{"name":"亨利四世","id":"pfsc110","type":"cl","nation":"france","tier":"t10"},{"name":"德·格拉斯","id":"pfsc506","type":"cl","nation":"france","tier":"t6"},{"name":"鹰","id":"pfsd506","type":"dd","nation":"france","tier":"t6"},{"name":"气旋","id":"pfsd605","type":"dd","nation":"france","tier":"t5"},{"name":"齐柏林伯爵","id":"pgsa508","type":"cv","nation":"gremany","tier":"t8"},{"name":"提尔比茨","id":"pgsb002","type":"bb","nation":"gremany","tier":"t8"},{"name":"拿骚","id":"pgsb103","type":"bb","nation":"gremany","tier":"t3"},{"name":"凯撒","id":"pgsb104","type":"bb","nation":"gremany","tier":"t4"},{"name":"国王","id":"pgsb105","type":"bb","nation":"gremany","tier":"t5"},{"name":"巴伐利亚","id":"pgsb106","type":"bb","nation":"gremany","tier":"t6"},{"name":"格奈森瑙","id":"pgsb107","type":"bb","nation":"gremany","tier":"t7"},{"name":"俾斯麦","id":"pgsb108","type":"bb","nation":"gremany","tier":"t8"},{"name":"腓特烈大帝","id":"pgsb109","type":"bb","nation":"gremany","tier":"t9"},{"name":"大选帝侯","id":"pgsb110","type":"bb","nation":"gremany","tier":"t10"},{"name":"国王阿尔伯特","id":"pgsb503","type":"bb","nation":"gremany","tier":"t3"},{"name":"沙恩霍斯特","id":"pgsb507","type":"bb","nation":"gremany","tier":"t7"},{"name":"海梅茵","id":"pgsc001","type":"cl","nation":"gremany","tier":"t1"},{"name":"德累斯顿","id":"pgsc002","type":"cl","nation":"gremany","tier":"t2"},{"name":"科尔贝格","id":"pgsc103","type":"cl","nation":"gremany","tier":"t3"},{"name":"卡尔斯鲁厄","id":"pgsc104","type":"cl","nation":"gremany","tier":"t4"},{"name":"柯尼斯堡","id":"pgsc105","type":"cl","nation":"gremany","tier":"t5"},{"name":"纽伦堡","id":"pgsc106","type":"cl","nation":"gremany","tier":"t6"},{"name":"约克","id":"pgsc107","type":"cl","nation":"gremany","tier":"t7"},{"name":"希佩尔海军上将","id":"pgsc108","type":"cl","nation":"gremany","tier":"t8"},{"name":"鲁恩","id":"pgsc109","type":"cl","nation":"gremany","tier":"t9"},{"name":"兴登堡","id":"pgsc110","type":"cl","nation":"gremany","tier":"t10"},{"name":"埃姆登","id":"pgsc502","type":"cl","nation":"gremany","tier":"t2"},{"name":"施佩伯爵海军上将","id":"pgsc506","type":"cl","nation":"gremany","tier":"t6"},{"name":"欧根亲王","id":"pgsc508","type":"cl","nation":"gremany","tier":"t8"},{"name":"hsf 施佩伯爵海军上将","id":"pgsc706","type":"cl","nation":"gremany","tier":"t6"},{"name":"v-25","id":"pgsd102","type":"dd","nation":"gremany","tier":"t2"},{"name":"g-101","id":"pgsd103","type":"dd","nation":"gremany","tier":"t3"},{"name":"v-170","id":"pgsd104","type":"dd","nation":"gremany","tier":"t4"},{"name":"t-22","id":"pgsd105","type":"dd","nation":"gremany","tier":"t5"},{"name":"sk-22","id":"pgsd106","type":"dd","nation":"gremany","tier":"t6"},{"name":"z-1","id":"pgsd107","type":"dd","nation":"gremany","tier":"t7"},{"name":"z-23","id":"pgsd108","type":"dd","nation":"gremany","tier":"t8"},{"name":"z-46","id":"pgsd109","type":"dd","nation":"gremany","tier":"t9"},{"name":"z-52","id":"pgsd110","type":"dd","nation":"gremany","tier":"t10"},{"name":"t-61","id":"pgsd506","type":"dd","nation":"gremany","tier":"t6"},{"name":"z-39","id":"pgsd508","type":"dd","nation":"gremany","tier":"t8"},{"name":"尤利乌斯·凯撒","id":"pisb505","type":"bb","nation":"italy","tier":"t5"},{"name":"罗马","id":"pisb508","type":"bb","nation":"italy","tier":"t8"},{"name":"奥斯塔公爵","id":"pisc506","type":"cl","nation":"italy","tier":"t6"},{"name":"阿布鲁兹公爵","id":"pisc507","type":"cl","nation":"italy","tier":"t7"},{"name":"凤翔","id":"pjsa002","type":"cv","nation":"japan","tier":"t4"},{"name":"瑞凤","id":"pjsa006","type":"cv","nation":"japan","tier":"t5"},{"name":"龙骧","id":"pjsa009","type":"cv","nation":"japan","tier":"t6"},{"name":"飞龙","id":"pjsa011","type":"cv","nation":"japan","tier":"t7"},{"name":"翔鹤","id":"pjsa012","type":"cv","nation":"japan","tier":"t8"},{"name":"大凤","id":"pjsa015","type":"cv","nation":"japan","tier":"t9"},{"name":"白龙","id":"pjsa017","type":"cv","nation":"japan","tier":"t10"},{"name":"加贺","id":"pjsa507","type":"cv","nation":"japan","tier":"t7"},{"name":"河内","id":"pjsb001","type":"bb","nation":"japan","tier":"t3"},{"name":"妙义","id":"pjsb003","type":"bb","nation":"japan","tier":"t4"},{"name":"扶桑","id":"pjsb006","type":"bb","nation":"japan","tier":"t6"},{"name":"金刚","id":"pjsb007","type":"bb","nation":"japan","tier":"t5"},{"name":"石锤","id":"pjsb008","type":"bb","nation":"japan","tier":"t4"},{"name":"长门","id":"pjsb010","type":"bb","nation":"japan","tier":"t7"},{"name":"三笠","id":"pjsb011","type":"bb","nation":"japan","tier":"t2"},{"name":"天城","id":"pjsb013","type":"bb","nation":"japan","tier":"t8"},{"name":"大和","id":"pjsb018","type":"bb","nation":"japan","tier":"t10"},{"name":"出云","id":"pjsb021","type":"bb","nation":"japan","tier":"t9"},{"name":"陆奥","id":"pjsb506","type":"bb","nation":"japan","tier":"t6"},{"name":"爱鹰","id":"pjsb507","type":"bb","nation":"japan","tier":"t7"},{"name":"纪伊","id":"pjsb508","type":"bb","nation":"japan","tier":"t8"},{"name":"武藏","id":"pjsb509","type":"bb","nation":"japan","tier":"t9"},{"name":"海雾-金刚","id":"pjsb705","type":"bb","nation":"japan","tier":"t5"},{"name":"海雾-雾岛","id":"pjsb706","type":"bb","nation":"japan","tier":"t5"},{"name":"海雾-榛名","id":"pjsb707","type":"bb","nation":"japan","tier":"t5"},{"name":"海雾-比叡","id":"pjsb708","type":"bb","nation":"japan","tier":"t5"},{"name":"海雾-雾岛","id":"pjsb799","type":"bb","nation":"japan","tier":"t5"},{"name":"河内","id":"pjsb801","type":"bb","nation":"japan","tier":"t3"},{"name":"河内","id":"pjsb802","type":"bb","nation":"japan","tier":"t3"},{"name":"夕张","id":"pjsc004","type":"cl","nation":"japan","tier":"t4"},{"name":"古鹰","id":"pjsc005","type":"cl","nation":"japan","tier":"t5"},{"name":"青叶","id":"pjsc007","type":"cl","nation":"japan","tier":"t6"},{"name":"妙高","id":"pjsc008","type":"cl","nation":"japan","tier":"t7"},{"name":"最上","id":"pjsc009","type":"cl","nation":"japan","tier":"t8"},{"name":"伊吹","id":"pjsc012","type":"cl","nation":"japan","tier":"t9"},{"name":"球磨","id":"pjsc013","type":"cl","nation":"japan","tier":"t4"},{"name":"北上","id":"pjsc014","type":"cl","nation":"japan","tier":"t8"},{"name":"天龙","id":"pjsc015","type":"cl","nation":"japan","tier":"t3"},{"name":"利根","id":"pjsc018","type":"cl","nation":"japan","tier":"t7"},{"name":"岩木(alpha)","id":"pjsc026","type":"cl","nation":"japan","tier":"t4"},{"name":"藏王","id":"pjsc034","type":"cl","nation":"japan","tier":"t10"},{"name":"筑摩","id":"pjsc035","type":"cl","nation":"japan","tier":"t2"},{"name":"桥立","id":"pjsc037","type":"cl","nation":"japan","tier":"t1"},{"name":"爱宕","id":"pjsc038","type":"cl","nation":"japan","tier":"t8"},{"name":"香取","id":"pjsc503","type":"cl","nation":"japan","tier":"t3"},{"name":"海雾-妙高","id":"pjsc705","type":"cl","nation":"japan","tier":"t7"},{"name":"海雾-足柄","id":"pjsc707","type":"cl","nation":"japan","tier":"t7"},{"name":"苍蓝-高雄","id":"pjsc708","type":"cl","nation":"japan","tier":"t8"},{"name":"海雾-羽黑","id":"pjsc709","type":"cl","nation":"japan","tier":"t8"},{"name":"朱雀","id":"pjsc717","type":"cl","nation":"japan","tier":"t7"},{"name":"青龙","id":"pjsc727","type":"cl","nation":"japan","tier":"t7"},{"name":"海雾-那智","id":"pjsc737","type":"cl","nation":"japan","tier":"t7"},{"name":"橘","id":"pjsd001","type":"dd","nation":"japan","tier":"t2"},{"name":"海风","id":"pjsd002","type":"dd","nation":"japan","tier":"t2"},{"name":"矶风","id":"pjsd003","type":"dd","nation":"japan","tier":"t4"},{"name":"峰风","id":"pjsd004","type":"dd","nation":"japan","tier":"t5"},{"name":"岛风","id":"pjsd012","type":"dd","nation":"japan","tier":"t10"},{"name":"樱","id":"pjsd014","type":"dd","nation":"japan","tier":"t5"},{"name":"神风 h","id":"pjsd017","type":"dd","nation":"japan","tier":"t5"},{"name":"若竹","id":"pjsd024","type":"dd","nation":"japan","tier":"t3"},{"name":"神风","id":"pjsd025","type":"dd","nation":"japan","tier":"t5"},{"name":"神风 r","id":"pjsd026","type":"dd","nation":"japan","tier":"t5"},{"name":"睦月","id":"pjsd105","type":"dd","nation":"japan","tier":"t5"},{"name":"吹雪","id":"pjsd106","type":"dd","nation":"japan","tier":"t6"},{"name":"晓","id":"pjsd107","type":"dd","nation":"japan","tier":"t7"},{"name":"秋月","id":"pjsd108","type":"dd","nation":"japan","tier":"t8"},{"name":"初春","id":"pjsd206","type":"dd","nation":"japan","tier":"t6"},{"name":"白露","id":"pjsd207","type":"dd","nation":"japan","tier":"t7"},{"name":"阳炎","id":"pjsd208","type":"dd","nation":"japan","tier":"t8"},{"name":"夕云","id":"pjsd209","type":"dd","nation":"japan","tier":"t9"},{"name":"朝潮","id":"pjsd518","type":"dd","nation":"japan","tier":"t8"},{"name":"东云号","id":"pjsd706","type":"dd","nation":"japan","tier":"t6"},{"name":"hsf 晴风","id":"pjsd708","type":"dd","nation":"japan","tier":"t8"},{"name":"矶风","id":"pjsd803","type":"dd","nation":"japan","tier":"t4"},{"name":"沙皇尼古拉一世","id":"prsb001","type":"bb","nation":"ussr","tier":"t4"},{"name":"十月革命","id":"prsb505","type":"bb","nation":"ussr","tier":"t5"},{"name":"阿芙乐尔","id":"prsc001","type":"cl","nation":"ussr","tier":"t3"},{"name":"狄安娜","id":"prsc002","type":"cl","nation":"ussr","tier":"t2"},{"name":"摩尔曼斯克","id":"prsc003","type":"cl","nation":"ussr","tier":"t5"},{"name":"帕拉达","id":"prsc010","type":"cl","nation":"ussr","tier":"t2"},{"name":"奥尔兰","id":"prsc101","type":"cl","nation":"ussr","tier":"t2"},{"name":"诺维克","id":"prsc102","type":"cl","nation":"ussr","tier":"t2"},{"name":"英雄","id":"prsc103","type":"cl","nation":"ussr","tier":"t3"},{"name":"斯维特拉娜","id":"prsc104","type":"cl","nation":"ussr","tier":"t4"},{"name":"基洛夫","id":"prsc105","type":"cl","nation":"ussr","tier":"t5"},{"name":"布琼尼","id":"prsc106","type":"cl","nation":"ussr","tier":"t6"},{"name":"肖尔斯","id":"prsc107","type":"cl","nation":"ussr","tier":"t7"},{"name":"恰巴耶夫","id":"prsc108","type":"cl","nation":"ussr","tier":"t8"},{"name":"迪米特里·顿斯科伊","id":"prsc109","type":"cl","nation":"ussr","tier":"t9"},{"name":"莫斯科","id":"prsc110","type":"cl","nation":"ussr","tier":"t10"},{"name":"奥列格","id":"prsc503","type":"cl","nation":"ussr","tier":"t2"},{"name":"赤色克里米亚","id":"prsc505","type":"cl","nation":"ussr","tier":"t5"},{"name":"莫洛托夫","id":"prsc506","type":"cl","nation":"ussr","tier":"t6"},{"name":"米哈伊尔·库图佐夫","id":"prsc508","type":"cl","nation":"ussr","tier":"t8"},{"name":"喀琅施塔得","id":"prsc509","type":"cl","nation":"ussr","tier":"t8"},{"name":"瓦良格","id":"prsc513","type":"cl","nation":"ussr","tier":"t9"},{"name":"马卡洛夫海军上将号","id":"prsc606","type":"cl","nation":"ussr","tier":"t6"},{"name":"雷鸣","id":"prsd001","type":"dd","nation":"ussr","tier":"t5"},{"name":"守护","id":"prsd102","type":"dd","nation":"ussr","tier":"t2"},{"name":"无理","id":"prsd103","type":"dd","nation":"ussr","tier":"t3"},{"name":"伊贾斯拉夫","id":"prsd104","type":"dd","nation":"ussr","tier":"t4"},{"name":"乌达洛伊","id":"prsd107","type":"dd","nation":"ussr","tier":"t9"},{"name":"哈巴罗夫斯克","id":"prsd110","type":"dd","nation":"ussr","tier":"t10"},{"name":"波德沃伊斯基","id":"prsd205","type":"dd","nation":"ussr","tier":"t5"},{"name":"愤怒","id":"prsd206","type":"dd","nation":"ussr","tier":"t6"},{"name":"明斯克","id":"prsd207","type":"dd","nation":"ussr","tier":"t7"},{"name":"火力","id":"prsd208","type":"dd","nation":"ussr","tier":"t8"},{"name":"雷暴","id":"prsd210","type":"dd","nation":"ussr","tier":"t10"},{"name":"基辅","id":"prsd308","type":"dd","nation":"ussr","tier":"t8"},{"name":"塔什干","id":"prsd409","type":"dd","nation":"ussr","tier":"t9"},{"name":"猎人","id":"prsd505","type":"dd","nation":"ussr","tier":"t5"},{"name":"列宁格勒","id":"prsd507","type":"dd","nation":"ussr","tier":"t7"},{"name":"珀斯","id":"pusc506","type":"cl","nation":"cn","tier":"t6"},{"name":"吸血鬼","id":"pusd503","type":"dd","nation":"cn","tier":"t3"},{"name":"闪电","id":"pwsd501","type":"dd","nation":"po","tier":"t7"},{"name":"地狱搬运者","id":"pxsa005","type":"other","nation":"other","tier":"0"},{"name":"jackal","id":"pxsb001","type":"other","nation":"other","tier":"0"},{"name":"rasputin","id":"pxsb002","type":"other","nation":"other","tier":"0"},{"name":"zikasa","id":"pxsb003","type":"other","nation":"other","tier":"0"},{"name":"magnu-s","id":"pxsb004","type":"other","nation":"other","tier":"0"},{"name":"varg","id":"pxsb005","type":"other","nation":"other","tier":"0"},{"name":"巴黎","id":"pxsb006","type":"other","nation":"other","tier":"0"},{"name":"全能驱逐者","id":"pxsb007","type":"other","nation":"other","tier":"0"},{"name":"igor","id":"pxsc001","type":"other","nation":"other","tier":"0"},{"name":"scarab","id":"pxsc002","type":"other","nation":"other","tier":"0"},{"name":"svyatozar","id":"pxsc003","type":"other","nation":"other","tier":"0"},{"name":"银河","id":"pxsc004","type":"other","nation":"other","tier":"0"},{"name":"扎雅","id":"pxsc005","type":"other","nation":"other","tier":"0"},{"name":"规则","id":"pxsc006","type":"other","nation":"other","tier":"0"},{"name":"极光","id":"pxsc007","type":"other","nation":"other","tier":"0"},{"name":"blade","id":"pxsd001","type":"other","nation":"other","tier":"0"},{"name":"ghoul","id":"pxsd002","type":"other","nation":"other","tier":"0"},{"name":"urashima","id":"pxsd003","type":"other","nation":"other","tier":"0"},{"name":"萤火虫","id":"pxsd004","type":"other","nation":"other","tier":"0"},{"name":"蓝翠菊","id":"pxsd005","type":"other","nation":"other","tier":"0"},{"name":"s艇","id":"pxsd007","type":"other","nation":"other","tier":"0"},{"name":"transylvania","id":"pxsx001","type":"other","nation":"other","tier":"0"},{"name":"巨人","id":"pxsx016","type":"other","nation":"other","tier":"0"},{"name":"卡布特","id":"pxsx017","type":"other","nation":"other","tier":"0"},{"name":"罗瑞娜","id":"pxsx023","type":"other","nation":"other","tier":"0"},{"name":"阿尼亚","id":"pxsx024","type":"other","nation":"other","tier":"0"},{"name":"梅德韦女王","id":"pxsx025","type":"other","nation":"other","tier":"0"},{"name":"坎特伯雷","id":"pxsx026","type":"other","nation":"other","tier":"0"},{"name":"布雷舰","id":"pxsx033","type":"other","nation":"other","tier":"0"},{"name":"约翰·卡特林","id":"pxsx034","type":"other","nation":"other","tier":"0"},{"name":"梅德韦女王","id":"pxsx043","type":"other","nation":"other","tier":"0"},{"name":"cimarron civil","id":"pxsx044","type":"other","nation":"other","tier":"0"},{"name":"liberty civil","id":"pxsx045","type":"other","nation":"other","tier":"0"},{"name":"intania queen","id":"pxsx743","type":"other","nation":"other","tier":"0"},{"name":"成安","id":"pzsc101","type":"cl","nation":"panasia","tier":"t1"},{"name":"黄河","id":"pzsc506","type":"cl","nation":"panasia","tier":"t6"},{"name":"龙江","id":"pzsd102","type":"dd","nation":"panasia","tier":"t2"},{"name":"帕禳","id":"pzsd103","type":"dd","nation":"panasia","tier":"t3"},{"name":"沈阳","id":"pzsd104","type":"dd","nation":"panasia","tier":"t4"},{"name":"建威","id":"pzsd105","type":"dd","nation":"panasia","tier":"t5"},{"name":"抚顺","id":"pzsd106","type":"dd","nation":"panasia","tier":"t6"},{"name":"加札马达","id":"pzsd107","type":"dd","nation":"panasia","tier":"t7"},{"name":"咸阳","id":"pzsd108","type":"dd","nation":"panasia","tier":"t8"},{"name":"忠武","id":"pzsd109","type":"dd","nation":"panasia","tier":"t9"},{"name":"岳阳","id":"pzsd110","type":"dd","nation":"panasia","tier":"t10"},{"name":"鞍山","id":"pzsd506","type":"dd","nation":"panasia","tier":"t6"},{"name":"洛阳","id":"pzsd508","type":"dd","nation":"panasia","tier":"t8"}];
    var typeList=["dd","cl","bb","cv"];
    var nationList=[];
    var tierList=[];
	var queryList=[];

	var CSS='body{margin:0;font-size:20px;font-family:"Open Sans",sans-serif;color:#2c343b;background-color:#f1f1f1}input{border:1px solid #ccc;padding:7px 0;border-radius:3px;padding-left:5px}table{width:100%;border-collapse:collapse}th{font-size:18px;text-align:left;padding-top:5px;padding-bottom:4px;background-color:#a7c942;color:#fff;border:1px solid #98bf21}tr{font-size:15px;border:1px solid #98bf21;padding:3px 7px 2px 7px}.alt{background-color:#eaf2d3}.main-container{position:relative;width:70%;border:0;margin:auto}.header{color:gray;font-size:18;position:relative;margin-top:15px;margin-bottom:15px}.user-div,.selection-div,.ship-div,.result-div{position:relative;overflow:hidden;border:0;padding:18px;margin:auto;margin-bottom:10px;box-shadow:0 6px 6px 0 rgba(0,0,0,0.2);background-color:#fff}.btn{display:inline-block;margin:4px 2px;padding:8px 16px;background-color:white;color:black;border:2px solid #ddd;border-radius:4px;text-align:center;text-decoration:none;font-size:16px;transition-duration:.2s;cursor:pointer}.btn:hover{background-color:#eaf2d3}.selected{background-color:#eaf2d3}.ship{width:auto;min-width:80px}';
    $("head").append("<style>"+CSS+"</style>");

    $("body").empty();
    $("body").append('<div class="main-container"></div>');

	$(".main-container").append('<div class="header">玩家</div>')
    $(".main-container").append('<div class="user-div"></div>');
	$(".main-container").append('<div class="header">筛选</div>')
    $(".main-container").append('<div class="selection-div"></div>');
	$(".main-container").append('<div class="header">船</div>')
    $(".main-container").append('<div class="ship-div"></div>');
	$(".main-container").append('<div class="header">战绩</div>')
    $(".main-container").append('<div class="result-div"></div>');

    $(".selection-div").append('<div class="type-div"></div>');
    $(".selection-div").append('<hr/>');
    $(".selection-div").append('<div class="nation-div"></div>');
    $(".selection-div").append('<hr/>');
    $(".selection-div").append('<div class="tier-div"></div>');
    $(".selection-div").append('<hr/>');
    $(".selection-div").append('<div class="btn reset">reset</div>');

    $(".user-div").append('<div class="user-id-div"></div>');
    $(".user-div").append('<hr/>');
    $(".user-div").append('<div class="server-div"></div>');

    $(".user-id-div").append('<input id="user-id" type=text>');

    $(".server-div").append('<div class="btn server selected" id="cns">CNS</div>');
    $(".server-div").append('<div class="btn server" id="cnn">CNN</div>');
    $(".server-div").append('<div class="btn server" id="asia">AS</div>');
    $(".server-div").append('<div class="btn server" id="na">NA</div>');
    $(".server-div").append('<div class="btn server" id="eu">EU</div>');
    $(".server-div").append('<div class="btn server" id="ru">RU</div>');

    $(".type-div").append('<div class="btn selection type selected" id="dd">Destroyer</div>');
    $(".type-div").append('<div class="btn selection type selected" id="cl">Cruiser</div>');
    $(".type-div").append('<div class="btn selection type selected" id="bb">Battleship</div>');
    $(".type-div").append('<div class="btn selection type selected" id="cv">Carrier</div>');

    $(".nation-div").append('<div class="btn selection nation" id="usa">USA</div>');
    $(".nation-div").append('<div class="btn selection nation" id="japan">Japan</div>');
    $(".nation-div").append('<div class="btn selection nation" id="ussr">USSR</div>');
    $(".nation-div").append('<div class="btn selection nation" id="gremany">Gremany</div>');
    $(".nation-div").append('<div class="btn selection nation" id="uk">UK</div>');
    $(".nation-div").append('<div class="btn selection nation" id="france">France</div>');
    $(".nation-div").append('<div class="btn selection nation" id="italy">Italy</div>');
    $(".nation-div").append('<div class="btn selection nation" id="poland">Poland</div>');
    $(".nation-div").append('<div class="btn selection nation" id="cn">Commonwealth</div>');
    $(".nation-div").append('<div class="btn selection nation" id="panasia">Pan-Asia</div>');
    $(".nation-div").append('<div class="btn selection nation" id="panamerica">Pan-America</div>');
    $(".nation-div").append('<div class="btn selection nation" id="other">other</div>');

    $(".tier-div").append('<div class="btn selection tier" id="t1">Ⅰ</div>');
    $(".tier-div").append('<div class="btn selection tier" id="t2">Ⅱ</div>');
    $(".tier-div").append('<div class="btn selection tier" id="t3">Ⅲ</div>');
    $(".tier-div").append('<div class="btn selection tier" id="t4">Ⅳ</div>');
    $(".tier-div").append('<div class="btn selection tier" id="t5">Ⅴ</div>');
    $(".tier-div").append('<div class="btn selection tier" id="t6">Ⅵ</div>');
    $(".tier-div").append('<div class="btn selection tier" id="t7">Ⅶ</div>');
    $(".tier-div").append('<div class="btn selection tier" id="t8">Ⅷ</div>');
    $(".tier-div").append('<div class="btn selection tier" id="t9">Ⅸ</div>');
    $(".tier-div").append('<div class="btn selection tier" id="t10">Ⅹ</div>');

    $(".result-div").append('<table border=1><tr><th>ID</th><th>船</th><th>场次</th><th>胜率</th><th>经验</th><th>伤害</th><th>击落</th><th>RAA</th><th>评价</th></tr></table>');
	$(".result-div").append('<hr/>');
	$(".result-div").append('<div class="btn clear">clear</div>');

    $(document).on("click",".server",function(){
        server=$(this).attr("id");
        $(".server").removeClass("selected");
        $(this).addClass("selected");
    });

    $(document).on("click",".ship",function(){
        var userName=$("input").val();
		var userServer=server;
		var shipId=$(this).attr("id").toUpperCase();
		if(userName != "" && queryList.indexOf((userName + userServer + shipId)) < 0){
			queryList.push((userName + userServer + shipId));
			getSingleData(userName,userServer,shipId);
		}
    });

    $(document).on("click",".reset",function(){
        $(".selected").removeClass("selected");
        typeList=[];
        nationList=[];
        tierList=[];
        $(".ship-div").empty();
    });

    $(document).on("click",".clear",function(){
        $("table").empty();
		queryList=[];
        $("table").append('<tr><th>ID</th><th>船</th><th>场次</th><th>胜率</th><th>经验</th><th>伤害</th><th>击落</th><th>RAA</th><th>评价</th></tr>');
    });

    $(document).on("click",".selection",function(){
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
            if($(this).hasClass("type")){
                typeList.splice(typeList.indexOf($(this).attr("id")),1);
            }else if($(this).hasClass("nation")){
                nationList.splice(nationList.indexOf($(this).attr("id")),1);
            }else if($(this).hasClass("tier")){
                tierList.splice(tierList.indexOf($(this).attr("id")),1);
            }
        }else{
            $(this).addClass("selected");
            if($(this).hasClass("type")){
                typeList.push($(this).attr("id"));
            }else if($(this).hasClass("nation")){
                nationList.push($(this).attr("id"));
            }else if($(this).hasClass("tier")){
                tierList.push($(this).attr("id"));
            }
        }

        var showList=shipFilter(shipFilter(shipFilter(shipList, "tier", tierList), "nation", nationList), "type", typeList);
        $(".ship-div").empty();
        for(var i=0; i<showList.length; i++){
            $(".ship-div").append('<div class="btn ship" id="'+showList[i].id+'">'+showList[i].name+'</div>');
        }
    });

    function shipFilter(shipList, filterType, filterList){
        var list=[];
        for(var i=0; i<shipList.length; i++){
            if(filterList.indexOf(shipList[i][filterType])>=0){
                list.push(shipList[i]);
            }
        }
        return list;
    }

    function getSingleData(name, server, index){
        var data={"name":name,"server":server,"index":index};
        $.ajax({type:"POST",
                url:"https://worldofwarships.com.cn/index.php",
                data:data,
                async:true,
                success:function(data,status){
                    var tr=$(data).find("tr");
                    var td=$(tr[1]).find("td");
                    var line=$("<tr></tr>");
                    $(line).append($("<td></td>").append($(td[0]).text()));
                    $(line).append($("<td></td>").append($(td[2]).text()));
                    $(line).append($("<td></td>").append($(td[3]).text()));
                    $(line).append($("<td></td>").append($(td[4]).text()));
                    $(line).append($("<td></td>").append($(td[5]).text()));
                    $(line).append($("<td></td>").append(parseInt($(td[6]).text())));
                    $(line).append($("<td></td>").append($(td[7]).text()));
                    $(line).append($("<td></td>").append($(td[15]).text()));
                    $(line).append($("<td></td>").append($(data).find("p img")));
					$("table tr").last().hasClass("alt") ? {} : $(line).addClass("alt");
                    $("table").append(line);
                }
               });
    }



})();