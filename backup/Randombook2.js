// JavaScript Document

//'Bnimg+数字' 変数　生成//
let bookN = 11;
for (let i = 1; i < bookN; i++) {
	eval("let B1img" + i + ";");
	eval("let B2img" + i + ";");
	eval("let B3img" + i + ";");
}

//'Bnimg' 配列　生成//
let B1img = [];
let B2img = [];
let B3img = [];

for (let i = 1; i < bookN; i++) {
	//'Bnimg+数字'に 順番にイメージリンクを当てる。//
	let j = i - 1;
	// eval("B1img" + i + " = 'book1/book" + i + ".jpg';");
	// eval("B2img" + i + " = book2/book" + i + ".png;");
	// eval("B3img" + i + " = book3/book" + i + ".png;");
	// 'Bnimg'配列に 'img+数字' 変数を当てる。//
	eval("B1img[" + j + "] = 'book1/book" + i + ".jpg';");
	eval("B2img[" + j + "] = 'book2/book" + i + ".png';");
	eval("B3img[" + j + "] = 'book3/book" + i + ".png';");
}

function randombook0()  {
	let a = Math.floor(Math.random() * B1img.length);
	let b = Math.floor(Math.random() * B2img.length);
	let c = Math.floor(Math.random() * B3img.length);
	document.querySelector(".book1").src = B1img[a];
	document.querySelector(".book2").src = B2img[b];
	document.querySelector(".book3").src = B3img[c];
	// image(B1img[a], 50, 50, 200, 300);
	// image(B2img[b], 75, 75, 150, 250);
	// image(B3img[c], 300, 50, 200, 300);
}

function randombook1() {
	let a = Math.floor(Math.random() * B1img.length);
	if(B1img.length > 0) {
		document.querySelector(".book1").src = B1img[a];
		B1img.splice(a, 1);
	}else if(B1img.length <= 0) {
		B1img.splice(0, 0, 'book1/book1.jpg', 'book1/book2.jpg', 'book1/book3.jpg', 'book1/book4.jpg', 'book1/book5.jpg', 'book1/book6.jpg', 'book1/book7.jpg', 'book1/book8.jpg', 'book1/book9.jpg', 'book1/book10.jpg');
		document.querySelector(".book1").src = B1img[a];
	}
}

setInterval(randombook1, 1500);

function randombook2() {
	let b = Math.floor(Math.random() * B2img.length);
	if(B2img.length > 0) {
		document.querySelector(".book2").src = B2img[b];
		B2img.splice(b, 1);
	}else if(B2img.length <= 0) {
		B2img.splice(0, 0, 'book2/book1.png', 'book2/book2.png', 'book2/book3.png', 'book2/book4.png', 'book2/book5.png', 'book2/book6.png', 'book2/book7.png', 'book2/book8.png', 'book2/book9.png', 'book2/book10.png');
		document.querySelector(".book2").src = B2img[b];
	}
}

setInterval(randombook2, 500);

function randombook3() {
	let c = Math.floor(Math.random() * B3img.length);
	if(B3img.length > 0) {
		document.querySelector(".book3").src = B3img[c];
		B3img.splice(c, 1);
	}else if(B3img.length <= 0) {
		B3img.splice(0, 0, 'book3/book1.png', 'book3/book2.png', 'book3/book3.png', 'book3/book4.png', 'book3/book5.png', 'book3/book6.png', 'book3/book7.png', 'book3/book8.png', 'book3/book9.png', 'book3/book10.png');
		document.querySelector(".book3").src = B3img[c];
	}
}

setInterval(randombook3, 1000);