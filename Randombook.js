// JavaScript Document

window.addEventListener('DOMContentLoaded', function(){
	// new image tags
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

	// image frames
	function bookFrame1(rowNumber, columnNumber) {
		let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
		let frameImg1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + " img");
		frame1.style.width = '100px';
		frame1.style.height = '160px';
		frame1.style.transform = 'translate(10px, 10px)';
		frameImg1.style.marginTop = '-10px';
		frameImg1.style.marginLeft = '-10px';
		let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
		let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
		frame2.style.width = '80px';
		frame2.style.height = '140px';
		frame2.style.transform = 'translate(20px, 20px)';
		frameImg2.style.marginTop = '-20px';
		frameImg2.style.marginLeft = '-20px';
		let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
		let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
		frame3.style.width = '60px';
		frame3.style.height = '120px';
		frame3.style.transform = 'translate(30px, 30px)';
		frameImg3.style.marginTop = '-30px';
		frameImg3.style.marginLeft = '-30px';
		let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
		let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
		frame4.style.width = '40px';
		frame4.style.height = '100px';
		frame4.style.transform = 'translate(40px, 40px)';
		frameImg4.style.marginTop = '-40px';
		frameImg4.style.marginLeft = '-40px';
	}

	function bookFrame2(rowNumber, columnNumber) {
		let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
		frame1.style.width = '120px';
		frame1.style.height = '36px';
		let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
		let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
		frame2.style.width = '120px';
		frame2.style.height = '36px';
		frame2.style.transform = 'translateY(36px)';
		frameImg2.style.marginTop = '-36px';
		let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
		let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
		frame3.style.width = '120px';
		frame3.style.height = '36px';
		frame3.style.transform = 'translateY(72px)';
		frameImg3.style.marginTop = '-72px';
		let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
		let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
		frame4.style.width = '120px';
		frame4.style.height = '36px';
		frame4.style.transform = 'translateY(108px)';
		frameImg4.style.marginTop = '-108px';
	}

	function bookFrame3(rowNumber, columnNumber) {
		let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
		frame1.style.width = '24px';
		frame1.style.height = '180px';
		let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
		let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
		frame2.style.width = '24px';
		frame2.style.height = '180px';
		frame2.style.transform = 'translateX(24px)';
		frameImg2.style.marginLeft = '-24px';
		let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
		let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
		frame3.style.width = '24px';
		frame3.style.height = '180px';
		frame3.style.transform = 'translateX(48px)';
		frameImg3.style.marginLeft = '-48px';
		let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
		let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
		frame4.style.width = '24px';
		frame4.style.height = '180px';
		frame4.style.transform = 'translateX(72px)';
		frameImg4.style.marginLeft = '-72px';
	}

	function bookFrame4(rowNumber, columnNumber) {
		let frame1 = document.querySelector(".smallFrame1_" + rowNumber + "_" + columnNumber + "");
		frame1.style.width = '60px';
		frame1.style.height = '90px';
		let frame2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + "");
		let frameImg2 = document.querySelector(".smallFrame2_" + rowNumber + "_" + columnNumber + " img");
		frame2.style.width = '60px';
		frame2.style.height = '45px';
		frame2.style.transform = 'translate(60px, 45px)';
		frameImg2.style.marginTop = '-45px';
		frameImg2.style.marginLeft = '-60px';
		let frame3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + "");
		let frameImg3 = document.querySelector(".smallFrame3_" + rowNumber + "_" + columnNumber + " img");
		frame3.style.width = '30px';
		frame3.style.height = '45px';
		frame3.style.transform = 'translateX(60px)';
		frameImg3.style.marginLeft = '-60px';
		let frame4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + "");
		let frameImg4 = document.querySelector(".smallFrame4_" + rowNumber + "_" + columnNumber + " img");
		frame4.style.width = '30px';
		frame4.style.height = '45px';
		frame4.style.transform = 'translateX(90px)';
		frameImg4.style.marginLeft = '-90px';
	}

	for (let i = 1; i < 56; i++) {
		bookFrame3(i, 1);
		bookFrame4(i, 2);
		bookFrame1(i, 3);
		bookFrame2(i, 4);
		bookFrame3(i, 5);
		bookFrame4(i, 6);
		bookFrame1(i, 7);
		bookFrame2(i, 8);
	}

	// for (let i = 1; i < 9; i++) {
	// 	bookFrame1(1, i);
	// 	bookFrame2(2, i);
	// 	bookFrame3(3, i);
	// 	bookFrame1(4, i);
	// 	bookFrame2(5, i);
	// 	bookFrame3(6, i);
	// 	bookFrame1(7, i);
	// 	bookFrame2(8, i);
	// }

	// tranlate images in pc
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

	// translate images in mobile
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

	// book images array
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

	// random book images
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

window.onload = function() {
	$(".START").delay(2000).fadeOut( 1000 );
}