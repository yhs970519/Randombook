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
}

// function draw() {
// 	let a = img.length - 0.001;
// 	let b = Math.floor(random(a));
// 	let c = Math.floor(random(a));
// 	for(let i = 1; i < 121; i++) {
// 		if(i % 60 === 0) {
// 			image(img[b], mouseX, mouseY, 200, 300);
// 			image(img[c], 50, 50, 200, 300);
// 		}else {
// 			continue;
// 			image(img[b], mouseX, mouseY, 200, 300);
// 			image(img[c], 50, 50, 200, 300);
// 		}
// 	// let c = img.length - 0.001;
// 	// for (let a = c; a > 5; a--) {
// 	// 	let b = Math.floor(random(a));
// 	// 	if (a < 0) {
// 	// 		a = c;
// 	// 		// img.splice(0, 0, 'img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10');
// 	// 	}else {
// 	// 		image(img[b], mouseX, mouseY, 200, 300);
// 	// 		// img.splice(b, 1);
// 	// 	}
// 	// }
// 	}
// 	image(img[9], 300, 50, 200, 300);
// }

function randombook1() {
	let a = Math.floor(Math.random() * img.length);
	image(img[a], mouseX, mouseY, 200, 300);
}

setInterval(randombook1, 500);

function randombook2() {
	let b = Math.floor(Math.random() * img.length);
	image(img[b], 50, 50, 200, 300);
}

setInterval(randombook2, 1000);

function randombook3() {
	let c = Math.floor(Math.random() * img.length);
	image(img[c], 300, 50, 200, 300);
}

setInterval(randombook3, 1500);

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(0, 0, 0, 20);
}