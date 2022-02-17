// JavaScript Document

window.onload = function() {
	//new image tags
	let imgN = 33; //+1
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

	//tranlate images
	let main_img = document.querySelector(".main_img");

	document.addEventListener("mousemove", (e) => {
		let mouseX = - e.clientX * 33.33333 / window.innerWidth;
		let mouseY = - e.clientY * 33.33333 / window.innerHeight;
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