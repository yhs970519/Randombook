// JavaScript Document

window.onload = function() {
	// new image tags
	let imgN = 21; //+1
	for (let i = 1; i < imgN; i++) {
		let a = Math.ceil(Math.random() * 2) + 1;
		let b = Math.ceil(Math.random() * 10);
		let bookImg = document.createElement("img");
		let srcNode = document.createAttribute("src");
		let altNode = document.createAttribute("alt");
		let classNode = document.createAttribute("class");
		eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
		eval("altNode.value = 'randombookimage" + i + "';");
		eval("classNode.value = 'book" + i + "';");
		bookImg.setAttributeNode(srcNode);
		bookImg.setAttributeNode(altNode);
		bookImg.setAttributeNode(classNode);
		document.querySelector(".main_img").appendChild(bookImg);
	}

	for (let i = 1; i < imgN; i++) {
		let number = 2;
		let a = Math.ceil(Math.random() * 2) + 1;
		let b = Math.ceil(Math.random() * 10);
		let bookImg = document.createElement("img");
		let srcNode = document.createAttribute("src");
		let altNode = document.createAttribute("alt");
		let classNode = document.createAttribute("class");
		eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
		eval("altNode.value = 'randombookimage" + i + "_" + number + "';");
		eval("classNode.value = 'book" + i + "_" + number + "';");
		bookImg.setAttributeNode(srcNode);
		bookImg.setAttributeNode(altNode);
		bookImg.setAttributeNode(classNode);
		document.querySelector(".main_img" + number + "").appendChild(bookImg);
	}

	for (let i = 1; i < imgN; i++) {
		let number = 3;
		let a = Math.ceil(Math.random() * 2) + 1;
		let b = Math.ceil(Math.random() * 10);
		let bookImg = document.createElement("img");
		let srcNode = document.createAttribute("src");
		let altNode = document.createAttribute("alt");
		let classNode = document.createAttribute("class");
		eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
		eval("altNode.value = 'randombookimage" + i + "_" + number + "';");
		eval("classNode.value = 'book" + i + "_" + number + "';");
		bookImg.setAttributeNode(srcNode);
		bookImg.setAttributeNode(altNode);
		bookImg.setAttributeNode(classNode);
		document.querySelector(".main_img" + number + "").appendChild(bookImg);
	}

	for (let i = 1; i < imgN; i++) {
		let number = 4;
		let a = Math.ceil(Math.random() * 2) + 1;
		let b = Math.ceil(Math.random() * 10);
		let bookImg = document.createElement("img");
		let srcNode = document.createAttribute("src");
		let altNode = document.createAttribute("alt");
		let classNode = document.createAttribute("class");
		eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
		eval("altNode.value = 'randombookimage" + i + "_" + number + "';");
		eval("classNode.value = 'book" + i + "_" + number + "';");
		bookImg.setAttributeNode(srcNode);
		bookImg.setAttributeNode(altNode);
		bookImg.setAttributeNode(classNode);
		document.querySelector(".main_img" + number + "").appendChild(bookImg);
	}

	for (let i = 1; i < imgN; i++) {
		let number = 5;
		let a = Math.ceil(Math.random() * 2) + 1;
		let b = Math.ceil(Math.random() * 10);
		let bookImg = document.createElement("img");
		let srcNode = document.createAttribute("src");
		let altNode = document.createAttribute("alt");
		let classNode = document.createAttribute("class");
		eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
		eval("altNode.value = 'randombookimage" + i + "_" + number + "';");
		eval("classNode.value = 'book" + i + "_" + number + "';");
		bookImg.setAttributeNode(srcNode);
		bookImg.setAttributeNode(altNode);
		bookImg.setAttributeNode(classNode);
		document.querySelector(".main_img" + number + "").appendChild(bookImg);
	}

	for (let i = 1; i < imgN; i++) {
		let number = 6;
		let a = Math.ceil(Math.random() * 2) + 1;
		let b = Math.ceil(Math.random() * 10);
		let bookImg = document.createElement("img");
		let srcNode = document.createAttribute("src");
		let altNode = document.createAttribute("alt");
		let classNode = document.createAttribute("class");
		eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
		eval("altNode.value = 'randombookimage" + i + "_" + number + "';");
		eval("classNode.value = 'book" + i + "_" + number + "';");
		bookImg.setAttributeNode(srcNode);
		bookImg.setAttributeNode(altNode);
		bookImg.setAttributeNode(classNode);
		document.querySelector(".main_img" + number + "").appendChild(bookImg);
	}

	for (let i = 1; i < imgN; i++) {
		let number = 7;
		let a = Math.ceil(Math.random() * 2) + 1;
		let b = Math.ceil(Math.random() * 10);
		let bookImg = document.createElement("img");
		let srcNode = document.createAttribute("src");
		let altNode = document.createAttribute("alt");
		let classNode = document.createAttribute("class");
		eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
		eval("altNode.value = 'randombookimage" + i + "_" + number + "';");
		eval("classNode.value = 'book" + i + "_" + number + "';");
		bookImg.setAttributeNode(srcNode);
		bookImg.setAttributeNode(altNode);
		bookImg.setAttributeNode(classNode);
		document.querySelector(".main_img" + number + "").appendChild(bookImg);
	}

	for (let i = 1; i < imgN; i++) {
		let number = 8;
		let a = Math.ceil(Math.random() * 2) + 1;
		let b = Math.ceil(Math.random() * 10);
		let bookImg = document.createElement("img");
		let srcNode = document.createAttribute("src");
		let altNode = document.createAttribute("alt");
		let classNode = document.createAttribute("class");
		eval("srcNode.value = 'book" + a + "/book" + b + ".png';");
		eval("altNode.value = 'randombookimage" + i + "_" + number + "';");
		eval("classNode.value = 'book" + i + "_" + number + "';");
		bookImg.setAttributeNode(srcNode);
		bookImg.setAttributeNode(altNode);
		bookImg.setAttributeNode(classNode);
		document.querySelector(".main_img" + number + "").appendChild(bookImg);
	}

	// tranlate images in pc
	let main_img = document.querySelector(".mainImg");
	let mouseX;
	let mouseY;

	document.addEventListener("mousemove", (e) => {
		mouseX = -e.clientX * 25 / window.innerWidth;
		mouseY = -e.clientY * 25 / window.innerHeight;
		main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
		// console.log(mouseX);
		// console.log(mouseY);

		// let mX = e.clientX;
		// let mY = e.clientY;
		// let x = mX / window.innerWidth;
		// let y = mY / window.innerHeight;
		// document.querySelector(".frame_top").style.opacity = x;
		// document.querySelector(".frame_left").style.opacity = y;
		// document.querySelector(".frame_right").style.opacity = x;
		// document.querySelector(".frame_bottom").style.opacity = y;
	});

	// translate images in mobile
	document.addEventListener("touchstart", (e) => {
		mouseX = -e.touches[0].clientX * 33.33333 / window.innerWidth;
		mouseY = -e.touches[0].clientY * 33.33333 / window.innerHeight;
		main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
	});
    document.addEventListener("touchmove", (e) => {
		mouseX = -e.changedTouches[0].clientX * 33.33333 / window.innerWidth;
		mouseY = -e.changedTouches[0].clientY * 33.33333 / window.innerHeight;
		main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
		// console.log(mouseX);
		// console.log(mouseY);
	});
    document.addEventListener("touchend", (e) => {
		mouseX = -e.changedTouches[0].clientX * 33.33333 / window.innerWidth;
		mouseY = -e.changedTouches[0].clientY * 33.33333 / window.innerHeight;
		main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
	});
}

