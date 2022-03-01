// JavaScript Document

window.addEventListener('DOMContentLoaded', function(){
    let ract = document.querySelector(".ract");
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    ract.style.width = Math.sqrt(2) * 100 + 'px';
    ract.style.height = 100 + 'px';
    ract.style.backgroundColor = 'rgba(' + red + ', ' + green + ', ' + blue + ')';

    let circle1 = document.querySelector(".circle1");
    let circle2 = document.querySelector(".circle2");
    let topRandom = Math.ceil(Math.random() * 90);
    let leftRandom = Math.ceil(Math.random() * Math.sqrt(2) * 75);
    circle1.style.top = topRandom + 'px';
    circle1.style.left = leftRandom + 'px';
    circle2.style.top = topRandom - 10 + 'px';
    circle2.style.left = leftRandom + 15 + 'px';

    let text1 = document.querySelector(".text1");
    let text2 = document.querySelector(".text2");
    let text3 = document.querySelector(".text3");
    text1.style.left = Math.sqrt(2) * 110 + 'px';
    text2.style.left = Math.sqrt(2) * 110 + 'px';
    text3.style.left = Math.sqrt(2) * 110 + 'px';
})