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

function preload(){
	for (let i = 1; i < bookN; i++) {
		//'Bnimg+数字'に 順番にイメージリンクを当てる。//
		let j = i - 1;
		eval("B1img" + i + " = loadImage('book1/book" + i + ".jpg');");
		eval("B2img" + i + " = loadImage('book2/book" + i + ".png');");
		eval("B3img" + i + " = loadImage('book3/book" + i + ".png');");
		// 'Bnimg'配列に 'img+数字' 変数を当てる。//
		eval("B1img[" + j + "] = B1img" + i + ";");
		eval("B2img[" + j + "] = B2img" + i + ";");
		eval("B3img[" + j + "] = B3img" + i + ";");
	}
}

function setup()  {
	createCanvas(windowWidth, windowHeight);
	background(0, 0, 0, 20);
	let a = Math.floor(Math.random() * B1img.length);
	let b = Math.floor(Math.random() * B2img.length);
	let c = Math.floor(Math.random() * B3img.length);
	image(B1img[a], 50, 50, 200, 300);
	image(B2img[b], 75, 75, 150, 250);
	image(B3img[c], 300, 50, 200, 300);
}

function draw() {
	fill(black);
	rect(50, 50, 100);
}

function randombook1() {
	let a = Math.floor(Math.random() * B1img.length);
	if(B1img.length > 0) {
		image(B1img[a], 50, 50, 200, 300);
		B1img.splice(a, 1);
	}else if(B1img.length <= 0) {
		B1img.splice(0, 0, B1img1, B1img2, B1img3, B1img4, B1img5, B1img6, B1img7, B1img8, B1img9, B1img10);
		image(B1img[a], 50, 50, 200, 300);
	}
}

setInterval(randombook1, 1500);

function randombook2() {
	let b = Math.floor(Math.random() * B2img.length);
	if(B2img.length > 0) {
		image(B2img[b], 75, 75, 150, 250);
		B2img.splice(b, 1);
	}else if(B2img.length <= 0) {
		B2img.splice(0, 0, B2img1, B2img2, B2img3, B2img4, B2img5, B2img6, B2img7, B2img8, B2img9, B2img10);
		image(B2img[b], 75, 75, 150, 250);
	}
}

setInterval(randombook2, 500);

function randombook3() {
	let c = Math.floor(Math.random() * B3img.length);
	if(B3img.length > 0) {
		image(B3img[c], 300, 50, 200, 300);
		B3img.splice(c, 1);
	}else if(B3img.length <= 0) {
		B3img.splice(0, 0, B3img1, B3img2, B3img3, B3img4, B3img5, B3img6, B3img7, B3img8, B3img9, B3img10);
		image(B3img[c], 300, 50, 200, 300);
	}
}

setInterval(randombook3, 1000);

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(0, 0, 0, 20);
}