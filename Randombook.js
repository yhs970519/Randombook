// JavaScript Document

//document.write("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js'></script>");

//'img+숫자' 변수 생성//
let bookN = 11;
for (let i = 1; i < bookN; i++) {
	eval("let img" + i + ";");
}

//'img' 배열 생성//
let img = [];

function preload(){
	
	for (let i = 1; i < bookN; i++) {
		//'img+숫자'에 순서대로 이미지 링크 할당하는 변수 생성//
		let j = i - 1;
		eval("img" + i + " = loadImage('book/book" + i + ".jpg');");
		//'img'배열에 순서대로 'img+숫자' 변수 할당
		eval("img[" + j + "] = img" + i + ";");
	}
}

function setup()  {
	createCanvas(windowWidth, windowHeight);
	background(255, 255, 255, 10);
}

// function draw() {
// 	//'bookimg'는 'img' 배열 속 값을 랜덤으로 섞는 변수//
// 	let bookimg = random(img);
// 	image(bookimg, 50, 50, 200, 300);
// 	image(bookimg, windowWidth - 250, 50, 200, 300);
// 	image(bookimg, 50, windowHeight - 350, 200, 300);
// 	image(bookimg, windowWidth - 250, windowHeight - 350, 200, 300);

// 	fill('powderblue');
// 	rect(mouseX - 75, mouseY - 75, 150);
// }

function draw() {
	let bg1 = random(0, 11);
	image(img[bg1], 50, 50, 200, 300);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(255, 255, 255, 10);
}