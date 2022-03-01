// JavaScript Document

window.addEventListener('DOMContentLoaded', function(){
    let ract = document.querySelector(".ract");
    ract.style.width = Math.sqrt(2) * 100 + 'px';
    ract.style.height = 100 + 'px';

    let circle1 = document.querySelector(".circle1");
    let circle2 = document.querySelector(".circle2");
    let topRandom = Math.ceil(Math.random() * 90);
    let leftRandom = Math.ceil(Math.random() * Math.sqrt(2) * 75);
    circle1.style.top = topRandom + 'px';
    circle1.style.left = leftRandom + 'px';
    circle2.style.top = topRandom - 10 + 'px';
    circle2.style.left = leftRandom + 15 + 'px';
})