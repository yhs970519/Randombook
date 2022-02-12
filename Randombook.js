// JavaScript Document

//document.write("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js'></script>");

let bookN = 11;
for (let i = 1; i < bookN; i++){
	eval("let img" + i + ";");
}
let img = [];

function preload(){
	for (let i = 1; i < bookN; i++){
		let j = i - 1;
		eval("img" + i + " = loadImage('book/book" + i + ".jpg');");
		eval("img[" + j + "] = img" + i + ";");
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250);
	frameRate(5);
}

function draw() {
let bookimg = random(img);
image(bookimg, mouseX - 200, mouseY - 300, 400, 600);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(250);
}