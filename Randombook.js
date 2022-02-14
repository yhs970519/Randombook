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
	background(0, 0, 0, 20);
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
	let c = img.length - 0.001;
	for (let a = c; a > 5; a--) {
		let b = Math.floor(random(a));
		if (a < 0) {
			a = c;
			// img.splice(0, 0, 'img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10');
		}else {
			image(img[b], mouseX, mouseY, 200, 300);
			// img.splice(b, 1);
		}
	}
	image(img[9], 100, 100, 200, 300);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(0, 0, 0, 20);
}