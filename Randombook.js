// JavaScript Document

window.addEventListener('DOMContentLoaded', function(){
	// new image tags
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

			document.querySelector(".bookLink" + i + "_" + imgTagGroup + "").appendChild(bookImg);
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

	let imgN = 51; //+1
	let rN1 = Math.ceil(Math.random() * 1400) + 500;
	let rN2 = Math.ceil(Math.random() * 1400) + 500;
	let rN3 = Math.ceil(Math.random() * 1400) + 500;
	let rN4 = Math.ceil(Math.random() * 1400) + 500;
	let rN5 = Math.ceil(Math.random() * 1400) + 500;
	let rN6 = Math.ceil(Math.random() * 1400) + 500;
	let rN7 = Math.ceil(Math.random() * 1400) + 500;
	let rN8 = Math.ceil(Math.random() * 1400) + 500;
	
	for(let i = 1; i < imgN; i++) {
		let a = Math.ceil(Math.random() * 15);
		let b = Math.ceil(Math.random() * 15);
		let c = Math.ceil(Math.random() * 15);
		let d = Math.ceil(Math.random() * 15);
		let e = Math.ceil(Math.random() * 15);
		let f = Math.ceil(Math.random() * 15);
		let g = Math.ceil(Math.random() * 15);
		let h = Math.ceil(Math.random() * 15);
		
		eval("setInterval(function() { randombook(1, " + i + ", B" + a + "img, bA" + a + "); }, " + rN1 + ");");
		eval("setInterval(function() { randombook(2, " + i + ", B" + b + "img, bA" + b + "); }, " + rN2 + ");");
		eval("setInterval(function() { randombook(3, " + i + ", B" + c + "img, bA" + c + "); }, " + rN3 + ");");
		eval("setInterval(function() { randombook(4, " + i + ", B" + d + "img, bA" + d + "); }, " + rN4 + ");");
		eval("setInterval(function() { randombook(5, " + i + ", B" + e + "img, bA" + e + "); }, " + rN5 + ");");
		eval("setInterval(function() { randombook(6, " + i + ", B" + f + "img, bA" + f + "); }, " + rN6 + ");");
		eval("setInterval(function() { randombook(7, " + i + ", B" + g + "img, bA" + g + "); }, " + rN7 + ");");
		eval("setInterval(function() { randombook(8, " + i + ", B" + h + "img, bA" + h + "); }, " + rN8 + ");");
	}

	// setInterval(function() { randombook(2, 5, B1img, bA1); }, 200);
	// setInterval(function() { randombook(2, 6, B7img, bA7); }, 300);
	// setInterval(function() { randombook(2, 7, B15img, bA15); }, 500);
})