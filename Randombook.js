// JavaScript Document

//document.write("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js'></script>");

let img1;
let img2;
let img3;

function preload(){
	img1 = loadImage('book1.png')
	img2 = loadImage('book2.jpg')
	img3 = loadImage('book3.jpg')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250);
	frameRate(25);
}

function draw() {
// let bookimg = ['img1', 'img2', 'img3'];
let bookimg = new Array(); //배열선언
bookimg[0] = img1;
bookimg[1] = img2;
bookimg[2] = img3;
// let i = 0;
for (let i = 0; i < bookimg.length; i++){
	image(bookimg[random(0, 3)], mouseX, mouseY, 500, 700);
	// i = i + 1;
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(250);
}