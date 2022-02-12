// JavaScript Document

//document.write("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js'></script>");
for (let i = 1; i < 11; i++){
	eval("let img" + i + ";");
}
// let img1;
// let img2;
// let img3;
// let img4;
// let img5;
// let img6;
// let img7;
let img = [];

function preload(){
	for (let i = 1; i < 11; i++){
		eval("img" + i + " = loadImage('book" + i + ".ipg'");
		eval("img[" + i - 1 + "] = [img" + i + "];");
	}
	// img1 = loadImage('book1.jpg')
	// img2 = loadImage('book2.jpg')
	// img3 = loadImage('book3.jpg')
	// img4 = loadImage('book4.jpg')
	// img5 = loadImage('book5.jpg')
	// img6 = loadImage('book6.jpg')
	// img7 = loadImage('book7.jpg')
	// img = [img1, img2, img3, img4, img5, img6, img7];

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250);
	frameRate(5);
}

function draw() {
let bookimg = random(img);
image(bookimg, mouseX - 200, mouseY - 300, 400, 600);
// let i = 0;
// for (let i = 0; i < bookimg.length; i++){
// 	image(bookimg[random(0, 3)], mouseX, mouseY, 500, 700);
// 	i = i + 1;
//     }
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(250);
}