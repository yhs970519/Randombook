// JavaScript Document

window.addEventListener('DOMContentLoaded', function(){
	// new image tags//////////////////////////////////////////////////
	function imgTag(imgTagGroup) {

		let imgN = 56; //+1

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
	numberArray[8] = '60, 90, 0, 0, 60, 45, 60, 45, 30, 45, 60, 0, 30, 45, 90, 0';
	numberArray[9] = '60, 90, 0, 0, 60, 45, 60, 45, 30, 45, 60, 0, 30, 45, 90, 0';
	numberArray[10] = '60, 90, 0, 0, 60, 45, 60, 45, 30, 45, 60, 0, 30, 45, 90, 0';
	// 5
	numberArray[11] = '60, 90, 60, 90, 30, 90, 60, 0, 30, 45, 90, 45, 30, 45, 90, 0';
	numberArray[12] = '60, 90, 60, 90, 30, 90, 60, 0, 30, 45, 90, 45, 30, 45, 90, 0';
	numberArray[13] = '60, 90, 60, 90, 30, 90, 60, 0, 30, 45, 90, 45, 30, 45, 90, 0';
	numberArray[14] = '60, 90, 60, 90, 30, 90, 60, 0, 30, 45, 90, 45, 30, 45, 90, 0';
	// 6
	numberArray[15] = '60, 60, 0, 0, 60, 60, 60, 0, 60, 60, 0, 60, 60, 60, 60, 60';
	numberArray[16] = '60, 60, 0, 0, 60, 60, 60, 0, 60, 60, 0, 60, 60, 60, 60, 60';
	numberArray[17] = '60, 60, 0, 0, 60, 60, 60, 0, 60, 60, 0, 60, 60, 60, 60, 60';
	// 7
	numberArray[18] = '40, 90, 40, 0, 40, 90, 80, 0, 40, 90, 40, 90, 40, 90, 80, 90';
	numberArray[19] = '40, 90, 40, 0, 40, 90, 80, 0, 40, 90, 40, 90, 40, 90, 80, 90';
	numberArray[20] = '40, 90, 40, 0, 40, 90, 80, 0, 40, 90, 40, 90, 40, 90, 80, 90';
	// 8
	numberArray[21] = '120, 45, 0, 90, 30, 90, 0, 0, 30, 90, 30, 0, 60, 90, 60, 0';
	numberArray[22] = '120, 45, 0, 90, 30, 90, 0, 0, 30, 90, 30, 0, 60, 90, 60, 0';
	numberArray[23] = '120, 45, 0, 90, 30, 90, 0, 0, 30, 90, 30, 0, 60, 90, 60, 0';
	numberArray[24] = '120, 45, 0, 90, 30, 90, 0, 0, 30, 90, 30, 0, 60, 90, 60, 0';
	// 9
	numberArray[25] = '30, 180, 60, 0, 60, 45, 0, 135, 60, 45, 0, 90, 60, 90, 0, 0';
	numberArray[26] = '30, 180, 60, 0, 60, 45, 0, 135, 60, 45, 0, 90, 60, 90, 0, 0';
	numberArray[27] = '30, 180, 60, 0, 60, 45, 0, 135, 60, 45, 0, 90, 60, 90, 0, 0';
	numberArray[28] = '30, 180, 60, 0, 60, 45, 0, 135, 60, 45, 0, 90, 60, 90, 0, 0';
	// 10
	numberArray[29] = '120, 45, 0, 90, 60, 45, 0, 0, 60, 45, 0, 45, 60, 90, 60, 0';
	numberArray[30] = '120, 45, 0, 90, 60, 45, 0, 0, 60, 45, 0, 45, 60, 90, 60, 0';
	numberArray[31] = '120, 45, 0, 90, 60, 45, 0, 0, 60, 45, 0, 45, 60, 90, 60, 0';
	numberArray[32] = '120, 45, 0, 90, 60, 45, 0, 0, 60, 45, 0, 45, 60, 90, 60, 0';
	// 11
	numberArray[33] = '30, 180, 60, 0, 30, 90, 0, 90, 30, 90, 30, 90, 60, 90, 0, 0';
	numberArray[34] = '30, 180, 60, 0, 30, 90, 0, 90, 30, 90, 30, 90, 60, 90, 0, 0';
	numberArray[35] = '30, 180, 60, 0, 30, 90, 0, 90, 30, 90, 30, 90, 60, 90, 0, 0';
	numberArray[36] = '30, 180, 60, 0, 30, 90, 0, 90, 30, 90, 30, 90, 60, 90, 0, 0';
	// 12
	numberArray[37] = '120, 45, 0, 0, 60, 90, 0, 45, 30, 90, 60, 45, 30, 90, 90, 45';
	numberArray[38] = '120, 45, 0, 0, 60, 90, 0, 45, 30, 90, 60, 45, 30, 90, 90, 45';
	// 13
	numberArray[39] = '120, 45, 0, 0, 60, 90, 0, 45, 60, 45, 60, 45, 60, 45, 60, 90';
	numberArray[40] = '120, 45, 0, 0, 60, 90, 0, 45, 60, 45, 60, 45, 60, 45, 60, 90';
	// 14
	numberArray[41] = '90, 37.5, 15, 15, 90, 37.5, 15, 52.5, 90, 37.5, 15, 90, 90, 37.5, 15, 127.5';
	// 15
	numberArray[42] = '22.5, 150, 15, 15, 22.5, 150, 37.5, 15, 22.5, 150, 60, 15, 22.5, 150, 82.5, 15';
	// 16
	numberArray[43] = '90, 37.5, 15, 127.5, 90, 37.5, 15, 90, 45, 75, 15, 15, 45, 75, 60, 15';
	numberArray[44] = '90, 37.5, 15, 127.5, 90, 37.5, 15, 90, 45, 75, 15, 15, 45, 75, 60, 15';
	numberArray[45] = '90, 37.5, 15, 127.5, 90, 37.5, 15, 90, 45, 75, 15, 15, 45, 75, 60, 15';
	// 17
	numberArray[46] = '22.5, 150, 15, 15, 22.5, 150, 37.5, 15, 45, 75, 60, 15, 45, 75, 60, 90';
	numberArray[47] = '22.5, 150, 15, 15, 22.5, 150, 37.5, 15, 45, 75, 60, 15, 45, 75, 60, 90';
	numberArray[48] = '22.5, 150, 15, 15, 22.5, 150, 37.5, 15, 45, 75, 60, 15, 45, 75, 60, 90';
	// 18
	numberArray[49] = '120, 90, 0, 0, 43, 146, 17, 17, 43, 146, 60, 17, 52, 112, 34, 34';
	numberArray[50] = '120, 90, 0, 0, 43, 146, 17, 17, 43, 146, 60, 17, 52, 112, 34, 34';
	// 19
	numberArray[51] = '45, 75, 15, 15, 45, 75, 60, 15, 45, 75, 15, 90, 45, 75, 60, 90';
	numberArray[52] = '45, 75, 15, 15, 45, 75, 60, 15, 45, 75, 15, 90, 45, 75, 60, 90';

	for (let i = 1; i < 56; i++) {
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

	// 1
	// function bookFrame1(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '100px';
	// 	frame1.style.height = '160px';
	// 	frame1.style.transform = 'translate(10px, 10px)';
	// 	frameImg1.style.marginLeft = '-10px';
	// 	frameImg1.style.marginTop = '-10px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '80px';
	// 	frame2.style.height = '140px';
	// 	frame2.style.transform = 'translate(20px, 20px)';
	// 	frameImg2.style.marginLeft = '-20px';
	// 	frameImg2.style.marginTop = '-20px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '60px';
	// 	frame3.style.height = '120px';
	// 	frame3.style.transform = 'translate(30px, 30px)';
	// 	frameImg3.style.marginLeft = '-30px';
	// 	frameImg3.style.marginTop = '-30px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '40px';
	// 	frame4.style.height = '100px';
	// 	frame4.style.transform = 'translate(40px, 40px)';
	// 	frameImg4.style.marginLeft = '-40px';
	// 	frameImg4.style.marginTop = '-40px';
	// }

	// // 2
	// function bookFrame2(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	frame1.style.width = '120px';
	// 	frame1.style.height = '36px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '120px';
	// 	frame2.style.height = '36px';
	// 	frame2.style.transform = 'translateY(36px)';
	// 	frameImg2.style.marginTop = '-36px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '120px';
	// 	frame3.style.height = '36px';
	// 	frame3.style.transform = 'translateY(72px)';
	// 	frameImg3.style.marginTop = '-72px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '120px';
	// 	frame4.style.height = '36px';
	// 	frame4.style.transform = 'translateY(108px)';
	// 	frameImg4.style.marginTop = '-108px';
	// }

	// function bookFrame2_1(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	frame1.style.width = '80px';
	// 	frame1.style.height = '45px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '80px';
	// 	frame2.style.height = '45px';
	// 	frame2.style.transform = 'translateY(45px)';
	// 	frameImg2.style.marginTop = '-45px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '80px';
	// 	frame3.style.height = '45px';
	// 	frame3.style.transform = 'translateY(90px)';
	// 	frameImg3.style.marginTop = '-90px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '80px';
	// 	frame4.style.height = '45px';
	// 	frame4.style.transform = 'translateY(135px)';
	// 	frameImg4.style.marginTop = '-135px';
	// }

	// function bookFrame2_2(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '80px';
	// 	frame1.style.height = '45px';
	// 	frame1.style.transform = 'translateX(40px)';
	// 	frameImg1.style.marginLeft = '-40px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '80px';
	// 	frame2.style.height = '45px';
	// 	frame2.style.transform = 'translate(40px, 45px)';
	// 	frameImg2.style.marginLeft = '-40px';
	// 	frameImg2.style.marginTop = '-45px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '80px';
	// 	frame3.style.height = '45px';
	// 	frame3.style.transform = 'translate(40px, 90px)';
	// 	frameImg3.style.marginLeft = '-40px';
	// 	frameImg3.style.marginTop = '-90px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '80px';
	// 	frame4.style.height = '45px';
	// 	frame4.style.transform = 'translate(40px, 135px)';
	// 	frameImg4.style.marginLeft = '-40px';
	// 	frameImg4.style.marginTop = '-135px';
	// }

	// // 3
	// function bookFrame3(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	frame1.style.width = '24px';
	// 	frame1.style.height = '180px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '24px';
	// 	frame2.style.height = '180px';
	// 	frame2.style.transform = 'translateX(24px)';
	// 	frameImg2.style.marginLeft = '-24px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '24px';
	// 	frame3.style.height = '180px';
	// 	frame3.style.transform = 'translateX(48px)';
	// 	frameImg3.style.marginLeft = '-48px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '24px';
	// 	frame4.style.height = '180px';
	// 	frame4.style.transform = 'translateX(72px)';
	// 	frameImg4.style.marginLeft = '-72px';
	// }

	// function bookFrame3_1(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	frame1.style.width = '30px';
	// 	frame1.style.height = '145px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '30px';
	// 	frame2.style.height = '145px';
	// 	frame2.style.transform = 'translateX(30px)';
	// 	frameImg2.style.marginLeft = '-30px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '30px';
	// 	frame3.style.height = '145px';
	// 	frame3.style.transform = 'translateX(60px)';
	// 	frameImg3.style.marginLeft = '-60px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '30px';
	// 	frame4.style.height = '145px';
	// 	frame4.style.transform = 'translateX(90px)';
	// 	frameImg4.style.marginLeft = '-90px';
	// }

	// function bookFrame3_2(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '30px';
	// 	frame1.style.height = '145px';
	// 	frame1.style.transform = 'translateY(35px)';
	// 	frameImg1.style.marginTop = '-35px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '30px';
	// 	frame2.style.height = '145px';
	// 	frame2.style.transform = 'translate(30px, 35px)';
	// 	frameImg2.style.marginLeft = '-30px';
	// 	frameImg2.style.marginTop = '-35px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '30px';
	// 	frame3.style.height = '145px';
	// 	frame3.style.transform = 'translate(60px, 35px)';
	// 	frameImg3.style.marginLeft = '-60px';
	// 	frameImg3.style.marginTop = '-35px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '30px';
	// 	frame4.style.height = '145px';
	// 	frame4.style.transform = 'translate(90px, 35px)';
	// 	frameImg4.style.marginLeft = '-90px';
	// 	frameImg4.style.marginTop = '-35px';
	// }

	// // 4
	// function bookFrame4(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	frame1.style.width = '60px';
	// 	frame1.style.height = '90px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '60px';
	// 	frame2.style.height = '45px';
	// 	frame2.style.transform = 'translate(60px, 45px)';
	// 	frameImg2.style.marginLeft = '-60px';
	// 	frameImg2.style.marginTop = '-45px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '30px';
	// 	frame3.style.height = '45px';
	// 	frame3.style.transform = 'translateX(60px)';
	// 	frameImg3.style.marginLeft = '-60px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '30px';
	// 	frame4.style.height = '45px';
	// 	frame4.style.transform = 'translateX(90px)';
	// 	frameImg4.style.marginLeft = '-90px';
	// }

	// function bookFrame4_1(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	frame1.style.width = '60px';
	// 	frame1.style.height = '90px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '60px';
	// 	frame2.style.height = '45px';
	// 	frame2.style.transform = 'translate(60px, 45px)';
	// 	frameImg2.style.marginLeft = '-60px';
	// 	frameImg2.style.marginTop = '-45px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '30px';
	// 	frame3.style.height = '45px';
	// 	frame3.style.transform = 'translateX(60px)';
	// 	frameImg3.style.marginLeft = '-60px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '30px';
	// 	frame4.style.height = '45px';
	// 	frame4.style.transform = 'translateX(90px)';
	// 	frameImg4.style.marginLeft = '-90px';
	// }

	// // 5
	// function bookFrame5(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '60px';
	// 	frame1.style.height = '90px';
	// 	frame1.style.transform = 'translate(60px, 90px)';
	// 	frameImg1.style.marginLeft = '-60px';
	// 	frameImg1.style.marginTop = '-90px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '30px';
	// 	frame2.style.height = '90px';
	// 	frame2.style.transform = 'translateX(60px)';
	// 	frameImg2.style.marginLeft = '-60px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '30px';
	// 	frame3.style.height = '45px';
	// 	frame3.style.transform = 'translate(90px, 45px)';
	// 	frameImg3.style.marginLeft = '-90px';
	// 	frameImg3.style.marginTop = '-45px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '30px';
	// 	frame4.style.height = '45px';
	// 	frame4.style.transform = 'translateX(90px)';
	// 	frameImg4.style.marginLeft = '-90px';
	// }

	// // 6
	// function bookFrame6(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	frame1.style.width = '60px';
	// 	frame1.style.height = '60px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '60px';
	// 	frame2.style.height = '60px';
	// 	frame2.style.transform = 'translateX(60px)';
	// 	frameImg2.style.marginLeft = '-60px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '60px';
	// 	frame3.style.height = '60px';
	// 	frame3.style.transform = 'translateY(60px)';
	// 	frameImg3.style.marginTop = '-60px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '60px';
	// 	frame4.style.height = '60px';
	// 	frame4.style.transform = 'translate(60px, 60px)';
	// 	frameImg4.style.marginLeft = '-60px';
	// 	frameImg4.style.marginTop = '-60px';
	// }

	// // 7
	// function bookFrame7(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '40px';
	// 	frame1.style.height = '90px';
	// 	frame1.style.transform = 'translateX(40px)';
	// 	frameImg1.style.marginLeft = '-40px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '40px';
	// 	frame2.style.height = '90px';
	// 	frame2.style.transform = 'translateX(80px)';
	// 	frameImg2.style.marginLeft = '-80px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '40px';
	// 	frame3.style.height = '90px';
	// 	frame3.style.transform = 'translate(40px, 90px)';
	// 	frameImg3.style.marginLeft = '-40px';
	// 	frameImg3.style.marginTop = '-90px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '40px';
	// 	frame4.style.height = '90px';
	// 	frame4.style.transform = 'translate(80px, 90px)';
	// 	frameImg4.style.marginLeft = '-80px';
	// 	frameImg4.style.marginTop = '-90px';
	// }

	// // 8
	// function bookFrame8(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '120px';
	// 	frame1.style.height = '45px';
	// 	frame1.style.transform = 'translateY(90px)';
	// 	frameImg1.style.marginTop = '-90px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	frame2.style.width = '30px';
	// 	frame2.style.height = '90px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '30px';
	// 	frame3.style.height = '90px';
	// 	frame3.style.transform = 'translateX(30px)';
	// 	frameImg3.style.marginLeft = '-30px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '60px';
	// 	frame4.style.height = '90px';
	// 	frame4.style.transform = 'translateX(60px)';
	// 	frameImg4.style.marginLeft = '-60px';
	// }

	// // 9
	// function bookFrame9(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '30px';
	// 	frame1.style.height = '180px';
	// 	frame1.style.transform = 'translateX(60px)';
	// 	frameImg1.style.marginLeft = '-60px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '60px';
	// 	frame2.style.height = '45px';
	// 	frame2.style.transform = 'translateY(135px)';
	// 	frameImg2.style.marginTop = '-135px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '60px';
	// 	frame3.style.height = '45px';
	// 	frame3.style.transform = 'translatY(90px)';
	// 	frameImg3.style.marginTop = '-90px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	frame4.style.width = '60px';
	// 	frame4.style.height = '90px';
	// }

	// // 10
	// function bookFrame10(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '120px';
	// 	frame1.style.height = '45px';
	// 	frame1.style.transform = 'translateY(90px)';
	// 	frameImg1.style.marginTop = '-90px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	frame2.style.width = '60px';
	// 	frame2.style.height = '45px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '60px';
	// 	frame3.style.height = '45px';
	// 	frame3.style.transform = 'translateY(45px)';
	// 	frameImg3.style.marginTop = '-45px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '60px';
	// 	frame4.style.height = '90px';
	// 	frame4.style.transform = 'translateX(60px)';
	// 	frameImg4.style.marginLeft = '-60px';
	// }

	// // 11
	// function bookFrame11(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '30px';
	// 	frame1.style.height = '180px';
	// 	frame1.style.transform = 'translateX(60px)';
	// 	frameImg1.style.marginLeft = '-60px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '30px';
	// 	frame2.style.height = '90px';
	// 	frame2.style.transform = 'translateY(90px)';
	// 	frameImg2.style.marginTop = '-90px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '30px';
	// 	frame3.style.height = '90px';
	// 	frame3.style.transform = 'translate(30px, 90px)';
	// 	frameImg3.style.marginLeft = '-30px';
	// 	frameImg3.style.marginTop = '-90px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	frame4.style.width = '60px';
	// 	frame4.style.height = '90px';
	// }

	// // 12
	// function bookFrame12(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	frame1.style.width = '120px';
	// 	frame1.style.height = '45px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '60px';
	// 	frame2.style.height = '90px';
	// 	frame2.style.transform = 'translateY(45px)';
	// 	frameImg2.style.marginTop = '-45px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '30px';
	// 	frame3.style.height = '90px';
	// 	frame3.style.transform = 'translate(60px, 45px)';
	// 	frameImg3.style.marginLeft = '-60px';
	// 	frameImg3.style.marginTop = '-45px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '30px';
	// 	frame4.style.height = '90px';
	// 	frame4.style.transform = 'translate(90px, 45px)';
	// 	frameImg4.style.marginLeft = '-90px';
	// 	frameImg4.style.marginTop = '-45px';
	// }

	// // 13
	// function bookFrame13(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	frame1.style.width = '120px';
	// 	frame1.style.height = '45px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '60px';
	// 	frame2.style.height = '90px';
	// 	frame2.style.transform = 'translateY(45px)';
	// 	frameImg2.style.marginTop = '-45px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '60px';
	// 	frame3.style.height = '45px';
	// 	frame3.style.transform = 'translate(60px, 45px)';
	// 	frameImg3.style.marginLeft = '-60px';
	// 	frameImg3.style.marginTop = '-45px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '60px';
	// 	frame4.style.height = '45px';
	// 	frame4.style.transform = 'translate(60px, 90px)';
	// 	frameImg4.style.marginLeft = '-60px';
	// 	frameImg4.style.marginTop = '-90px';
	// }

	// // 14
	// function bookFrame14(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '90px';
	// 	frame1.style.height = '37.5px';
	// 	frame1.style.transform = 'translate(15px, 15px)';
	// 	frameImg1.style.marginLeft = '-15px';
	// 	frameImg1.style.marginTop = '-15px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '90px';
	// 	frame2.style.height = '37.5px';
	// 	frame2.style.transform = 'translate(15px, 52.5px)';
	// 	frameImg2.style.marginLeft = '-15px';
	// 	frameImg2.style.marginTop = '-52.5px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '90px';
	// 	frame3.style.height = '37.5px';
	// 	frame3.style.transform = 'translate(15px, 90px)';
	// 	frameImg3.style.marginLeft = '-15px';
	// 	frameImg3.style.marginTop = '-90px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '90px';
	// 	frame4.style.height = '37.5px';
	// 	frame4.style.transform = 'translate(15px, 127.5px)';
	// 	frameImg4.style.marginLeft = '-15px';
	// 	frameImg4.style.marginTop = '-127.5px';
	// }

	// // 15
	// function bookFrame15(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '22.5px';
	// 	frame1.style.height = '150px';
	// 	frame1.style.transform = 'translate(15px, 15px)';
	// 	frameImg1.style.marginLeft = '-15px';
	// 	frameImg1.style.marginTop = '-15px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '22.5px';
	// 	frame2.style.height = '150px';
	// 	frame2.style.transform = 'translate(37.5px, 15px)';
	// 	frameImg2.style.marginLeft = '-37.5px';
	// 	frameImg2.style.marginTop = '-15px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '22.5px';
	// 	frame3.style.height = '150px';
	// 	frame3.style.transform = 'translate(60px, 15px)';
	// 	frameImg3.style.marginLeft = '-60px';
	// 	frameImg3.style.marginTop = '-15px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '22.5px';
	// 	frame4.style.height = '150px';
	// 	frame4.style.transform = 'translate(82.5px, 15px)';
	// 	frameImg4.style.marginLeft = '-82.5px';
	// 	frameImg4.style.marginTop = '-15px';
	// }

	// // 16
	// function bookFrame16(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '90px';
	// 	frame1.style.height = '37.5px';
	// 	frame1.style.transform = 'translate(15px, 127.5px)';
	// 	frameImg1.style.marginLeft = '-15px';
	// 	frameImg1.style.marginTop = '-127.5px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '90px';
	// 	frame2.style.height = '37.5px';
	// 	frame2.style.transform = 'translate(15px, 90px)';
	// 	frameImg2.style.marginLeft = '-15px';
	// 	frameImg2.style.marginTop = '-90px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '45px';
	// 	frame3.style.height = '75px';
	// 	frame3.style.transform = 'translate(15px, 15px)';
	// 	frameImg3.style.marginLeft = '-15px';
	// 	frameImg3.style.marginTop = '-15px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '45px';
	// 	frame4.style.height = '75px';
	// 	frame4.style.transform = 'translate(60px, 15px)';
	// 	frameImg4.style.marginLeft = '-60px';
	// 	frameImg4.style.marginTop = '-15px';
	// }

	// // 17
	// function bookFrame17(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '22.5px';
	// 	frame1.style.height = '150px';
	// 	frame1.style.transform = 'translate(15px, 15px)';
	// 	frameImg1.style.marginLeft = '-15px';
	// 	frameImg1.style.marginTop = '-15px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '22.5px';
	// 	frame2.style.height = '150px';
	// 	frame2.style.transform = 'translate(37.5px, 15px)';
	// 	frameImg2.style.marginLeft = '-37.5px';
	// 	frameImg2.style.marginTop = '-15px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '45px';
	// 	frame3.style.height = '75px';
	// 	frame3.style.transform = 'translate(60px, 15px)';
	// 	frameImg3.style.marginLeft = '-60px';
	// 	frameImg3.style.marginTop = '-15px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '45px';
	// 	frame4.style.height = '75px';
	// 	frame4.style.transform = 'translate(60px, 90px)';
	// 	frameImg4.style.marginLeft = '-60px';
	// 	frameImg4.style.marginTop = '-90px';
	// }

	// // 18
	// function bookFrame18(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	frame1.style.width = '120px';
	// 	frame1.style.height = '90px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '43px';
	// 	frame2.style.height = '146px';
	// 	frame2.style.transform = 'translate(17px, 17px)';
	// 	frameImg2.style.marginLeft = '-17px';
	// 	frameImg2.style.marginTop = '-17px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '43px';
	// 	frame3.style.height = '146px';
	// 	frame3.style.transform = 'translate(60px, 17px)';
	// 	frameImg3.style.marginLeft = '-60px';
	// 	frameImg3.style.marginTop = '-17px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '52px';
	// 	frame4.style.height = '112px';
	// 	frame4.style.transform = 'translate(34px, 34px)';
	// 	frameImg4.style.marginLeft = '-30px';
	// 	frameImg4.style.marginTop = '-30px';
	// }

	// // 19
	// function bookFrame19(rowNumber, columnNumber) {
	// 	let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
	// 	frame1.style.width = '45px';
	// 	frame1.style.height = '75px';
	// 	frame1.style.transform = 'translate(15px, 15px)';
	// 	frameImg1.style.marginLeft = '-15px';
	// 	frameImg1.style.marginTop = '-15px';
	// 	let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
	// 	frame2.style.width = '45px';
	// 	frame2.style.height = '75px';
	// 	frame2.style.transform = 'translate(60px, 15px)';
	// 	frameImg2.style.marginLeft = '-60px';
	// 	frameImg2.style.marginTop = '-15px';
	// 	let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
	// 	frame3.style.width = '45px';
	// 	frame3.style.height = '75px';
	// 	frame3.style.transform = 'translate(15px, 90px)';
	// 	frameImg3.style.marginLeft = '-15px';
	// 	frameImg3.style.marginTop = '-90px';
	// 	let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
	// 	let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
	// 	frame4.style.width = '45px';
	// 	frame4.style.height = '75px';
	// 	frame4.style.transform = 'translate(60px, 90px)';
	// 	frameImg4.style.marginLeft = '-60px';
	// 	frameImg4.style.marginTop = '-90px';
	// }

	// for (let i = 1; i < 56; i++) {
	// 	bookFrame1(i, 1);
	// 	bookFrame2(i, 2);
	// 	bookFrame3_1(i, 3);
	// 	bookFrame3_2(i, 4);
	// 	bookFrame19(i, 5);
	// 	bookFrame11(i, 6);
	// 	bookFrame5(i, 7);
	// 	bookFrame4(i, 8);
	// }

	// for (let i = 1; i < 56; i++) {
	// 	let j = i - 1;
	// 	let randomArray = [];
	// 	window["randomArray[" + j + "]"] = i;
	// 	let rn = Math.ceil(Math.random() * randomArray.length);
	// 	window["bookFrame" + rn](i, 1);
	// 	randomArray.splice(rn, 1);
	// }

	// tranlate images in pc//////////////////////////////////////////////////
	let main_img = document.querySelector(".mainImg");
	let mouseX;
	let mouseY;

	document.addEventListener("mousemove", (e) => {
		mouseX = -e.clientX * 5 / window.innerWidth;
		mouseY = -e.clientY * 10 / window.innerHeight;
		main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
		// console.log(mouseX);
		// console.log(mouseY);
	});

	// translate images in mobile//////////////////////////////////////////////////
	document.addEventListener("touchstart", (e) => {
		mouseX = -e.touches[0].clientX * 2.5 / window.innerWidth;
		mouseY = -e.touches[0].clientY * 10 / window.innerHeight;
		main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
	});
    document.addEventListener("touchmove", (e) => {
		mouseX = -e.changedTouches[0].clientX * 2.5 / window.innerWidth;
		mouseY = -e.changedTouches[0].clientY * 10 / window.innerHeight;
		main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
		// console.log(mouseX);
		// console.log(mouseY);
	});
    document.addEventListener("touchend", (e) => {
		mouseX = -e.changedTouches[0].clientX * 2.5 / window.innerWidth;
		mouseY = -e.changedTouches[0].clientY * 10 / window.innerHeight;
		main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
	});

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

	let imgN = 56; //+1

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

	// setInterval(function() { randombook(2, 5, B1img, bA1); }, 200);
	// setInterval(function() { randombook(2, 6, B7img, bA7); }, 300);
	// setInterval(function() { randombook(2, 7, B15img, bA15); }, 500);
})

// loading//////////////////////////////////////////////////
window.onload = function() {
	$(".START").delay(2000).fadeOut( 1000 );
}