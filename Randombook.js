// JavaScript Document

//document.write("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js'></script>");

let img;

function preload(){
	img = loadImage('https://github.com/yhs970519/Randombook/blob/bb30581f7d07e2aa4301b9902947eab8dbef1e1d/book2.jpg')
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
	image(img, 0, 0, 100, 150);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(250);
}