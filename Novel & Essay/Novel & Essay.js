// JavaScript Document

window.addEventListener('DOMContentLoaded', function(){

	let category = document.querySelector(".category");
	let category2 = document.querySelector(".category2");
	let mypage = document.querySelector(".mypage");
	let mypage2 = document.querySelector(".mypage2");
    let basket = document.querySelector(".basket");
    let basket2 = document.querySelector(".basket2");
	let nav = document.querySelector("nav");
	let aside = document.querySelector("aside");
	let nav_ul = document.querySelector(".nav");
	let aside_ul = document.querySelector(".aside");

    let buy = document.querySelector(".buy");
    let booklist = document.querySelector("#Bbooklist");
    let review = document.querySelector("#Breview");
    let Fbooklist = document.querySelector("#Fbooklist");
    let Freview = document.querySelector("#Freview");
    let Bbooklist = document.querySelector("#Bbooklist");
    let Breview = document.querySelector("#Breview");
    
    let buyBackground = document.querySelector(".buyBackground");
    let booklistBackground = document.querySelector(".booklistBackground");
    let reviewBackground = document.querySelector(".reviewBackground");

    let bookScale = document.querySelector(".bookScale");
    let mainbook = document.querySelector(".mainbook");
    let bookGroup = document.querySelector(".bookGroup");
    let bookMarkShadow = document.querySelector(".bookMarkShadow");
    let bookCoverShadow = document.querySelector(".bookCoverShadow");
    let bookRact = document.querySelector(".bookRact");
    let bookShadow = document.querySelector(".bookShadow");
    let bookRact1 = document.querySelectorAll(".bookRact1");
    let bookRact2 = document.querySelectorAll(".bookRact2");
    let bookRact3 = document.querySelectorAll(".bookRact3");
    let bookRact4 = document.querySelectorAll(".bookRact4");
    let bookRact5 = document.querySelectorAll(".bookRact5");
    let bookRact6 = document.querySelectorAll(".bookRact6");
    let bookRact7 = document.querySelectorAll(".bookRact7");
    let bookRact8 = document.querySelectorAll(".bookRact8");
    let bookRact9 = document.querySelectorAll(".bookRact9");
    let bookRact10 = document.querySelectorAll(".bookRact10");

    let bookSample = document.querySelector(".bookSample");
    let bookReview = document.querySelector(".bookReview");

    let cancelbutton = document.querySelectorAll(".cancelbutton");
    let nextbutton1 = document.querySelector(".nextbutton1");
    let nextbutton2 = document.querySelector(".nextbutton2");
    let previousbutton1 = document.querySelector(".previousbutton1");
    let previousbutton2 = document.querySelector(".previousbutton2");

    let booksampleGroup = document.querySelector(".booksampleGroup");
    let bookreviewGroup = document.querySelector(".bookreviewGroup");

    let bookRact11 = document.querySelector(".bookRact11");
    let bookRact12 = document.querySelector(".bookRact12");
    let bookRact13 = document.querySelector(".bookRact13");
    let bookRact14 = document.querySelector(".bookRact14");
    let bookRact15 = document.querySelector(".bookRact15");

    let now = document.querySelector(".now");
    let get = document.querySelector(".get");
    let priceLabel = document.querySelector(".priceLabel");
    let priceLabelShadow = document.querySelector(".priceLabelShadow");
    
    let purchase = document.querySelector(".purchase");
    let thank = document.querySelector(".thank");

    let mainShadow  = document.querySelector(".mainShadow");
    let booklistShadow  = document.querySelector(".booklistShadow");
    let reviewShadow  = document.querySelector(".reviewShadow");
    let purchaseBox = document.querySelector(".purchaseBox");
    let complete = document.querySelector(".complete");

    let backGround = document.querySelector("#backGround");

    const ns = 'http://www.w3.org/2000/svg';

    let body = document.querySelector("body");
    let a = document.querySelectorAll("a");
    let subShadow = document.querySelector(".subShadow");

	let mouseX;
	let mouseY;
    let dragX;
    let dragY;
    let positionX;
    let positionY;
    let dragXm;
    let dragYm;

	let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let red1 = Math.floor(Math.random() * 256);
    let green1 = Math.floor(Math.random() * 256);
    let blue1 = Math.floor(Math.random() * 256);

    let red2 = Math.floor(Math.random() * 256);
    let green2 = Math.floor(Math.random() * 256);
    let blue2 = Math.floor(Math.random() * 256);

    let red3 = Math.floor(Math.random() * 256);
    let green3 = Math.floor(Math.random() * 256);
    let blue3 = Math.floor(Math.random() * 256);

	let textSVG1 = document.querySelector("#textSVG1");
	let textSVG2 = document.querySelector("#textSVG2");
	
	let nagare1 = 3;
	let nagare2 = 2;
	let nagare3 = 2;
	let nagare4 = 2;
	let nagare5 = 2;

	let nagare6 = 2;
	let nagare7 = 2;
	let nagare8 = 2;
	let nagare9 = 2;

	let path1Num = 43;

	let WorB = Math.floor(Math.random() * 2) + 1;

	let bunsyou = new Array;
	bunsyou[0] = '木理美しき槻胴、縁にはわざと赤樫を用いたる岩畳作りの長火鉢に対いて話し敵もなくただ一人、少しは淋しそうに坐り居る三十前後の女、男のように立派な眉をいつ掃いしか剃ったる痕の青々と、見る眼も覚むべき雨後の山の色をとどめて翠の匂いひとしお床しく、 幸田露伴『五重塔』 木理美しき槻胴、縁にはわざと赤樫を用いたる岩畳作りの長火鉢に対いて話し敵もなくただ一人、少しは淋しそうに坐り居る三十前後の女、男のように立派な眉をいつ掃いしか剃ったる痕の青々と、見る眼も覚むべき雨後の山の色をとどめて翠の匂いひとしお床しく、 幸田露伴『五重塔』 木理美しき槻胴、縁にはわざと赤樫を用いたる岩畳作りの長火鉢に対いて話し敵もなくただ一人、少しは淋しそうに坐り居る三十前後の女、男のように立派な眉をいつ掃いしか剃ったる痕の青々と、見る眼も覚むべき雨後の山の色をとどめて翠の匂いひとしお床しく、 幸田露伴『五重塔』 ';
	bunsyou[1] = '山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。 夏目漱石『草枕』 山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。 夏目漱石『草枕』 山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。 夏目漱石『草枕』 山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。 夏目漱石『草枕』 山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。 夏目漱石『草枕』 山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。 夏目漱石『草枕』 ';
	bunsyou[2] = '石炭をば早や積み果てつ。中等室の卓のほとりはいと静にて、熾熱燈の光の晴れがましきも徒なり。今宵は夜毎にこゝに集ひ来る骨牌仲間も「ホテル」に宿りて、舟に残れるは余一人のみなれば。 森鴎外『舞姫』 石炭をば早や積み果てつ。中等室の卓のほとりはいと静にて、熾熱燈の光の晴れがましきも徒なり。今宵は夜毎にこゝに集ひ来る骨牌仲間も「ホテル」に宿りて、舟に残れるは余一人のみなれば。 森鴎外『舞姫』 石炭をば早や積み果てつ。中等室の卓のほとりはいと静にて、熾熱燈の光の晴れがましきも徒なり。今宵は夜毎にこゝに集ひ来る骨牌仲間も「ホテル」に宿りて、舟に残れるは余一人のみなれば。 森鴎外『舞姫』 石炭をば早や積み果てつ。中等室の卓のほとりはいと静にて、熾熱燈の光の晴れがましきも徒なり。今宵は夜毎にこゝに集ひ来る骨牌仲間も「ホテル」に宿りて、舟に残れるは余一人のみなれば。 森鴎外『舞姫』 ';
	bunsyou[3] = '「こいさん、頼むわ。―――」 鏡の中で、廊下からうしろへ這入って来た妙子を見ると、自分で襟を塗りかけていた刷毛を渡して、其方は見ずに、眼の前に映っている長襦袢姿の、抜き衣紋の顔を他人の顔のように見据えながら、「雪子ちゃん下で何してる」 と、幸子はきいた。 谷崎潤一郎『細雪』 「こいさん、頼むわ。―――」 鏡の中で、廊下からうしろへ這入って来た妙子を見ると、自分で襟を塗りかけていた刷毛を渡して、其方は見ずに、眼の前に映っている長襦袢姿の、抜き衣紋の顔を他人の顔のように見据えながら、「雪子ちゃん下で何してる」 と、幸子はきいた。 谷崎潤一郎『細雪』 「こいさん、頼むわ。―――」 鏡の中で、廊下からうしろへ這入って来た妙子を見ると、自分で襟を塗りかけていた刷毛を渡して、其方は見ずに、眼の前に映っている長襦袢姿の、抜き衣紋の顔を他人の顔のように見据えながら、「雪子ちゃん下で何してる」 と、幸子はきいた。 谷崎潤一郎『細雪』 ';
	bunsyou[4] = '禅智内供の鼻と云えば、池の尾で知らない者はない。長さは五六寸あって上唇の上から顋の下まで下っている。形は元も先も同じように太い。云わば細長い腸詰のような物が、ぶらりと顔のまん中からぶら下っているのである。 芥川龍之介『鼻』 禅智内供の鼻と云えば、池の尾で知らない者はない。長さは五六寸あって上唇の上から顋の下まで下っている。形は元も先も同じように太い。云わば細長い腸詰のような物が、ぶらりと顔のまん中からぶら下っているのである。 芥川龍之介『鼻』 禅智内供の鼻と云えば、池の尾で知らない者はない。長さは五六寸あって上唇の上から顋の下まで下っている。形は元も先も同じように太い。云わば細長い腸詰のような物が、ぶらりと顔のまん中からぶら下っているのである。 芥川龍之介『鼻』 禅智内供の鼻と云えば、池の尾で知らない者はない。長さは五六寸あって上唇の上から顋の下まで下っている。形は元も先も同じように太い。云わば細長い腸詰のような物が、ぶらりと顔のまん中からぶら下っているのである。 芥川龍之介『鼻』 ';
	bunsyou[5] = 'えたいの知れない不吉な塊が私の心を始終圧えつけていた。焦躁と言おうか、嫌悪と言おうか――酒を飲んだあとに宿酔があるように、酒を毎日飲んでいると宿酔に相当した時期がやって来る。それが来たのだ。 梶井基次郎『檸檬』』 えたいの知れない不吉な塊が私の心を始終圧えつけていた。焦躁と言おうか、嫌悪と言おうか――酒を飲んだあとに宿酔があるように、酒を毎日飲んでいると宿酔に相当した時期がやって来る。それが来たのだ。 梶井基次郎『檸檬』 えたいの知れない不吉な塊が私の心を始終圧えつけていた。焦躁と言おうか、嫌悪と言おうか――酒を飲んだあとに宿酔があるように、酒を毎日飲んでいると宿酔に相当した時期がやって来る。それが来たのだ。 梶井基次郎『檸檬』 えたいの知れない不吉な塊が私の心を始終圧えつけていた。焦躁と言おうか、嫌悪と言おうか――酒を飲んだあとに宿酔があるように、酒を毎日飲んでいると宿酔に相当した時期がやって来る。それが来たのだ。 梶井基次郎『檸檬』 ';
	bunsyou[6] = 'どっどど どどうど どどうど どどう 青いくるみも吹きとばせ すっぱいかりんも吹きとばせ どっどど どどうど どどうど どどう 宮沢賢治『風の又三郎』 どっどど どどうど どどうど どどう 青いくるみも吹きとばせ すっぱいかりんも吹きとばせ どっどど どどうど どどうど どどう 宮沢賢治『風の又三郎』 どっどど どどうど どどうど どどう 青いくるみも吹きとばせ すっぱいかりんも吹きとばせ どっどど どどうど どどうど どどう 宮沢賢治『風の又三郎』 どっどど どどうど どどうど どどう 青いくるみも吹きとばせ すっぱいかりんも吹きとばせ どっどど どどうど どどうど どどう 宮沢賢治『風の又三郎』 どっどど どどうど どどうど どどう 青いくるみも吹きとばせ すっぱいかりんも吹きとばせ どっどど どどうど どどうど どどう 宮沢賢治『風の又三郎』 どっどど どどうど どどうど どどう 青いくるみも吹きとばせ すっぱいかりんも吹きとばせ どっどど どどうど どどうど どどう 宮沢賢治『風の又三郎』 ';

	let randomBunsyou = Math.floor(Math.random() * 7);

	let randomPath1 = new Array;
	let randomPath2 = new Array;
	let randomPath3 = new Array;
	let randomPath4 = new Array;
	let randomPath5 = new Array;
	let randomPath6 = new Array;
	let randomPath7 = new Array;
	let randomPath8 = new Array;
	let randomPath9 = new Array;
	let randomPath10 = new Array;
	let randomPath11 = new Array;
	let randomPath12 = new Array;
	let randomPath13 = new Array;
	let randomPath14 = new Array;
	let randomPath15 = new Array;
	let randomPath16 = new Array;
	let randomPath17 = new Array;
	let randomPath18 = new Array;
	let randomPath19 = new Array;
	let randomPath20 = new Array;
	let randomPath21 = new Array;
	let randomPath22 = new Array;
	let randomPath23 = new Array;
	let randomPath24 = new Array;
	let randomPath25 = new Array;
	let randomPath26 = new Array;
	let randomPath27 = new Array;
	let randomPath28 = new Array;
	let randomPath29 = new Array;
	let randomPath30 = new Array;
	let randomPath31 = new Array;
	let randomPath32 = new Array;
	let randomPath33 = new Array;
	let randomPath34 = new Array;
	let randomPath35 = new Array;
	let randomPath36 = new Array;
	let randomPath37 = new Array;

	for(i = 1; i < path1Num; i++) {
		let j = i - 1;
		window["pathPoint1_" + i] = new Array;
		window["pathPoint2_" + i] = new Array;
		randomPath1[j] = Math.floor(Math.random() * 50) + 1;
		randomPath2[j] = Math.floor(Math.random() * 101) - 50;
		randomPath3[j] = Math.floor(Math.random() * 101) - 50;
		randomPath4[j] = Math.floor(Math.random() * 101) - 50;
		randomPath5[j] = Math.floor(Math.random() * 101) - 50;
		randomPath6[j] = Math.floor(Math.random() * 101) - 50;
		randomPath7[j] = Math.floor(Math.random() * 101) - 50;
		randomPath8[j] = Math.floor(Math.random() * 101) - 50;
		randomPath9[j] = Math.floor(Math.random() * 101) - 50;
		randomPath10[j] = Math.floor(Math.random() * 101) - 50;
		randomPath11[j] = Math.floor(Math.random() * 101) - 50;
		randomPath12[j] = Math.floor(Math.random() * 101) - 50;
		randomPath13[j] = Math.floor(Math.random() * 101) - 50;
		randomPath14[j] = Math.floor(Math.random() * 101) - 50;
		randomPath15[j] = Math.floor(Math.random() * 101) - 50;
		randomPath16[j] = Math.floor(Math.random() * 101) - 50;
		randomPath17[j] = Math.floor(Math.random() * 101) - 50;
		randomPath18[j] = Math.floor(Math.random() * 101) - 50;
		randomPath19[j] = Math.floor(Math.random() * 101) - 50;
		randomPath20[j] = Math.floor(Math.random() * 101) - 50;
		randomPath21[j] = Math.floor(Math.random() * 101) - 50;
		randomPath22[j] = Math.floor(Math.random() * 101) - 50;
		randomPath23[j] = Math.floor(Math.random() * 101) - 50;
		randomPath24[j] = Math.floor(Math.random() * 101) - 50;
		randomPath25[j] = Math.floor(Math.random() * 101) - 50;
		randomPath26[j] = Math.floor(Math.random() * 101) - 50;
		randomPath27[j] = Math.floor(Math.random() * 101) - 50;
		randomPath28[j] = Math.floor(Math.random() * 101) - 50;
		randomPath29[j] = Math.floor(Math.random() * 101) - 50;
		randomPath30[j] = Math.floor(Math.random() * 101) - 50;
		randomPath31[j] = Math.floor(Math.random() * 101) - 50;
		randomPath32[j] = Math.floor(Math.random() * 101) - 50;
		randomPath33[j] = Math.floor(Math.random() * 101) - 50;
		randomPath34[j] = Math.floor(Math.random() * 101) - 50;
		randomPath35[j] = Math.floor(Math.random() * 101) - 50;
		randomPath36[j] = Math.floor(Math.random() * 101) - 50;
		randomPath37[j] = Math.floor(Math.random() * 101) - 50;
		window["rBT" + i] = Math.floor(Math.random() * 3);
	}

	function autoPath(svgNum, nagare, number, pp1, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12, pp13, pp14, pp15, pp16, pp17, pp18, pp19, pp20, pp21, pp22, pp23, pp24, pp25, p26, pp27, pp28, pp29, pp30, pp31, pp32, pp33, pp34, pp35, pp36, pp37) {
		for(i = 1; i < nagare; i++) {
			let j = i - 1;
			window["idNodeG" + number + "_" + i] = document.createAttribute("id");
			window["idNodePath" + number + "_" + i] = document.createAttribute("id");
			window["idNodeTP" + number + "_" + i] = document.createAttribute("id");
			eval("idNodeG" + number + "_" + i + ".value = 'textGroup" + number + "_" + i + "';");
			eval("idNodePath" + number + "_" + i + ".value = 'ugokuText" + number + "_" + i + "';");
			eval("idNodeTP" + number + "_" + i + ".value = 'ugokuTP" + number + "_" + i + "';");
		
			window["textGroup" + number + "_" + i] = document.createElementNS(ns, "g");
			eval("textGroup" + number + "_" + i + ".setAttributeNode(idNodeG" + number + "_" + i + ");");
			eval("textSVG" + svgNum + ".appendChild(textGroup" + number + "_" + i + ");");
		
			window["path" + number + "_" + i] = document.createElementNS(ns, "path");
			eval("path" + number + "_" + i + ".setAttributeNode(idNodePath" + number + "_" + i + ");");
			window["path" + number + "_" + i].setAttribute("fill", "none");
			window["path" + number + "_" + i].setAttribute("stroke", "none");
			window["path" + number + "_" + i].setAttribute("stroke-miterlimit", "10");
			eval("textGroup" + number + "_" + i + ".appendChild(path" + number + "_" + i + ");");
		
			window["text" + number + "_" + i] = document.createElementNS(ns, "text");
			window["text" + number + "_" + i].setAttribute("font-family", "'M PLUS 1',Trebuchet MS,Arial,sans-serif");
			window["text" + number + "_" + i].setAttribute("fill", "rgba(" + red + ", " + green + ", " + blue + ")");
			window["text" + number + "_" + i].setAttribute("font-size", "6px");
			// window["text" + number + "_" + i].setAttribute("font-weight", "300");
			eval("textGroup" + number + "_" + i + ".appendChild(text" + number + "_" + i + ");");
		
			window["textPath" + number + "_" + i] = document.createElementNS(ns, "textPath");
			eval("textPath" + number + "_" + i + ".setAttributeNode(idNodeTP" + number + "_" + i + ");");
			eval("textPath" + number + "_" + i + ".setAttribute('href', '#ugokuText" + number + "_" + i + "');");
			window["textPath" + number + "_" + i].setAttribute("textLength", "250%");
			// window["textPath" + number + "_" + i].innerHTML = "試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。試しの文章です。";
			eval("text" + number + "_" + i + ".appendChild(textPath" + number + "_" + i + ");");
	
			pathPoint1_1[0] = pp1;
			pathPoint1_2[0] = pp2;
			pathPoint1_3[0] = pp3;
			pathPoint1_4[0] = pp4;
			pathPoint1_5[0] = pp5;
			pathPoint1_6[0] = pp6;
			pathPoint1_7[0] = pp7;
			pathPoint1_8[0] = pp8;
			pathPoint1_9[0] = pp9;
			pathPoint1_10[0] = pp10;
			pathPoint1_11[0] = pp11;
			pathPoint1_12[0] = pp12;
			pathPoint1_13[0] = pp13;
			pathPoint1_14[0] = pp14;
			pathPoint1_15[0] = pp15;
			pathPoint1_16[0] = pp16;
			pathPoint1_17[0] = pp17;
			pathPoint1_18[0] = pp18;
			pathPoint1_19[0] = pp19;
			pathPoint1_20[0] = pp20;
			pathPoint1_21[0] = pp21;
			pathPoint1_22[0] = pp22;
			pathPoint1_23[0] = pp1;
			pathPoint1_24[0] = pp2;
			pathPoint1_25[0] = pp3;
			pathPoint1_26[0] = pp4;
			pathPoint1_27[0] = pp5;
			pathPoint1_28[0] = pp6;
			pathPoint1_29[0] = pp7;
			pathPoint1_30[0] = pp8;
			pathPoint1_31[0] = pp9;
			pathPoint1_32[0] = pp10;
			pathPoint1_33[0] = pp11;
			pathPoint1_34[0] = pp12;
			pathPoint1_35[0] = pp13;
			pathPoint1_36[0] = pp14;
			pathPoint1_37[0] = pp15;
	
			pathPoint1_1[i] = pathPoint1_1[j] + randomPath1[j];
			pathPoint1_2[i] = pathPoint1_2[j] + randomPath2[j];
			pathPoint1_3[i] = pathPoint1_3[j] + randomPath3[j];
			pathPoint1_4[i] = pathPoint1_4[j] + randomPath4[j];
			pathPoint1_5[i] = pathPoint1_5[j] + randomPath5[j];
			pathPoint1_6[i] = pathPoint1_6[j] + randomPath6[j];
			pathPoint1_7[i] = pathPoint1_7[j] + randomPath7[j];
			pathPoint1_8[i] = pathPoint1_8[j] + randomPath8[j];
			pathPoint1_9[i] = pathPoint1_9[j] + randomPath9[j];
			pathPoint1_10[i] = pathPoint1_10[j] + randomPath10[j];
			pathPoint1_11[i] = pathPoint1_11[j] + randomPath11[j];
			pathPoint1_12[i] = pathPoint1_12[j] + randomPath12[j];
			pathPoint1_13[i] = pathPoint1_13[j] + randomPath13[j];
			pathPoint1_14[i] = pathPoint1_14[j] + randomPath14[j];
			pathPoint1_15[i] = pathPoint1_15[j] + randomPath15[j];
			pathPoint1_16[i] = pathPoint1_16[j] + randomPath16[j];
			pathPoint1_17[i] = pathPoint1_17[j] + randomPath17[j];
			pathPoint1_18[i] = pathPoint1_18[j] + randomPath18[j];
			pathPoint1_19[i] = pathPoint1_19[j] + randomPath19[j];
			pathPoint1_20[i] = pathPoint1_20[j] + randomPath20[j];
			pathPoint1_21[i] = pathPoint1_21[j] + randomPath21[j];
			pathPoint1_22[i] = pathPoint1_22[j] + randomPath22[j];
			pathPoint1_23[i] = pathPoint1_23[j] + randomPath23[j];
			pathPoint1_24[i] = pathPoint1_24[j] + randomPath24[j];
			pathPoint1_25[i] = pathPoint1_25[j] + randomPath25[j];
			pathPoint1_26[i] = pathPoint1_26[j] + randomPath26[j];
			pathPoint1_27[i] = pathPoint1_27[j] + randomPath27[j];
			pathPoint1_28[i] = pathPoint1_28[j] + randomPath28[j];
			pathPoint1_29[i] = pathPoint1_29[j] + randomPath29[j];
			pathPoint1_30[i] = pathPoint1_30[j] + randomPath30[j];
			pathPoint1_31[i] = pathPoint1_31[j] + randomPath31[j];
			pathPoint1_32[i] = pathPoint1_32[j] + randomPath32[j];
			pathPoint1_33[i] = pathPoint1_33[j] + randomPath33[j];
			pathPoint1_34[i] = pathPoint1_34[j] + randomPath34[j];
			pathPoint1_35[i] = pathPoint1_35[j] + randomPath35[j];
			pathPoint1_36[i] = pathPoint1_36[j] + randomPath36[j];
			pathPoint1_37[i] = pathPoint1_37[j] + randomPath37[j];
	
			eval("customPath" + number + "(" + number + ", " + i + ", " + j + ");");
		}
	}

	autoPath(1, nagare1, 1, 42, 234.58, 175.72, -31.42, 463.37, 3.69, 384.21, 46.9, 515.88, 422.12, 1008.32, 465.38, 0, 0, 0, 0 ,0 ,0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0);
	autoPath(1, nagare2, 2, 1746.45, 13.73, -214.65, -147.91, -335.01, 999.65, -964.53, 683.98, 327.93, 470.07, 354.39, 937.71, 0.38, 522.4, 0, 0 ,0 ,0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0);
	autoPath(1, nagare3, 3, 39.11, 936.6, -43.86, 786.89, 4.84, 561.41, 205.06, 500.08, 200.22, -61.33, 358.75, 222.98, 478, 144.3, -243.51, 104.62 ,-292.21 ,-64.94 ,450.38 ,115.88, 246.55, 0.44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0);
	autoPath(2, nagare4, 4, 9.81, 0.08, -13.63, 143.64, -3.56, 312.01, 168.55, 391.18, 409.46, -115.86, 847.78, 499.66, 0, 0, 0, 0 ,0 ,0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0);
	autoPath(2, nagare5, 5, 1155.5, 570.45, -44.16, -151.52, -302.1, -367.97, -621.37, -344.52, 214.87, 249.37, 131.89, 63.16, 0.21, 0.45, 0, 0 ,0 ,0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0);
	autoPath(1, nagare6, 6, 0.5, 746.86, 16.3, 124.99, 152.17, 171.19, 263.58, 130.43, 685.25, 288.57, 1068.39, 316.64, 432.05, 358.52, 331.51, 493.55, -347.81, -8.98, -453.79, 333.4, -487.17, 160.68, -448.35, -43.48, 73.37, -385.85, 470.09, -402.16, 184.77, -731.81, 467.63, 120.01, 750.46, -35.71, 878.18, 7.76);
	autoPath(2, nagare7, 7, 0.5, 746.86, 16.3, 124.99, 152.17, 171.19, 263.58, 130.43, 685.25, 288.57, 1068.39, 316.64, 432.05, 358.52, 331.51, 493.55, -347.81, -8.98, -453.79, 333.4, -487.17, 160.68, -448.35, -43.48, 73.37, -385.85, 470.09, -402.16, 184.77, -731.81, 467.63, 120.01, 750.46, -35.71, 878.18, 7.76);
	autoPath(1, nagare8, 8, 0.5, 746.86, 16.3, 124.99, 152.17, 171.19, 263.58, 130.43, 685.25, 288.57, 1068.39, 316.64, 432.05, 358.52, 331.51, 493.55, -347.81, -8.98, -453.79, 333.4, -487.17, 160.68, -448.35, -43.48, 73.37, -385.85, 470.09, -402.16, 184.77, -731.81, 467.63, 120.01, 750.46, -35.71, 878.18, 7.76);
	autoPath(2, nagare9, 9, 0.5, 746.86, 16.3, 124.99, 152.17, 171.19, 263.58, 130.43, 685.25, 288.57, 1068.39, 316.64, 432.05, 358.52, 331.51, 493.55, -347.81, -8.98, -453.79, 333.4, -487.17, 160.68, -448.35, -43.48, 73.37, -385.85, 470.09, -402.16, 184.77, -731.81, 467.63, 120.01, 750.46, -35.71, 878.18, 7.76);

	function customPath1(number, i, j) {
		window["path" + number + "_" + i].setAttribute("d", "M" + pathPoint1_1[j] + ", " + pathPoint1_2[j] + " S" + pathPoint1_3[j] + " " + pathPoint1_4[j] + ", " + pathPoint1_5[j] + ", " + pathPoint1_6[j] + " c" + pathPoint1_7[j] + ", " + pathPoint1_8[j] + ", " + pathPoint1_9[j] + ", " + pathPoint1_10[j] + ", " + pathPoint1_11[j] + ", " + pathPoint1_12[j] + "");
		window["textPath" + number + "_" + i].innerHTML = bunsyou[randomBunsyou];
		window["textGroup" + number + "_" + i].style.transform = 'translate(10%, 30%)';
		window["text" + number + "_" + i].setAttribute("font-weight", "200");
	}
	function customPath2(number, i, j) {
		window["path" + number + "_" + i].setAttribute("d", "M" + pathPoint1_1[j] + ", " + pathPoint1_2[j] + " c" + pathPoint1_3[j] + " " + pathPoint1_4[j] + " " + pathPoint1_5[j] + ", " + pathPoint1_6[j] + " " + pathPoint1_7[j] + ", " + pathPoint1_8[j] + " C" + pathPoint1_9[j] + ", " + pathPoint1_10[j] + ", " + pathPoint1_11[j] + ", " + pathPoint1_2[j] + ", " + pathPoint1_13[j] + ", " + pathPoint1_4[j] + "");
		window["textPath" + number + "_" + i].innerHTML = bunsyou[randomBunsyou];
		window["textGroup" + number + "_" + i].style.transform = 'translate(0, 30%)';
		window["text" + number + "_" + i].setAttribute("font-weight", "200");
	}
	function customPath3(number, i, j) {
		window["path" + number + "_" + i].setAttribute("d", "M" + pathPoint1_1[j] + ", " + pathPoint1_2[j] + " C" + pathPoint1_3[j] + ", " + pathPoint1_4[j] + ", " + pathPoint1_5[j] + ", " + pathPoint1_6[j] + ", " + pathPoint1_7[j] + ", " + pathPoint1_8[j] + " c" + pathPoint1_9[j] + " " + pathPoint1_10[j] + ", " + pathPoint1_11[j] + ", " + pathPoint1_12[j] + ", " + pathPoint1_13[j] + ", " + pathPoint1_14[j] + " s" + pathPoint1_15[j] + ", " + pathPoint1_16[j] + " " + pathPoint1_17[j] + " " + pathPoint1_18[j] + " S" + pathPoint1_19[j] + ", " + pathPoint1_20[j] + ", " + pathPoint1_21[j] + ", " + pathPoint1_22[j] + "");
		window["textPath" + number + "_" + i].innerHTML = bunsyou[randomBunsyou];
		window["textGroup" + number + "_" + i].style.transform = 'translate(20%, 25%)';
		window["text" + number + "_" + i].setAttribute("font-weight", "100");
	}
	function customPath4(number, i, j) {
		window["path" + number + "_" + i].setAttribute("d", "M" + pathPoint1_1[j] + ", " + pathPoint1_2[j] + " C" + pathPoint1_3[j] + ", " + pathPoint1_4[j] + " " + pathPoint1_5[j] + ", " + pathPoint1_6[j] + ", " + pathPoint1_7[j] + ", " + pathPoint1_8[j] + " s" + pathPoint1_9[j] + " " + pathPoint1_10[j] + ", " + pathPoint1_11[j] + ", " + pathPoint1_12[j] + "");
		window["textPath" + number + "_" + i].innerHTML = bunsyou[randomBunsyou];
		window["textGroup" + number + "_" + i].style.transform = 'translate(35%, 25%)';
		window["text" + number + "_" + i].setAttribute("font-weight", "300");
	}
	function customPath5(number, i, j) {
		window["path" + number + "_" + i].setAttribute("d", "M" + pathPoint1_1[j] + ", " + pathPoint1_2[j] + " c" + pathPoint1_3[j] + " " + pathPoint1_4[j] + " " + pathPoint1_5[j] + " " + pathPoint1_6[j] + " " + pathPoint1_7[j] + " " + pathPoint1_8[j] + " C" + pathPoint1_9[j] + ", " + pathPoint1_10[j] + ", " + pathPoint1_11[j] + ", " + pathPoint1_12[j] + ", " + pathPoint1_13[j] + ", " + pathPoint1_14[j] + "");
		window["textPath" + number + "_" + i].innerHTML = bunsyou[randomBunsyou];
		window["textGroup" + number + "_" + i].style.transform = 'translate(10%, 55%)';
		window["text" + number + "_" + i].setAttribute("font-weight", "300");
	}
	// for(i = 1; i < (nagare1 - 2); i++) {
	// 	window["textGroup1_" + i].style.visibility = 'hidden';
	// 	window["textGroup2_" + i].style.visibility = 'hidden';
	// 	window["textGroup3_" + i].style.visibility = 'hidden';
	// 	window["textGroup4_" + i].style.visibility = 'hidden';
	// 	window["textGroup5_" + i].style.visibility = 'hidden';
	// }

	function customPath6(number, i, j) {
		window["path" + number + "_" + i].setAttribute("d", "M" + pathPoint1_1[rBT1] + ", " + pathPoint1_2[rBT2] + " c" + pathPoint1_3[rBT3] + ", " + pathPoint1_4[rBT4] + ", " + pathPoint1_5[rBT5] + ", " + pathPoint1_6[rBT6] + ", " + pathPoint1_7[rBT7] + ", " + pathPoint1_8[rBT8] + " S" + pathPoint1_9[rBT9] + ", " + pathPoint1_10[rBT10] + ", " + pathPoint1_11[rBT11] + ", " + pathPoint1_12[rBT12] + " s" + pathPoint1_13[rBT13] + ", " + pathPoint1_14[rBT14] + ", " + pathPoint1_15[rBT15] + ", " + pathPoint1_16[rBT16] + " " + pathPoint1_17[rBT17] + " " + pathPoint1_18[rBT18] + " " + pathPoint1_19[rBT19] + ", " + pathPoint1_20[rBT20] + " " + pathPoint1_21[rBT21] + ", " + pathPoint1_22[rBT22] + " " + pathPoint1_23[rBT23] + " " + pathPoint1_24[rBT24] + " c" + pathPoint1_25[rBT25] + " " + pathPoint1_26[rBT26] + ", " + pathPoint1_27[rBT27] + " " + pathPoint1_28[rBT28] + ", " + pathPoint1_29[rBT29] + " " + pathPoint1_30[rBT30] + " C" + pathPoint1_31[rBT31] + ", " + pathPoint1_32[rBT32] + ", " + pathPoint1_33[rBT33] + " " + pathPoint1_34[rBT34] + ", " + pathPoint1_35[rBT35] + ", " + pathPoint1_36[rBT36] + "");
		window["textGroup" + number + "_" + i].style.transform = 'translate(17%, 14%) scale(1.5)';
		window["textGroup" + number + "_" + i].style.transformOrigin = '50% 50%';
		// window["text" + number + "_" + i].setAttribute("fill", "rgba(" + red + ", " + green + ", " + blue + ")");
		// window["text" + number + "_" + i].setAttribute("filter", "url(#blur)");
		window["text" + number + "_" + i].setAttribute("font-size", "100px");
		window["text" + number + "_" + i].setAttribute("font-weight", "1000");
		window["textPath" + number + "_" + i].setAttribute("textLength", "1500%");
		window["textPath" + number + "_" + i].innerHTML = bunsyou[randomBunsyou];
		window["offsetAni" + number + "_" + i] = document.createElementNS(ns, "animate");
		window["offsetAni" + number + "_" + i].setAttribute("attributeName", "startOffset");
		window["offsetAni" + number + "_" + i].setAttribute("form", "-50%");
		window["offsetAni" + number + "_" + i].setAttribute("to", "50%");
		window["offsetAni" + number + "_" + i].setAttribute("begin", "0s");
		window["offsetAni" + number + "_" + i].setAttribute("dur", "120s");
		window["offsetAni" + number + "_" + i].setAttribute("repeatCount", "indefinite");
		eval("textPath" + number + "_" + i + ".appendChild(offsetAni" + number + "_" + i + ");");
	}
	function customPath7(number, i, j) {
		window["path" + number + "_" + i].setAttribute("d", "M" + pathPoint1_1[rBT1] + ", " + pathPoint1_2[rBT2] + " c" + pathPoint1_3[rBT3] + ", " + pathPoint1_4[rBT4] + ", " + pathPoint1_5[rBT5] + ", " + pathPoint1_6[rBT6] + ", " + pathPoint1_7[rBT7] + ", " + pathPoint1_8[rBT8] + " S" + pathPoint1_9[rBT9] + ", " + pathPoint1_10[rBT10] + ", " + pathPoint1_11[rBT11] + ", " + pathPoint1_12[rBT12] + " s" + pathPoint1_13[rBT13] + ", " + pathPoint1_14[rBT14] + ", " + pathPoint1_15[rBT15] + ", " + pathPoint1_16[rBT16] + " " + pathPoint1_17[rBT17] + " " + pathPoint1_18[rBT18] + " " + pathPoint1_19[rBT19] + ", " + pathPoint1_20[rBT20] + " " + pathPoint1_21[rBT21] + ", " + pathPoint1_22[rBT22] + " " + pathPoint1_23[rBT23] + " " + pathPoint1_24[rBT24] + " c" + pathPoint1_25[rBT25] + " " + pathPoint1_26[rBT26] + ", " + pathPoint1_27[rBT27] + " " + pathPoint1_28[rBT28] + ", " + pathPoint1_29[rBT29] + " " + pathPoint1_30[rBT30] + " C" + pathPoint1_31[rBT31] + ", " + pathPoint1_32[rBT32] + ", " + pathPoint1_33[rBT33] + " " + pathPoint1_34[rBT34] + ", " + pathPoint1_35[rBT35] + ", " + pathPoint1_36[rBT36] + "");
		window["textGroup" + number + "_" + i].style.transform = 'translate(18%, 15%) scale(1.5)';
		window["textGroup" + number + "_" + i].style.transformOrigin = '50% 50%';
		window["text" + number + "_" + i].setAttribute("fill", "rgba(0, 0, 0)");
		window["text" + number + "_" + i].setAttribute("font-size", "100px");
		window["text" + number + "_" + i].setAttribute("font-weight", "1000");
		window["textPath" + number + "_" + i].setAttribute("textLength", "1500%");
		window["textPath" + number + "_" + i].innerHTML = bunsyou[randomBunsyou];
		window["offsetAni" + number + "_" + i] = document.createElementNS(ns, "animate");
		window["offsetAni" + number + "_" + i].setAttribute("attributeName", "startOffset");
		window["offsetAni" + number + "_" + i].setAttribute("form", "-50%");
		window["offsetAni" + number + "_" + i].setAttribute("to", "50%");
		window["offsetAni" + number + "_" + i].setAttribute("begin", "0s");
		window["offsetAni" + number + "_" + i].setAttribute("dur", "120s");
		window["offsetAni" + number + "_" + i].setAttribute("repeatCount", "indefinite");
		eval("textPath" + number + "_" + i + ".appendChild(offsetAni" + number + "_" + i + ");");
	}
	function customPath8(number, i, j) {
		window["path" + number + "_" + i].setAttribute("d", "M" + pathPoint1_1[rBT36] + ", " + pathPoint1_2[rBT35] + " c" + pathPoint1_3[rBT34] + ", " + pathPoint1_4[rBT33] + ", " + pathPoint1_5[rBT32] + ", " + pathPoint1_6[rBT31] + ", " + pathPoint1_7[rBT30] + ", " + pathPoint1_8[rBT29] + " S" + pathPoint1_9[rBT28] + ", " + pathPoint1_10[rBT27] + ", " + pathPoint1_11[rBT26] + ", " + pathPoint1_12[rBT25] + " s" + pathPoint1_13[rBT24] + ", " + pathPoint1_14[rBT23] + ", " + pathPoint1_15[rBT22] + ", " + pathPoint1_16[rBT21] + " " + pathPoint1_17[rBT20] + " " + pathPoint1_18[rBT19] + " " + pathPoint1_19[rBT18] + ", " + pathPoint1_20[rBT17] + " " + pathPoint1_21[rBT16] + ", " + pathPoint1_22[rBT15] + " " + pathPoint1_23[rBT14] + " " + pathPoint1_24[rBT13] + " c" + pathPoint1_25[rBT12] + " " + pathPoint1_26[rBT11] + ", " + pathPoint1_27[rBT10] + " " + pathPoint1_28[rBT9] + ", " + pathPoint1_29[rBT8] + " " + pathPoint1_30[rBT7] + " C" + pathPoint1_31[rBT6] + ", " + pathPoint1_32[rBT5] + ", " + pathPoint1_33[rBT4] + " " + pathPoint1_34[rBT3] + ", " + pathPoint1_35[rBT2] + ", " + pathPoint1_36[rBT1] + "");
		window["textGroup" + number + "_" + i].style.transform = 'translate(17%, 14%) scale(1.5)';
		window["textGroup" + number + "_" + i].style.transformOrigin = '50% 50%';
		window["text" + number + "_" + i].setAttribute("fill", "rgba(248, 248, 255)");
		window["text" + number + "_" + i].setAttribute("stroke", "rgba(" + red + ", " + green + ", " + blue + ")");
		window["text" + number + "_" + i].setAttribute("stroke-width", "0.5px");
		window["text" + number + "_" + i].setAttribute("font-size", "100px");
		window["text" + number + "_" + i].setAttribute("font-weight", "1000");
		window["textPath" + number + "_" + i].setAttribute("textLength", "1500%");
		window["textPath" + number + "_" + i].innerHTML = bunsyou[randomBunsyou];
		window["offsetAni" + number + "_" + i] = document.createElementNS(ns, "animate");
		window["offsetAni" + number + "_" + i].setAttribute("attributeName", "startOffset");
		window["offsetAni" + number + "_" + i].setAttribute("form", "-50%");
		window["offsetAni" + number + "_" + i].setAttribute("to", "50%");
		window["offsetAni" + number + "_" + i].setAttribute("begin", "0s");
		window["offsetAni" + number + "_" + i].setAttribute("dur", "120s");
		window["offsetAni" + number + "_" + i].setAttribute("repeatCount", "indefinite");
		eval("textPath" + number + "_" + i + ".appendChild(offsetAni" + number + "_" + i + ");");
	}
		function customPath9(number, i, j) {
		window["path" + number + "_" + i].setAttribute("d", "M" + pathPoint1_1[rBT36] + ", " + pathPoint1_2[rBT35] + " c" + pathPoint1_3[rBT34] + ", " + pathPoint1_4[rBT33] + ", " + pathPoint1_5[rBT32] + ", " + pathPoint1_6[rBT31] + ", " + pathPoint1_7[rBT30] + ", " + pathPoint1_8[rBT29] + " S" + pathPoint1_9[rBT28] + ", " + pathPoint1_10[rBT27] + ", " + pathPoint1_11[rBT26] + ", " + pathPoint1_12[rBT25] + " s" + pathPoint1_13[rBT24] + ", " + pathPoint1_14[rBT23] + ", " + pathPoint1_15[rBT22] + ", " + pathPoint1_16[rBT21] + " " + pathPoint1_17[rBT20] + " " + pathPoint1_18[rBT19] + " " + pathPoint1_19[rBT18] + ", " + pathPoint1_20[rBT17] + " " + pathPoint1_21[rBT16] + ", " + pathPoint1_22[rBT15] + " " + pathPoint1_23[rBT14] + " " + pathPoint1_24[rBT13] + " c" + pathPoint1_25[rBT12] + " " + pathPoint1_26[rBT11] + ", " + pathPoint1_27[rBT10] + " " + pathPoint1_28[rBT9] + ", " + pathPoint1_29[rBT8] + " " + pathPoint1_30[rBT7] + " C" + pathPoint1_31[rBT6] + ", " + pathPoint1_32[rBT5] + ", " + pathPoint1_33[rBT4] + " " + pathPoint1_34[rBT3] + ", " + pathPoint1_35[rBT2] + ", " + pathPoint1_36[rBT1] + "");
		window["textGroup" + number + "_" + i].style.transform = 'translate(18%, 15%) scale(1.5)';
		window["textGroup" + number + "_" + i].style.transformOrigin = '50% 50%';
		window["text" + number + "_" + i].setAttribute("fill", "rgba(248, 248, 255)");
		window["text" + number + "_" + i].setAttribute("stroke", "rgba(0, 0, 0)");
		window["text" + number + "_" + i].setAttribute("stroke-width", "0.5px");
		window["text" + number + "_" + i].setAttribute("font-size", "100px");
		window["text" + number + "_" + i].setAttribute("font-weight", "1000");
		window["textPath" + number + "_" + i].setAttribute("textLength", "1500%");
		window["textPath" + number + "_" + i].innerHTML = bunsyou[randomBunsyou];
		window["offsetAni" + number + "_" + i] = document.createElementNS(ns, "animate");
		window["offsetAni" + number + "_" + i].setAttribute("attributeName", "startOffset");
		window["offsetAni" + number + "_" + i].setAttribute("form", "-50%");
		window["offsetAni" + number + "_" + i].setAttribute("to", "50%");
		window["offsetAni" + number + "_" + i].setAttribute("begin", "0s");
		window["offsetAni" + number + "_" + i].setAttribute("dur", "120s");
		window["offsetAni" + number + "_" + i].setAttribute("repeatCount", "indefinite");
		eval("textPath" + number + "_" + i + ".appendChild(offsetAni" + number + "_" + i + ");");
	}

	function pathSelect(nagare, number, speed) {
		for(i = 1; i < nagare; i++) {
			let j = i - 1;
			let k = i * 150;
			let startOffset = new Array;
			startOffset[j] = ((dragX + dragY) * speed) - 6500;
			// startOffset[j] = ((dragX + dragY) * speed + k) - 6000;
			// startOffset[j] = (speed + k);
			eval("textPath" + number + "_" + i + ".setAttribute('startOffset', '" + startOffset[j] + "px');");
		}
	}
	
	// pathSelect(nagare1, 1, 30);
	// pathSelect(nagare2, 2, 30);
	// pathSelect(nagare3, 3, 30);
	// pathSelect(nagare4, 4, 30);
	// pathSelect(nagare5, 5, 30);

	function moveText() {
		pathSelect(nagare1, 1, 3.5);
		pathSelect(nagare2, 2, 3.5);
		pathSelect(nagare3, 3, 3.5);
		pathSelect(nagare4, 4, 3.5);
		pathSelect(nagare5, 5, 3.5);
		// pathSelect(nagare6, 6, 1);
		// pathSelect(nagare7, 7, 1);
	}

	let hiragana = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'よ', 'ゆ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'];
	let hira46 = Math.floor(Math.random() * 46);
	let mojiIdNode1 = document.createAttribute("id");
    mojiIdNode1.value = "moji1";
	let moji1 = document.createElementNS(ns, "text");
	moji1.setAttributeNode(mojiIdNode1);
	moji1.setAttribute("font-family", "'M PLUS 1',Trebuchet MS,Arial,sans-serif");
    moji1.setAttribute("font-size", "1000px");
    moji1.setAttribute("font-weight", "1000");
    moji1.setAttribute("fill", "rgba(248, 248, 255)");
	moji1.setAttribute("stroke", "rgba(0, 0, 0)");
	moji1.setAttribute("stroke-width", "0.5px");
	moji1.innerHTML = hiragana[hira46];
    textSVG1.appendChild(moji1);

	if(WorB == '1') {
		body.style.backgroundColor = 'rgba(248, 248, 255)';
		moji1.setAttribute("fill", "rgba(248, 248, 255)");
		moji1.setAttribute("stroke", "rgba(0, 0, 0)");
		text7_1.setAttribute("fill", "rgba(0, 0, 0)");
		text8_1.setAttribute("fill", "rgba(248, 248, 255)");
		text9_1.setAttribute("fill", "rgba(248, 248, 255)");
		text9_1.setAttribute("stroke", "rgba(0, 0, 0)");
        backGround.style.color = "rgb(0, 0, 0)";
	}else if(WorB == '2') {
		body.style.backgroundColor = 'rgba(0, 0, 0)';
		moji1.setAttribute("fill", "rgba(0, 0, 0)");
		moji1.setAttribute("stroke", "rgba(248, 248, 255)");
		text7_1.setAttribute("fill", "rgba(248, 248, 255)");
		text8_1.setAttribute("fill", "rgba(0, 0, 0)");
		text9_1.setAttribute("fill", "rgba(0, 0, 0)");
		text9_1.setAttribute("stroke", "rgba(248, 248, 255)");
        backGround.style.color = "rgb(248, 248, 255)";
	}
    
    // screen move//////////////////////////////////////////////////
	function isMobile() {
		let user = navigator.userAgent;
		let is_mobile = false;
		if( user.indexOf("iPhone") > -1 
		|| user.indexOf("Android") > -1 
		|| user.indexOf("iPad") > -1 
		|| user.indexOf("iPod") > -1 )
		{
			is_mobile = true; 
		}
		return is_mobile;
	}

	var is_mobile = isMobile();

    function moveObject() {
        mainShadow.style.transform = 'translate(' + -dragX * 50 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
        booklistShadow.style.transform = 'translate(' + -dragX * 100 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
        reviewShadow.style.transform = 'translate(' + -dragX * 100 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
    }

    function mouseControl1() {
        moveObject();
		moveText();
    }

    function mouseControl2() {
        moveObject();
		moveText();
    }

    let ugoku = 1;
    let tomaru = 0;
    let purupuru = ugoku;

    function shapeAndObject() {
        if(purupuru == ugoku) {
            mouseControl1();
        }else{
            mouseControl2();
        }
    }

	if( is_mobile ) {
        purchaseBox.style.transform = 'scale(0.7, 0.7)';
        complete.style.transform = 'scale(0.7, 0.7)';

        document.addEventListener("touchstart", (e) => {
			dragX = e.touches[0].clientX;
			dragY = e.touches[0].clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            shapeAndObject();
		});
		document.addEventListener("touchmove", (e) => {
			dragX = e.changedTouches[0].clientX;
			dragY = e.changedTouches[0].clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            shapeAndObject();
		});
		document.addEventListener("touchend", (e) => {
			dragX = e.changedTouches[0].clientX;
			dragY = e.changedTouches[0].clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            shapeAndObject();
		});
	} else {
		// tranlate images in pc
		document.addEventListener("mousemove", (e) => {
			mouseX = -e.clientX * 5 / window.innerWidth;
			mouseY = -e.clientY * 10 / window.innerHeight;
            dragX = e.clientX;
			dragY = e.clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            dragXm = dragX - (1.5 * window.innerWidth / 100);
            dragYm = dragY - (1.5 * window.innerWidth / 100);
            shapeAndObject();
		});
	}

    // browser check & event//////////////////////////////////////////////////
    var agent = window.navigator.userAgent.toLowerCase();
	var browserName;
	switch (true) {
		case agent.indexOf("edge") > -1: 
			browserName = "MS Edge"; // MS 엣지
			break;
		case agent.indexOf("edg/") > -1: 
			browserName = "Edge (chromium based)"; // 크롬 기반 엣지
			break;
		case agent.indexOf("opr") > -1 && !!window.opr: 
			browserName = "Opera"; // 오페라
			break;
		case agent.indexOf("chrome") > -1 && !!window.chrome: 
			browserName = "Chrome"; // 크롬
			break;
		case agent.indexOf("trident") > -1: 
			browserName = "MS IE"; // 익스플로러
			break;
		case agent.indexOf("firefox") > -1: 
			browserName = "Mozilla Firefox"; // 파이어 폭스
			break;
		case agent.indexOf("safari") > -1: 
			browserName = "Safari"; // 사파리
			break;
		default: 
			browserName = "other"; // 기타
	}

    if(browserName == "Safari") {
        // mixBlendMode1();
    }

   // DadA logo//////////////////////////////////////////////////
	let ract = document.querySelector(".ract");
    // let red = Math.floor(Math.random() * 256);
    // let green = Math.floor(Math.random() * 256);
    // let blue = Math.floor(Math.random() * 256);
    ract.style.width = Math.sqrt(2) * 100 + 'px';
    ract.style.height = 100 + 'px';
    ract.style.backgroundColor = 'rgba(' + red + ', ' + green + ', ' + blue + ')';

    let circle1 = document.querySelector(".circle1");
    let circle2 = document.querySelector(".circle2");
    let topRandom = Math.ceil(Math.random() * 85);
    let leftRandom = Math.ceil(Math.random() * Math.sqrt(2) * 65);
    circle1.style.top = topRandom + 'px';
    circle1.style.left = leftRandom + 'px';
    circle2.style.top = topRandom - 15 + 'px';
    circle2.style.left = leftRandom + 20 + 'px';

    let circle3 = document.querySelector(".circle3");
    let circle4 = document.querySelector(".circle4");
    circle3.style.backgroundColor = 'rgba(' + red + ', ' + green + ', ' + blue + ')';
    circle4.style.backgroundColor = 'rgba(' + red + ', ' + green + ', ' + blue + ')';

	let rotateEyes = function(mouseX, mouseY) {
		let eye1 = circle1.getBoundingClientRect();
		let eye2 = circle2.getBoundingClientRect();
		let bar1 = document.querySelector(".bar1");
		let bar2 = document.querySelector(".bar2");
		let eyeAngle1 = Math.atan2(mouseY - eye1.y + eye1.height * 0.5, mouseX - eye1.x + eye1.width * 0.5);
		let eyeAngle2 = Math.atan2(mouseY - eye2.y + eye2.height * 0.5, mouseX - eye2.x + eye2.width * 0.5);
		bar1.style.transform = 'rotate(' + 180 * eyeAngle1 / Math.PI + 'deg)';
		bar2.style.transform = 'rotate(' + 180 * eyeAngle2 / Math.PI + 'deg)';
	}
    document.addEventListener("mousemove", function (e) {
		rotateEyes(e.pageX, e.pageY)
    });

    $(".logo").hover(function() {
		$(".TEXT").css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(".TEXT").css("color", "black");
	});

    $(".ract").draggable();

    // button transition//////////////////////////////////////////////////

	nav.style.transform = 'translateX(-100%)';
	aside.style.transform = 'translateX(100%)';
	nav_ul.style.transform = 'translateX(-80px)';
    aside_ul.style.transform = 'translateX(80px)';
    mainbook.style.transform = 'translate(-50%, -50%)';
    bookCoverShadow.style.opacity = '0';
    bookScale.style.transform = 'scale(1, 1)';
    bookScale.style['-webkit-transform'] = 'scale(1, 1)';
    booksampleGroup.style.transform = 'translateX(0%)';
    bookreviewGroup.style.transform = 'translateX(0%)';

	category.onclick = categoryClick;
	category2.onclick = categoryClick2;
	mypage.onclick = mypageClick;
	mypage2.onclick = mypageClick2;

    buy.onclick = buyClick;
    // booklist.onclick = booklistClick;
    Fbooklist.onclick = FbooklistClick;
    // review.onclick = reviewClick;
    Freview.onclick = FreviewClick;

    cancelbutton[0].onclick = cancelClick;
    cancelbutton[1].onclick = cancelClick;

    nextbutton1.onclick = nextClick1;
    nextbutton2.onclick = nextClick2;
    previousbutton1.onclick = previousClick1;
    previousbutton2.onclick = previousClick2;

    now.onclick = nowClick;
    get.onclick = getClick;

    complete.onclick = completeClick;
	
	function categoryClick() {
		if (nav.style.transform == 'translateX(-100%)') {
			nav.style.transform = 'translateX(0)';
			nav_ul.style.transform = 'translateX(0)';
			nav_ul.style.opacity = '1';
			nav_ul.style.color = 'black';
			category.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}else{
			nav.style.transform = 'translateX(-100%)';
			nav_ul.style.transform = 'translateX(-80px)';
			nav_ul.style.opacity = '0';
			nav_ul.style.color = 'rgba(10, 10, 10)';
			category.style.backgroundColor = 'rgba(248, 248, 255, 0.5)';
		}
	}

	function categoryClick2() {
		if (nav.style.transform == 'translateX(-100%)') {
			nav.style.transform = 'translateX(0)';
			nav_ul.style.transform = 'translateX(0)';
			nav_ul.style.opacity = '1';
			nav_ul.style.color = 'black';
			category2.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}else{
			nav.style.transform = 'translateX(-100%)';
			nav_ul.style.transform = 'translateX(-80px)';
			nav_ul.style.opacity = '0';
			nav_ul.style.color = 'rgba(10, 10, 10)';
			category2.style.backgroundColor = 'rgba(248, 248, 255, 0.5)';
		}
	}

	function mypageClick() {
		if (aside.style.transform == 'translateX(100%)') {
			aside.style.transform = 'translateX(0)';
			aside_ul.style.transform = 'translateX(0)';
			aside_ul.style.opacity = '1';
			mypage.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}else{
			aside.style.transform = 'translateX(100%)';
			aside_ul.style.transform = 'translateX(80px)';
			aside_ul.style.opacity = '0';
			mypage.style.backgroundColor = 'rgba(248, 248, 255, 0.5)';
		}
	}

	function mypageClick2() {
		if (aside.style.transform == 'translateX(100%)') {
			aside.style.transform = 'translateX(0)';
			aside_ul.style.transform = 'translateX(0)';
			aside_ul.style.opacity = '1';
			mypage2.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}else{
			aside.style.transform = 'translateX(100%)';
			aside_ul.style.transform = 'translateX(80px)';
			aside_ul.style.opacity = '0';
			mypage2.style.backgroundColor = 'rgba(248, 248, 255, 0.5)';
		}
	}

    function bookanimation1(background) {
        purupuru = tomaru;
        buy.style.opacity = '0';
        buy.style.transition = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        buy.style['-webkit-transition'] = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        booklist.style.opacity = '0';
        booklist.style.transition = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        booklist.style['-webkit-transition'] = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        Fbooklist.style.zIndex = '0';
        review.style.opacity = '0';
        review.style.transition = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        review.style['-webkit-transition'] = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        Freview.style.zIndex = '0';
        booklistShadow.style.opacity = '0';
        booklistShadow.style.transitionDelay = '0s';
        booklistShadow.style['-webkit-transitionDelay'] = '0s';
        reviewShadow.style.opacity = '0';
        reviewShadow.style.transitionDelay = '0s';
        reviewShadow.style['-webkit-transitionDelay'] = '0s';
        bookScale.style.zIndex = '1';
        bookScale.style.transitionDelay = '0s';
        bookScale.style['-webkit-transitionDelay'] = '0s';
        mainbook.style.transform = 'translate(0, -50%)';
        mainbook.style.transitionDelay = '0s';
        mainbook.style['-webkit-transitionDelay'] = '0s';
        bookSample.style.visibility = 'visible';
        bookSample.style.transitionDelay = '1.8s';
        bookSample.style['-webkit-transitionDelay'] = '1.8s';
        bookReview.style.visibility = 'visible';
        bookReview.style.transitionDelay = '1.8s';
        bookReview.style['-webkit-transitionDelay'] = '1.8s';
        bookCoverShadow.style.transform = 'translateX(50%)';
        bookCoverShadow.style.transitionDelay = '0s';
        bookCoverShadow.style['-webkit-transitionDelay'] = '0s';
        bookCoverShadow.style.opacity = '1';
        bookGroup.style.transform = 'translateX(50%)';
        bookGroup.style.transitionDelay = '0s';
        bookGroup.style['-webkit-transitionDelay'] = '0s';
        bookMarkShadow.style.left = '30%';
        bookMarkShadow.style.transitionDelay = '0s';
        bookMarkShadow.style['-webkit-transitionDelay'] = '0s';
        bookRact1[0].style.transform = 'rotateY(-180deg)';
        bookRact2[0].style.transform = 'rotateY(-180deg)';
        bookRact3[0].style.transform = 'rotateY(-180deg)';
        bookRact4[0].style.transform = 'rotateY(-180deg)';
        bookRact5[0].style.transform = 'rotateY(-180deg)';
        bookRact6[0].style.transform = 'rotateY(-180deg)';
        bookRact7[0].style.transform = 'rotateY(-180deg)';
        bookRact8[0].style.transform = 'rotateY(-180deg)';
        bookRact9[0].style.transform = 'rotateY(-180deg)';
        bookRact10[0].style.transform = 'rotateY(-180deg)';
        bookRact1[1].style.transform = 'rotateY(-180deg)';
        bookRact2[1].style.transform = 'rotateY(-180deg)';
        bookRact3[1].style.transform = 'rotateY(-180deg)';
        bookRact4[1].style.transform = 'rotateY(-180deg)';
        bookRact5[1].style.transform = 'rotateY(-180deg)';
        bookRact6[1].style.transform = 'rotateY(-180deg)';
        bookRact7[1].style.transform = 'rotateY(-180deg)';
        bookRact8[1].style.transform = 'rotateY(-180deg)';
        bookRact9[1].style.transform = 'rotateY(-180deg)';
        bookRact10[1].style.transform = 'rotateY(-180deg)';
        booksampleGroup.style.transitionDelay = '0s';
        bookreviewGroup.style.transitionDelay = '0s';
        now.style.visibility = 'hidden';
        now.style.opacity = '0';
        get.style.visibility = 'hidden';
        get.style.opacity = '0';
        priceLabel.style.opacity = '0';
        priceLabelShadow.style.opacity = '0';
        purchase.style.opacity = '0';
        purchase.style.visibility = 'hidden';
    }

    function bookanimation2() {
        purupuru = ugoku;
        buy.style.opacity = '1';
        buy.style.transition = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        buy.style['-webkit-transition'] = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        booklist.style.opacity = '1';
        booklist.style.transition = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        booklist.style['-webkit-transition'] = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        Fbooklist.style.zIndex = '2';
        review.style.opacity = '1';
        review.style.transition = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        review.style['-webkit-transition'] = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        Freview.style.zIndex = '2';
        booklistShadow.style.opacity = '1';
        booklistShadow.style.transitionDelay = '2s';
        booklistShadow.style['-webkit-transitionDelay'] = '2s';
        reviewShadow.style.opacity = '1';
        reviewShadow.style.transitionDelay = '2s';
        reviewShadow.style['-webkit-transitionDelay'] = '2s';
        bookScale.style.top = '0';
        bookScale.style.zIndex = '0';
        bookScale.style.transform = 'scale(1, 1)';
        bookScale.style.transitionDelay = '1s';
        bookScale.style['-webkit-transitionDelay'] = '1s';
        mainbook.style.transform = 'translate(-50%, -50%)';
        mainbook.style.transitionDelay = '1s';
        mainbook.style['-webkit-transitionDelay'] = '1s';
        bookSample.style.visibility = 'hidden';
        bookSample.style.opacity = '0';
        bookSample.style.transitionDelay = '0s';
        bookSample.style['-webkit-transitionDelay'] = '0s';
        bookReview.style.visibility = 'hidden';
        bookReview.style.opacity = '0';
        bookReview.style.transitionDelay = '0s';
        bookReview.style['-webkit-transitionDelay'] = '0s';
        bookCoverShadow.style.transform = 'translateX(0)';
        bookCoverShadow.style.transitionDelay = '1s';
        bookCoverShadow.style['-webkit-transitionDelay'] = '1s';
        bookCoverShadow.style.opacity = '0';
        bookGroup.style.transform = 'translateX(0)';
        bookGroup.style.transitionDelay = '1s';
        bookGroup.style['-webkit-transitionDelay'] = '1s';
        bookMarkShadow.style.left = '5%';
        bookMarkShadow.style.transitionDelay = '1s';
        bookMarkShadow.style['-webkit-transitionDelay'] = '1s';
		bookRact1[0].style.transform = 'rotateY(0)';
        bookRact2[0].style.transform = 'rotateY(0)';
        bookRact3[0].style.transform = 'rotateY(0)';
        bookRact4[0].style.transform = 'rotateY(0)';
        bookRact5[0].style.transform = 'rotateY(0)';
        bookRact6[0].style.transform = 'rotateY(0)';
        bookRact7[0].style.transform = 'rotateY(0)';
        bookRact8[0].style.transform = 'rotateY(0)';
        bookRact9[0].style.transform = 'rotateY(0)';
        bookRact10[0].style.transform = 'rotateY(0)';
        bookRact1[1].style.transform = 'rotateY(0)';
        bookRact2[1].style.transform = 'rotateY(0)';
        bookRact3[1].style.transform = 'rotateY(0)';
        bookRact4[1].style.transform = 'rotateY(0)';
        bookRact5[1].style.transform = 'rotateY(0)';
        bookRact6[1].style.transform = 'rotateY(0)';
        bookRact7[1].style.transform = 'rotateY(0)';
        bookRact8[1].style.transform = 'rotateY(0)';
        bookRact9[1].style.transform = 'rotateY(0)';
        bookRact10[1].style.transform = 'rotateY(0)';
        booksampleGroup.style.transform = 'translateX(0%)';
        booksampleGroup.style.transitionDelay = '1.5s';
        bookreviewGroup.style.transform = 'translateX(0%)';
        bookreviewGroup.style.transitionDelay = '1.5s';
        bookRact11.style.transform = 'rotateY(0)';
        bookRact12.style.transform = 'rotateY(0)';
        bookRact13.style.transform = 'rotateY(0)';
        bookRact14.style.transform = 'rotateY(0)';
        bookRact15.style.transform = 'rotateY(0)';
        buy.style.visibility = 'visible';
    }

    function booklistAnimaition(number) {
        bookanimation1(booklistBackground);
        bookScale.style.transform = 'scale(' + window.innerWidth / number / 100 + ', ' + window.innerWidth / number / 100 + ')';
        bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / number / 100 + ', ' + window.innerWidth / number / 100 + ')';
        bookSample.style.opacity = '1';
        bookReview.style.visibility = 'hidden';
    }

    function reviewAnimaition(number) {
        bookanimation1(reviewBackground);
        bookScale.style.transform = 'scale(' + window.innerWidth / number / 100 + ', ' + window.innerWidth / number / 100 + ')';
        bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / number / 100 + ', ' + window.innerWidth / number / 100 + ')';
        bookReview.style.opacity = '1';
        bookReview.style.visibility = 'visible';
    }

    function booklistAnimaition2() {
        mainbook.style.transform = 'translate(50%, -50%)';
        bookScale.style.top = '8.5%';
        bookCoverShadow.style.transform = 'translateX(100%)';
        bookGroup.style.transform = 'translateX(100%)';
        bookMarkShadow.style.left = '55%';
    }

    function reviewAnimaition2() {
        mainbook.style.transform = 'translate(-50%, -50%)';
        bookReview.style.left = '0';
        bookScale.style.top = '8.5%';
        bookCoverShadow.style.transform = 'translateX(0)';
        bookGroup.style.transform = 'translateX(0)';
        bookMarkShadow.style.left = '5%';
    }

    function buyClick() {
        buy.style.transition = 'all 0.5s ease';
        buy.style.visibility = 'hidden';
        buy.style.opacity = '0';
        now.style.visibility = 'visible';
        now.style.opacity = '1';
        get.style.visibility = 'visible';
        get.style.opacity = '1';
        priceLabel.style.opacity = '1';
        priceLabelShadow.style.opacity = '1';
	}

    function nowClick() {
        purchase.style.zIndex = '2';
        purchase.style.opacity = '1';
        purchase.style.visibility = 'visible';
        now.style.visibility = 'hidden';
        now.style.opacity = '0';
        get.style.visibility = 'hidden';
        get.style.opacity = '0';
	}

    function completeClick() {
        $(thank).animate({opacity: '1'}, 500).animate({opacity: '1'}, 1000).animate({opacity: '0'}, 500);
        thank.style.visibility = 'visible';
        purchase.style.zIndex = '0';
        purchase.style.opacity = '0';
        purchase.style.visibility = 'hidden';
        buy.style.visibility = 'visible';
        $(buy).animate({opacity: '0'}, 2000).animate({opacity: '1'}, 500);
        priceLabel.style.opacity = '0';
        priceLabelShadow.style.opacity = '0';
    }

    function getClick() {
        $(thank).animate({opacity: '1'}, 500).animate({opacity: '1'}, 1000).animate({opacity: '0'}, 500);
        thank.style.visibility = 'visible';
        purchase.style.opacity = '0';
        purchase.style.visibility = 'hidden';
        buy.style.visibility = 'visible';
        $(buy).animate({opacity: '0'}, 2000).animate({opacity: '1'}, 500);
        now.style.visibility = 'hidden';
        now.style.opacity = '0';
        get.style.visibility = 'hidden';
        get.style.opacity = '0';
        priceLabel.style.opacity = '0';
        priceLabelShadow.style.opacity = '0';
	}

    function FbooklistClick() {
		if (window.innerWidth > 1200) {
            booklistAnimaition(8);
		}else if(window.innerWidth > 1000) {
            booklistAnimaition(7);
		}else if(window.innerWidth > 800) {
            booklistAnimaition(6);
        }else if(window.innerWidth > 700) {
            booklistAnimaition(5.5);
        }else if(window.innerWidth > 650) {
            booklistAnimaition(3.5);
            booklistAnimaition2();
        }else if(window.innerWidth > 600) {
            booklistAnimaition(3);
            booklistAnimaition2();
        }else if(window.innerWidth > 520) {
            booklistAnimaition(2.8);
            booklistAnimaition2();
        }else if(window.innerWidth > 480) {
            booklistAnimaition(2.6);
            booklistAnimaition2();
        }else if(window.innerWidth > 410) {
            booklistAnimaition(2.2);
            booklistAnimaition2();
        }else if(window.innerWidth > 370) {
            booklistAnimaition(2);
            booklistAnimaition2();
        }else if(window.innerWidth > 340) {
            booklistAnimaition(1.8);
            booklistAnimaition2();
        }else if(window.innerWidth > 300) {
            booklistAnimaition(1.6);
            booklistAnimaition2();
        }else if(window.innerWidth > 260) {
            booklistAnimaition(1.4);
            booklistAnimaition2();
        }else{
            booklistAnimaition(1.2);
            booklistAnimaition2();
        }
	}

    function FreviewClick() {
		if (window.innerWidth > 1200) {
            reviewAnimaition(8);
		}else if(window.innerWidth > 1000) {
            reviewAnimaition(7);
		}else if(window.innerWidth > 800) {
            reviewAnimaition(6);
        }else if(window.innerWidth > 700) {
            reviewAnimaition(5.5);
        }else if(window.innerWidth > 650) {
            reviewAnimaition(3.5);
            reviewAnimaition2();
        }else if(window.innerWidth > 600) {
            reviewAnimaition(3);
            reviewAnimaition2();
        }else if(window.innerWidth > 520) {
            reviewAnimaition(2.8);
            reviewAnimaition2();
        }else if(window.innerWidth > 480) {
            reviewAnimaition(2.6);
            reviewAnimaition2();
        }else if(window.innerWidth > 410) {
            reviewAnimaition(2.2);
            reviewAnimaition2();
        }else if(window.innerWidth > 370) {
            reviewAnimaition(2);
            reviewAnimaition2();
        }else if(window.innerWidth > 340) {
            reviewAnimaition(1.8);
            reviewAnimaition2();
        }else if(window.innerWidth > 300) {
            reviewAnimaition(1.6);
            reviewAnimaition2();
        }else if(window.innerWidth > 260) {
            reviewAnimaition(1.4);
            reviewAnimaition2();
        }else{
            reviewAnimaition(1.2);
            reviewAnimaition2();
        }
	}

    $(Fbooklist).hover(
        function() {
            $(Bbooklist).css("color", "rgba(0, 0, 0)");
        },
        function() {
            $(Bbooklist).css("color", "rgba(248, 248, 255)");
        }
    );

    $(Freview).hover(
        function() {
            $(Breview).css("color", "rgba(0, 0, 0)");
        },
        function() {
            $(Breview).css("color", "rgba(248, 248, 255)");
        }
    );

    function cancelClick() {
        bookanimation2();
    }

    function nextClick1() {
        if(window.innerWidth > 700) {
            booksampleGroup.style.transform == 'translateX(0%)' ? booksampleGroup.style.transform = 'translateX(-100%)':
            booksampleGroup.style.transform = 'translateX(-200%)';
            booksampleGroup.style.transform == 'translateX(-100%)' ? bookRact11.style.transform = 'rotateY(-180deg)':
            booksampleGroup.style.transform == 'translateX(-200%)' ? bookRact12.style.transform = 'rotateY(-180deg)':
            bookRact13.style.transform = 'rotateY(-180deg)';
        }else{
            booksampleGroup.style.transform == 'translateX(0%)' ? booksampleGroup.style.transform = 'translateX(-50%)':
            booksampleGroup.style.transform == 'translateX(-50%)' ? booksampleGroup.style.transform = 'translateX(-100%)':
            booksampleGroup.style.transform == 'translateX(-100%)' ? booksampleGroup.style.transform = 'translateX(-150%)':
            booksampleGroup.style.transform == 'translateX(-150%)' ? booksampleGroup.style.transform = 'translateX(-200%)':
            booksampleGroup.style.transform = 'translateX(-250%)';
            booksampleGroup.style.transform == 'translateX(-50%)' ? bookRact11.style.transform = 'rotateY(-180deg)':
            booksampleGroup.style.transform == 'translateX(-100%)' ? bookRact12.style.transform = 'rotateY(-180deg)':
            booksampleGroup.style.transform == 'translateX(-150%)' ? bookRact13.style.transform = 'rotateY(-180deg)':
            booksampleGroup.style.transform == 'translateX(-200%)' ? bookRact14.style.transform = 'rotateY(-180deg)':
            booksampleGroup.style.transform == 'translateX(-250%)' ? bookRact15.style.transform = 'rotateY(-180deg)':
            bookRact15.style.transform = 'rotateY(-180deg)';
        }

        booksampleGroup.style.transition = 'transform 0s ease 0.5s';
        $(booksampleGroup).animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
        $(".buttonCancel1").animate({height: '30px'}, 0).animate({height: '30px'}, 1000).animate({height: '0'}, 0);
        $(".buttonbar").animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
    }

    function nextClick2() {
        if(window.innerWidth > 700) {
            bookreviewGroup.style.transform == 'translateX(0%)' ? bookreviewGroup.style.transform = 'translateX(-100%)':
            bookreviewGroup.style.transform = 'translateX(-200%)';
            bookreviewGroup.style.transform == 'translateX(-100%)' ? bookRact11.style.transform = 'rotateY(-180deg)':
            bookreviewGroup.style.transform == 'translateX(-200%)' ? bookRact12.style.transform = 'rotateY(-180deg)':
            bookRact13.style.transform = 'rotateY(-180deg)';
        }else{
            bookreviewGroup.style.transform == 'translateX(0%)' ? bookreviewGroup.style.transform = 'translateX(-50%)':
            bookreviewGroup.style.transform == 'translateX(-50%)' ? bookreviewGroup.style.transform = 'translateX(-100%)':
            bookreviewGroup.style.transform == 'translateX(-100%)' ? bookreviewGroup.style.transform = 'translateX(-150%)':
            bookreviewGroup.style.transform == 'translateX(-150%)' ? bookreviewGroup.style.transform = 'translateX(-200%)':
            bookreviewGroup.style.transform = 'translateX(-250%)';
            bookreviewGroup.style.transform == 'translateX(-50%)' ? bookRact11.style.transform = 'rotateY(-180deg)':
            bookreviewGroup.style.transform == 'translateX(-100%)' ? bookRact12.style.transform = 'rotateY(-180deg)':
            bookreviewGroup.style.transform == 'translateX(-150%)' ? bookRact13.style.transform = 'rotateY(-180deg)':
            bookreviewGroup.style.transform == 'translateX(-200%)' ? bookRact14.style.transform = 'rotateY(-180deg)':
            bookreviewGroup.style.transform == 'translateX(-250%)' ? bookRact15.style.transform = 'rotateY(-180deg)':
            bookRact15.style.transform = 'rotateY(-180deg)';
        }

        bookreviewGroup.style.transition = 'transform 0s ease 0.5s';
        $(bookreviewGroup).animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
        $(".buttonCancel2").animate({height: '30px'}, 0).animate({height: '30px'}, 1000).animate({height: '0'}, 0);
        $(".buttonbar").animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
    }

    function previousClick1() {
        if(window.innerWidth > 700) {
            booksampleGroup.style.transform == 'translateX(-200%)' ? booksampleGroup.style.transform = 'translateX(-100%)':
            booksampleGroup.style.transform = 'translateX(0%)';
            booksampleGroup.style.transform == 'translateX(-100%)' ? bookRact12.style.transform = 'rotateY(0deg)':
            booksampleGroup.style.transform == 'translateX(0%)' ? bookRact11.style.transform = 'rotateY(0deg)':
            bookRact13.style.transform = 'rotateY(0deg)';
        }else{
            booksampleGroup.style.transform == 'translateX(-250%)' ? booksampleGroup.style.transform = 'translateX(-200%)':
            booksampleGroup.style.transform == 'translateX(-200%)' ? booksampleGroup.style.transform = 'translateX(-150%)':
            booksampleGroup.style.transform == 'translateX(-150%)' ? booksampleGroup.style.transform = 'translateX(-100%)':
            booksampleGroup.style.transform == 'translateX(-100%)' ? booksampleGroup.style.transform = 'translateX(-50%)':
            booksampleGroup.style.transform = 'translateX(0%)';
            booksampleGroup.style.transform == 'translateX(-200%)' ? bookRact15.style.transform = 'rotateY(0deg)':
            booksampleGroup.style.transform == 'translateX(-150%)' ? bookRact14.style.transform = 'rotateY(0deg)':
            booksampleGroup.style.transform == 'translateX(-100%)' ? bookRact13.style.transform = 'rotateY(0deg)':
            booksampleGroup.style.transform == 'translateX(-50%)' ? bookRact12.style.transform = 'rotateY(0deg)':
            booksampleGroup.style.transform == 'translateX(0%)' ? bookRact11.style.transform = 'rotateY(0deg)':
            bookRact11.style.transform = 'rotateY(0deg)';
        }

        booksampleGroup.style.transition = 'transform 0s ease 0.5s';
        $(booksampleGroup).animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
        $(".buttonCancel1").animate({height: '30px'}, 0).animate({height: '30px'}, 1000).animate({height: '0'}, 0);
        $(".buttonbar").animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
    }

    function previousClick2() {
        if(window.innerWidth > 700) {
            bookreviewGroup.style.transform == 'translateX(-200%)' ? bookreviewGroup.style.transform = 'translateX(-100%)':
            bookreviewGroup.style.transform = 'translateX(0%)';
            bookreviewGroup.style.transform == 'translateX(-100%)' ? bookRact12.style.transform = 'rotateY(0deg)':
            bookreviewGroup.style.transform == 'translateX(0%)' ? bookRact11.style.transform = 'rotateY(0deg)':
            bookRact13.style.transform = 'rotateY(0deg)';
        }else{
            bookreviewGroup.style.transform == 'translateX(-250%)' ? bookreviewGroup.style.transform = 'translateX(-200%)':
            bookreviewGroup.style.transform == 'translateX(-200%)' ? bookreviewGroup.style.transform = 'translateX(-150%)':
            bookreviewGroup.style.transform == 'translateX(-150%)' ? bookreviewGroup.style.transform = 'translateX(-100%)':
            bookreviewGroup.style.transform == 'translateX(-100%)' ? bookreviewGroup.style.transform = 'translateX(-50%)':
            bookreviewGroup.style.transform = 'translateX(0%)';
            bookreviewGroup.style.transform == 'translateX(-200%)' ? bookRact15.style.transform = 'rotateY(0deg)':
            bookreviewGroup.style.transform == 'translateX(-150%)' ? bookRact14.style.transform = 'rotateY(0deg)':
            bookreviewGroup.style.transform == 'translateX(-100%)' ? bookRact13.style.transform = 'rotateY(0deg)':
            bookreviewGroup.style.transform == 'translateX(-50%)' ? bookRact12.style.transform = 'rotateY(0deg)':
            bookreviewGroup.style.transform == 'translateX(0%)' ? bookRact11.style.transform = 'rotateY(0deg)':
            bookRact11.style.transform = 'rotateY(0deg)';
        }

        bookreviewGroup.style.transition = 'transform 0s ease 0.5s';
        $(bookreviewGroup).animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
        $(".buttonCancel2").animate({height: '30px'}, 0).animate({height: '30px'}, 1000).animate({height: '0'}, 0);
        $(".buttonbar").animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
    }

    //viewport transition//////////////////////////////////////////////////
    window.onresize = function(event){
        if(bookScale.style.transform != 'scale(1, 1)') {
            var innerWidth = window.innerWidth;
            innerWidth > "1200" ? bookScale.style.transform = 'scale(' + window.innerWidth / 8 / 100 + ', ' + window.innerWidth / 8 / 100 + ')':
            innerWidth > "1000" ? bookScale.style.transform = 'scale(' + window.innerWidth / 7 / 100 + ', ' + window.innerWidth / 7 / 100 + ')':
            innerWidth > "800" ? bookScale.style.transform = 'scale(' + window.innerWidth / 6 / 100 + ', ' + window.innerWidth / 6 / 100 + ')':
            innerWidth > "700" ? bookScale.style.transform = 'scale(' + window.innerWidth / 5.5 / 100 + ', ' + window.innerWidth / 5.5 / 100 + ')':
            innerWidth > "650" ? bookScale.style.transform = 'scale(' + window.innerWidth / 3.5 / 100 + ', ' + window.innerWidth / 3.5 / 100 + ')':
            innerWidth > "600" ? bookScale.style.transform = 'scale(' + window.innerWidth / 3 / 100 + ', ' + window.innerWidth / 3 / 100 + ')':
            innerWidth > "520" ? bookScale.style.transform = 'scale(' + window.innerWidth / 2.8 / 100 + ', ' + window.innerWidth / 2.8 / 100 + ')':
            innerWidth > "480" ? bookScale.style.transform = 'scale(' + window.innerWidth / 2.6 / 100 + ', ' + window.innerWidth / 2.6 / 100 + ')':
            innerWidth > "410" ? bookScale.style.transform = 'scale(' + window.innerWidth / 2.2 / 100 + ', ' + window.innerWidth / 2.2 / 100 + ')':
            innerWidth > "370" ? bookScale.style.transform = 'scale(' + window.innerWidth / 2 / 100 + ', ' + window.innerWidth / 2 / 100 + ')':
            innerWidth > "340" ? bookScale.style.transform = 'scale(' + window.innerWidth / 1.8 / 100 + ', ' + window.innerWidth / 1.8 / 100 + ')':
            innerWidth > "300" ? bookScale.style.transform = 'scale(' + window.innerWidth / 1.6 / 100 + ', ' + window.innerWidth / 1.6 / 100 + ')':
            innerWidth > "260" ? bookScale.style.transform = 'scale(' + window.innerWidth / 1.4 / 100 + ', ' + window.innerWidth / 1.4 / 100 + ')':
            bookScale.style.transform = 'scale(' + window.innerWidth / 1.2 / 100 + ', ' + window.innerWidth / 1.2 / 100 + ')';
            innerWidth > "1200" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 8 / 100 + ', ' + window.innerWidth / 8 / 100 + ')':
            innerWidth > "1000" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 7 / 100 + ', ' + window.innerWidth / 7 / 100 + ')':
            innerWidth > "800" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 6 / 100 + ', ' + window.innerWidth / 6 / 100 + ')':
            innerWidth > "700" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 5.5 / 100 + ', ' + window.innerWidth / 5.5 / 100 + ')':
            innerWidth > "650" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 3.5 / 100 + ', ' + window.innerWidth / 3.5 / 100 + ')':
            innerWidth > "600" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 3 / 100 + ', ' + window.innerWidth / 3 / 100 + ')':
            innerWidth > "520" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 2.8 / 100 + ', ' + window.innerWidth / 2.8 / 100 + ')':
            innerWidth > "480" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 2.6 / 100 + ', ' + window.innerWidth / 2.6 / 100 + ')':
            innerWidth > "410" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 2.2 / 100 + ', ' + window.innerWidth / 2.2 / 100 + ')':
            innerWidth > "370" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 2 / 100 + ', ' + window.innerWidth / 2 / 100 + ')':
            innerWidth > "340" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 1.8 / 100 + ', ' + window.innerWidth / 1.8 / 100 + ')':
            innerWidth > "300" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 1.6 / 100 + ', ' + window.innerWidth / 1.6 / 100 + ')':
            innerWidth > "260" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 1.4 / 100 + ', ' + window.innerWidth / 1.4 / 100 + ')':
            bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 1.2 / 100 + ', ' + window.innerWidth / 1.2 / 100 + ')';
        }
        if(bookSample.style.opacity == '1') {
            innerWidth <= "700" ? mainbook.style.transform = 'translate(50%, -50%)':
            mainbook.style.transform = 'translate(0, -50%)';
            innerWidth <= "700" ? bookScale.style.top = '8.5%':
            bookScale.style.top = '0';
            innerWidth <= "700" ? bookCoverShadow.style.transform = 'translateX(100%)':
            bookCoverShadow.style.transform = 'translateX(50%)';
            innerWidth <= "700" ? bookGroup.style.transform = 'translateX(100%)':
            bookGroup.style.transform = 'translateX(50%)';
            innerWidth <= "700" ? bookMarkShadow.style.left = '55%':
            bookMarkShadow.style.left = '30%';
        }else if(bookReview.style.opacity == '1'){
            innerWidth <= "700" ? mainbook.style.transform = 'translate(-50%, -50%)':
            mainbook.style.transform = 'translate(0, -50%)';
            innerWidth <= "700" ? bookReview.style.left = '0':
            bookReview.style.left = '-100%';
            innerWidth <= "700" ? bookScale.style.top = '8.5%':
            bookScale.style.top = '0';
            innerWidth <= "700" ? bookCoverShadow.style.transform = 'translateX(0)':
            bookCoverShadow.style.transform = 'translateX(50%)';
            innerWidth <= "700" ? bookGroup.style.transform = 'translateX(0)':
            bookGroup.style.transform = 'translateX(50%)';
            innerWidth <= "700" ? bookMarkShadow.style.left = '5%':
            bookMarkShadow.style.left = '30%';
        }
    }

    // button color change: hover//////////////////////////////////////////////////
	onmousemove = buttonColor;

	function buttonColor() {
		categoryHover();
		categoryHover2();
		mypageHover();
		mypageHover2();
	}

	function categoryHover() {
		if(nav.style.transform == 'translateX(-100%)') {
			$(".category").hover(function() {
				$(this).css("background-color", "rgba(" + red + ", " + green + ", " + blue + ", 0.5)");
			}, function() {
				$(this).css("background-color", "rgba(248, 248, 255, 0.5)");
			});
		}else{
			category.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}
	}

	function categoryHover2() {
		if(nav.style.transform == 'translateX(-100%)') {
			$(".category2").hover(function() {
				$(this).css("background-color", "rgba(" + red + ", " + green + ", " + blue + ", 0.5)");
			}, function() {
				$(this).css("background-color", "rgba(248, 248, 255, 0.5)");
			});
		}else{
			category2.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}
	}

	function mypageHover() {
		if(aside.style.transform == 'translateX(100%)') {
			$(".mypage").hover(function() {
				$(this).css("background-color", "rgba(" + red + ", " + green + ", " + blue + ", 0.5)");
			}, function() {
				$(this).css("background-color", "rgba(248, 248, 255, 0.5)");
			});
		}else{
			mypage.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}
	}

	function mypageHover2() {
		if(aside.style.transform == 'translateX(100%)') {
			$(".mypage2").hover(function() {
				$(this).css("background-color", "rgba(" + red + ", " + green + ", " + blue + ", 0.5)");
			}, function() {
				$(this).css("background-color", "rgba(248, 248, 255, 0.5)");
			});
		}else{
			mypage2.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}
	}
	
	$(".basket").hover(function() {
		$(this).css("background-color", "rgba(" + red + ", " + green + ", " + blue + ", 0.5)");
	}, function() {
		$(this).css("background-color", "rgba(248, 248, 255, 0.5)");
	});

	$(".basket2").hover(function() {
		$(this).css("background-color", "rgba(" + red + ", " + green + ", " + blue + ", 0.5)");
	}, function() {
		$(this).css("background-color", "rgba(248, 248, 255, 0.5)");
	});

    $(".cancelbutton").hover(function() {
		$(this).css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(this).css("color", "slategrey");
	});

    $(".nextbutton1").hover(function() {
		$(this).css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(this).css("color", "slategrey");
	});

    $(".nextbutton2").hover(function() {
		$(this).css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(this).css("color", "slategrey");
	});

    $(".previousbutton1").hover(function() {
		$(this).css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(this).css("color", "slategrey");
	});

    $(".previousbutton2").hover(function() {
		$(this).css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(this).css("color", "slategrey");
	});

    let startScreen = document.querySelector(".startScreen");
    startScreen.style.backgroundColor = 'rgba(' + red1 + ', ' + green2 + ', ' + blue3 + ')';
});

// loading//////////////////////////////////////////////////
window.onload = function() {
	$(".START").delay(2000).fadeOut(1000);
}