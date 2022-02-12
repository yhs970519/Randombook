// JavaScript Document

//document.write("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js'></script>");

let bookN = 11;
for (let i = 1; i < bookN; i++){
	eval("let img" + i + ";");
}
let img = [];
let bookimg = random(img);

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
}

function draw() {
	frameRate(5);
	image(bookimg, 50, 50, 200, 300);
	image(bookimg, 50, windowHeight - 350, 200, 300);
	image(bookimg, windowWidth - 250, windowHeight - 350, 200, 300);

	fill('powderblue');
	rect(mouseX - 75, mouseY - 75, 150);
}

function draw() {
	frameRate(10);
	image(bookimg, windowWidth - 250, 50, 200, 300);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(250);
}