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

	setInterval(function() { randombook(2, 5, B1img, 'bookArray1(1);'); }, 200);
	setInterval(function() { randombook(2, 6, B7img, 'bookArray2(7, 2, 3);'); }, 300);
	setInterval(function() { randombook(2, 7, B15img, 'bookArray3(15, 3, 2);'); }, 500);

	// setInterval(function randombook2() {
	// 	let nom = 5;
	// 	let imgTagGroup = 2;
	// 	let bookarray = B14img;
	// 	let arrayNumber = 'bookArray3(14, 3, 1);';
	// 	let booklink = document.querySelector(".book" + nom + "_" + imgTagGroup + "");
	// 	let randomimg = Math.floor(Math.random() * bookarray.length);
	// 	if(bookarray.length > 0) {
	// 		booklink.src = bookarray[randomimg];
	// 		bookarray.splice(randomimg, 1);
	// 	}else if(bookarray.length <= 0) {
	// 		eval("" + arrayNumber + "");
	// 		booklink.src = bookarray[randomimg];
	// 	}
	// }, 200);

	// setInterval(function randombook3() {
	// 	let nom = 3;
	// 	let imgTagGroup = 3;
	// 	let bookarray = B3img;
	// 	let imgformat = 'png';
	// 	let booklink = document.querySelector(".bookLink" + nom + "_" + imgTagGroup + "");
	// 	let randomimg = Math.floor(Math.random() * bookarray.length);
	// 	if(bookarray.length > 0) {
	// 		booklink.src = bookarray[randomimg];
	// 		bookarray.splice(randomimg, 1);
	// 	}else if(bookarray.length <= 0) {
	// 		for(let i = 1; i < bookN; i++) {
	// 			let j = i - 1;
	// 			eval("B" + nom + "img[" + j + "] = 'book" + nom + "/book" + i + "." + imgformat + "';");
	// 		}
	// 		booklink.src = bookarray[randomimg];
	// 	}
	// }, 1000);


	// setInterval(function randombook4() {
	// 	let num = 4;
	// 	let num2 = 2;
	// 	let bookarray = B4img;
	// 	let imgformat = 'jpg';
	// 	let booklink = document.querySelector(".book" + num + "_" + num2 + "");
	// 	let randomimg = Math.floor(Math.random() * bookarray.length);
	// 	if(bookarray.length > 0) {
	// 		booklink.src = bookarray[randomimg];
	// 		bookarray.splice(randomimg, 1);
	// 	}else if(bookarray.length <= 0) {
	// 		for(let i = 1; i < bookN; i++) {
	// 			let j = i - 1;
	// 			eval("B" + num + "img[" + j + "] = 'book1/book" + i + "." + imgformat + "';");
	// 		}
	// 		booklink.src = bookarray[randomimg];
	// 	}
	// }, 200);
})


