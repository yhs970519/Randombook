// JavaScript Document



//'Bnimg+数字' 変数　生成//
let bookN = 11;

//'Bnimg' 配列　生成//
let B1img = [];
let B2img = [];
let B3img = [];

for (let i = 1; i < bookN; i++) {
	let j = i - 1;
	eval("B1img[" + j + "] = 'book1/book" + i + ".jpg';");
	eval("B2img[" + j + "] = 'book2/book" + i + ".png';");
	eval("B3img[" + j + "] = 'book3/book" + i + ".png';");
}

// function randombook0()  {
// 	let a = Math.floor(Math.random() * B1img.length);
// 	let b = Math.floor(Math.random() * B2img.length);
// 	let c = Math.floor(Math.random() * B3img.length);
// 	document.querySelector(".book1").src = B1img[a];
// 	document.querySelector(".book2").src = B2img[b];
// 	document.querySelector(".book3").src = B3img[c];
// }

// let bookimg1;
// let bookimg2;
// let bookimg3;
// // let bookimgArray = [];

// function Randombooks() {
//     bookimg1 = document.querySelector(".book1");
// 	bookimg2 = document.querySelector(".book2");
// 	bookimg3 = document.querySelector(".book3");
//     // bookimgArray = [bookimg1, bookimg2, bookimg3];
// }

// setInterval(Randombooks, 1);

// let booklink = bookimgArray[nom - 1];

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

// function randombook1() {
// 	let a = Math.floor(Math.random() * B1img.length);
// 	if(B1img.length > 0) {
// 		bookimg1.src = B1img[a];
// 		B1img.splice(a, 1);
// 	}else if(B1img.length <= 0) {
// 		for(let i = 1; i < bookN; i++) {
// 			let j = i - 1;
// 			eval("B1img[" + j + "] = 'book1/book" + i + ".jpg';");
// 			// eval("B" + 1 + "img[" + j + "] = 'book" + 1 + "/book" + i + "." + 'jpg' + "';");
// 		}
// 		bookimg1.src = B1img[a];
// 	}
// }

// setInterval(randombook1, 1500);

// function randombook2() {
// 	let b = Math.floor(Math.random() * B2img.length);
// 	if(B2img.length > 0) {
// 		document.querySelector(".book2").src = B2img[b];
// 		B2img.splice(b, 1);
// 	}else if(B2img.length <= 0) {
// 		for(let i = 1; i < bookN; i++) {
// 			let j = i - 1;
// 			eval("B2img[" + j + "] = 'book2/book" + i + ".png';");
// 		}
// 		document.querySelector(".book2").src = B2img[b];
// 	}
// }

// setInterval(randombook2, 500);

// function randombook3() {
// 	let c = Math.floor(Math.random() * B3img.length);
// 	if(B3img.length > 0) {
// 		document.querySelector(".book3").src = B3img[c];
// 		B3img.splice(c, 1);
// 	}else if(B3img.length <= 0) {
// 		for(let i = 1; i < bookN; i++) {
// 			let j = i - 1;
// 			eval("B3img[" + j + "] = 'book3/book" + i + ".png';");
// 		}
// 		document.querySelector(".book3").src = B3img[c];
// 	}
// }

// setInterval(randombook3, 1000);