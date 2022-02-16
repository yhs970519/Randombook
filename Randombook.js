// JavaScript Document
window.onload = function(){
var bookN = 11;

//'Bnimg' 配列　生成//
var B1img = [];
var B2img = [];
var B3img = [];

for (let i = 1; i < bookN; i++) {
	let j = i - 1;
	eval("B1img[" + j + "] = 'book1/book" + i + ".jpg';");
	eval("B2img[" + j + "] = 'book2/book" + i + ".png';");
	eval("B3img[" + j + "] = 'book3/book" + i + ".png';");
}

var a = Math.floor(Math.random() * B1img.length);
var b = Math.floor(Math.random() * B2img.length);
var c = Math.floor(Math.random() * B3img.length);

var docB1 = document.querySelector(".book1");
var docB2 = document.querySelector(".book2");
var docB3 = document.querySelector(".book3");

function randombook1() {
	if(B1img.length > 0) {
		docB1.src = B1img[a];
		B1img.splice(a, 1);
	}else if(B1img.length = 0) {
		for(let i = 1; i < bookN; i++) {
			let j = i - 1;
			eval("B1img[" + j + "] = 'book1/book" + i + ".jpg';");
			// eval("B" + 1 + "img[" + j + "] = 'book" + 1 + "/book" + i + "." + 'jpg' + "';");
		}
		docB1.src = B1img[a];
	}
}


setInterval(randombook1, 200);

function randombook2() {
	if(B2img.length > 0) {
		docB2.src = B2img[b];
		B2img.splice(b, 1);
	}else if(B2img.length = 0) {
		for(let i = 1; i < bookN; i++) {
			let j = i - 1;
			eval("B2img[" + j + "] = 'book2/book" + i + ".png';");
		}
		docB2.src = B2img[b];
	}
}

setInterval(randombook2, 1100);

function randombook3() {
	if(B3img.length > 0) {
		docB3.src = B3img[c];
		B3img.splice(c, 1);
	}else if(B3img.length = 0) {
		for(let i = 1; i < bookN; i++) {
			let j = i - 1;
			eval("B3img[" + j + "] = 'book3/book" + i + ".png';");
		}
		docB3.src = B3img[c];
	}
}

setInterval(randombook3, 1000);
}