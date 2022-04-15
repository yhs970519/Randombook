// JavaScript Document

window.addEventListener('DOMContentLoaded', function(){

    // new div tags//////////////////////////////////////////////////
    // function divTag(imgTagGroup) {

	// 	let imgN = 27; //+1

    //     for (let i = 1; i < imgN; i++) {
	// 		let bookFrame = document.createElement("div");
	// 		let classNode = document.createAttribute("class");
	// 		eval("classNode.value = 'bookFrame" + i + "_" + imgTagGroup + "';");
	// 		bookFrame.setAttributeNode(classNode);
	// 		document.querySelector(".main_img" + imgTagGroup + "").appendChild(bookFrame);
    //     }
    // }

    // divTag(1);
	// divTag(2);
	// divTag(3);
	// divTag(4);
	// divTag(5);
	// divTag(6);
	// divTag(7);
	// divTag(8);
    
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

	// let main_img = document.querySelector(".mainImg");
    let canvasGroup = document.querySelector(".canvasGroup");
    let canvas = document.querySelector(".canvas");
    let canvas1 = document.querySelector("#canvas1");
    let ctx1 = canvas1.getContext("2d");
    let canvas2 = document.querySelector("#canvas2");
    let ctx2 = canvas2.getContext("2d");
    let canvas3 = document.querySelector("#canvas3");
    let ctx3 = canvas3.getContext("2d");
    let canvas4 = document.querySelector("#canvas4");
    let ctx4 = canvas4.getContext("2d");
    let canvas5 = document.querySelector("#canvas5");
    let ctx5 = canvas5.getContext("2d");

    let gradient1 = document.querySelector(".gradient1");
    let gradient2 = document.querySelector(".gradient2");
    let gradient3 = document.querySelector(".gradient3");
    let gradient4 = document.querySelector(".gradient4");

    let package1 = document.querySelector(".package1");
    let package2 = document.querySelector(".package2");
    let package3 = document.querySelector(".package3");
    let package4 = document.querySelector(".package4");

    let mainShadow  = document.querySelector(".mainShadow");
    let booklistShadow  = document.querySelector(".booklistShadow");
    let reviewShadow  = document.querySelector(".reviewShadow");
    let purchaseBox = document.querySelector(".purchaseBox");
    let complete = document.querySelector(".complete");

	let mouseX;
	let mouseY;
    let dragX;
    let dragY;
    let positionX;
    let positionY;

    let red1 = Math.floor(Math.random() * 256);
    let green1 = Math.floor(Math.random() * 256);
    let blue1 = Math.floor(Math.random() * 256);

    let red2 = Math.floor(Math.random() * 256);
    let green2 = Math.floor(Math.random() * 256);
    let blue2 = Math.floor(Math.random() * 256);

    let red3 = Math.floor(Math.random() * 256);
    let green3 = Math.floor(Math.random() * 256);
    let blue3 = Math.floor(Math.random() * 256);

    let red4 = Math.floor(Math.random() * 256);
    let green4 = Math.floor(Math.random() * 256);
    let blue4 = Math.floor(Math.random() * 256);

    let bN1 = 2.2;
    let bN2 = 4;
    let bN3 = 2.75;
    let bN4 = 2;
    let bN5 = 1.5;

    function drawShape1(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, x7_2, y7_1, y7_2,
        x8, y8, x8_1, y8_1) {
        canvas1 = document.querySelector("#canvas1");
        ctx1 = canvas1.getContext("2d");
        canvas1.width = window.innerWidth * 4;
        canvas1.height = window.innerHeight * 4;
        ctx1.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx1.fillStyle = 'rgba(' + red1 + ', ' + green1 + ', ' + blue1 + ')';
        ctx1.beginPath();
        ctx1.moveTo(530 * x1, 398 * y1);
        ctx1.bezierCurveTo(605 * x1_1, 388 * y1_1, 591 * x2_1, 281 * y2_1, 699 * x2, 274 * y2);
        ctx1.bezierCurveTo(778 * x2_2, 269 * y2_2, 803 * x3_1, 310 * y3_1, 908 * x3, 374 * y3);
        ctx1.bezierCurveTo(969 * x3_2, 411 * y3_2, 1042 * x4_1, 455 * y4_1, 1021 * x4, 541 * y4);
        ctx1.bezierCurveTo(1001 * x4_2, 621 * y4_2, 934 * x5_1, 587 * y5_1, 869 * x5, 625 * y5);
        ctx1.bezierCurveTo(816 * x5_2, 656 * y5_2, 693 * x6_1, 742 * y6_1, 600 * x6, 720 * y6);
        ctx1.bezierCurveTo(445 * x6_2, 684 * y6_2, 349 * x7_1, 616 * y7_1, 353 * x7, 528 * y7);
        ctx1.bezierCurveTo(359 * x7_2, 409 * y7_2, 460 * x8_1, 408 * y8_1, 530 * x8, 398 * y8);
        ctx1.closePath();
        ctx1.fill();
    }

    function drawShape2(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, x7_2, y7_1, y7_2,
        x8, y8, x8_1, y8_1) {
        canvas2 = document.querySelector("#canvas2");
        ctx2 = canvas2.getContext("2d");
        canvas2.width = window.innerWidth * 4;
        canvas2.height = window.innerHeight * 4;
        ctx2.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx2.fillStyle = 'rgba(' + red2 + ', ' + green2 + ', ' + blue2 + ')';
        ctx2.beginPath();
        ctx2.moveTo(273 * x1, 599 * y1);
        ctx2.bezierCurveTo(250 * x1_1, 490 * y1_1, 333 * x2_1, 445 * y2_1, 358 * x2, 363 * y2);
        ctx2.bezierCurveTo(388 * x2_2, 263 * y2_2, 423 * x3_1, 208 * y3_1, 497 * x3, 192 * y3);
        ctx2.bezierCurveTo(649 * x3_2, 160 * y3_2, 713 * x4_1, 285 * y4_1, 785 * x4, 322 * y4);
        ctx2.bezierCurveTo(855 * x4_2, 358 * y4_2, 989 * x5_1, 388 * y5_1, 967 * x5, 490 * y5);
        ctx2.bezierCurveTo(943 * x5_2, 601 * y5_2, 856 * x6_1, 612 * y6_1, 797 * x6, 645 * y6);
        ctx2.bezierCurveTo(695 * x6_2, 702 * y6_2, 666 * x7_1, 746 * y7_1, 542 * x7, 748 * y7);
        ctx2.bezierCurveTo(435 * x7_2, 750 * y7_2, 297 * x8_1, 693 * y8_1, 273 * x8, 599 * y8);
        ctx2.closePath();
        ctx2.fill();
    }

    function drawShape3(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, y7_1) {
        canvas3 = document.querySelector("#canvas3");
        ctx3 = canvas3.getContext("2d");
        canvas3.width = window.innerWidth * 4;
        canvas3.height = window.innerHeight * 4;
        ctx3.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx3.fillStyle = 'rgba(' + red3 + ', ' + green3 + ', ' + blue3 + ')';
        ctx3.beginPath();
        ctx3.moveTo(885 * x1, 302 * y1);
        ctx3.bezierCurveTo(826 * x1_1, 243 * y1_1, 693 * x2_1, 230 * y2_1, 598 * x2, 250 * y2);
        ctx3.bezierCurveTo(425 * x2_2, 286 * y2_2, 346 * x3_1, 343 * y3_1, 331 * x3, 425 * y3);
        ctx3.bezierCurveTo(308 * x3_2, 551 * y3_2, 389 * x4_1, 566 * y4_1, 450 * x4, 631 * y4);
        ctx3.bezierCurveTo(516 * x4_2, 702 * y4_2, 488 * x5_1, 765 * y5_1, 597 * x5, 803 * y5);
        ctx3.bezierCurveTo(732 * x5_2, 850 * y5_2, 862 * x6_1, 612 * y6_1, 905 * x6, 517 * y6);
        ctx3.bezierCurveTo(937 * x6_2, 446 * y6_2, 928 * x7_1, 350 * y7_1, 884 * x7, 303 * y7);
        ctx3.closePath();
        ctx3.fill();
    }

    function drawShape4(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, y7_1) {
        canvas4 = document.querySelector("#canvas4");
        ctx4 = canvas4.getContext("2d");
        canvas4.width = window.innerWidth * 4;
        canvas4.height = window.innerHeight * 4;
        ctx4.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx4.fillStyle = 'rgba(' + red4 + ', ' + green4 + ', ' + blue4 + ')';
        ctx4.beginPath();
        ctx4.moveTo(510 * x1, 308 * y1);
        ctx4.bezierCurveTo(434 * x1_1, 354 * y1_1, 348 * x2_1, 366 * y2_1, 329 * x2, 458 * y2);
        ctx4.bezierCurveTo(316 * x2_2, 521 * y2_2, 378 * x3_1, 575 * y3_1, 440 * x3, 591 * y3);
        ctx4.bezierCurveTo(571 * x3_2, 625 * y3_2, 549 * x4_1, 728 * y4_1, 667 * x4, 723 * y4);
        ctx4.bezierCurveTo(763 * x4_2, 719 * y4_2, 830 * x5_1, 603 * y5_1, 813 * x5, 508 * y5);
        ctx4.bezierCurveTo(799 * x5_2, 430 * y5_2, 745 * x6_1, 371 * y6_1, 704 * x6, 331 * y6);
        ctx4.bezierCurveTo(658 * x6_2, 286 * y6_2, 578 * x7_1, 266 * y7_1, 510 * x7, 308 * y7);
        ctx4.closePath();
        ctx4.fill();
    }

    function drawShape5(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, x6_2, y6_1, y6_2,
        x7, y7, x7_1, y7_1) {
        canvas5 = document.querySelector("#canvas5");
        ctx5 = canvas5.getContext("2d");
        canvas5.width = window.innerWidth * 4;
        canvas5.height = window.innerHeight * 4;
        ctx5.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx5.fillStyle = 'rgba(' + red1 + ', ' + green2 + ', ' + blue3 + ')';
        ctx5.beginPath();
        ctx5.moveTo(360 * x1, 506 * y1);
        ctx5.bezierCurveTo(369 * x1_1, 572 * y1_1, 459 * x2_1, 620 * y2_1, 523 * x2, 600 * y2);
        ctx5.bezierCurveTo(598 * x2_2, 577 * y2_2, 622 * x3_1, 513 * y3_1, 673 * x3, 474 * y3);
        ctx5.bezierCurveTo(722 * x3_2, 436 * y3_2, 849 * x4_1, 435 * y4_1, 873 * x4, 358 * y4);
        ctx5.bezierCurveTo(894 * x4_2, 290 * y4_2, 795 * x5_1, 278 * y5_1, 729 * x5, 273 * y5);
        ctx5.bezierCurveTo(668 * x5_2, 268 * y5_2, 557 * x6_1, 287 * y6_1, 477 * x6, 332 * y6);
        ctx5.bezierCurveTo(396 * x6_2, 378 * y6_2, 354 * x7_1, 444 * y7_1, 360 * x7, 506 * y7);
        ctx5.closePath();
        ctx5.fill();
    }
    
    function moveShape() {
        bX1 = 2.2 + dragX * 0.2 / window.innerWidth;
        bY1 = 2.2 + dragY * 0.2 / window.innerHeight;
        bX2 = 2.2 + -dragX * 0.2 / window.innerWidth;
        bY2 = 2.2 + -dragY * 0.2 / window.innerHeight;
        bX3 = 2.25 + dragX * 0.2 / window.innerWidth;
        bY3 = 2.25 + dragY * 0.2 / window.innerHeight;
        bX4 = 2.25 + -dragX * 0.2 / window.innerWidth;
        bY4 = 2.25 + -dragY * 0.2 / window.innerHeight;
        bX5 = 2.3 + dragX * 0.2 / window.innerWidth;
        bY5 = 2.3 + dragY * 0.2 / window.innerHeight;
        bX6 = 2.3 + -dragX * 0.2 / window.innerWidth;
        bY6 = 2.3 + -dragY * 0.2 / window.innerHeight;

        bX7 = 4 + dragX * 0.5 / window.innerWidth;
        bY7 = 4 + dragY * 0.5 / window.innerHeight;
        bX8 = 4 + -dragX * 0.5 / window.innerWidth;
        bY8 = 4 + -dragY * 0.5 / window.innerHeight;
        bX9 = 4.25 + dragX * 0.5 / window.innerWidth;
        bY9 = 4.25 + dragY * 0.5 / window.innerHeight;
        bX10 = 4.25 + -dragX * 0.5 / window.innerWidth;
        bY10 = 4.25 + -dragY * 0.5 / window.innerHeight;
        bX11 = 4.5 + dragX * 0.5 / window.innerWidth;
        bY11 = 4.5 + dragY * 0.5 / window.innerHeight;
        bX12 = 4.5 + -dragX * 0.5 / window.innerWidth;
        bY12 = 4.5 + -dragY * 0.5 / window.innerHeight;

        bX13 = 2.75 + dragX * 0.3 / window.innerWidth;
        bY13 = 2.75 + dragY * 0.3 / window.innerHeight;
        bX14 = 2.75 + -dragX * 0.3 / window.innerWidth;
        bY14 = 2.75 + -dragY * 0.3 / window.innerHeight;
        bX15 = 3 + dragX * 0.3 / window.innerWidth;
        bY15 = 3 + dragY * 0.3 / window.innerHeight;
        bX16 = 3 + -dragX * 0.3 / window.innerWidth;
        bY16 = 3 + -dragY * 0.3 / window.innerHeight;
        bX17 = 3.25 + dragX * 0.3 / window.innerWidth;
        bY17 = 3.25 + dragY * 0.3 / window.innerHeight;
        bX18 = 3.25 + -dragX * 0.3 / window.innerWidth;
        bY18 = 3.25 + -dragY * 0.3 / window.innerHeight;

        bX19 = 2 + dragX * 0.2 / window.innerWidth;
        bY19 = 2 + dragY * 0.2 / window.innerHeight;
        bX20 = 2 + -dragX * 0.2 / window.innerWidth;
        bY20 = 2 + -dragY * 0.2 / window.innerHeight;
        bX21 = 2.1 + dragX * 0.2 / window.innerWidth;
        bY21 = 2.1 + dragY * 0.2 / window.innerHeight;
        bX22 = 2.1 + -dragX * 0.2 / window.innerWidth;
        bY22 = 2.1 + -dragY * 0.2 / window.innerHeight;
        bX23 = 2 + dragX * 0.2 / window.innerWidth;
        bY23 = 2 + dragY * 0.2 / window.innerHeight;
        bX24 = 2 + -dragX * 0.2 / window.innerWidth;
        bY24 = 2 + -dragY * 0.2 / window.innerHeight;

        bX25 = 1.5 + dragX * 0.2 / window.innerWidth;
        bY25 = 1.5 + dragY * 0.2 / window.innerHeight;
        bX26 = 1.5 + -dragX * 0.2 / window.innerWidth;
        bY26 = 1.5 + -dragY * 0.2 / window.innerHeight;
        bX27 = 1.55 + dragX * 0.2 / window.innerWidth;
        bY27 = 1.55 + dragY * 0.2 / window.innerHeight;
        bX28 = 1.55 + -dragX * 0.2 / window.innerWidth;
        bY28 = 1.55 + -dragY * 0.2 / window.innerHeight;
        bX29 = 1.52 + dragX * 0.2 / window.innerWidth;
        bY29 = 1.52 + dragY * 0.2 / window.innerHeight;
        bX30 = 1.52 + -dragX * 0.2 / window.innerWidth;
        bY30 = 1.52 + -dragY * 0.2 / window.innerHeight;
        
        drawShape1(bX6, bY1, bX6, bY1, 
            bX4, bY1, bX4, bX4, bY1, bY1, 
            bX3, bY2, bX3, bX3, bY2, bY2, 
            bX3, bY2, bX3, bX3, bY2, bY2, 
            bX4, bY4, bX4, bX4, bY4, bY4, 
            bX3, bY3, bX3, bX3, bY3, bY3, 
            bX5, bY4, bX5, bX5, bY4, bY4, 
            bX6, bY1, bX6, bY1);

        drawShape2(bX11, bY8, bX11, bY8, 
            bX9, bY12, bX9, bX9, bY12, bY12, 
            bX10, bY7, bX10, bX10, bY7, bY7, 
            bX8, bY10, bX8, bX8, bY10, bY10, 
            bX11, bY9, bX11, bX11, bY9, bY9, 
            bX7, bY12, bX7, bX7, bY12, bY12, 
            bX8, bY9, bX8, bX8, bY9, bY9, 
            bX11, bY8, bX11, bY8);

        drawShape3(bX15, bY14, bX15, bY14, 
            bX13, bY18, bX13, bX13, bY18, bY18, 
            bX17, bY14, bX17, bX17, bY14, bY14, 
            bX14, bY13, bX14, bX14, bY13, bY13, 
            bX13, bY16, bX13, bX13, bY16, bY16, 
            bX18, bY13, bX18, bX18, bY13, bY13, 
            bX15, bY14, bX15, bY14);

        drawShape4(bX24, bY23, bX24, bY23, 
            bX19, bY22, bX19, bX19, bY22, bY22, 
            bX20, bY21, bX20, bX20, bY21, bY21,
            bX24, bY19, bX24, bX24, bY19, bY19, 
            bX23, bY20, bX23, bX23, bY20, bY20, 
            bX22, bY23, bX22, bX22, bY23, bY23, 
            bX24, bY23, bX24, bY23);

        drawShape5(bX30, bY29, bX30, bY29, 
            bX26, bY29, bX26, bX26, bY29, bY29, 
            bX28, bY25, bX28, bX28, bY25, bY25, 
            bX25, bY26, bX25, bX25, bY26, bY26, 
            bX27, bY28, bX27, bX27, bY28, bY28, 
            bX26, bY25, bX26, bX26, bY25, bY25, 
            bX30, bY29, bX30, bY29);
    }

    drawShape1(bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1, bN1);

    drawShape2(bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2, bN2);

    drawShape3(bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3, bN3);

    drawShape4(bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4, bN4);

    drawShape5(bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5, bN5);

    gradient1.style['background-image'] = 'radial-gradient(rgba(' + red1 + ', ' + green1 + ', ' + blue1 + '), rgba(25, 25, 112, 0)60%)';
    gradient2.style['background-image'] = 'radial-gradient(rgba(' + red2 + ', ' + green2 + ', ' + blue2 + '), rgba(25, 25, 112, 0)60%)';
    gradient3.style['background-image'] = 'radial-gradient(rgba(' + red3 + ', ' + green3 + ', ' + blue3 + '), rgba(25, 25, 112, 0)60%)';
    gradient4.style['background-image'] = 'radial-gradient(rgba(' + red4 + ', ' + green4 + ', ' + blue4 + '), rgba(25, 25, 112, 0)60%)';

    package1.style['background-image'] = 'radial-gradient(at 0% 0%, rgba(' + red1 + ', ' + green1 + ', ' + blue1 + '), rgba(' + red1 + ', ' + green1 + ', ' + blue1 + ', 0)60%)';
    package2.style['background-image'] = 'radial-gradient(at 100% 0%, rgba(' + red2 + ', ' + green2 + ', ' + blue2 + '), rgba(' + red2 + ', ' + green2 + ', ' + blue2 + ', 0)60%)';
    package3.style['background-image'] = 'radial-gradient(at 0% 100%, rgba(' + red3 + ', ' + green3 + ', ' + blue3 + '), rgba(' + red3 + ', ' + green3 + ', ' + blue3 + ', 0)60%)';
    package4.style['background-image'] = 'radial-gradient(at 100% 100%, rgba(' + red4 + ', ' + green4 + ', ' + blue4 + '), rgba(' + red4 + ', ' + green4 + ', ' + blue4 + ', 0)60%)';

    function mixBlendMode() {
        canvasGroup.style['mix-blend-mode'] = 'difference';
        canvasGroup.style['-webkit-mix-blend-mode'] = 'difference';
        canvas.style['mix-blend-mode'] = 'difference';
        canvas.style['-webkit-mix-blend-mode'] = 'difference';
        gradient1.style['mix-blend-mode'] = 'difference';
        gradient2.style['mix-blend-mode'] = 'difference';
        gradient3.style['mix-blend-mode'] = 'difference';
        gradient4.style['mix-blend-mode'] = 'difference';
        gradient1.style['-webkit-mix-blend-mode'] = 'difference';
        gradient2.style['-webkit-mix-blend-mode'] = 'difference';
        gradient3.style['-webkit-mix-blend-mode'] = 'difference';
        gradient4.style['-webkit-mix-blend-mode'] = 'difference';
    }

    function mouseControl() {
        moveShape();
        // main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
        // gradient1.style.backgroundPosition = '' + dragX * 100 / window.innerWidth + '% ' + dragY * 100 / window.innerHeight + '%, 0';
        // gradient2.style.backgroundPosition = '' + positionX + '% ' + dragY * 100 / window.innerHeight + '%, 0';
        // gradient3.style.backgroundPosition = '' + dragX * 100 / window.innerWidth + '% ' + positionY + '%, 0';
        // gradient4.style.backgroundPosition = '' + positionX + '% ' + positionY + '%, 0';
        mainShadow.style.transform = 'translate(' + -dragX * 50 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
        booklistShadow.style.transform = 'translate(' + -dragX * 100 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
        reviewShadow.style.transform = 'translate(' + -dragX * 100 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
    }

	if( is_mobile ) {
		// translate images in mobile
		// main_img.style.marginLeft = '-440px';
		// main_img.style.marginTop = '-360px';
		// $(main_img).draggable({
		// 	containment: ".mobilescreen"
		// });

        canvasGroup.style.transform = 'scale(0.5, 0.5)';

        purchaseBox.style.transform = 'scale(0.7, 0.7)';
        complete.style.transform = 'scale(0.7, 0.7)';

        mixBlendMode();

        document.addEventListener("touchstart", (e) => {
			dragX = e.touches[0].clientX;
			dragY = e.touches[0].clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            mouseControl();
		});
		document.addEventListener("touchmove", (e) => {
			dragX = e.changedTouches[0].clientX;
			dragY = e.changedTouches[0].clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            mouseControl();
		});
		document.addEventListener("touchend", (e) => {
			dragX = e.changedTouches[0].clientX;
			dragY = e.changedTouches[0].clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            mouseControl();
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
            mouseControl();
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
        mixBlendMode();
    }

   // DadA logo//////////////////////////////////////////////////
	let ract = document.querySelector(".ract");
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
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
	let category = document.querySelector(".category");
	let category2 = document.querySelector(".category2");
	let mypage = document.querySelector(".mypage");
	let mypage2 = document.querySelector(".mypage2");
	let nav = document.querySelector("nav");
	let aside = document.querySelector("aside");
	let nav_ul = document.querySelector(".nav");
	let aside_ul = document.querySelector(".aside");

    let buy = document.querySelector(".buy");
    let booklist = document.querySelector(".booklist");
    let review = document.querySelector(".review");
    
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
    booklist.onclick = booklistClick;
    review.onclick = reviewClick;

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
        package1.style.opacity = '0';
        package1.style.transitionDelay = '0s';
        package1.style['-webkit-transitionDelay'] = '0s';
        package2.style.opacity = '0';
        package2.style.transitionDelay = '0s';
        package2.style['-webkit-transitionDelay'] = '0s';
        package3.style.opacity = '0';
        package3.style.transitionDelay = '0s';
        package3.style['-webkit-transitionDelay'] = '0s';
        package4.style.opacity = '0';
        package4.style.transitionDelay = '0s';
        package4.style['-webkit-transitionDelay'] = '0s';
        background.style.opacity = '1';
        background.style.transitionDelay = '0s';
        background.style['-webkit-transitionDelay'] = '0s';
        buy.style.opacity = '0';
        buy.style.transition = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        buy.style['-webkit-transition'] = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        booklist.style.opacity = '0';
        booklist.style.transition = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        booklist.style['-webkit-transition'] = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        review.style.opacity = '0';
        review.style.transition = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        review.style['-webkit-transition'] = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        booklistShadow.style.opacity = '0';
        booklistShadow.style.transitionDelay = '0s';
        booklistShadow.style['-webkit-transitionDelay'] = '0s';
        reviewShadow.style.opacity = '0';
        reviewShadow.style.transitionDelay = '0s';
        reviewShadow.style['-webkit-transitionDelay'] = '0s';
        gradient1.style.opacity = '0';
        gradient2.style.opacity = '0';
        gradient3.style.opacity = '0';
        gradient4.style.opacity = '0';
        bookScale.style.zIndex = '1';
        bookScale.style.transitionDelay = '0s';
        bookScale.style['-webkit-transitionDelay'] = '0s';
        mainbook.style.transform = 'translate(0, -50%)';
        mainbook.style.transitionDelay = '0s';
        mainbook.style['-webkit-transitionDelay'] = '0s';
        bookSample.style.transitionDelay = '1.8s';
        bookSample.style['-webkit-transitionDelay'] = '1.8s';
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
        package1.style.opacity = '1';
        package1.style.transitionDelay = '2s';
        package1.style['-webkit-transitionDelay'] = '2s';
        package2.style.opacity = '1';
        package2.style.transitionDelay = '2s';
        package2.style['-webkit-transitionDelay'] = '2s';
        package3.style.opacity = '1';
        package3.style.transitionDelay = '2s';
        package3.style['-webkit-transitionDelay'] = '2s';
        package4.style.opacity = '1';
        package4.style.transitionDelay = '2s';
        package4.style['-webkit-transitionDelay'] = '2s';
        booklistBackground.style.opacity = '0';
        booklistBackground.style.transitionDelay = '2s';
        booklistBackground.style['-webkit-transitionDelay'] = '2s';
        reviewBackground.style.opacity = '0';
        reviewBackground.style.transitionDelay = '2s';
        reviewBackground.style['-webkit-transitionDelay'] = '2s';
        buy.style.opacity = '1';
        buy.style.transition = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        buy.style['-webkit-transition'] = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        booklist.style.opacity = '1';
        booklist.style.transition = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        booklist.style['-webkit-transition'] = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        review.style.opacity = '1';
        review.style.transition = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        review.style['-webkit-transition'] = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        booklistShadow.style.opacity = '1';
        booklistShadow.style.transitionDelay = '2s';
        booklistShadow.style['-webkit-transitionDelay'] = '2s';
        reviewShadow.style.opacity = '1';
        reviewShadow.style.transitionDelay = '2s';
        reviewShadow.style['-webkit-transitionDelay'] = '2s';
        gradient1.style.opacity = '1';
        gradient2.style.opacity = '1';
        gradient3.style.opacity = '1';
        gradient4.style.opacity = '1';
        bookScale.style.top = '0';
        bookScale.style.zIndex = '0';
        bookScale.style.transform = 'scale(1, 1)';
        bookScale.style.transitionDelay = '1s';
        bookScale.style['-webkit-transitionDelay'] = '1s';
        mainbook.style.transform = 'translate(-50%, -50%)';
        mainbook.style.transitionDelay = '1s';
        mainbook.style['-webkit-transitionDelay'] = '1s';
        bookSample.style.opacity = '0';
        bookSample.style.transitionDelay = '0s';
        bookSample.style['-webkit-transitionDelay'] = '0s';
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

    function booklistClick() {
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

    function reviewClick() {
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
        // canvas1.width = window.innerWidth * 2;
        // canvas1.height = window.innerHeight * 2;
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
});