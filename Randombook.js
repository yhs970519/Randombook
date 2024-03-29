// JavaScript Document

window.addEventListener('DOMContentLoaded', function(){
	// new image tags//////////////////////////////////////////////////
	function imgTag(imgTagGroup) {

		let imgN = 51; //+1

		let linkArray = [];
		linkArray[0] = 'Full random/Full random.html';
		linkArray[1] = 'Bestseller/Bestseller.html';
		linkArray[2] = 'Novel & Essay/Novel & Essay.html';
		linkArray[3] = 'Science/Science.html';
		linkArray[4] = 'Joseph Campbell/Joseph Campbell.html';
		linkArray[5] = 'Daivd Hume/Daivd Hume.html';

		let randomnumber = Math.floor(Math.random() * linkArray.length);

		for (let i = 1; i < imgN; i++) {
			let bookLink = document.createElement("a");
			let hrefNode = document.createAttribute("href");
			let classNode = document.createAttribute("class");
			eval("hrefNode.value = '" + linkArray[randomnumber] + "';");
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
	let clickSign = document.querySelector(".clickSign");
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

		clickSign.style.opacity = '1';

		$(".mainImg").draggable({
			containment: ".mobilescreen"
		});
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

	// button transition//////////////////////////////////////////////////
	let category = document.querySelector(".category");
	let category2 = document.querySelector(".category2");
	let mypage = document.querySelector(".mypage");
	let mypage2 = document.querySelector(".mypage2");
	let nav = document.querySelector("nav");
	let aside = document.querySelector("aside");
	let nav_ul = document.querySelector(".nav");
	let aside_ul = document.querySelector(".aside");
	let quotation = document.querySelector(".quotation");

	nav.style.transform = 'translateX(-100%)';
	aside.style.transform = 'translateX(100%)';
	nav_ul.style.transform = 'translateX(-80px)';
    aside_ul.style.transform = 'translateX(80px)';

	category.onclick = categoryClick;
	category2.onclick = categoryClick2;
	mypage.onclick = mypageClick;
	mypage2.onclick = mypageClick2;
	quotation.onclick =  mainImg;
	
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

	function mainImg() {
		main_img.style.opacity = '1';
		main_img.style.visibility = 'visible';
		main_img.style.filter = 'blur(0)';
		main_img.style['-webkit-filter'] = 'blur(0)';
		quotation.style.animation = 'blur 3s ease';
	}

	// viewport transition//////////////////////////////////////////////////
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

	$(quotation).hover(function() {
		$(this).css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(this).css("color", "black");
	});

	// active & animation//////////////////////////////////////////////////
	$(".ract").draggable();

	function colorAnimation() {
		$(".quote span, .source").animate({backgroundColor: 'rgba(' + red + ', ' + green + ', ' + blue + ', 0.2)'}, 3000).animate({backgroundColor: 'rgba(248, 248, 255, 0.2)'}, 1500, colorAnimation);
		$(".clickSign").animate({color: 'rgba(' + red + ', ' + green + ', ' + blue + ', 0.5)'}, 3000).animate({color: 'rgba(248, 248, 255, 0)'}, 1500, colorAnimation);
	}
	colorAnimation();
	
	let quotationBox = document.querySelector(".quotationBox");
	let quotationGroup = [];
	quotationGroup[0] = '<span class="quote"><span>いつかはついに平穏に達するために、</span><br><span>君の世界を狭め、</span><br><span>君の魂を単純化するのではなく、</span><br><span>より多くの世界を、結局はこの世界全体を</span><br><span>君の苦痛に満ちた魂に</span><br><span>受け入れなければならない。</span></span><div class="source">『荒野の狼』より</div>';
	quotationGroup[1] = '<span class="quote"><span>真の知とは、</span><br><span>知るべきもの、知れるものだけを</span><br><span>知ればいいものではない。</span><br><span>知れたはずのもの、</span><br><span>知ってはならないものまでを</span><br><span>知ることである。</span></span><div class="source">『薔薇の名前』より</div>';
	quotationGroup[2] = '<span class="quote"><span>本当の探検というのは、</span><br><span>新しい景色を探すことではなく、</span><br><span>新しい目で旅に出ることである。</span><br></span><div class="source">マルセル・プルースト</div>';
	quotationGroup[3] = '<span class="quote"><span>苦境に陥るのは</span><br><span>何かを知っていないためではなく、</span><br><span>何かを確実に知っているという</span><br><span>勘違いのためである。</span></span><div class="source">マーク・トウェイン</div>';
	quotationGroup[4] = '<span class="quote"><span>全てには教訓が込められている。</span><br><span>ただそれを見つけられる時にのみ。</span></span><div class="source">『ふしぎの国のアリス』より</div>';
	quotationGroup[5] = '<span class="quote"><span>誰がイカれているのか?</span><br><span>この先成し遂げられる世を想像する</span><br><span>私がイカれているのか?</span><br><span>それとも世をありのままでしか</span><br><span>見ない者がイカれているのか?</span></span><div class="source">『ドン・キホーテ』より</div>';
	let quotationRandom = Math.floor(Math.random() * quotationGroup.length);
	quotationBox.innerHTML = quotationGroup[quotationRandom];
});

// loading//////////////////////////////////////////////////
window.onload = function() {
	$(".START").delay(2000).fadeOut( 1000 );
}