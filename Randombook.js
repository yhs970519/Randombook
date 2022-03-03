// JavaScript Document

window.addEventListener('DOMContentLoaded', function(){
	// new image tags//////////////////////////////////////////////////
	function imgTag(imgTagGroup) {

		let imgN = 51; //+1

		for (let i = 1; i < imgN; i++) {
			let bookLink = document.createElement("a");
			let hrefNode = document.createAttribute("href");
			let classNode = document.createAttribute("class");
			eval("hrefNode.value = '';");
			eval("classNode.value = 'bookLink" + i + "_" + imgTagGroup + "';");
			bookLink.setAttributeNode(hrefNode);
			bookLink.setAttributeNode(classNode);
			document.querySelector(".main_img" + imgTagGroup + "").appendChild(bookLink);
		}

		for (let i = 1; i < imgN; i++) {
			let bookFrame = document.createElement("div");
			let classNode = document.createAttribute("class");
			eval("classNode.value = 'bookFrame" + i + "_" + imgTagGroup + "';");
			bookFrame.setAttributeNode(classNode);
			document.querySelector(".bookLink" + i + "_" + imgTagGroup + "").appendChild(bookFrame);
		}

		for (let i = 1; i < imgN; i++) {
			let a = Math.ceil(Math.random() * 3);
			let b = Math.ceil(Math.random() * 10);
			let bookImg = document.createElement("img");
			let srcNode = document.createAttribute("src");
			let altNode = document.createAttribute("alt");
			let classNode = document.createAttribute("class");
			eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
			eval("altNode.value = 'randombookimage" + i + "_" + imgTagGroup + "';");
			eval("classNode.value = 'book" + i + "_" + imgTagGroup + "';");
			bookImg.setAttributeNode(srcNode);
			bookImg.setAttributeNode(altNode);
			bookImg.setAttributeNode(classNode);
			document.querySelector(".bookFrame" + i + "_" + imgTagGroup + "").appendChild(bookImg);
		}

		// image frames
		for (let i = 1; i < imgN; i++) {
			let smallFrame1 = document.createElement("div");
			let classNode = document.createAttribute("class");
			eval("classNode.value = 'smallFrame1_" + i + "_" + imgTagGroup + "';");
			smallFrame1.setAttributeNode(classNode);
			document.querySelector(".bookFrame" + i + "_" + imgTagGroup + "").appendChild(smallFrame1);
		}

		for (let i = 1; i < imgN; i++) {
			let smallFrame2 = document.createElement("div");
			let classNode = document.createAttribute("class");
			eval("classNode.value = 'smallFrame2_" + i + "_" + imgTagGroup + "';");
			smallFrame2.setAttributeNode(classNode);
			document.querySelector(".bookFrame" + i + "_" + imgTagGroup + "").appendChild(smallFrame2);
		}
		
		for (let i = 1; i < imgN; i++) {
			let smallFrame3 = document.createElement("div");
			let classNode = document.createAttribute("class");
			eval("classNode.value = 'smallFrame3_" + i + "_" + imgTagGroup + "';");
			smallFrame3.setAttributeNode(classNode);
			document.querySelector(".bookFrame" + i + "_" + imgTagGroup + "").appendChild(smallFrame3);
		}

		for (let i = 1; i < imgN; i++) {
			let smallFrame4 = document.createElement("div");
			let classNode = document.createAttribute("class");
			eval("classNode.value = 'smallFrame4_" + i + "_" + imgTagGroup + "';");
			smallFrame4.setAttributeNode(classNode);
			document.querySelector(".bookFrame" + i + "_" + imgTagGroup + "").appendChild(smallFrame4);
		}

		// images in frames
		for (let i = 1; i < imgN; i++) {
			let a = Math.ceil(Math.random() * 3);
			let b = Math.ceil(Math.random() * 10);
			let sbookImg = document.createElement("img");
			let srcNode = document.createAttribute("src");
			let altNode = document.createAttribute("alt");
			let classNode = document.createAttribute("class");
			eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
			eval("altNode.value = 'smallrandombookimage1_" + i + "_" + imgTagGroup + "';");
			eval("classNode.value = 'sbook1_" + i + "_" + imgTagGroup + "';");
			sbookImg.setAttributeNode(srcNode);
			sbookImg.setAttributeNode(altNode);
			sbookImg.setAttributeNode(classNode);
			document.querySelector(".smallFrame1_" + i + "_" + imgTagGroup + "").appendChild(sbookImg);
		}

		for (let i = 1; i < imgN; i++) {
			let a = Math.ceil(Math.random() * 3);
			let b = Math.ceil(Math.random() * 10);
			let sbookImg = document.createElement("img");
			let srcNode = document.createAttribute("src");
			let altNode = document.createAttribute("alt");
			let classNode = document.createAttribute("class");
			eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
			eval("altNode.value = 'smallrandombookimage2_" + i + "_" + imgTagGroup + "';");
			eval("classNode.value = 'sbook2_" + i + "_" + imgTagGroup + "';");
			sbookImg.setAttributeNode(srcNode);
			sbookImg.setAttributeNode(altNode);
			sbookImg.setAttributeNode(classNode);
			document.querySelector(".smallFrame2_" + i + "_" + imgTagGroup + "").appendChild(sbookImg);
		}

		for (let i = 1; i < imgN; i++) {
			let a = Math.ceil(Math.random() * 3);
			let b = Math.ceil(Math.random() * 10);
			let sbookImg = document.createElement("img");
			let srcNode = document.createAttribute("src");
			let altNode = document.createAttribute("alt");
			let classNode = document.createAttribute("class");
			eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
			eval("altNode.value = 'smallrandombookimage3_" + i + "_" + imgTagGroup + "';");
			eval("classNode.value = 'sbook3_" + i + "_" + imgTagGroup + "';");
			sbookImg.setAttributeNode(srcNode);
			sbookImg.setAttributeNode(altNode);
			sbookImg.setAttributeNode(classNode);
			document.querySelector(".smallFrame3_" + i + "_" + imgTagGroup + "").appendChild(sbookImg);
		}

		for (let i = 1; i < imgN; i++) {
			let a = Math.ceil(Math.random() * 3);
			let b = Math.ceil(Math.random() * 10);
			let sbookImg = document.createElement("img");
			let srcNode = document.createAttribute("src");
			let altNode = document.createAttribute("alt");
			let classNode = document.createAttribute("class");
			eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
			eval("altNode.value = 'smallrandombookimage4_" + i + "_" + imgTagGroup + "';");
			eval("classNode.value = 'sbook4_" + i + "_" + imgTagGroup + "';");
			sbookImg.setAttributeNode(srcNode);
			sbookImg.setAttributeNode(altNode);
			sbookImg.setAttributeNode(classNode);
			document.querySelector(".smallFrame4_" + i + "_" + imgTagGroup + "").appendChild(sbookImg);
		}
	}

	imgTag(1);
	imgTag(2);
	imgTag(3);
	imgTag(4);
	imgTag(5);
	imgTag(6);
	imgTag(7);
	imgTag(8);

	// image frames//////////////////////////////////////////////////
	function bookFrame(rowNumber, columnNumber, 
		f1w, f1h, f1tX, f1tY, 
		f2w, f2h, f2tX, f2tY, 
		f3w, f3h, f3tX, f3tY, 
		f4w, f4h, f4tX, f4tY) {
		let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
		let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
		frame1.style.width = f1w + 'px';
		frame1.style.height = f1h + 'px';
		frame1.style.transform = 'translate(' + f1tX + 'px, ' + f1tY + 'px)';
		frameImg1.style.marginLeft = '-' + f1tX + 'px';
		frameImg1.style.marginTop = '-' + f1tY + 'px';
		let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
		let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
		frame2.style.width = f2w + 'px';
		frame2.style.height = f2h + 'px';
		frame2.style.transform = 'translate(' + f2tX + 'px, ' + f2tY + 'px)';
		frameImg2.style.marginLeft = '-' + f2tX + 'px';
		frameImg2.style.marginTop = '-' + f2tY + 'px';
		let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
		let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
		frame3.style.width = f3w + 'px';
		frame3.style.height = f3h + 'px';
		frame3.style.transform = 'translate(' + f3tX + 'px, ' + f3tY + 'px)';
		frameImg3.style.marginLeft = '-' + f3tX + 'px';
		frameImg3.style.marginTop = '-' + f3tY + 'px';
		let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
		let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
		frame4.style.width = f4w + 'px';
		frame4.style.height = f4h + 'px';
		frame4.style.transform = 'translate(' + f4tX + 'px, ' + f4tY + 'px)';
		frameImg4.style.marginLeft = '-' + f4tX + 'px';
		frameImg4.style.marginTop = '-' + f4tY + 'px';
	}

	let numberArray = [];
	// 1
	numberArray[0] = '100, 160, 10, 10, 80, 140, 20, 20, 60, 120, 30, 30, 40, 100, 40, 40';
	// 2
	numberArray[1] = '120, 36, 0, 0, 120, 36, 0, 36, 120, 36, 0, 72, 120, 36, 0, 108';
	numberArray[2] = '80, 45, 0, 0, 80, 45, 0, 45, 80, 45, 0, 90, 80, 45, 0, 135';
	numberArray[3] = '80, 45, 40, 0, 80, 45, 40, 45, 80, 45, 40, 90, 80, 45, 40, 135';
	// 3
	numberArray[4] = '24, 180, 0, 0, 24, 180, 24, 0, 24, 180, 48, 0, 24, 180, 72, 0';
	numberArray[5] = '30, 145, 0, 0, 30, 145, 30, 0, 30, 145, 60, 0, 30, 145, 90, 0';
	numberArray[6] = '30, 145, 0, 35, 30, 145, 30, 35, 30, 145, 60, 35, 30, 145, 90, 35';
	// 4
	numberArray[7] = '60, 90, 0, 0, 60, 45, 60, 45, 30, 45, 60, 0, 30, 45, 90, 0';
	numberArray[8] = '60, 90, 0, 90, 60, 45, 60, 90, 30, 45, 60, 135, 30, 45, 90, 135';
	numberArray[9] = '60, 90, 60, 90, 60, 45, 0, 90, 30, 45, 0, 135, 30, 45, 30, 135';
	numberArray[10] = '60, 90, 60, 0, 60, 45, 0, 45, 30, 45, 0, 0, 30, 45, 30, 0';
	// 5
	numberArray[11] = '60, 90, 60, 90, 30, 90, 60, 0, 30, 45, 90, 45, 30, 45, 90, 0';
	numberArray[12] = '60, 90, 60, 0, 30, 90, 60, 90, 30, 45, 90, 90, 30, 45, 90, 135';
	numberArray[13] = '60, 90, 0, 0, 30, 90, 30, 90, 30, 45, 0, 90, 30, 45, 0, 135';
	numberArray[14] = '60, 90, 0, 90, 30, 90, 30, 0, 30, 45, 0, 0, 30, 45, 0, 45';
	// 6
	numberArray[15] = '60, 60, 0, 0, 60, 60, 60, 0, 60, 60, 0, 60, 60, 60, 60, 60';
	numberArray[16] = '60, 60, 0, 60, 60, 60, 60, 60, 60, 60, 0, 120, 60, 60, 60, 120';
	numberArray[17] = '60, 60, 0, 0, 60, 60, 60, 0, 60, 60, 0, 120, 60, 60, 60, 120';
	// 7
	numberArray[18] = '40, 90, 40, 0, 40, 90, 80, 0, 40, 90, 40, 90, 40, 90, 80, 90';
	numberArray[19] = '40, 90, 0, 0, 40, 90, 40, 0, 40, 90, 0, 90, 40, 90, 40, 90';
	numberArray[20] = '40, 90, 0, 0, 40, 90, 80, 0, 40, 90, 0, 90, 40, 90, 80, 90';
	// 8
	numberArray[21] = '120, 45, 0, 90, 30, 90, 0, 0, 30, 90, 30, 0, 60, 90, 60, 0';
	numberArray[22] = '120, 45, 0, 45, 30, 90, 60, 90, 30, 90, 90, 90, 60, 90, 0, 90';
	// 9
	numberArray[23] = '30, 180, 30, 0, 60, 45, 60, 135, 60, 45, 60, 90, 60, 90, 60, 0';
	numberArray[24] = '30, 180, 60, 0, 60, 45, 0, 0, 60, 45, 0, 45, 60, 90, 0, 90';
	// 10
	numberArray[25] = '120, 45, 0, 90, 60, 45, 60, 0, 60, 45, 60, 45, 60, 90, 0, 0';
	numberArray[26] = '120, 45, 0, 45, 60, 45, 0, 90, 60, 45, 0, 135, 60, 90, 60, 90';
	// 11
	numberArray[27] = '30, 180, 60, 0, 30, 90, 0, 90, 30, 90, 30, 90, 60, 90, 0, 0';
	numberArray[28] = '30, 180, 30, 0, 30, 90, 60, 0, 30, 90, 90, 0, 60, 90, 60, 90';
	// 12
	numberArray[29] = '120, 45, 0, 0, 60, 90, 0, 45, 30, 90, 60, 45, 30, 90, 90, 45';
	numberArray[30] = '120, 45, 0, 0, 60, 90, 60, 45, 30, 90, 0, 45, 30, 90, 30, 45';
	// 13
	numberArray[31] = '120, 45, 0, 0, 60, 90, 0, 45, 60, 45, 60, 45, 60, 45, 60, 90';
	numberArray[32] = '120, 45, 0, 0, 60, 90, 60, 45, 60, 45, 0, 45, 60, 45, 0, 90';
	// 14
	numberArray[33] = '90, 37.5, 15, 15, 90, 37.5, 15, 52.5, 90, 37.5, 15, 90, 90, 37.5, 15, 127.5';
	// 15
	numberArray[34] = '22.5, 150, 15, 15, 22.5, 150, 37.5, 15, 22.5, 150, 60, 15, 22.5, 150, 82.5, 15';
	// 16
	numberArray[35] = '90, 37.5, 15, 15, 90, 37.5, 15, 52.5, 45, 75, 15, 90, 45, 75, 60, 90';
	numberArray[36] = '90, 37.5, 15, 127.5, 90, 37.5, 15, 90, 45, 75, 15, 15, 45, 75, 60, 15';
	numberArray[37] = '90, 37.5, 15, 15, 90, 37.5, 15, 127.5, 45, 75, 15, 52.5, 45, 75, 60, 52.5';
	// 17
	numberArray[38] = '22.5, 150, 15, 15, 22.5, 150, 37.5, 15, 45, 75, 60, 15, 45, 75, 60, 90';
	numberArray[39] = '22.5, 150, 60, 15, 22.5, 150, 82.5, 15, 45, 75, 15, 15, 45, 75, 15, 90';
	numberArray[40] = '22.5, 150, 15, 15, 22.5, 150, 82.5, 15, 45, 75, 37.5, 15, 45, 75, 37.5, 90';
	// 18
	numberArray[41] = '120, 90, 0, 0, 43, 146, 17, 17, 43, 146, 60, 17, 52, 112, 34, 34';
	numberArray[42] = '60, 180, 0, 0, 86, 73, 17, 17, 86, 73, 17, 90, 52, 112, 34, 34';
	// 19
	numberArray[43] = '45, 75, 15, 15, 45, 75, 60, 15, 45, 75, 15, 90, 45, 75, 60, 90';
	numberArray[44] = '60, 90, 0, 0, 60, 90, 60, 0, 60, 90, 0, 90, 70, 130, 25, 25';

	for (let i = 1; i < 51; i++) {
		let rn1 = Math.floor(Math.random() * numberArray.length);
		let rn2 = Math.floor(Math.random() * numberArray.length);
		let rn3 = Math.floor(Math.random() * numberArray.length);
		let rn4 = Math.floor(Math.random() * numberArray.length);
		let rn5 = Math.floor(Math.random() * numberArray.length);
		let rn6 = Math.floor(Math.random() * numberArray.length);
		let rn7 = Math.floor(Math.random() * numberArray.length);
		let rn8 = Math.floor(Math.random() * numberArray.length);
		eval("bookFrame(" + i + ", 1, " + numberArray[rn1] + ");");
		eval("bookFrame(" + i + ", 2, " + numberArray[rn2] + ");");
		eval("bookFrame(" + i + ", 3, " + numberArray[rn3] + ");");
		eval("bookFrame(" + i + ", 4, " + numberArray[rn4] + ");");
		eval("bookFrame(" + i + ", 5, " + numberArray[rn5] + ");");
		eval("bookFrame(" + i + ", 6, " + numberArray[rn6] + ");");
		eval("bookFrame(" + i + ", 7, " + numberArray[rn7] + ");");
		eval("bookFrame(" + i + ", 8, " + numberArray[rn8] + ");");
		// randomArray.splice(rn, 1);
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

	let eye1 = circle1.getBoundingClientRect();
	let eye2 = circle2.getBoundingClientRect();
	let bar1 = document.querySelector(".bar1");
	let bar2 = document.querySelector(".bar2");
	let rotateEyes = function(mouseX, mouseY) {
		let eyeAngle1 = Math.atan2(mouseY - eye1.y + eye1.height * 0.5, mouseX - eye1.x + eye1.width * 0.5);
		let eyeAngle2 = Math.atan2(mouseY - eye2.y + eye2.height * 0.5, mouseX - eye2.x + eye2.width * 0.5);
		bar1.style.transform = 'rotate(' + 180 * eyeAngle1 / Math.PI + 'deg)';
		bar2.style.transform = 'rotate(' + 180 * eyeAngle2 / Math.PI + 'deg)';
	}
    document.addEventListener("mousemove", function (e) {
		rotateEyes(e.pageX, e.pageY)
    });

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
	let main_img = document.querySelector(".mainImg");
	let frameT = document.querySelector(".frame_top");
	let frameB = document.querySelector(".frame_bottom");
	let frameL = document.querySelector(".frame_left");
	let frameR = document.querySelector(".frame_right");
	let mouseX;
	let mouseY;

	if( is_mobile ) {
		// translate images in mobile
		main_img.style.marginLeft = '-440px';
		main_img.style.marginTop = '-360px';
		frameT.style.display = 'none';
		frameB.style.display = 'none';
		frameL.style.display = 'none';
		frameR.style.display = 'none';

		$(".mainImg").draggable({
			containment: ".mobilescreen"
		});

		// document.addEventListener("touchstart", (e) => {
		// 	mouseX = -e.touches[0].clientX * 2.5 / window.innerWidth;
		// 	mouseY = -e.touches[0].clientY * 10 / window.innerHeight;
		// 	main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
		// });
		// document.addEventListener("touchmove", (e) => {
		// 	mouseX = -e.changedTouches[0].clientX * 2.5 / window.innerWidth;
		// 	mouseY = -e.changedTouches[0].clientY * 10 / window.innerHeight;
		// 	main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
		// 	// console.log(mouseX);
		// 	// console.log(mouseY);
		// });
		// document.addEventListener("touchend", (e) => {
		// 	mouseX = -e.changedTouches[0].clientX * 2.5 / window.innerWidth;
		// 	mouseY = -e.changedTouches[0].clientY * 10 / window.innerHeight;
		// 	main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
		// });
	} else {
		// tranlate images in pc
		document.addEventListener("mousemove", (e) => {
			mouseX = -e.clientX * 5 / window.innerWidth;
			mouseY = -e.clientY * 10 / window.innerHeight;
			main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
			// console.log(mouseX);
			// console.log(mouseY);
		});
	}

	// book images array//////////////////////////////////////////////////
	let arrayN = 31; //+1

	for (let i = 1; i < arrayN; i++) {
		eval("B" + i + "img = [];");
	}

	let bookN1 = 11; //+1
	let bookN2 = 6; //+1
	
	function bookArray1(arrayNumber) {
		for (let i = 1; i < bookN1; i++) {
			let j = i - 1;
			eval("B" + arrayNumber + "img[" + j + "] = 'book" + arrayNumber + "/book" + i + ".png';");
		}
	}

	bookArray1(1);
	bookArray1(2);
	bookArray1(3); //forder "bookn" max is "3".

	function bookArray2(arrayNumber, imgNumber1, imgNumber2) {
		for (let i = 1; i < bookN2; i++) {
			let j = i - 1;
			let j2 = i + 4;
			eval("B" + arrayNumber + "img[" + j + "] = 'book" + imgNumber1 + "/book" + i + ".png';");
			eval("B" + arrayNumber + "img[" + j2 + "] = 'book" + imgNumber2 + "/book" + i + ".png';");
		}
	}

	bookArray2(4, 1, 2);
	bookArray2(5, 1, 3);
	bookArray2(6, 2, 1);
	bookArray2(7, 2, 3);
	bookArray2(8, 3, 1);
	bookArray2(9, 3, 2);

	function bookArray3(arrayNumber, imgNumber1, imgNumber2) {
		for (let i = 1; i < bookN2; i++) {
			let j = i - 1;
			let i2 = i + 5;
			let j2 = i + 4;
			eval("B" + arrayNumber + "img[" + j + "] = 'book" + imgNumber1 + "/book" + i2 + ".png';");
			eval("B" + arrayNumber + "img[" + j2 + "] = 'book" + imgNumber2 + "/book" + i2 + ".png';");
		}
	}

	bookArray3(10, 1, 2);
	bookArray3(11, 1, 3);
	bookArray3(12, 2, 1);
	bookArray3(13, 2, 3);
	bookArray3(14, 3, 1);
	bookArray3(15, 3, 2);

	let bA1 = 'bookArray1(1)';
	let bA2 = 'bookArray1(2);';
	let bA3 = 'bookArray1(3);';
	let bA4 = 'bookArray2(4, 1, 2);';
	let bA5 = 'bookArray2(5, 1, 3);';
	let bA6 = 'bookArray2(6, 2, 1);';
	let bA7 = 'bookArray2(7, 2, 3);';
	let bA8 = 'bookArray2(8, 3, 1);';
	let bA9 = 'bookArray2(9, 3, 2);';
	let bA10 = 'bookArray3(10, 1, 2);';
	let bA11 = 'bookArray3(11, 1, 3);';
	let bA12 = 'bookArray3(12, 2, 1);';
	let bA13 = 'bookArray3(13, 2, 3);';
	let bA14 = 'bookArray3(14, 3, 1);';
	let bA15 = 'bookArray3(15, 3, 2);';

	// random book images//////////////////////////////////////////////////
	function randombook(imgTagGroup, bookImageGroup, bookArray, arrayNumber) {
		let booklink = document.querySelector(".book" + bookImageGroup + "_" + imgTagGroup + "");
		let randomimg = Math.floor(Math.random() * bookArray.length);
		if(bookArray.length > 0) {
			booklink.src = bookArray[randomimg];
			bookArray.splice(randomimg, 1);
		}else if(bookArray.length <= 0) {
			eval("" + arrayNumber + "");
			booklink.src = bookArray[randomimg];
		}
	}

	function randomframe1(imgTagGroup, bookImageGroup, bookArray, arrayNumber) {
		let booklink = document.querySelector(".sbook1_" + bookImageGroup + "_" + imgTagGroup + "");
		let randomimg = Math.floor(Math.random() * bookArray.length);
		if(bookArray.length > 0) {
			booklink.src = bookArray[randomimg];
			bookArray.splice(randomimg, 1);
		}else if(bookArray.length <= 0) {
			eval("" + arrayNumber + "");
			booklink.src = bookArray[randomimg];
		}
	}

	function randomframe2(imgTagGroup, bookImageGroup, bookArray, arrayNumber) {
		let booklink = document.querySelector(".sbook2_" + bookImageGroup + "_" + imgTagGroup + "");
		let randomimg = Math.floor(Math.random() * bookArray.length);
		if(bookArray.length > 0) {
			booklink.src = bookArray[randomimg];
			bookArray.splice(randomimg, 1);
		}else if(bookArray.length <= 0) {
			eval("" + arrayNumber + "");
			booklink.src = bookArray[randomimg];
		}
	}

	function randomframe3(imgTagGroup, bookImageGroup, bookArray, arrayNumber) {
		let booklink = document.querySelector(".sbook3_" + bookImageGroup + "_" + imgTagGroup + "");
		let randomimg = Math.floor(Math.random() * bookArray.length);
		if(bookArray.length > 0) {
			booklink.src = bookArray[randomimg];
			bookArray.splice(randomimg, 1);
		}else if(bookArray.length <= 0) {
			eval("" + arrayNumber + "");
			booklink.src = bookArray[randomimg];
		}
	}

	function randomframe4(imgTagGroup, bookImageGroup, bookArray, arrayNumber) {
		let booklink = document.querySelector(".sbook4_" + bookImageGroup + "_" + imgTagGroup + "");
		let randomimg = Math.floor(Math.random() * bookArray.length);
		if(bookArray.length > 0) {
			booklink.src = bookArray[randomimg];
			bookArray.splice(randomimg, 1);
		}else if(bookArray.length <= 0) {
			eval("" + arrayNumber + "");
			booklink.src = bookArray[randomimg];
		}
	}

	let imgN = 51; //+1

	let a = Math.ceil(Math.random() * 15);
	let b = Math.ceil(Math.random() * 15);
	let c = Math.ceil(Math.random() * 15);
	let d = Math.ceil(Math.random() * 15);
	let e = Math.ceil(Math.random() * 15);
	let f = Math.ceil(Math.random() * 15);
	let g = Math.ceil(Math.random() * 15);
	let h = Math.ceil(Math.random() * 15);
	
	for(let i = 1; i < imgN; i++) {
		window["arN" + i] = Math.ceil(Math.random() * 3000) + 3000;
		window["brN" + i] = Math.ceil(Math.random() * 3000) + 3000;
		window["crN" + i] = Math.ceil(Math.random() * 3000) + 3000;
		window["drN" + i] = Math.ceil(Math.random() * 3000) + 3000;
		window["erN" + i] = Math.ceil(Math.random() * 3000) + 3000;
		window["frN" + i] = Math.ceil(Math.random() * 3000) + 3000;
		window["grN" + i] = Math.ceil(Math.random() * 3000) + 3000;
		window["hrN" + i] = Math.ceil(Math.random() * 3000) + 3000;
		eval("setInterval(function() { randombook(1, " + i + ", B" + a + "img, bA" + a + "); }, arN" + i + ");");
		eval("setInterval(function() { randombook(2, " + i + ", B" + b + "img, bA" + b + "); }, brN" + i + ");");
		eval("setInterval(function() { randombook(3, " + i + ", B" + c + "img, bA" + c + "); }, crN" + i + ");");
		eval("setInterval(function() { randombook(4, " + i + ", B" + d + "img, bA" + d + "); }, drN" + i + ");");
		eval("setInterval(function() { randombook(5, " + i + ", B" + e + "img, bA" + e + "); }, erN" + i + ");");
		eval("setInterval(function() { randombook(6, " + i + ", B" + f + "img, bA" + f + "); }, frN" + i + ");");
		eval("setInterval(function() { randombook(7, " + i + ", B" + g + "img, bA" + g + "); }, grN" + i + ");");
		eval("setInterval(function() { randombook(8, " + i + ", B" + h + "img, bA" + h + "); }, hrN" + i + ");");

		eval("setInterval(function() { randomframe1(1, " + i + ", B" + b + "img, bA" + b + "); }, crN" + i + ");");
		eval("setInterval(function() { randomframe1(2, " + i + ", B" + f + "img, bA" + f + "); }, frN" + i + ");");
		eval("setInterval(function() { randomframe1(3, " + i + ", B" + e + "img, bA" + e + "); }, hrN" + i + ");");
		eval("setInterval(function() { randomframe1(4, " + i + ", B" + g + "img, bA" + g + "); }, grN" + i + ");");
		eval("setInterval(function() { randomframe1(5, " + i + ", B" + a + "img, bA" + a + "); }, arN" + i + ");");
		eval("setInterval(function() { randomframe1(6, " + i + ", B" + h + "img, bA" + h + "); }, drN" + i + ");");
		eval("setInterval(function() { randomframe1(7, " + i + ", B" + d + "img, bA" + d + "); }, brN" + i + ");");
		eval("setInterval(function() { randomframe1(8, " + i + ", B" + c + "img, bA" + c + "); }, erN" + i + ");");

		eval("setInterval(function() { randomframe2(1, " + i + ", B" + e + "img, bA" + e + "); }, frN" + i + ");");
		eval("setInterval(function() { randomframe2(2, " + i + ", B" + a + "img, bA" + a + "); }, arN" + i + ");");
		eval("setInterval(function() { randomframe2(3, " + i + ", B" + h + "img, bA" + h + "); }, grN" + i + ");");
		eval("setInterval(function() { randomframe2(4, " + i + ", B" + c + "img, bA" + c + "); }, crN" + i + ");");
		eval("setInterval(function() { randomframe2(5, " + i + ", B" + g + "img, bA" + g + "); }, drN" + i + ");");
		eval("setInterval(function() { randomframe2(6, " + i + ", B" + b + "img, bA" + b + "); }, frN" + i + ");");
		eval("setInterval(function() { randomframe2(7, " + i + ", B" + f + "img, bA" + f + "); }, erN" + i + ");");
		eval("setInterval(function() { randomframe2(8, " + i + ", B" + d + "img, bA" + d + "); }, brN" + i + ");");
		
		eval("setInterval(function() { randomframe3(1, " + i + ", B" + f + "img, bA" + f + "); }, erN" + i + ");");
		eval("setInterval(function() { randomframe3(2, " + i + ", B" + e + "img, bA" + e + "); }, crN" + i + ");");
		eval("setInterval(function() { randomframe3(3, " + i + ", B" + d + "img, bA" + d + "); }, arN" + i + ");");
		eval("setInterval(function() { randomframe3(4, " + i + ", B" + h + "img, bA" + h + "); }, hrN" + i + ");");
		eval("setInterval(function() { randomframe3(5, " + i + ", B" + a + "img, bA" + a + "); }, drN" + i + ");");
		eval("setInterval(function() { randomframe3(6, " + i + ", B" + c + "img, bA" + c + "); }, brN" + i + ");");
		eval("setInterval(function() { randomframe3(7, " + i + ", B" + b + "img, bA" + b + "); }, frN" + i + ");");
		eval("setInterval(function() { randomframe3(8, " + i + ", B" + g + "img, bA" + g + "); }, grN" + i + ");");

		eval("setInterval(function() { randomframe4(1, " + i + ", B" + g + "img, bA" + g + "); }, hrN" + i + ");");
		eval("setInterval(function() { randomframe4(2, " + i + ", B" + c + "img, bA" + c + "); }, erN" + i + ");");
		eval("setInterval(function() { randomframe4(3, " + i + ", B" + f + "img, bA" + f + "); }, frN" + i + ");");
		eval("setInterval(function() { randomframe4(4, " + i + ", B" + e + "img, bA" + e + "); }, crN" + i + ");");
		eval("setInterval(function() { randomframe4(5, " + i + ", B" + h + "img, bA" + h + "); }, grN" + i + ");");
		eval("setInterval(function() { randomframe4(6, " + i + ", B" + d + "img, bA" + d + "); }, brN" + i + ");");
		eval("setInterval(function() { randomframe4(7, " + i + ", B" + a + "img, bA" + a + "); }, arN" + i + ");");
		eval("setInterval(function() { randomframe4(8, " + i + ", B" + b + "img, bA" + b + "); }, drN" + i + ");");
	}

	// button transition & viewport transition//////////////////////////////////////////////////
	let category = document.querySelector(".category");
	let mypage = document.querySelector(".mypage");
	let basket = document.querySelector(".basket");
	let category2 = document.querySelector(".category2");
	let mypage2 = document.querySelector(".mypage2");
	let basket2 = document.querySelector(".basket2");
	let nav = document.querySelector("nav");
	let aside = document.querySelector("aside");
	let nav_ul = document.querySelector(".nav");
	let aside_ul = document.querySelector(".aside");
	let textSpace1 = document.getElementsByClassName("CT");
	let textSpace2 = document.getElementsByClassName("ct");
	let logo = document.querySelector(".logo");
	let TEXT = document.querySelector(".TEXT");
	let text1 = document.querySelector(".text1");
	let text2 = document.querySelector(".text2");
	let text3 = document.querySelector(".text3");

	nav.style.transform = 'translateX(-100%)';
	aside.style.transform = 'translateX(100%)';

	category.onclick = categoryClick;
	mypage.onclick = mypageClick;
	category2.onclick = categoryClick2;
	mypage2.onclick = mypageClick2;
	
	function categoryClick() {
		if (nav.style.transform == 'translateX(-100%)') {
			nav.style.transform = 'translateX(0)';
			nav_ul.style.transform = 'translateX(0)';
			nav_ul.style.opacity = '1';
			category.style.backgroundColor = 'rgba(178, 34, 34, 0.4)';
		}else{
			nav.style.transform = 'translateX(-100%)';
			nav_ul.style.transform = 'translateX(-80px)';
			nav_ul.style.opacity = '0';
			category.style.backgroundColor = 'rgba(248, 248, 255, 0.4)';
		}
	}

	function categoryClick2() {
		if (nav.style.transform == 'translateX(-100%)') {
			nav.style.transform = 'translateX(0)';
			nav_ul.style.transform = 'translateX(0)';
			nav_ul.style.opacity = '1';
			category2.style.backgroundColor = 'rgba(178, 34, 34, 0.4)';
		}else{
			nav.style.transform = 'translateX(-100%)';
			nav_ul.style.transform = 'translateX(-80px)';
			nav_ul.style.opacity = '0';
			category2.style.backgroundColor = 'rgba(248, 248, 255, 0.4)';
		}
	}

	function mypageClick() {
		if (aside.style.transform == 'translateX(100%)') {
			aside.style.transform = 'translateX(0)';
			aside_ul.style.transform = 'translateX(0)';
			aside_ul.style.opacity = '1';
			mypage.style.backgroundColor = 'rgba(178, 34, 34, 0.4)';
		}else{
			aside.style.transform = 'translateX(100%)';
			aside_ul.style.transform = 'translateX(80px)';
			aside_ul.style.opacity = '0';
			mypage.style.backgroundColor = 'rgba(248, 248, 255, 0.4)';
		}
	}

	function mypageClick2() {
		if (aside.style.transform == 'translateX(100%)') {
			aside.style.transform = 'translateX(0)';
			aside_ul.style.transform = 'translateX(0)';
			aside_ul.style.opacity = '1';
			mypage2.style.backgroundColor = 'rgba(178, 34, 34, 0.4)';
		}else{
			aside.style.transform = 'translateX(100%)';
			aside_ul.style.transform = 'translateX(80px)';
			aside_ul.style.opacity = '0';
			mypage2.style.backgroundColor = 'rgba(248, 248, 255, 0.4)';
		}
	}

	if (window.matchMedia("(min-width: 700px)").matches == true) {
		category.style.zIndex = '4';
		mypage.style.zIndex = '4';
		basket.style.zIndex = '4';
		category2.style.zIndex = '-1';
		mypage2.style.zIndex = '-1';
		basket2.style.zIndex = '-1';
		category2.style.opacity = '0';
		mypage2.style.opacity = '0';
		basket2.style.opacity = '0';
		textSpace1[0].style.marginBottom = '25px';
		textSpace1[1].style.marginBottom = '25px';
		textSpace1[2].style.marginBottom = '25px';
		textSpace1[3].style.marginBottom = '25px';
		textSpace1[4].style.marginBottom = '25px';
		textSpace1[5].style.marginBottom = '25px';
		textSpace1[6].style.marginBottom = '25px';
		textSpace1[7].style.marginBottom = '25px';
		textSpace1[8].style.marginBottom = '25px';
		textSpace1[9].style.marginBottom = '25px';
		textSpace1[10].style.marginBottom = '25px';
		textSpace1[11].style.marginBottom = '25px';
		textSpace1[12].style.marginBottom = '25px';
		textSpace1[13].style.marginBottom = '25px';
		textSpace2[0].style.marginTop = '20px';
		textSpace2[1].style.marginTop = '20px';
		textSpace2[2].style.marginTop = '20px';
		textSpace2[3].style.marginTop = '20px';
		textSpace2[4].style.marginTop = '20px';
		textSpace2[5].style.marginTop = '20px';
		textSpace2[6].style.marginTop = '20px';
		textSpace2[7].style.marginTop = '20px';
		textSpace2[8].style.marginTop = '20px';
		textSpace2[9].style.marginTop = '20px';
		logo.style.flexDirection = 'row';
		TEXT.style.marginLeft = '10px';
		TEXT.style.marginTop = '0';
		TEXT.style.fontSize = '30px';
		text1.style.fontSize = '30px';
		text2.style.display = 'block';
		text3.style.display = 'block';
	  } else {
		category.style.zIndex = '-1';
		mypage.style.zIndex = '-1';
		basket.style.zIndex = '-1';
		category.style.opacity = '0';
		mypage.style.opacity = '0';
		basket.style.opacity = '0';
		category2.style.zIndex = '4';
		mypage2.style.zIndex = '4';
		basket2.style.zIndex = '4';
		textSpace1[0].style.marginBottom = '20px';
		textSpace1[1].style.marginBottom = '20px';
		textSpace1[2].style.marginBottom = '20px';
		textSpace1[3].style.marginBottom = '20px';
		textSpace1[4].style.marginBottom = '20px';
		textSpace1[5].style.marginBottom = '20px';
		textSpace1[6].style.marginBottom = '20px';
		textSpace1[7].style.marginBottom = '20px';
		textSpace1[8].style.marginBottom = '20px';
		textSpace1[9].style.marginBottom = '20px';
		textSpace1[10].style.marginBottom = '20px';
		textSpace1[11].style.marginBottom = '20px';
		textSpace1[12].style.marginBottom = '20px';
		textSpace1[13].style.marginBottom = '20px';
		textSpace2[0].style.marginTop = '15px';
		textSpace2[1].style.marginTop = '15px';
		textSpace2[2].style.marginTop = '15px';
		textSpace2[3].style.marginTop = '15px';
		textSpace2[4].style.marginTop = '15px';
		textSpace2[5].style.marginTop = '15px';
		textSpace2[6].style.marginTop = '15px';
		textSpace2[7].style.marginTop = '15px';
		textSpace2[8].style.marginTop = '15px';
		textSpace2[9].style.marginTop = '15px';
		logo.style.flexDirection = 'column';
		TEXT.style.marginLeft = '0';
		TEXT.style.marginTop = '10px';
		TEXT.style.fontSize = '16.5px';
		text1.style.fontSize = '20px';
		text2.style.display = 'inline-block';
		text3.style.display = 'inline-block';
	  }

	  window.addEventListener("resize", resizeicon);

	  function resizeicon() {
		  if(window.matchMedia("(min-width: 700px)").matches == true){
			category.style.zIndex = '4';
			mypage.style.zIndex = '4';
			basket.style.zIndex = '4';
			category2.style.zIndex = '-1';
			mypage2.style.zIndex = '-1';
			basket2.style.zIndex = '-1';
			category.style.opacity = '1';
			mypage.style.opacity = '1';
			basket.style.opacity = '1';
			category2.style.opacity = '0';
			mypage2.style.opacity = '0';
			basket2.style.opacity = '0';
			textSpace1[0].style.marginBottom = '25px';
			textSpace1[1].style.marginBottom = '25px';
			textSpace1[2].style.marginBottom = '25px';
			textSpace1[3].style.marginBottom = '25px';
			textSpace1[4].style.marginBottom = '25px';
			textSpace1[5].style.marginBottom = '25px';
			textSpace1[6].style.marginBottom = '25px';
			textSpace1[7].style.marginBottom = '25px';
			textSpace1[8].style.marginBottom = '25px';
			textSpace1[9].style.marginBottom = '25px';
			textSpace1[10].style.marginBottom = '25px';
			textSpace1[11].style.marginBottom = '25px';
			textSpace1[12].style.marginBottom = '25px';
			textSpace1[13].style.marginBottom = '25px';
			textSpace2[0].style.marginTop = '20px';
			textSpace2[1].style.marginTop = '20px';
			textSpace2[2].style.marginTop = '20px';
			textSpace2[3].style.marginTop = '20px';
			textSpace2[4].style.marginTop = '20px';
			textSpace2[5].style.marginTop = '20px';
			textSpace2[6].style.marginTop = '20px';
			textSpace2[7].style.marginTop = '20px';
			textSpace2[8].style.marginTop = '20px';
			textSpace2[9].style.marginTop = '20px';
			logo.style.flexDirection = 'row';
			TEXT.style.marginLeft = '10px';
			TEXT.style.marginTop = '0';
			TEXT.style.fontSize = '30px';
			text1.style.fontSize = '30px';
			text2.style.display = 'block';
			text3.style.display = 'block';
		} else {
			category.style.zIndex = '-1';
			mypage.style.zIndex = '-1';
			basket.style.zIndex = '-1';
			category2.style.zIndex = '4';
			mypage2.style.zIndex = '4';
			basket2.style.zIndex = '4';
			category2.style.opacity = '1';
			mypage2.style.opacity = '1';
			basket2.style.opacity = '1';
			category.style.opacity = '0';
			mypage.style.opacity = '0';
			basket.style.opacity = '0';
			textSpace1[0].style.marginBottom = '20px';
			textSpace1[1].style.marginBottom = '20px';
			textSpace1[2].style.marginBottom = '20px';
			textSpace1[3].style.marginBottom = '20px';
			textSpace1[4].style.marginBottom = '20px';
			textSpace1[5].style.marginBottom = '20px';
			textSpace1[6].style.marginBottom = '20px';
			textSpace1[7].style.marginBottom = '20px';
			textSpace1[8].style.marginBottom = '20px';
			textSpace1[9].style.marginBottom = '20px';
			textSpace1[10].style.marginBottom = '20px';
			textSpace1[11].style.marginBottom = '20px';
			textSpace1[12].style.marginBottom = '20px';
			textSpace1[13].style.marginBottom = '20px';
			textSpace2[0].style.marginTop = '15px';
			textSpace2[1].style.marginTop = '15px';
			textSpace2[2].style.marginTop = '15px';
			textSpace2[3].style.marginTop = '15px';
			textSpace2[4].style.marginTop = '15px';
			textSpace2[5].style.marginTop = '15px';
			textSpace2[6].style.marginTop = '15px';
			textSpace2[7].style.marginTop = '15px';
			textSpace2[8].style.marginTop = '15px';
			textSpace2[9].style.marginTop = '15px';
			logo.style.flexDirection = 'column';
			TEXT.style.marginLeft = '0';
			TEXT.style.marginTop = '10px';
			TEXT.style.fontSize = '16.5px';
			text1.style.fontSize = '20px';
			text2.style.display = 'inline-block';
			text3.style.display = 'inline-block';
		  }
	  }

	$(".ract").draggable();
	// $("main a").draggable({ revert: true });
})

// loading//////////////////////////////////////////////////
window.onload = function() {
	$(".START").delay(2000).fadeOut( 1000 );
}