//book images
let arrayN = 11; //+1
for (let i = 1; i < arrayN; i++) {
	eval("B" + i + "img = [];");
}

let bookN = 11; //+1
for (let i = 1; i < bookN; i++) {
	let j = i - 1;
	eval("B1img[" + j + "] = 'book1/book" + i + ".jpg';");
	eval("B2img[" + j + "] = 'book2/book" + i + ".png';");
	eval("B3img[" + j + "] = 'book3/book" + i + ".png';");
}

setInterval(function randombook1() {
    let nom = 1;
    let bookarray = B1img;
    let imgformat = 'jpg';
    let booklink = document.querySelector(".book" + nom + "");
	let randomimg = Math.floor(Math.random() * bookarray.length);
	if(bookarray.length > 0) {
		booklink.src = bookarray[randomimg];
		bookarray.splice(randomimg, 1);
	}else if(bookarray.length <= 0) {
		for(let i = 1; i < bookN; i++) {
			let j = i - 1;
			eval("B" + nom + "img[" + j + "] = 'book" + nom + "/book" + i + "." + imgformat + "';");
		}
		booklink.src = bookarray[randomimg];
	}
}, 200);

setInterval(function randombook2() {
    let nom = 2;
    let bookarray = B2img;
    let imgformat = 'png';
    let booklink = document.querySelector(".book" + nom + "");
	let randomimg = Math.floor(Math.random() * bookarray.length);
	if(bookarray.length > 0) {
		booklink.src = bookarray[randomimg];
		bookarray.splice(randomimg, 1);
	}else if(bookarray.length <= 0) {
		for(let i = 1; i < bookN; i++) {
			let j = i - 1;
			eval("B" + nom + "img[" + j + "] = 'book" + nom + "/book" + i + "." + imgformat + "';");
		}
		booklink.src = bookarray[randomimg];
	}
}, 700);

setInterval(function randombook3() {
    let nom = 3;
    let bookarray = B3img;
    let imgformat = 'png';
    let booklink = document.querySelector(".book" + nom + "");
	let randomimg = Math.floor(Math.random() * bookarray.length);
	if(bookarray.length > 0) {
		booklink.src = bookarray[randomimg];
		bookarray.splice(randomimg, 1);
	}else if(bookarray.length <= 0) {
		for(let i = 1; i < bookN; i++) {
			let j = i - 1;
			eval("B" + nom + "img[" + j + "] = 'book" + nom + "/book" + i + "." + imgformat + "';");
		}
		booklink.src = bookarray[randomimg];
	}
}, 1000);