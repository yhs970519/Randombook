// JavaScript Document

//'img+数字' 変数　生成//
let bookN = 11;
for (let i = 1; i < bookN; i++) {
	eval("let img" + i + ";");
}

//'img' 配列　生成//
let img = [];

function preload(){
	for (let i = 1; i < bookN; i++) {
		//'img+数字'に 順番にイメージリンクを当てる。//
		let j = i - 1;
		eval("img" + i + " = loadImage('book/book" + i + ".jpg');");
		// 'img'配列に 'img+数字' 変数を当てる。//
		eval("img[" + j + "] = img" + i + ";");
	}
}

function setup()  {
	createCanvas(windowWidth, windowHeight);
	background(0, 0, 0, 20);
	let a = Math.floor(Math.random() * img.length);
	let b = Math.floor(Math.random() * img.length);
	let c = Math.floor(Math.random() * img.length);
	image(img[a], 50, 50, 200, 300);
	image(img[b], 75, 75, 150, 250);
	image(img[c], 300, 50, 200, 300);
}

function draw() {

}

function randombook1() {
	let a = Math.floor(Math.random() * img.length);
	image(img[a], 50, 50, 200, 300);
	if(img.length > 0) {
		img.splice(a, 1);
		console.log(img.length);
	}else if(img.length <= 0) {
		img.splice(0, 0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10);
		console.log(img.length);
	}
}

setInterval(randombook1, 1500);

function randombook2() {
	let b = Math.floor(Math.random() * img.length);
	image(img[b], 75, 75, 150, 250);
}

setInterval(randombook2, 500);

function randombook3() {
	let c = Math.floor(Math.random() * img.length);
	image(img[c], 300, 50, 200, 300);
}

setInterval(randombook3, 1000);

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(0, 0, 0, 20);
}