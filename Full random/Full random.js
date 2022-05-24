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
    let canvas6 = document.querySelector("#canvas6");
    let ctx6 = canvas6.getContext("2d");
    let canvas7 = document.querySelector("#canvas7");
    let ctx7 = canvas7.getContext("2d");
    let canvas8 = document.querySelector("#canvas8");
    let ctx8 = canvas8.getContext("2d");
    let canvas9 = document.querySelector("#canvas9");
    let ctx9 = canvas9.getContext("2d");

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

    let psN1 = 0.6;
    // let wsN1_1 = 500 + window.innerWidth / 2;
    // let wsN1_2 = 500 + window.innerHeight / 2;
    let psN2_1 = 1;
    let psN2_2 = 1.2;
    let psN3_1 = 0.75;
    let psN3_2 = 0.9;
    let psN4 = 0.6;
    let psN5_1 = 0.8;
    let psN5_2 = 0.4;
    let psN6_1 = 0.6;
    let psN6_2 = 0.4;
    let psN7_1 = 0.3;
    let psN7_2 = 0.5;
    let psN8_1 = 0.3;
    let psN8_2 = 0.3;
    let psN9_1 = 0.7;
    let psN9_2 = 0.8;

    let mN1 = 60;
    let mN2 = 180;
    let mN3 = 220;
    let mN4 = 250;
    let mN5 = 240;
    let mN6 = 150;
    let mN7 = 50;
    let mN8 = 220;
    let mN9 = 120;

    let blankX = window.innerWidth / 5;
    let blankY = 200000 / window.innerWidth;

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
        canvas1.width = window.innerWidth * psN1 + 50;
        canvas1.height = window.innerHeight * psN1 + 50;
        ctx1.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx1.fillStyle = 'rgba(' + red1 + ', ' + green1 + ', ' + blue1 + ')';
        ctx1.beginPath();
        ctx1.moveTo((330 - mN1) * x1, (198 - mN1) * y1);
        ctx1.bezierCurveTo((405 - mN1) * x1_1, (188 - mN1) * y1_1, (391 - mN1) * x2_1, (81 - mN1) * y2_1, (499 - mN1) * x2, (74 - mN1) * y2);
        ctx1.bezierCurveTo((578 - mN1) * x2_2, (69 - mN1) * y2_2, (603 - mN1) * x3_1, (110 - mN1) * y3_1, (708 - mN1) * x3, (174 - mN1) * y3);
        ctx1.bezierCurveTo((769 - mN1) * x3_2, (211 - mN1) * y3_2, (842 - mN1) * x4_1, (255 - mN1) * y4_1, (821 - mN1) * x4, (341 - mN1) * y4);
        ctx1.bezierCurveTo((801 - mN1) * x4_2, (421 - mN1) * y4_2, (734 - mN1) * x5_1, (387 - mN1) * y5_1, (669 - mN1) * x5, (425 - mN1) * y5);
        ctx1.bezierCurveTo((616 - mN1) * x5_2, (456 - mN1) * y5_2, (493 - mN1) * x6_1, (542 - mN1) * y6_1, (400 - mN1) * x6, (520 - mN1) * y6);
        ctx1.bezierCurveTo((245 - mN1) * x6_2, (484 - mN1) * y6_2, (149 - mN1) * x7_1, (416 - mN1) * y7_1, (153 - mN1) * x7, (328 - mN1) * y7);
        ctx1.bezierCurveTo((159 - mN1) * x7_2, (209 - mN1) * y7_2, (260 - mN1) * x8_1, (208 - mN1) * y8_1, (330 - mN1) * x8, (198 - mN1) * y8);
        ctx1.closePath();
        ctx1.fill();
        canvas1.style.marginTop = '' + -canvas1.width / 10 * 5 + 'px';
        canvas1.style.marginLeft = '' + -canvas1.height / 10 * 5 + 'px';
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
        canvas2.width = window.innerWidth * psN2_1 + 50;
        canvas2.height = window.innerHeight * psN2_2 + 50;
        ctx2.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx2.fillStyle = 'rgba(' + red3 + ', ' + green3 + ', ' + blue3 + ')';
        ctx2.beginPath();
        ctx2.moveTo((273 - mN2) * x1, (599 - mN2) * y1);
        ctx2.bezierCurveTo((250 - mN2) * x1_1, (490 - mN2) * y1_1, (333 - mN2) * x2_1, (445 - mN2) * y2_1, (358 - mN2) * x2, (363 - mN2) * y2);
        ctx2.bezierCurveTo((388 - mN2) * x2_2, (263 - mN2) * y2_2, (423 - mN2) * x3_1, (208 - mN2) * y3_1, (497 - mN2) * x3, (192 - mN2) * y3);
        ctx2.bezierCurveTo((649 - mN2) * x3_2, (160 - mN2) * y3_2, (713 - mN2) * x4_1, (285 - mN2) * y4_1, (785 - mN2) * x4, (322 - mN2) * y4);
        ctx2.bezierCurveTo((855 - mN2) * x4_2, (358 - mN2) * y4_2, (989 - mN2) * x5_1, (388 - mN2) * y5_1, (967 - mN2) * x5, (490 - mN2) * y5);
        ctx2.bezierCurveTo((943 - mN2) * x5_2, (601 - mN2) * y5_2, (856 - mN2) * x6_1, (612 - mN2) * y6_1, (797 - mN2) * x6, (645 - mN2) * y6);
        ctx2.bezierCurveTo((695 - mN2) * x6_2, (702 - mN2) * y6_2, (666 - mN2) * x7_1, (746 - mN2) * y7_1, (542 - mN2) * x7, (748 - mN2) * y7);
        ctx2.bezierCurveTo((435 - mN2) * x7_2, (750 - mN2) * y7_2, (297 - mN2) * x8_1, (693 - mN2) * y8_1, (273 - mN2) * x8, (599 - mN2) * y8);
        ctx2.closePath();
        ctx2.fill();
        canvas2.style.marginTop = '' + -canvas2.width / 10 * 5 + 'px';
        canvas2.style.marginLeft = '' + -canvas2.height / 10 * 5 + 'px';
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
        canvas3.width = window.innerWidth * psN3_1 + 50;
        canvas3.height = window.innerHeight * psN3_2 + 50;
        ctx3.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx3.fillStyle = 'rgba(' + red2 + ', ' + green2 + ', ' + blue2 + ')';
        ctx3.beginPath();
        ctx3.moveTo((885 - mN3) * x1, (302 - mN3) * y1);
        ctx3.bezierCurveTo((826 - mN3) * x1_1, (243 - mN3) * y1_1, (693 - mN3) * x2_1, (230 - mN3) * y2_1, (598 - mN3) * x2, (250 - mN3) * y2);
        ctx3.bezierCurveTo((425 - mN3) * x2_2, (286 - mN3) * y2_2, (346 - mN3) * x3_1, (343 - mN3) * y3_1, (331 - mN3) * x3, (425 - mN3) * y3);
        ctx3.bezierCurveTo((308 - mN3) * x3_2, (551 - mN3) * y3_2, (389 - mN3) * x4_1, (566 - mN3) * y4_1, (450 - mN3) * x4, (631 - mN3) * y4);
        ctx3.bezierCurveTo((516 - mN3) * x4_2, (702 - mN3) * y4_2, (488 - mN3) * x5_1, (765 - mN3) * y5_1, (597 - mN3) * x5, (803 - mN3) * y5);
        ctx3.bezierCurveTo((732 - mN3) * x5_2, (850 - mN3) * y5_2, (862 - mN3) * x6_1, (612 - mN3) * y6_1, (905 - mN3) * x6, (517 - mN3) * y6);
        ctx3.bezierCurveTo((937 - mN3) * x6_2, (446 - mN3) * y6_2, (928 - mN3) * x7_1, (350 - mN3) * y7_1, (885 - mN3) * x7, (302 - mN3) * y7);
        ctx3.closePath();
        ctx3.fill();
        canvas3.style.marginTop = '' + -canvas3.width / 10 * 5 + 'px';
        canvas3.style.marginLeft = '' + -canvas3.height / 10 * 5 + 'px';
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
        canvas4.width = window.innerWidth * psN4 + 50;
        canvas4.height = window.innerHeight * psN4 + 50;
        ctx4.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx4.fillStyle = 'rgba(' + red4 + ', ' + green4 + ', ' + blue4 + ')';
        ctx4.beginPath();
        ctx4.moveTo((510 - mN4) * x1, (308 - mN4) * y1);
        ctx4.bezierCurveTo((434 - mN4) * x1_1, (354 - mN4) * y1_1, (348 - mN4) * x2_1, (366 - mN4) * y2_1, (329 - mN4) * x2, (458 - mN4) * y2);
        ctx4.bezierCurveTo((316 - mN4) * x2_2, (521 - mN4) * y2_2, (378 - mN4) * x3_1, (575 - mN4) * y3_1, (440 - mN4) * x3, (591 - mN4) * y3);
        ctx4.bezierCurveTo((571 - mN4) * x3_2, (625 - mN4) * y3_2, (549 - mN4) * x4_1, (728 - mN4) * y4_1, (667 - mN4) * x4, (723 - mN4) * y4);
        ctx4.bezierCurveTo((763 - mN4) * x4_2, (719 - mN4) * y4_2, (830 - mN4) * x5_1, (603 - mN4) * y5_1, (813 - mN4) * x5, (508 - mN4) * y5);
        ctx4.bezierCurveTo((799 - mN4) * x5_2, (430 - mN4) * y5_2, (745 - mN4) * x6_1, (371 - mN4) * y6_1, (704 - mN4) * x6, (331 - mN4) * y6);
        ctx4.bezierCurveTo((658 - mN4) * x6_2, (286 - mN4) * y6_2, (578 - mN4) * x7_1, (266 - mN4) * y7_1, (510 - mN4) * x7, (308 - mN4) * y7);
        ctx4.closePath();
        ctx4.fill();
        canvas4.style.marginTop = '' + -canvas4.width / 10 * 5 + 'px';
        canvas4.style.marginLeft = '' + -canvas4.height / 10 * 5 + 'px';
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
        canvas5.width = window.innerWidth * psN5_1 + 120;
        canvas5.height = window.innerWidth * psN5_2 + 120;
        ctx5.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx5.fillStyle = 'rgba(' + red1 + ', ' + green2 + ', ' + blue4 + ')';
        ctx5.beginPath();
        ctx5.moveTo((360 - mN5) * x1, (506 - mN5) * y1);
        ctx5.bezierCurveTo((369 - mN5) * x1_1, (572 - mN5) * y1_1, (459 - mN5) * x2_1, (620 - mN5) * y2_1, (523 - mN5) * x2, (600 - mN5) * y2);
        ctx5.bezierCurveTo((598 - mN5) * x2_2, (577 - mN5) * y2_2, (622 - mN5) * x3_1, (513 - mN5) * y3_1, (673 - mN5) * x3, (474 - mN5) * y3);
        ctx5.bezierCurveTo((722 - mN5) * x3_2, (436 - mN5) * y3_2, (849 - mN5) * x4_1, (435 - mN5) * y4_1, (873 - mN5) * x4, (358 - mN5) * y4);
        ctx5.bezierCurveTo((894 - mN5) * x4_2, (290 - mN5) * y4_2, (795 - mN5) * x5_1, (278 - mN5) * y5_1, (729 - mN5) * x5, (273 - mN5) * y5);
        ctx5.bezierCurveTo((668 - mN5) * x5_2, (268 - mN5) * y5_2, (557 - mN5) * x6_1, (287 - mN5) * y6_1, (477 - mN5) * x6, (332 - mN5) * y6);
        ctx5.bezierCurveTo((396 - mN5) * x6_2, (378 - mN5) * y6_2, (354 - mN5) * x7_1, (444 - mN5) * y7_1, (360 - mN5) * x7, (506 - mN5) * y7);
        ctx5.closePath();
        ctx5.fill();
        canvas5.style.marginTop = '' + -canvas5.width / 10 * 5 + 'px';
        canvas5.style.marginLeft = '' + -canvas5.height / 10 * 5 + 'px';
    }

    function drawShape6(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, y6_1) {
        canvas6 = document.querySelector("#canvas6");
        ctx6 = canvas6.getContext("2d");
        canvas6.width = window.innerWidth * psN6_1 + 50;
        canvas6.height = window.innerWidth * psN6_2 + 50;
        ctx6.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx6.fillStyle = 'rgba(' + red3 + ', ' + green1 + ', ' + blue2 + ')';
        ctx6.beginPath();
        ctx6.moveTo((342 - mN6) * x1, (217 - mN6) * y1);
        ctx6.bezierCurveTo((416 - mN6) * x1_1, (182 - mN6) * y1_1, (445 - mN6) * x2_1, (244 - mN6) * y2_1, (545 - mN6) * x2, (236 - mN6) * y2);
        ctx6.bezierCurveTo((619 - mN6) * x2_2, (230 - mN6) * y2_2, (728 - mN6) * x3_1, (221 - mN6) * y3_1, (747 - mN6) * x3, (298 - mN6) * y3);
        ctx6.bezierCurveTo((767 - mN6) * x3_2, (377 - mN6) * y3_2, (680 - mN6) * x4_1, (418 - mN6) * y4_1, (611 - mN6) * x4, (466 - mN6) * y4);
        ctx6.bezierCurveTo((524 - mN6) * x4_2, (527 - mN6) * y4_2, (393 - mN6) * x5_1, (517 - mN6) * y5_1, (361 - mN6) * x5, (442 - mN6) * y5);
        ctx6.bezierCurveTo((333 - mN6) * x5_2, (378 - mN6) * y5_2, (251 - mN6) * x6_1, (269 - mN6) * y6_1, (342 - mN6) * x6, (217 - mN6) * y6);
        ctx6.closePath();
        ctx6.fill();
        canvas6.style.marginTop = '' + -canvas6.width / 10 * 5 + 'px';
        canvas6.style.marginLeft = '' + -canvas6.height / 10 * 5 + 'px';
    }

    function drawShape7(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, y6_1) {
        canvas7 = document.querySelector("#canvas7");
        ctx7 = canvas7.getContext("2d");
        canvas7.width = window.innerWidth * psN7_1 + 50;
        canvas7.height = window.innerWidth * psN7_2 + 50;
        ctx7.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx7.fillStyle = 'rgba(' + red4 + ', ' + green3 + ', ' + blue1 + ')';
        ctx7.beginPath();
        ctx7.moveTo((263 - mN7) * x1, (104 - mN7) * y1);
        ctx7.bezierCurveTo((363 - mN7) * x1_1, (170 - mN7) * y1_1, (267 - mN7) * x2_1, (303 - mN7) * y2_1, (407 - mN7) * x2, (333 - mN7) * y2);
        ctx7.bezierCurveTo((525 - mN7) * x2_2, (358 - mN7) * y2_2, (568 - mN7) * x3_1, (480 - mN7) * y3_1, (488 - mN7) * x3, (543 - mN7) * y3);
        ctx7.bezierCurveTo((411 - mN7) * x3_2, (603 - mN7) * y3_2, (302 - mN7) * x4_1, (548 - mN7) * y4_1, (261 - mN7) * x4, (466 - mN7) * y4);
        ctx7.bezierCurveTo((208 - mN7) * x4_2, (359 - mN7) * y4_2, (115 - mN7) * x5_1, (299 - mN7) * y5_1, (117 - mN7) * x5, (190 - mN7) * y5);
        ctx7.bezierCurveTo((118 - mN7) * x5_2, (118 - mN7) * y5_2, (198 - mN7) * x6_1, (64 - mN7) * y6_1, (263 - mN7) * x6, (104 - mN7) * y6);
        ctx7.closePath();
        ctx7.fill();
        canvas7.style.marginTop = '' + -canvas7.width / 10 * 5 + 'px';
        canvas7.style.marginLeft = '' + -canvas7.height / 10 * 5 + 'px';
    }

    function drawShape8(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, y6_1) {
        canvas8 = document.querySelector("#canvas8");
        ctx8 = canvas8.getContext("2d");
        canvas8.width = window.innerWidth * psN8_1 + 50;
        canvas8.height = window.innerWidth * psN8_2 + 50;
        ctx8.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx8.fillStyle = 'rgba(' + red2 + ', ' + green4 + ', ' + blue3 + ')';
        ctx8.beginPath();
        ctx8.moveTo((288 - mN8) * x1, (306 - mN8) * y1);
        ctx8.bezierCurveTo((290 - mN8) * x1_1, (265 - mN8) * y1_1, (341 - mN8) * x2_1, (240 - mN8) * y2_1, (376 - mN8) * x2, (264 - mN8) * y2);
        ctx8.bezierCurveTo((401 - mN8) * x2_2, (281 - mN8) * y2_2, (430 - mN8) * x3_1, (303 - mN8) * y3_1, (438 - mN8) * x3, (343 - mN8) * y3);
        ctx8.bezierCurveTo((448 - mN8) * x3_2, (391 - mN8) * y3_2, (449 - mN8) * x4_1, (436 - mN8) * y4_1, (363 - mN8) * x4, (453 - mN8) * y4);
        ctx8.bezierCurveTo((333 - mN8) * x4_2, (464 - mN8) * y4_2, (257 - mN8) * x5_1, (469 - mN8) * y5_1, (248 - mN8) * x5, (415 - mN8) * y5);
        ctx8.bezierCurveTo((240 - mN8) * x5_2, (369 - mN8) * y5_2, (284 - mN8) * x6_1, (352 - mN8) * y6_1, (288 - mN8) * x6, (306 - mN8) * y6);
        ctx8.closePath();
        ctx8.fill();
        canvas8.style.marginTop = '' + -canvas8.width / 10 * 5 + 'px';
        canvas8.style.marginLeft = '' + -canvas8.height / 10 * 5 + 'px';
    }

    function drawShape9(x1, y1, x1_1, y1_1,
        x2, y2, x2_1, x2_2, y2_1, y2_2,
        x3, y3, x3_1, x3_2, y3_1, y3_2,
        x4, y4, x4_1, x4_2, y4_1, y4_2,
        x5, y5, x5_1, x5_2, y5_1, y5_2,
        x6, y6, x6_1, y6_1) {
        canvas9 = document.querySelector("#canvas9");
        ctx9 = canvas9.getContext("2d");
        canvas9.width = window.innerWidth * psN9_1 + 50;
        canvas9.height = window.innerWidth * psN9_2 + 50;
        ctx9.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx9.fillStyle = 'rgba(' + red2 + ', ' + green3 + ', ' + blue4 + ')';
        ctx9.beginPath();
        ctx9.moveTo((689 - mN9) * x1, (251 - mN9) * y1);
        ctx9.bezierCurveTo((587 - mN9) * x1_1, (162 - mN9) * y1_1, (449 - mN9) * x2_1, (114 - mN9) * y2_1, (356 - mN9) * x2, (185 - mN9) * y2);
        ctx9.bezierCurveTo((255 - mN9) * x2_2, (261 - mN9) * y2_2, (318 - mN9) * x3_1, (349 - mN9) * y3_1, (261 - mN9) * x3, (456 - mN9) * y3);
        ctx9.bezierCurveTo((217 - mN9) * x3_2, (539 - mN9) * y3_2, (165 - mN9) * x4_1, (778 - mN9) * y4_1, (322 - mN9) * x4, (836 - mN9) * y4);
        ctx9.bezierCurveTo((445 - mN9) * x4_2, (881 - mN9) * y4_2, (724 - mN9) * x5_1, (736 - mN9) * y5_1, (795 - mN9) * x5, (540 - mN9) * y5);
        ctx9.bezierCurveTo((835 - mN9) * x5_2, (429 - mN9) * y5_2, (772 - mN9) * x6_1, (329 - mN9) * y6_1, (689 - mN9) * x6, (251 - mN9) * y6);
        ctx9.closePath();
        ctx9.fill();
        mX = (window.innerWidth * 2) + 2630;
        minusX = mX / window.innerWidth;
        canvas9.style.marginTop = '' + -canvas9.width / 10 * minusX + 'px';
        canvas9.style.marginLeft = '' + -canvas9.height / 10 * minusX + 'px';
    }
    
    function moveShape() {

        sN1_1 = window.innerWidth / 1520;
        sN1_2 = window.innerHeight / 960;
        sN2_1 = window.innerWidth / 820;
        sN2_2 = window.innerHeight / 520;
        sN3_1 = window.innerWidth / 1150;
        sN3_2 = window.innerHeight / 750;
        sN4_1 = window.innerWidth / 1520;
        sN4_2 = window.innerHeight / 1020;
        sN5_1 = window.innerWidth / 2000;
        sN5_2 = window.innerHeight / 1900;
        sN6_1 = window.innerWidth / 1150;
        sN6_2 = window.innerHeight / (1000000 / window.innerWidth);
        sN7_1 = window.innerWidth / 1520;
        sN7_2 = window.innerHeight / (1300000 / window.innerWidth);
        sN8_1 = window.innerWidth / 820;
        sN8_2 = window.innerHeight / (1000000 / window.innerWidth);
        sN9_1 = window.innerWidth / 1020;
        sN9_2 = window.innerHeight / (1000000 / window.innerWidth);

        // pN1_1 = 0.2;
        // pN1_2 = 0.15;
        // pN1_3 = 0.1;
        // pN1_4 = 0.06;
        // pN1_5 = 0.04;
        // pN1_6 = 0.02;

        pN1_1 = window.innerWidth / 8400;
        pN1_2 = window.innerWidth / 11200;
        pN1_3 = window.innerWidth / 16800;
        pN1_4 = window.innerWidth / 28000;
        pN1_5 = window.innerWidth / 42000;
        pN1_6 = window.innerWidth / 84000;

        // pN2_1 = 2;
        // pN2_2 = 0.25;
        // pN2_3 = 0.2;
        // pN2_4 = 0.1;
        // pN2_5 = 0.05;
        // pN2_6 = 0.02;

        pN2_1 = window.innerWidth / 840;
        pN2_2 = window.innerWidth / 6720;
        pN2_3 = window.innerWidth / 8400;
        pN2_4 = window.innerWidth / 16800;
        pN2_5 = window.innerWidth / 33600;
        pN2_6 = window.innerWidth / 84000;

        // pN3_1 = 1;
        // pN3_2 = 0.5;
        // pN3_3 = 0.25;
        // pN3_4 = 0.15;
        // pN3_5 = 0.075;
        // pN3_6 = 0.05;

        pN3_1 = window.innerWidth / 1680;
        pN3_2 = window.innerWidth / 3360;
        pN3_3 = window.innerWidth / 6720;
        pN3_4 = window.innerWidth / 11200;
        pN3_5 = window.innerWidth / 22400;
        pN3_6 = window.innerWidth / 33600;

        // pN4_1 = 0.7;
        // pN4_2 = 0.15;
        // pN4_3 = 0.1;
        // pN4_4 = 0.06;
        // pN4_5 = 0.04;
        // pN4_6 = 0.02;

        pN4_1 = window.innerWidth / 2240;
        pN4_2 = window.innerWidth / 11200;
        pN4_3 = window.innerWidth / 16800;
        pN4_4 = window.innerWidth / 28000;
        pN4_5 = window.innerWidth / 42000;
        pN4_6 = window.innerWidth / 84000;
        
        // pN5_0 = 1;
        // pN5_1 = 0.5;
        // pN5_2 = 0.15;
        // pN5_3 = 0.1;
        // pN5_4 = 0.05;
        // pN5_5 = 0.2;
        // pN5_6 = 0.3;

        pN5_0 = window.innerWidth / 1680;
        pN5_1 = window.innerWidth / 3360;
        pN5_2 = window.innerWidth / 11200;
        pN5_3 = window.innerWidth / 16800;
        pN5_4 = window.innerWidth / 33600;
        pN5_5 = window.innerWidth / 8400;
        pN5_6 = window.innerWidth / 5600;

        pN6_1 = window.innerWidth / 6720;
        pN6_2 = window.innerWidth / 8400;
        pN6_3 = window.innerWidth / 16800;
        pN6_4 = window.innerWidth / 28000;
        pN6_5 = window.innerWidth / 42000;
        pN6_6 = window.innerWidth / 84000;

        pN7_1 = window.innerWidth / 8400;
        pN7_2 = window.innerWidth / 11200;
        pN7_3 = window.innerWidth / 16800;
        pN7_4 = window.innerWidth / 28000;
        pN7_5 = window.innerWidth / 42000;
        pN7_6 = window.innerWidth / 84000;

        pN8_1 = window.innerWidth / 6720;
        pN8_2 = window.innerWidth / 8400;
        pN8_3 = window.innerWidth / 11200;
        pN8_4 = window.innerWidth / 16800;
        pN8_5 = window.innerWidth / 5600;
        pN8_6 = window.innerWidth / 8400;

        pN9_1 = window.innerWidth / 840;
        pN9_2 = window.innerWidth / 6720;
        pN9_3 = window.innerWidth / 8400;
        pN9_4 = window.innerWidth / 16800;
        pN9_5 = window.innerWidth / 33600;
        pN9_6 = window.innerWidth / 84000;

        macWidth = window.innerWidth;
        macHeight = window.innerHeight;
        
        bX1 = sN1_1 + dragX * pN1_1 / macWidth;
        bY1 = sN1_2 + dragY * pN1_1 / macHeight;
        bX2 = sN1_1 + -dragX * pN1_2 / macWidth;
        bY2 = sN1_2 + -dragY * pN1_2 / macHeight;
        bX3 = sN1_1 + dragX * pN1_3 / macWidth;
        bY3 = sN1_2 + dragY * pN1_3 / macHeight;
        bX4 = sN1_1 + -dragX * pN1_4 / macWidth;
        bY4 = sN1_2 + -dragY * pN1_4 / macHeight;
        bX5 = sN1_1 + dragX * pN1_5 / macWidth;
        bY5 = sN1_2 + dragY * pN1_5 / macHeight;
        bX6 = sN1_1 + -dragX * pN1_6 / macWidth;
        bY6 = sN1_2 + -dragY * pN1_6 / macHeight;

        bX7 = sN2_1 + dragX * pN2_1 / window.innerWidth;
        bY7 = sN2_2 + dragY * pN2_1 / window.innerHeight;
        bX8 = sN2_1 + -dragX * pN2_2 / window.innerWidth;
        bY8 = sN2_2 + -dragY * pN2_2 / window.innerHeight;
        bX9 = sN2_1 + dragX * pN2_3 / window.innerWidth;
        bY9 = sN2_2 + dragY * pN2_3 / window.innerHeight;
        bX10 = sN2_1 + -dragX * pN2_4 / window.innerWidth;
        bY10 = sN2_2 + -dragY * pN2_4 / window.innerHeight;
        bX11 = sN2_1 + dragX * pN2_5 / window.innerWidth;
        bY11 = sN2_2 + dragY * pN2_5 / window.innerHeight;
        bX12 = sN2_1 + -dragX * pN2_6 / window.innerWidth;
        bY12 = sN2_2 + -dragY * pN2_6 / window.innerHeight;

        bX13 = sN3_1 + dragX * pN3_1 / window.innerWidth;
        bY13 = sN3_2 + dragY * pN3_1 / window.innerHeight;
        bX14 = sN3_1 + -dragX * pN3_2 / window.innerWidth;
        bY14 = sN3_2 + -dragY * pN3_2 / window.innerHeight;
        bX15 = sN3_1 + dragX * pN3_3 / window.innerWidth;
        bY15 = sN3_2 + dragY * pN3_3 / window.innerHeight;
        bX16 = sN3_1 + -dragX * pN3_4 / window.innerWidth;
        bY16 = sN3_2 + -dragY * pN3_4 / window.innerHeight;
        bX17 = sN3_1 + dragX * pN3_5 / window.innerWidth;
        bY17 = sN3_2 + dragY * pN3_5 / window.innerHeight;
        bX18 = sN3_1 + -dragX * pN3_6 / window.innerWidth;
        bY18 = sN3_2 + -dragY * pN3_6 / window.innerHeight;

        bX19 = sN4_1 + dragX * pN4_1 / window.innerWidth;
        bY19 = sN4_2 + dragY * pN4_1 / window.innerHeight;
        bX20 = sN4_1 + -dragX * pN4_2 / window.innerWidth;
        bY20 = sN4_2 + -dragY * pN4_2 / window.innerHeight;
        bX21 = sN4_1 + dragX * pN4_3 / window.innerWidth;
        bY21 = sN4_2 + dragY * pN4_3 / window.innerHeight;
        bX22 = sN4_1 + -dragX * pN4_4 / window.innerWidth;
        bY22 = sN4_2 + -dragY * pN4_4 / window.innerHeight;
        bX23 = sN4_1 + dragX * pN4_5 / window.innerWidth;
        bY23 = sN4_2 + dragY * pN4_5 / window.innerHeight;
        bX24 = sN4_1 + -dragX * pN4_6 / window.innerWidth;
        bY24 = sN4_2 + -dragY * pN4_6 / window.innerHeight;

        bX25 = sN5_1 + -dragX * pN5_1 / window.innerWidth;
        bY25 = sN5_2 + -dragY * pN5_1 / window.innerHeight;
        bX26 = sN5_1 + dragX * pN5_2 / window.innerWidth;
        bY26 = sN5_2 + dragY * pN5_2 / window.innerHeight;
        bX27 = sN5_1 + dragX * pN5_3 / window.innerWidth;
        bY27 = sN5_2 + dragY * pN5_3 / window.innerHeight;
        bX28 = sN5_1 + -dragX * pN5_4 / window.innerWidth;
        bY28 = sN5_2 + -dragY * pN5_4 / window.innerHeight;
        bX29 = sN5_1 + dragX * pN5_5 / window.innerWidth;
        bY29 = sN5_2 + dragY * pN5_5 / window.innerHeight;
        bX30 = sN5_1 + -dragX * pN5_6 / window.innerWidth;
        bY30 = sN5_2 + -dragY * pN5_6 / window.innerHeight;

        bX31 = sN6_1 + dragX * pN6_1 / window.innerWidth;
        bY31 = sN6_2 + dragY * pN6_1 / window.innerHeight;
        bX32 = sN6_1 + -dragX * pN6_2 / window.innerWidth;
        bY32 = sN6_2 + -dragY * pN6_2 / window.innerHeight;
        bX33 = sN6_1 + dragX * pN6_3 / window.innerWidth;
        bY33 = sN6_2 + dragY * pN6_3 / window.innerHeight;
        bX34 = sN6_1 + -dragX * pN6_4 / window.innerWidth;
        bY34 = sN6_2 + -dragY * pN6_4 / window.innerHeight;
        bX35 = sN6_1 + dragX * pN6_5 / window.innerWidth;
        bY35 = sN6_2 + dragY * pN6_5 / window.innerHeight;
        bX36 = sN6_1 + -dragX * pN6_6 / window.innerWidth;
        bY36 = sN6_2 + -dragY * pN6_6 / window.innerHeight;

        bX37 = sN7_1 + dragX * pN7_1 / window.innerWidth;
        bY37 = sN7_2 + dragY * pN7_1 / window.innerHeight;
        bX38 = sN7_1 + -dragX * pN7_2 / window.innerWidth;
        bY38 = sN7_2 + -dragY * pN7_2 / window.innerHeight;
        bX39 = sN7_1 + dragX * pN7_3 / window.innerWidth;
        bY39 = sN7_2 + dragY * pN7_3 / window.innerHeight;
        bX40 = sN7_1 + -dragX * pN7_4 / window.innerWidth;
        bY40 = sN7_2 + -dragY * pN7_4 / window.innerHeight;
        bX41 = sN7_1 + dragX * pN7_5 / window.innerWidth;
        bY41 = sN7_2 + dragY * pN7_5 / window.innerHeight;
        bX42 = sN7_1 + -dragX * pN7_6 / window.innerWidth;
        bY42 = sN7_2 + -dragY * pN7_6 / window.innerHeight;

        bX43 = sN8_1 + dragX * pN8_1 / window.innerWidth;
        bY43 = sN8_2 + dragY * pN8_1 / window.innerHeight;
        bX44 = sN8_1 + -dragX * pN8_2 / window.innerWidth;
        bY44 = sN8_2 + -dragY * pN8_2 / window.innerHeight;
        bX45 = sN8_1 + dragX * pN8_3 / window.innerWidth;
        bY45 = sN8_2 + dragY * pN8_3 / window.innerHeight;
        bX46 = sN8_1 + -dragX * pN8_4 / window.innerWidth;
        bY46 = sN8_2 + -dragY * pN8_4 / window.innerHeight;
        bX47 = sN8_1 + dragX * pN8_5 / window.innerWidth;
        bY47 = sN8_2 + dragY * pN8_5 / window.innerHeight;
        bX48 = sN8_1 + -dragX * pN8_6 / window.innerWidth;
        bY48 = sN8_2 + -dragY * pN8_6 / window.innerHeight;

        bX49 = sN9_1 + dragX * pN9_1 / window.innerWidth;
        bY49 = sN9_2 + dragY * pN9_1 / window.innerHeight;
        bX50 = sN9_1 + -dragX * pN9_2 / window.innerWidth;
        bY50 = sN9_2 + -dragY * pN9_2 / window.innerHeight;
        bX51 = sN9_1 + dragX * pN9_3 / window.innerWidth;
        bY51 = sN9_2 + dragY * pN9_3 / window.innerHeight;
        bX52 = sN9_1 + -dragX * pN9_4 / window.innerWidth;
        bY52 = sN9_2 + -dragY * pN9_4 / window.innerHeight;
        bX53 = sN9_1 + dragX * pN9_5 / window.innerWidth;
        bY53 = sN9_2 + dragY * pN9_5 / window.innerHeight;
        bX54 = sN9_1 + -dragX * pN9_6 / window.innerWidth;
        bY54 = sN9_2 + -dragY * pN9_6 / window.innerHeight;
        
        drawShape1(bX2, bY3, bX2, bY3, 
            bX4, bY1, bX4, bX4, bY1, bY1, 
            bX5, bY4, bX5, bX5, bY4, bY4, 
            bX5, bY6, bX5, bX5, bY6, bY6, 
            bX5, bY4, bX5, bX5, bY4, bY4, 
            bX4, bY3, bX4, bX4, bY3, bY3, 
            bX1, bY2, bX1, bX1, bY2, bY2, 
            bX2, bY3, bX2, bY3);

        drawShape2(bX9, bY10, bX9, bY10, 
            bX9, bY8, bX9, bX9, bY8, bY8, 
            bX10, bY7, bX10, bX10, bY7, bY7, 
            bX8, bY10, bX8, bX8, bY10, bY10, 
            bX11, bY9, bX11, bX11, bY9, bY9, 
            bX11, bY12, bX11, bX11, bY12, bY12, 
            bX11, bY10, bX11, bX11, bY10, bY10, 
            bX9, bY10, bX9, bY10);

        drawShape3(bX17, bY16, bX17, bY16, 
            bX15, bY14, bX15, bX15, bY14, bY14, 
            bX13, bY14, bX13, bX13, bY14, bY14, 
            bX16, bY17, bX16, bX16, bY17, bY17, 
            bX17, bY16, bX17, bX17, bY16, bY16, 
            bX18, bY17, bX18, bX18, bY17, bY17, 
            bX17, bY16, bX17, bY16);

        drawShape4(bX21, bY19, bX21, bY19, 
            bX19, bY20, bX19, bX19, bY20, bY20, 
            bX20, bY23, bX20, bX20, bY23, bY23,
            bX24, bY21, bX24, bX24, bY21, bY21, 
            bX23, bY24, bX23, bX23, bY24, bY24, 
            bX24, bY23, bX24, bX24, bY23, bY23, 
            bX21, bY19, bX21, bY19);

        drawShape5(bX27, bY26, bX27, bY26, 
            bX28, bY29, bX28, bX28, bY29, bY29, 
            bX29, bY30, bX29, bX29, bY30, bY30, 
            bX28, bY29, bX28, bX28, bY29, bY29, 
            bX27, bY25, bX27, bX27, bY25, bY25, 
            bX26, bY26, bX26, bX26, bY26, bY26, 
            bX27, bY26, bX27, bY26);

        drawShape6(bX31, bY32, bX31, bY32, 
            bX32, bY33, bX32, bX32, bY33, bY33, 
            bX33, bY34, bX33, bX33, bY34, bY34, 
            bX34, bY35, bX34, bX34, bY35, bY35, 
            bX35, bY36, bX35, bX35, bY36, bY36, 
            bX31, bY32, bX31, bY32);

        drawShape7(bX37, bY38, bX37, bY38, 
            bX38, bY39, bX38, bX38, bY39, bY39, 
            bX39, bY40, bX39, bX39, bY40, bY40, 
            bX40, bY41, bX40, bX40, bY41, bY41, 
            bX41, bY42, bX41, bX41, bY42, bY42, 
            bX37, bY38, bX37, bY38);

        drawShape8(bX43, bY44, bX43, bY44, 
            bX44, bY45, bX44, bX44, bY45, bY45, 
            bX45, bY46, bX45, bX45, bY46, bY46, 
            bX46, bY47, bX46, bX46, bY47, bY47, 
            bX47, bY48, bX47, bX48, bY47, bY48, 
            bX43, bY44, bX43, bY44);

        drawShape9(bX51, bY50, bX51, bY50, 
            bX50, bY51, bX50, bX50, bY51, bY51, 
            bX51, bY52, bX51, bX51, bY52, bY52, 
            bX53, bY54, bX53, bX53, bY54, bY54, 
            bX52, bY51, bX52, bX52, bY51, bY51, 
            bX51, bY50, bX51, bY50);
    }

    function stopShape() {
        let bN1x = window.innerWidth / 1520;
        let bN1y = window.innerHeight / 960;
        let bN2x = window.innerWidth / 820;
        let bN2y = window.innerHeight / 520;
        let bN3x = window.innerWidth / 1150;
        let bN3y = window.innerHeight / 750;
        let bN4x = window.innerWidth / 1520;
        let bN4y = window.innerHeight / 1020;
        let bN5x = window.innerWidth / 2000;
        let bN5y = window.innerHeight / 1900;
        let bN6x = window.innerWidth / 1150;
        let bN6y = window.innerHeight / (1000000 / window.innerWidth);
        let bN7x = window.innerWidth / 1520;
        let bN7y = window.innerHeight / (1300000 / window.innerWidth);
        let bN8x = window.innerWidth / 820;
        let bN8y = window.innerHeight / (1000000 / window.innerWidth);
        let bN9x = window.innerWidth / 1020;
        let bN9y = window.innerHeight / (1000000 / window.innerWidth);
    
        drawShape1(bN1x, bN1y, bN1x, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1x, bN1y, bN1y, 
            bN1x, bN1y, bN1x, bN1y);

        drawShape2(bN2x, bN2y, bN2x, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2x, bN2y, bN2y, 
            bN2x, bN2y, bN2x, bN2y);

        drawShape3(bN3x, bN3y, bN3x, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3x, bN3y, bN3y, 
            bN3x, bN3y, bN3x, bN3y);

        drawShape4(bN4x, bN4y, bN4x, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4x, bN4y, bN4y, 
            bN4x, bN4y, bN4x, bN4y);

        drawShape5(bN5x, bN5y, bN5x, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5x, bN5y, bN5y, 
            bN5x, bN5y, bN5x, bN5y);

        drawShape6(bN6x, bN6y, bN6x, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6x, bN6y, bN6y, 
            bN6x, bN6y, bN6x, bN6y);

        drawShape7(bN7x, bN7y, bN7x, bN7y, 
            bN7x, bN7y, bN7x, bN7x, bN7y, bN7y, 
            bN7x, bN7y, bN7x, bN7x, bN7y, bN7y, 
            bN7x, bN7y, bN7x, bN7x, bN7y, bN7y, 
            bN7x, bN7y, bN7x, bN7x, bN7y, bN7y, 
            bN7x, bN7y, bN7x, bN7y);

        drawShape8(bN8x, bN8y, bN8x, bN8y, 
            bN8x, bN8y, bN8x, bN8x, bN8y, bN8y, 
            bN8x, bN8y, bN8x, bN8x, bN8y, bN8y, 
            bN8x, bN8y, bN8x, bN8x, bN8y, bN8y, 
            bN8x, bN8y, bN8x, bN8x, bN8y, bN8y, 
            bN8x, bN8y, bN8x, bN8y);

        drawShape9(bN9x, bN9y, bN9x, bN9y, 
            bN9x, bN9y, bN9x, bN9x, bN9y, bN9y, 
            bN9x, bN9y, bN9x, bN9x, bN9y, bN9y, 
            bN9x, bN9y, bN9x, bN9x, bN9y, bN9y, 
            bN9x, bN9y, bN9x, bN9x, bN9y, bN9y, 
            bN9x, bN9y, bN9x, bN9y);
    }

    stopShape();

    function randomPurupuru() {
        Xno1 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno1 = Math.floor(Math.random() * (window.innerHeight + 1));
        Xno2 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno2 = Math.floor(Math.random() * (window.innerHeight + 1));
        Xno3 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno3 = Math.floor(Math.random() * (window.innerHeight + 1));
        Xno4 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno4 = Math.floor(Math.random() * (window.innerHeight + 1));
        Xno5 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno5 = Math.floor(Math.random() * (window.innerHeight + (canvas5.height / 10 * 7) + 1));
        Xno6 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno6 = Math.floor(Math.random() * (window.innerHeight + 1));
        Xno7 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno7 = Math.floor(Math.random() * (window.innerHeight + 1));
        Xno8 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno8 = Math.floor(Math.random() * (window.innerHeight + 1));
        Xno9 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno9 = Math.floor(Math.random() * (window.innerHeight + 1));
        canvas1.style.transform = 'translate(' + Xno1 + 'px,' + Yno1 + 'px)';
        canvas2.style.transform = 'translate(' + Xno2 + 'px,' + Yno2 + 'px)';
        canvas3.style.transform = 'translate(' + Xno3 + 'px,' + Yno3 + 'px)';
        canvas4.style.transform = 'translate(' + Xno4 + 'px,' + Yno4 + 'px)';
        canvas5.style.transform = 'translate(' + Xno5 + 'px,' + Yno5 + 'px)';
        canvas6.style.transform = 'translate(' + Xno6 + 'px,' + Yno6 + 'px)';
        canvas7.style.transform = 'translate(' + Xno7 + 'px,' + Yno7 + 'px)';
        canvas8.style.transform = 'translate(' + Xno8 + 'px,' + Yno8 + 'px)';
        canvas9.style.transform = 'translate(' + Xno9 + 'px,' + Yno9 + 'px)';
    }

    randomPurupuru();

    function opacityAnimation() {
		$(canvas1).animate({opacity: '0'}, 3200).animate({opacity: '1'}, 3200).animate({opacity: '1'}, 3200).animate({opacity: '0'}, 3200, opacityAnimation);
        $(canvas2).animate({opacity: '0'}, 4000).animate({opacity: '1'}, 4000).animate({opacity: '1'}, 4000).animate({opacity: '0'}, 4000, opacityAnimation);
        $(canvas3).animate({opacity: '0'}, 2700).animate({opacity: '1'}, 2700).animate({opacity: '1'}, 2700).animate({opacity: '0'}, 2700, opacityAnimation);
        $(canvas4).animate({opacity: '0'}, 2100).animate({opacity: '1'}, 2100).animate({opacity: '1'}, 2100).animate({opacity: '0'}, 2100, opacityAnimation);
        $(canvas5).animate({opacity: '0'}, 1500).animate({opacity: '1'}, 1500).animate({opacity: '1'}, 1500).animate({opacity: '0'}, 1500, opacityAnimation);
        $(canvas6).animate({opacity: '0'}, 1500).animate({opacity: '1'}, 1500).animate({opacity: '1'}, 1500).animate({opacity: '0'}, 1500, opacityAnimation);
        $(canvas7).animate({opacity: '0'}, 1500).animate({opacity: '1'}, 1500).animate({opacity: '1'}, 1500).animate({opacity: '0'}, 1500, opacityAnimation);
        $(canvas8).animate({opacity: '0'}, 1500).animate({opacity: '1'}, 1500).animate({opacity: '1'}, 1500).animate({opacity: '0'}, 1500, opacityAnimation);
	}

    // opacityAnimation();

    let canvasOpacity1 = () => {
        Xno1 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno1 = Math.floor(Math.random() * (window.innerHeight + 1));
        canvas1.style.transform = 'translate(' + Xno1 + 'px,' + Yno1 + 'px)';
    }
    let canvasOpacity2 = () => {
        Xno2 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno2 = Math.floor(Math.random() * (window.innerHeight + 1));
        canvas2.style.transform = 'translate(' + Xno2 + 'px,' + Yno2 + 'px)';
    }
    let canvasOpacity3 = () => {
        Xno3 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno3 = Math.floor(Math.random() * (window.innerHeight + 1));
        canvas3.style.transform = 'translate(' + Xno3 + 'px,' + Yno3 + 'px)';
    }
    let canvasOpacity4 = () => {
        Xno4 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno4 = Math.floor(Math.random() * (window.innerHeight + 1));
        canvas4.style.transform = 'translate(' + Xno4 + 'px,' + Yno4 + 'px)';
    }
    let canvasOpacity5 = () => {
        Xno5 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno5 = Math.floor(Math.random() * (window.innerHeight + 1));
        canvas5.style.transform = 'translate(' + Xno5 + 'px,' + Yno5 + 'px)';
    }
    let canvasOpacity6 = () => {
        Xno6 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno6 = Math.floor(Math.random() * (window.innerHeight + 1));
        canvas6.style.transform = 'translate(' + Xno6 + 'px,' + Yno6 + 'px)';
    }
    let canvasOpacity7 = () => {
        Xno7 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno7 = Math.floor(Math.random() * (window.innerHeight + 1));
        canvas7.style.transform = 'translate(' + Xno7 + 'px,' + Yno7 + 'px)';
    }
    let canvasOpacity8 = () => {
        Xno8 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno8 = Math.floor(Math.random() * (window.innerHeight + 1));
        canvas8.style.transform = 'translate(' + Xno8 + 'px,' + Yno8 + 'px)';
    }
    let canvasOpacity9 = () => {
        Xno9 = Math.floor(Math.random() * (window.innerWidth + 1));
        Yno9 = Math.floor(Math.random() * (window.innerHeight + 1));
        canvas9.style.transform = 'translate(' + Xno9 + 'px,' + Yno9 + 'px)';
    }

    setInterval(canvasOpacity1, 12800);
    setInterval(canvasOpacity2, 16000);
    setInterval(canvasOpacity3, 10800);
    setInterval(canvasOpacity4, 8400);
    setInterval(canvasOpacity5, 6000);
    setInterval(canvasOpacity6, 5400);
    setInterval(canvasOpacity7, 9600);
    setInterval(canvasOpacity8, 7200);
    setInterval(canvasOpacity9, 6700);

    gradient1.style['background-image'] = 'radial-gradient(rgba(' + red1 + ', ' + green1 + ', ' + blue1 + '), rgba(25, 25, 112, 0)60%)';
    gradient2.style['background-image'] = 'radial-gradient(rgba(' + red2 + ', ' + green2 + ', ' + blue2 + '), rgba(25, 25, 112, 0)60%)';
    gradient3.style['background-image'] = 'radial-gradient(rgba(' + red3 + ', ' + green3 + ', ' + blue3 + '), rgba(25, 25, 112, 0)60%)';
    gradient4.style['background-image'] = 'radial-gradient(rgba(' + red4 + ', ' + green4 + ', ' + blue4 + '), rgba(25, 25, 112, 0)60%)';

    package1.style['background-image'] = 'radial-gradient(at 0% 0%, rgba(' + red1 + ', ' + green1 + ', ' + blue1 + '), rgba(' + red1 + ', ' + green1 + ', ' + blue1 + ', 0)60%)';
    package2.style['background-image'] = 'radial-gradient(at 100% 0%, rgba(' + red2 + ', ' + green2 + ', ' + blue2 + '), rgba(' + red2 + ', ' + green2 + ', ' + blue2 + ', 0)60%)';
    package3.style['background-image'] = 'radial-gradient(at 0% 100%, rgba(' + red3 + ', ' + green3 + ', ' + blue3 + '), rgba(' + red3 + ', ' + green3 + ', ' + blue3 + ', 0)60%)';
    package4.style['background-image'] = 'radial-gradient(at 100% 100%, rgba(' + red4 + ', ' + green4 + ', ' + blue4 + '), rgba(' + red4 + ', ' + green4 + ', ' + blue4 + ', 0)60%)';

    function mixBlendMode1() {
        canvasGroup.style['mix-blend-mode'] = 'difference';
        canvasGroup.style['-webkit-mix-blend-mode'] = 'difference';
        canvas1.style['mix-blend-mode'] = 'difference';
        canvas1.style['-webkit-mix-blend-mode'] = 'difference';
        canvas2.style['mix-blend-mode'] = 'difference';
        canvas2.style['-webkit-mix-blend-mode'] = 'difference';
        canvas3.style['mix-blend-mode'] = 'difference';
        canvas3.style['-webkit-mix-blend-mode'] = 'difference';
        canvas4.style['mix-blend-mode'] = 'difference';
        canvas4.style['-webkit-mix-blend-mode'] = 'difference';
        canvas5.style['mix-blend-mode'] = 'difference';
        canvas5.style['-webkit-mix-blend-mode'] = 'difference';
        gradient1.style['mix-blend-mode'] = 'difference';
        gradient2.style['mix-blend-mode'] = 'difference';
        gradient3.style['mix-blend-mode'] = 'difference';
        gradient4.style['mix-blend-mode'] = 'difference';
        gradient1.style['-webkit-mix-blend-mode'] = 'difference';
        gradient2.style['-webkit-mix-blend-mode'] = 'difference';
        gradient3.style['-webkit-mix-blend-mode'] = 'difference';
        gradient4.style['-webkit-mix-blend-mode'] = 'difference';
    }

    function mixBlendMode2() {
        canvasGroup.style['mix-blend-mode'] = 'saturation';
        canvasGroup.style['-webkit-mix-blend-mode'] = 'saturation';
        canvas1.style['mix-blend-mode'] = 'saturation';
        canvas1.style['-webkit-mix-blend-mode'] = 'saturation';
        canvas2.style['mix-blend-mode'] = 'saturation';
        canvas2.style['-webkit-mix-blend-mode'] = 'saturation';
        canvas3.style['mix-blend-mode'] = 'saturation';
        canvas3.style['-webkit-mix-blend-mode'] = 'saturation';
        canvas4.style['mix-blend-mode'] = 'saturation';
        canvas4.style['-webkit-mix-blend-mode'] = 'saturation';
        canvas5.style['mix-blend-mode'] = 'saturation';
        canvas5.style['-webkit-mix-blend-mode'] = 'saturation';
    }

    function mixBlendMode3() {
        canvasGroup.style['mix-blend-mode'] = 'normal';
        canvasGroup.style['-webkit-mix-blend-mode'] = 'normal';
        canvas1.style['mix-blend-mode'] = 'normal';
        canvas1.style['-webkit-mix-blend-mode'] = 'normal';
        canvas2.style['mix-blend-mode'] = 'normal';
        canvas2.style['-webkit-mix-blend-mode'] = 'normal';
        canvas3.style['mix-blend-mode'] = 'normal';
        canvas3.style['-webkit-mix-blend-mode'] = 'normal';
        canvas4.style['mix-blend-mode'] = 'normal';
        canvas4.style['-webkit-mix-blend-mode'] = 'normal';
        canvas5.style['mix-blend-mode'] = 'normal';
        canvas5.style['-webkit-mix-blend-mode'] = 'normal';
    }

    function moveObject() {
        // main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
        // gradient1.style.backgroundPosition = '' + dragX * 100 / window.innerWidth + '% ' + dragY * 100 / window.innerHeight + '%, 0';
        // gradient2.style.backgroundPosition = '' + positionX + '% ' + dragY * 100 / window.innerHeight + '%, 0';
        // gradient3.style.backgroundPosition = '' + dragX * 100 / window.innerWidth + '% ' + positionY + '%, 0';
        // gradient4.style.backgroundPosition = '' + positionX + '% ' + positionY + '%, 0';
        mainShadow.style.transform = 'translate(' + -dragX * 50 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
        booklistShadow.style.transform = 'translate(' + -dragX * 100 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
        reviewShadow.style.transform = 'translate(' + -dragX * 100 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
    }

    function mouseControl1() {
        moveShape();
        moveObject();
    }

    function mouseControl2() {
        stopShape();
        moveObject();
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
		// translate images in mobile
		// main_img.style.marginLeft = '-440px';
		// main_img.style.marginTop = '-360px';
		// $(main_img).draggable({
		// 	containment: ".mobilescreen"
		// });

        // canvasGroup.style.transform = 'scale(0.5, 0.5)';

        purchaseBox.style.transform = 'scale(0.7, 0.7)';
        complete.style.transform = 'scale(0.7, 0.7)';

        mixBlendMode1();

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
        mixBlendMode1();
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
        if(browserName == "Safari" || is_mobile) {
        }else{
            $(canvasGroup).animate({opacity: '0'}, 200).animate({opacity: '0'}, 1000).animate({opacity: '1'}, 1000);
            mixBlendMode3();
        }
        purupuru = tomaru;
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
        if(browserName == "Safari" || is_mobile) {
        }else{
            $(canvasGroup).animate({opacity: '0'}, 200).animate({opacity: '0'}, 1000).animate({opacity: '1'}, 1000);
            mixBlendMode2();
        }
        purupuru = ugoku;
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
        stopShape();
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