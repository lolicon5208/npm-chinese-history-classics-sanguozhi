const 内容 = Object.freeze([
'陆逊字伯言，吴郡吴人也。本名议，世江东大族。逊少孤，随从祖庐江太守康在官。袁术与康有隙，将攻康，康遣逊及亲戚还吴。逊年长於康子绩数岁，为之纲纪门户。',
'孙权为将军，逊年二十一，始仕幕府，历东西曹令史，出为海昌屯田都尉，并领县事。县连年亢旱，逊开仓谷以振贫民，劝督农桑，百姓蒙赖。时吴、会稽、丹杨多有伏匿，逊陈便宜，乞与募焉。会稽山贼大帅潘临，旧为所在毒害，历年不禽。逊以手下召兵，讨治深险，所向皆服，部曲已有二千馀人。鄱阳贼帅尤突作乱，复往讨之，拜定威校尉，军屯利浦。',
'权以兄策女配逊，数访世务，逊建议曰：“方今英雄棋跱，财狼闚望，克敌宁乱，非众不济。而山寇旧恶，依阻深地。夫腹心未平，难以图远，可大部伍，取其精锐。”权纳其策，以为帐下右部督。会丹杨贼帅费栈受曹公印绶，扇动山越，为作内应，权遣逊讨栈。栈支党多而往兵少，逊乃益施牙幢，分布鼓角，夜潜山谷间，鼓噪而前，应时破散。遂部伍东三郡，强者为兵，羸者补户，得精卒数万人，宿恶荡除，所过肃清，还屯芜湖。',
'会稽太守淳于式表逊枉取民人，愁扰所在。逊后诣都，言次，称式佳吏，权曰：“式白君而君荐之，何也？”逊对曰：“式意欲养民，是以白逊。若逊复毁式以乱圣听，不可长也。”权曰：“此诚长者之事，顾人不能为耳。”',
'吕蒙称疾诣建业，逊往见之，谓曰：“关羽接境，如何远下，后不当可忧也？”蒙曰：“诚如来言，然我病笃。”逊曰：“羽矜其骁气，陵轹於人。始有大功，意骄志逸，但务北进，未嫌於我，有相闻病，必益无备。今出其不意，自可禽制。',
'下见至尊，宜好为计。”蒙曰：“羽素勇猛，既难为敌，且已据荆州，恩信大行，兼始有功，胆势益盛，未易图也。”蒙至都，权问：“谁可代卿者？”蒙对曰：“陆逊意思深长，才堪负重，观其规虑，终可大任。而未有远名，非羽所忌，无复是过。若用之，当令外自韬隐，内察形便，然后可克。”权乃召逊，拜偏将车右部督代蒙。',
'逊至陆口，书与羽曰：“前承观衅而动，以律行师，小举大克，一何巍巍！',
'敌国败绩，利在同盟，闻庆拊节，想遂席卷，共奖王纲。近以不敏，受任来西，延慕光尘，思禀良规。”又曰：“于禁等见获，遐迩欣叹，以为将军之勋足以长世，虽昔晋文城濮之师，淮阴拔赵之略，蔑以尚兹。闻徐晃等少骑驻旌，闚望麾葆。操猾虏也，忿不思难，恐潜增众，以逞其心。虽云师老，犹有骁悍。且战捷之后，常苦轻敌，古人杖术，军胜弥警，愿将军广为方计，以全独克。仆书生疏迟，忝所不堪，喜邻威德，乐自倾尽，虽未合策，犹可怀也。傥明注仰，有以察之。”羽览逊书，有谦下自讬之意，意大安，无复所嫌。逊具启形状，陈其可禽之要。权乃潜军而上，使逊与吕蒙为前部，至即克公安、南郡。逊径进，领宜都太守，拜抚边将军，封华亭侯。备宜都太守樊友委郡走，诸城长吏及蛮夷君长皆降。逊请金银铜印，以假授初附。是岁建安二十四年十一月也。',
'逊遣将军李异、谢旌等将三千人，攻蜀将詹晏、陈凤。异将水军，旌将步兵，断绝险要，即破晏等，生降得凤。又攻房陵太守邓辅、南乡太守郭睦，大破之。',
'秭归大姓文布、邓凯等合夷兵数千人，首尾西方。逊复部旌讨破布、凯。布、凯脱走，蜀以为将。逊令人诱之，布帅众还降。前后斩获招纳，凡数万计。权以逊为右护军、镇西将军，进封娄侯。',
'时荆州士人新还，仕进或未得所，逊上疏曰：“昔汉高受命，招延英异，光武中兴，群俊毕至，苟可以熙隆道教者，未必远近。今荆州始定，人物未达，臣愚慺慺，乞普加覆载抽拔之恩，令并获自进，然后四海延颈，思归大化。”权敬纳其言。',
'黄武元年，刘备率大众来向西界，权命逊为大都督、假节，督朱然、潘璋、宋谦、韩当、徐盛、鲜于丹、孙桓等五万人拒之。备从巫峡、建平连围至夷陵界，立数十屯，以金锦爵赏诱动诸夷，使将军冯习为大督，张南为前部，辅匡、赵融、廖淳、傅肜等各为别督，先遣吴班将数千人於平地立营，欲以挑战。诸将皆欲击之，逊曰：“此必有谲，且观之。”备知其计不可，乃引伏兵八千，从谷中出。逊曰：“所以不听诸君击班者，揣之必有巧故也。”逊上疏曰：“夷陵要害，国之关限，虽为易得，亦复易失。失之非徒损一郡之地，荆州可忧。今日争之，当令必谐。备干天常，不守窟穴，而敢自送。臣虽不材，凭奉威灵，以顺讨逆，破坏在近。寻备前后行军，多败少成，推此论之，不足为戚。',
'臣初嫌之，水陆俱进，今反舍船就步，处处结营，察其布置，必无他变。伏愿至尊高枕，不以为念也。”诸将并曰：“攻备当在初，今乃令入五六百里，相衔持经七八月，其诸要害皆以固守，击之必无利矣。”逊曰：“备是猾虏，更尝事多，其军始集，思虑精专，未可干也。今住已久，不得我便，兵疲意沮，计不复生，犄角此寇，正在今日。”乃先攻一营，不利。诸将皆曰：“空杀兵耳。”逊曰：“吾已晓破之之术。”乃敕各持一把茅，以火攻拔之。一尔势成，通率诸军同时俱攻，斩张南、冯习及胡王沙摩柯等首，破其四十馀营。备将杜路、刘宁等穷逼请降。备升马鞍山，陈兵自绕。逊督促诸军四面蹙之，土崩瓦解，死者万数。备因夜遁，驿人自担烧铙铠断后，仅得入白帝城。其舟船器械，水步军资，一时略尽，尸骸漂流，塞江而下。备大惭恚，曰：“吾乃为逊所折辱，岂非天邪！”',
'初，孙桓别讨备前锋於夷道，为备所围，求救於逊。逊曰：“未可。”诸将曰：“孙安东公族，见围已困，奈何不救？”逊曰：“安东得士众心，城牢粮足，无可忧也。待吾计展，欲不救安东，安东自解。”及方略大施，备果奔溃。桓后见逊曰：“前实怨不见救，定至今日，乃知调度自有方耳。”',
'当御备时，诸将军或是孙策时旧将，或公室贵戚，各自矜恃，不相听从。逊案剑曰：“刘备天下知名，曹操所惮，今在境界，此强对也。诸君并荷国恩，当相辑睦，共翦此虏，上报所受，而不相顺，非所谓也。仆虽书生，受命主上。国家所以屈诸君使相承望者，以仆有尺寸可称，能忍辱负重故也。各任其事，岂复得辞！军令有常，不可犯矣。”及至破备，计多出逊，诸将乃服。权闻之，曰：“君何以初不启诸将违节度者邪？”逊对曰：“受恩深重，任过其才。又此诸将或任腹心，或堪爪牙，或是功臣，皆国家所当与共克定大事者。臣虽驽懦，窃慕相如、寇恂相下之义，以济国事。”权大笑称善，加拜逊辅国将军，领荆州牧，即改封江陵侯。',
'又备既住白帝，徐盛、潘璋、宋谦等各竞表言备必可禽，乞复攻之。权以问逊，逊与朱然、骆统以为曹丕大合士众，外讬助国讨备，内实有奸心，谨决计辄还。无几，魏军果出，三方受敌也。',
'备寻病亡，子禅袭位，诸葛亮秉政，与权连和。时事所宜，权辄令逊语亮，并刻权印，以置逊所。权每与禅、亮书，常过示逊，轻重可否，有所不安，便令改定，以印封行之。',
'七年，权使鄱阳太守周鲂谲魏大司马曹休，休果举众入皖，乃召逊假黄钺，为大都督，逆休。休既觉知，耻见欺诱，自恃兵马精多，遂交战。逊自为中部，令朱桓、全琮为左右翼，三道俱进，果冲休伏兵，因驱走之，追亡逐北，径至夹石，斩获万馀，牛马骡驴车乘万两，军资器械略尽。休还，疽发背死。诸军振旅过武昌，权令左右以御盖覆逊，入出殿门，凡所赐逊，皆御物上珍，於时莫与为比。',
'遣还西陵。',
'黄龙元年，拜上大将军、右都护。是岁，权东巡建业，留太子、皇子及尚书九官，徵逊辅太子，并掌荆州及豫章三郡事，董督军国。时建昌侯虑於堂前作斗鸭栏，颇施小巧，逊正色曰：“君侯宜勤览经典以自新益，用此何为？”虑即时毁彻之。射声校尉松於公子中最亲，戏兵不整，逊对之髡其职吏。南阳谢景善刘廙先刑后礼之论，逊呵景曰：“礼之长於刑久矣，廙以细辩而诡先圣之教，皆非也。君今侍东宫，宜遵仁义以彰德音，若彼之谈，不须讲也。”',
'逊虽身在外，乃心於国，上疏陈时事曰：“臣以为科法严峻，下犯者多。顷年以来，将吏罹罪，虽不慎可责，然天下未一，当图进取，小宜恩贷，以安下情。',
'且世务日兴，良能为先，自非奸秽入身，难忍之过，乞复显用，展其力效。此乃圣王忘过记功，以成王业。昔汉高舍陈平之愆，用其奇略，终建勋祚，功垂千载。',
'夫峻法严刑，非帝王之隆业；有罚无恕，非怀远之弘规也。”',
'权欲遣偏师取夷州及朱崖，皆以谘逊，逊上疏曰：“臣愚以为四海未定，当须民力，以济时务。今兵兴历年，见众损减，陛下忧劳圣虑，忘寝与食，将远规夷州，以定大事，臣反覆思惟，未见其利，万里袭取，风波难测，民易水土，必致疾疫，今驱见众，经涉不毛，欲益更损，欲利反害。又珠崖绝险，民犹禽兽，得其民不足济事，无其兵不足亏众。今江东见众，自足图事，但当畜力而后动耳。',
'昔桓王创基，兵不一旅，而开大业。陛下承运，拓定江表。臣闻治乱讨逆，须兵为威，农桑衣食，民之本业，而干戈未戢，民有饥寒。臣愚以为宜育养士民，宽其租赋，众克在和，义以劝勇，则河渭可平，九有一统矣。”权遂征夷州，得不补失。',
'及公孙渊背盟，权欲往征，逊上疏曰：“渊凭险恃固，拘留大使，名马不献，实可雠忿。蛮夷猾夏，未染王化，鸟窜荒裔，拒逆王师，至令陛下爰赫斯怒，欲劳万乘汎轻越海，不虑其危而涉不测。方今天下云扰，群雄虎争，英豪踊跃，张声大视。陛下以神武之姿，诞膺期运，破操乌林，败备西陵，禽羽荆州，斯三虏者当世雄杰，皆摧其锋。圣化所绥，万里草偃，方荡平华夏，总一大猷。今不忍小忿，而发雷霆之怒，违垂堂之戒，轻万乘之重，此臣之所惑也。臣闻志行万里者，不中道而辍足；图四海者，匪怀细以害大。强寇在境，荒服未庭，陛下乘桴远征，必致闚，慼至而忧，悔之无及。若使大事时捷，则渊不讨自服；今乃远惜辽东众之与马，奈何独欲捐江东万安之本业而不惜乎？乞息六师，以威大虏，早定中夏，垂耀将来。”权用纳焉。',
'嘉禾五年，权北征，使逊与诸葛瑾攻襄阳。逊遣亲人韩扁赍表奉报，还，遇敌於沔中，钞逻得扁。瑾闻之甚惧，书与逊云：“大驾已旋，贼得韩扁，具知吾阔狭。且水乾，宜当急去。”逊未答，方催人种葑豆，与诸将弈棋射戏如常。瑾曰：“伯言多智略，其当有以。”自来见逊，逊曰：“贼知大驾以旋，无所复慼，得专力於吾。又已守要害之处，兵将意动，且当自定以安之，施设变术，然后出耳。今便示退，贼当谓吾怖，仍来相蹙，必败之势也。”乃密与瑾立计，令瑾督舟船，逊悉上兵马，以向襄阳城。敌素惮逊，遽还赴城。瑾便引船出，逊徐整部伍，张拓声势，步趋船，敌不敢干。军到白围，讬言住猎，潜遣将军周峻、张梁等击江夏新市、安陆、石阳，石阳市盛，峻等奄至，人皆捐物入城。城门噎不得关，敌乃自斫杀己民，然后得阖。斩首获生，凡千馀人。其所生得，皆加营护，不令兵士干扰侵侮。将家属来者，使就料视。若亡其妻子者，即给衣粮，厚加慰劳，发遣令还，或有感慕相携而归者。邻境怀之，江夏功曹赵濯、弋阳备将裴生及夷王梅颐等，并帅支党来附逊。逊倾财帛，周赡经恤。',
'又魏江夏太守逯式兼领兵马，颇作边害，而与北旧将文聘子休宿不协。逊闻其然，即假作答式书云：“得报恳恻，知与休久结嫌隙，势不两存，欲来归附，辄以密呈来书表闻，撰众相迎。宜潜速严，更示定期。”以书置界上，式兵得书以见式，式惶惧，遂自送妻子还洛。由是吏士不复亲附，遂以免罢。',
'六年，中郎将周祗乞於鄱阳召募，事下问逊。逊以为此郡民易动难安，不可与召，恐致贼寇。而祗固陈取之，郡民吴遽等果作贼杀祗，攻没诸县。豫章、庐陵宿恶民，并应遽为寇。逊自闻，辄讨即破，遽等相率降，逊料得精兵八千馀人，三郡平。',
'时中书典校吕壹，窃弄权柄，擅作威福，逊与太常潘濬同心忧之，言至流涕。',
'后权诛壹，深以自责，语在权传。',
'时谢渊、谢厷等各陈便宜，欲兴利改作，以事下逊。逊议曰：“国以民为本，强由民力，财由民出。夫民殷国弱，民瘠国强者，未之有也。故为国者，得民则治，失之则乱，若不受利，而令尽用立效，亦为难也。是以诗叹‘宜民宜人，受禄于天’。',
'乞垂圣恩，宁济百姓，数年之间，国用少丰，然后更图。”',
'赤乌七年，代顾雍为丞相，诏曰：“朕以不德，应期践运，王涂未一，奸宄充路，夙夜战惧，不惶鉴寐。惟君天资聪叡，明德显融，统任上将，匡国弭难。',
'夫有超世之功者，必应光大之宠；怀文武之才者，必荷社稷之重。昔伊尹隆汤，吕尚翼周，内外之任，君实兼之。今以君为丞相，使使持节守太常傅常授印绶。',
'君其茂昭明德，脩乃懿绩，敬服王命，绥靖四方。於乎！总司三事，以训群寮，可不敬与，君其勖之！其州牧都护领武昌事如故。”',
'先是，二宫并阙，中外职司，多遣子弟给侍。全琮报逊，逊以为子弟苟有才，不忧不用，不宜私出以要荣利；若其不佳，终为取祸。且闻二宫势敌，必有彼此，此古人之厚忌也。琮子寄，果阿附鲁王，轻为交构。逊书与琮曰：“卿不师日磾，而宿留阿寄，终为足下门户致祸矣。”琮既不纳，更以致隙。及太子有不安之议，逊上疏陈：“太子正统，宜有盘石之固，鲁王藩臣，当使宠秩有差，彼此得所，上下获安。谨叩头流血以闻。”书三四上，及求诣都，欲口论適庶之分，以匡得失。既不听许，而逊外生顾谭、顾承、姚信，并以亲附太子，枉见流徙。太子太傅吾粲坐数与逊交书，下狱死。权累遣中使责让逊，逊愤恚致卒，时年六十三，家无馀财。',
'初，暨艳造营府之论，逊谏戒之，以为必祸。又谓诸葛恪曰：“在我前者，吾必奉之同升；在我下者，则扶持之。今观君气陵其上，意蔑乎下，非安德之基也。”又广陵杨竺少获声名，而逊谓之终败，劝竺兄穆令与别族。其先睹如此。',
'长子延早夭，次子抗袭爵。孙休时，追谥逊曰昭侯。',
'抗字幼节，孙策外孙也。逊卒时，年二十，拜建武校尉，领逊众五千人，送葬东还，诣都谢恩。孙权以杨竺所白逊二十事问抗，禁绝宾客，中使临诘，抗无所顾问，事事条答，权意渐解。赤乌九年，迁立节中郎将，与诸葛恪换屯柴桑。',
'抗临去，皆更缮完城围，葺其墙屋，居庐桑果，不得妄败。恪入屯，俨然若新。',
'而恪柴桑故屯，颇有毁坏，深以为惭。太元元年，就都治病。病差当还，权涕泣与别，谓曰：“吾前听用谗言，与汝父大义不笃，以此负汝。前后所问，一焚灭之，莫令人见也。”建兴元年，拜奋威将军。太平二年，魏将诸葛诞举寿春降，拜抗为柴桑督，赴寿春，破魏牙门将偏将军，迁征北将军。永安二年，拜镇军将军，都督西陵，自关羽至白帝。三年，假节。孙皓即位，加镇军大将军，领益州牧。建衡二年，大司马施绩卒，拜抗都督信陵、西陵、夷道、乐乡，公安诸军事，治乐乡。',
'抗闻都下政令多阙，忧深虑远，乃上疏曰：“臣闻德均则众者胜寡，力侔则安者制危，盖六国所以兼并於强秦，西楚所以北面於汉高也。今敌跨制九服，非徒关右之地；割据九州，岂但鸿沟以西而已。国家外无连国之援，内非西楚之强，庶政陵迟，黎民未乂，而议者所恃，徒以长川峻山，限带封域，此乃守国之末事，非智者之所先也。臣每远惟战国存亡之符，近览刘氏倾覆之衅，考之典籍，验之行事，中夜抚枕，临餐忘食。昔匈奴未灭，去病辞馆；汉道未纯，贾生哀泣。况臣王室之出，世荷光宠，身名否泰，与国同慼，死生契阔，义无苟且，夙夜忧怛，念至情惨。夫事君之义犯而勿欺，人臣之节匪躬是殉，谨陈时宜十七条如左。”',
'十七条失本，故不载。',
'时何定弄权，阉官预政；抗上疏曰：“臣闻开国承家，小人勿用，靖谮庸回，唐书攸戒，是以雅人所以怨刺，仲尼所以叹息也。春秋已来，爰及秦、汉，倾覆之衅，未有不由斯者也。小人不明理道，所见既浅，虽使竭情尽节，犹不足任，况其奸心素笃，而憎爱移易哉？苟患失之，无所不至。今委以聪明之任，假以专制之威，而冀雍熙之声作，肃清之化立，不可得也。方今见吏，殊才虽少，然或冠冕之胄，少渐道教，或清苦自立，资能足用，自可随才授职，抑黜群小，然后俗化可清，庶政无秽也。”',
'凤皇元年，西陵督步阐据城以叛，遣使降晋。抗闻之，日部分诸军，令将军左奕、吾彦、蔡贡等径赴西陵，敕军营更筑严围，自赤谿至故市，内以围阐，外以御寇，昼夜催切，如敌以至，众甚苦之。诸将咸谏曰：“今及三军之锐，亟以攻阐，比晋救至，阐必可拔。何事於围，而以弊士民之力乎？”抗曰：“此城处势既固，粮谷又足，且所缮修备御之具，皆抗所宿规。今反身攻之，既非可卒克，且北救必至，至而无备，表里受难，何以御之？”诸将咸欲攻阐，抗每不许。宜都太守雷谭言至恳切，抗欲服众，听令一攻。攻果无利，围备始合。晋车骑将军羊祜率师向江陵，诸将咸以抗不宜上，抗曰：“江陵城固兵足，无所忧患。假令敌没江陵，必不能守，所损者小。如使西陵槃结，则南山群夷皆当扰动，则所忧虑，难可竟言也。吾宁弃江陵而赴西陵，况江陵牢固乎？”初，江陵平衍，道路通利，抗敕江陵督张咸作大堰遏水，渐渍平中，以绝寇叛。祜欲因所遏水，浮船运粮，扬声将破堰以通步车。抗闻，使咸亟破之。诸将皆惑，屡谏不听。祜至当阳，闻堰败，乃改船以车运，大费损功力。晋巴东监军徐胤率水军诣建平，荆州刺史杨肇至西陵。抗令张咸固守其城；公安督孙遵巡南岸御祜；水军督留虑、镇西将军朱琬拒胤；身率三军，凭围对肇。将军朱乔、营都督俞赞亡诣肇。抗曰：“赞军中旧吏，知吾虚实者，吾常虑夷兵素不简练，若敌攻围，必先此处。”即夜易夷民，皆以旧将充之。明日，肇果攻故夷兵处，抗命旋军击之，矢石雨下，肇众伤死者相属。肇至经月，计屈夜遁。抗欲追之，而虑阐畜力项领，伺视间隙，兵不足分，於是但鸣鼓戒众，若将追者。肇众凶惧，悉解甲挺走，抗使轻兵蹑之，肇大破败，祜等皆引军还。抗遂陷西陵城，诛夷阐族及其大将吏，自此以下，所请赦者数万口。脩治城围，东还乐乡，貌无矜色，谦冲如常，故得将士欢心。',
'加拜都护。闻武昌左部督薛莹徵下狱，抗上疏曰：“夫俊乂者，国家之良宝，社稷之贵资，庶政所以伦叙，四门所以穆清也。故大司农楼玄、散骑中常侍王蕃、少府李勖，皆当世秀颖，一时显器，既蒙初宠，从容列位，而并旋受诛殛，或圮族替祀，或投弃荒裔。盖周礼有赦贤之辟，春秋有宥善之义，书曰：‘与其杀不辜，宁失不经。’而蕃等罪名未定，大辟以加，心经忠义，身被极刑，岂不痛哉！',
'且已死之刑，固无所识，至乃焚烁流漂，弃之水滨，惧非先王之正典，或甫侯之所戒也。是以百姓哀耸，士民同慼。蕃、勖永已，悔亦靡及，诚望陛下赦召玄出，而顷闻薛莹卒见逮录。莹父综纳言先帝，傅弼文皇，及莹承基，内厉名行，今之所坐，罪在可宥。臣惧有司未详其事，如复诛戮，益失民望，乞垂天恩，原赦莹罪，哀矜庶狱，清澄刑网，则天下幸甚！”',
'时师旅仍动，百姓疲弊，抗上疏曰：“臣闻易贵随时，传美观衅，故有夏多罪而殷汤用师，纣作淫虐而周武授钺。苟无其时，玉台有忧伤之虑，孟津有反旆之军。今不务富国强兵，力农畜谷，使文武之才效展其用，百揆之署无旷厥职，明黜陟以厉庶尹，审刑罚以示劝沮，训诸司以德，而抚百姓以仁，然后顺天乘运，席卷宇内，而听诸将徇名，穷兵黩武，动费万计，士卒彫瘁，寇不为衰，而我已大病矣！今争帝王之资，而昧十百之利，此人臣之奸便，非国家之良策也。昔齐鲁三战，鲁人再克而亡不旋踵。何则？大小之势异也。况今师所克获，不补所丧哉？且阻兵无众，古之明鉴，诚宜蹔息进取小规，以畜士民之力，观衅伺隙，庶无悔吝。”',
'二年春，就拜大司马、荆州牧。三年夏，疾病，上疏曰：“西陵、建平，国之蕃表，既处下流，受敌二境。若敌汎舟顺流，舳舻千里，星奔电迈，俄然行至，非可恃援他部以救倒县也。此乃社稷安危之机，非徒封疆侵陵小害也。臣父逊昔在西垂陈言，以为西陵国之西门，虽云易守，亦复易失。若有不守，非但失一郡，则荆州非吴有也。如其有虞，当倾国争之。臣往在西陵，得涉逊迹，前乞精兵三万，而主者循常，未肯差赴。自步阐以后，益更损耗。今臣所统千里，受敌四处，外御强对，内怀百蛮，而上下见兵财有数万，羸弊日久，难以待变。臣愚以为诸王幼冲，未统国事，可且立傅相，辅导贤姿，无用兵马，以妨要务。又黄门竖宦，开立占募，兵民怨役，逋逃入占。乞特诏简阅，一切料出，以补疆埸受敌常处，使臣所部足满八万，省息众务，信其赏罚，虽韩、白复生，无所展巧。若兵不增，此制不改，而欲克谐大事，此臣之所深慼也。若臣死之后，乞以西方为属。愿陛下思览臣言，则臣死且不朽。”',
'秋遂卒，子晏嗣。晏及弟景、玄、机、云、分领抗兵。晏为裨将军、夷道监。',
'天纪四年，晋军伐吴，龙骧将军王濬顺流东下，所至辄克，终如抗虑。景字士仁，以尚公主拜骑都尉，封毗陵侯，既领抗兵，拜偏将军、中夏督，澡身好学，著书数十篇也。二月壬戌，晏为王濬别军所杀。',
'癸亥，景亦遇害，时年三十一。景妻，孙皓適妹，与景俱张承外孙也。',
'评曰：刘备天下称雄，一世所惮，陆逊春秋方壮，威名未著，摧而克之，罔不如志。予既奇逊之谋略，又叹权之识才，所以济大事也。及逊忠诚恳至，忧国亡身，庶几社稷之臣矣。抗贞亮筹幹，咸有父风，奕世载美，具体而微，可谓克构者哉！',
])

exports.内容 = 内容