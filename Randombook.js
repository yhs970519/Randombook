// JavaScript Document

//document.write("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js'></script>");

let img;

function preload(){
	img = loadImage('book1.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250);
	frameRate(10);
}

function draw() {
//	noStroke();
//	fill('powderblue');
//	rect(mouseX, mouseY, 100, 100);
	image(img, 0, 0, 500, 700);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(250);
}