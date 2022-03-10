// JavaScript Document

window.addEventListener('DOMContentLoaded', function(){

    // new div tags//////////////////////////////////////////////////
    function divTag(imgTagGroup) {

		let imgN = 27; //+1

        for (let i = 1; i < imgN; i++) {
			let bookFrame = document.createElement("div");
			let classNode = document.createAttribute("class");
			eval("classNode.value = 'bookFrame" + i + "_" + imgTagGroup + "';");
			bookFrame.setAttributeNode(classNode);
			document.querySelector(".main_img" + imgTagGroup + "").appendChild(bookFrame);
        }
    }

    divTag(1);
	divTag(2);
	divTag(3);
	divTag(4);
	divTag(5);
	divTag(6);
	divTag(7);
	divTag(8);

    // function divtextTag(packageN) {

	// 	let textN = 21; //+1

    //     for (let i = 1; i < textN; i++) {
	// 		let slideText = document.createElement("div");
	// 		let classNode = document.createAttribute("class");
	// 		eval("classNode.value = 'Text" + i + "_" + packageN + "';");
	// 		slideText.setAttributeNode(classNode);
	// 		document.querySelector(".package" + packageN + "").appendChild(slideText);

    //         let slideTextmini = document.querySelector(".Text" + i + "_" + packageN + "");
    //         slideTextmini.innerHTML = 'Full Random book package Full Random book package Full Random book package Full Random book package Full Random book package';
    //     }
    // }

    // divtextTag(1);
    // divtextTag(2);
    // divtextTag(3);
    // divtextTag(4);
    // divtextTag(5);

    // screen move//////////////////////////////////////////////////
	function isMobile() {
		let user = navigator.userAgent;
		let is_mobile = false;
		if( user.indexOf("iPhone") > -1 
		|| user.indexOf("Android") > -1 
		|| user.indexOf("iPad") > -1 
		|| user.indexOf("iPod") > -1 ) 
		{
			is_mobile = true; 
		}
		return is_mobile; 
	}

	var is_mobile = isMobile();
	let main_img = document.querySelector(".mainImg");
    let gradient1 = document.querySelector(".gradient1");
    let gradient2 = document.querySelector(".gradient2");
    let gradient3 = document.querySelector(".gradient3");
    let gradient4 = document.querySelector(".gradient4");
    let package1 = document.querySelector(".package1");
    let package2 = document.querySelector(".package2");
    let package3 = document.querySelector(".package3");
    let package4 = document.querySelector(".package4");
	let frameT = document.querySelector(".frame_top");
	let frameB = document.querySelector(".frame_bottom");
	let frameL = document.querySelector(".frame_left");
	let frameR = document.querySelector(".frame_right");
    let bookRact  = document.querySelector(".bookRact");
    let bookShadow  = document.querySelector(".bookShadow");
	let mouseX;
	let mouseY;
    let dragX;
    let dragY;

	if( is_mobile ) {
		// translate images in mobile
		main_img.style.marginLeft = '-440px';
		main_img.style.marginTop = '-360px';
		// frameT.style.display = 'none';
		// frameB.style.display = 'none';
		// frameL.style.display = 'none';
		// frameR.style.display = 'none';

		$(".mainImg").draggable({
			containment: ".mobilescreen"
		});

        document.addEventListener("touchstart", (e) => {
			dragX = -e.touches[0].clientX;
			dragY = -e.touches[0].clientY;
			gradient1.style.transform = 'translate(' + -dragX * 5 / window.innerWidth + '%, ' + -dragY * 5 / window.innerHeight + '%)';
            gradient2.style.transform = 'translate(' + dragX * 5 / window.innerWidth + '%, ' + -dragY * 5 / window.innerHeight + '%)';
            gradient3.style.transform = 'translate(' + -dragX * 5 / window.innerWidth + '%, ' + dragY * 5 / window.innerHeight + '%)';
            gradient4.style.transform = 'translate(' + dragX * 5 / window.innerWidth + '%, ' + dragY * 5 / window.innerHeight + '%)';
            bookShadow.style.transform = 'translate(' + -dragX * 10 / window.innerWidth + '%, ' + -dragY * 10 / window.innerHeight + '%)';
		});
		document.addEventListener("touchmove", (e) => {
			dragX = -e.changedTouches[0].clientX;
			dragY = -e.changedTouches[0].clientY;
			gradient1.style.transform = 'translate(' + -dragX * 5 / window.innerWidth + '%, ' + -dragY * 5 / window.innerHeight + '%)';
            gradient2.style.transform = 'translate(' + dragX * 5 / window.innerWidth + '%, ' + -dragY * 5 / window.innerHeight + '%)';
            gradient3.style.transform = 'translate(' + -dragX * 5 / window.innerWidth + '%, ' + dragY * 5 / window.innerHeight + '%)';
            gradient4.style.transform = 'translate(' + dragX * 5 / window.innerWidth + '%, ' + dragY * 5 / window.innerHeight + '%)';
            bookShadow.style.transform = 'translate(' + -dragX * 10 / window.innerWidth + '%, ' + -dragY * 10 / window.innerHeight + '%)';
			// console.log(mouseX);
			// console.log(mouseY);
		});
		document.addEventListener("touchend", (e) => {
			dragX = -e.changedTouches[0].clientX;
			dragY = -e.changedTouches[0].clientY;
			gradient1.style.transform = 'translate(' + -dragX * 5 / window.innerWidth + '%, ' + -dragY * 5 / window.innerHeight + '%)';
            gradient2.style.transform = 'translate(' + dragX * 5 / window.innerWidth + '%, ' + -dragY * 5 / window.innerHeight + '%)';
            gradient3.style.transform = 'translate(' + -dragX * 5 / window.innerWidth + '%, ' + dragY * 5 / window.innerHeight + '%)';
            gradient4.style.transform = 'translate(' + dragX * 5 / window.innerWidth + '%, ' + dragY * 5 / window.innerHeight + '%)';
            bookShadow.style.transform = 'translate(' + -dragX * 10 / window.innerWidth + '%, ' + -dragY * 10 / window.innerHeight + '%)';
		});
	} else {
		// tranlate images in pc
		document.addEventListener("mousemove", (e) => {
			mouseX = -e.clientX * 5 / window.innerWidth;
			mouseY = -e.clientY * 10 / window.innerHeight;
            dragX = e.clientX;
			dragY = e.clientY;
            main_img.style.transform = 'translate(' + mouseX + '%, ' + mouseY + '%)';
			gradient1.style.transform = 'translate(' + -dragX * 50 / window.innerWidth + '%, ' + -dragY * 50 / window.innerHeight + '%)';
            gradient2.style.transform = 'translate(' + dragX * 50 / window.innerWidth + '%, ' + -dragY * 50 / window.innerHeight + '%)';
            gradient3.style.transform = 'translate(' + -dragX * 50 / window.innerWidth + '%, ' + dragY * 50 / window.innerHeight + '%)';
            gradient4.style.transform = 'translate(' + dragX * 50 / window.innerWidth + '%, ' + dragY * 50 / window.innerHeight + '%)';
            bookShadow.style.transform = 'translate(' + -dragX * 100 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
			// console.log(mouseX);
			// console.log(mouseY);
		});
	}

   // DadA logo//////////////////////////////////////////////////
	let ract = document.querySelector(".ract");
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    ract.style.width = Math.sqrt(2) * 100 + 'px';
    ract.style.height = 100 + 'px';
    ract.style.backgroundColor = 'rgba(' + red + ', ' + green + ', ' + blue + ')';

    let circle1 = document.querySelector(".circle1");
    let circle2 = document.querySelector(".circle2");
    let topRandom = Math.ceil(Math.random() * 85);
    let leftRandom = Math.ceil(Math.random() * Math.sqrt(2) * 65);
    circle1.style.top = topRandom + 'px';
    circle1.style.left = leftRandom + 'px';
    circle2.style.top = topRandom - 15 + 'px';
    circle2.style.left = leftRandom + 20 + 'px';

    let circle3 = document.querySelector(".circle3");
    let circle4 = document.querySelector(".circle4");
    circle3.style.backgroundColor = 'rgba(' + red + ', ' + green + ', ' + blue + ')';
    circle4.style.backgroundColor = 'rgba(' + red + ', ' + green + ', ' + blue + ')';

	let rotateEyes = function(mouseX, mouseY) {
		let eye1 = circle1.getBoundingClientRect();
		let eye2 = circle2.getBoundingClientRect();
		let bar1 = document.querySelector(".bar1");
		let bar2 = document.querySelector(".bar2");
		let eyeAngle1 = Math.atan2(mouseY - eye1.y + eye1.height * 0.5, mouseX - eye1.x + eye1.width * 0.5);
		let eyeAngle2 = Math.atan2(mouseY - eye2.y + eye2.height * 0.5, mouseX - eye2.x + eye2.width * 0.5);
		bar1.style.transform = 'rotate(' + 180 * eyeAngle1 / Math.PI + 'deg)';
		bar2.style.transform = 'rotate(' + 180 * eyeAngle2 / Math.PI + 'deg)';
	}
    document.addEventListener("mousemove", function (e) {
		rotateEyes(e.pageX, e.pageY)
    });

    $(".logo").hover(function() {
		$(".TEXT").css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(".TEXT").css("color", "black");
	});

    // button transition & viewport transition//////////////////////////////////////////////////
	let category = document.querySelector(".category");
	let category2 = document.querySelector(".category2");
	let mypage = document.querySelector(".mypage");
	let mypage2 = document.querySelector(".mypage2");
	let nav = document.querySelector("nav");
	let aside = document.querySelector("aside");
	let nav_ul = document.querySelector(".nav");
	let aside_ul = document.querySelector(".aside");

	nav.style.transform = 'translateX(-100%)';
	aside.style.transform = 'translateX(100%)';
	nav_ul.style.transform = 'translateX(-80px)';
    aside_ul.style.transform = 'translateX(80px)';

	category.onclick = categoryClick;
	category2.onclick = categoryClick2;
	mypage.onclick = mypageClick;
	mypage2.onclick = mypageClick2;
	
	function categoryClick() {
		if (nav.style.transform == 'translateX(-100%)') {
			nav.style.transform = 'translateX(0)';
			nav_ul.style.transform = 'translateX(0)';
			nav_ul.style.opacity = '1';
			nav_ul.style.color = 'black';
			category.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}else{
			nav.style.transform = 'translateX(-100%)';
			nav_ul.style.transform = 'translateX(-80px)';
			nav_ul.style.opacity = '0';
			nav_ul.style.color = 'rgba(10, 10, 10)';
			category.style.backgroundColor = 'rgba(248, 248, 255, 0.5)';
		}
	}

	function categoryClick2() {
		if (nav.style.transform == 'translateX(-100%)') {
			nav.style.transform = 'translateX(0)';
			nav_ul.style.transform = 'translateX(0)';
			nav_ul.style.opacity = '1';
			nav_ul.style.color = 'black';
			category2.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}else{
			nav.style.transform = 'translateX(-100%)';
			nav_ul.style.transform = 'translateX(-80px)';
			nav_ul.style.opacity = '0';
			nav_ul.style.color = 'rgba(10, 10, 10)';
			category2.style.backgroundColor = 'rgba(248, 248, 255, 0.5)';
		}
	}

	function mypageClick() {
		if (aside.style.transform == 'translateX(100%)') {
			aside.style.transform = 'translateX(0)';
			aside_ul.style.transform = 'translateX(0)';
			aside_ul.style.opacity = '1';
			mypage.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}else{
			aside.style.transform = 'translateX(100%)';
			aside_ul.style.transform = 'translateX(80px)';
			aside_ul.style.opacity = '0';
			mypage.style.backgroundColor = 'rgba(248, 248, 255, 0.5)';
		}
	}

	function mypageClick2() {
		if (aside.style.transform == 'translateX(100%)') {
			aside.style.transform = 'translateX(0)';
			aside_ul.style.transform = 'translateX(0)';
			aside_ul.style.opacity = '1';
			mypage2.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}else{
			aside.style.transform = 'translateX(100%)';
			aside_ul.style.transform = 'translateX(80px)';
			aside_ul.style.opacity = '0';
			mypage2.style.backgroundColor = 'rgba(248, 248, 255, 0.5)';
		}
	}

    // let button = document.querySelectorAll("button");
	// button[3] = onmouseover = buttonColor;
    // button[4] = onmouseover = buttonColor;
    // button[5] = onmouseover = buttonColor;
    // button[6] = onmouseover = buttonColor;
	onmousemove = buttonColor;

	function buttonColor() {
		categoryHover();
		categoryHover2();
		mypageHover();
		mypageHover2();
	}

	function categoryHover() {
		if(nav.style.transform == 'translateX(-100%)') {
			$(".category").hover(function() {
				$(this).css("background-color", "rgba(" + red + ", " + green + ", " + blue + ", 0.5)");
			}, function() {
				$(this).css("background-color", "rgba(248, 248, 255, 0.5)");
			});
		}else{
			category.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}
	}

	function categoryHover2() {
		if(nav.style.transform == 'translateX(-100%)') {
			$(".category2").hover(function() {
				$(this).css("background-color", "rgba(" + red + ", " + green + ", " + blue + ", 0.5)");
			}, function() {
				$(this).css("background-color", "rgba(248, 248, 255, 0.5)");
			});
		}else{
			category2.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}
	}

	function mypageHover() {
		if(aside.style.transform == 'translateX(100%)') {
			$(".mypage").hover(function() {
				$(this).css("background-color", "rgba(" + red + ", " + green + ", " + blue + ", 0.5)");
			}, function() {
				$(this).css("background-color", "rgba(248, 248, 255, 0.5)");
			});
		}else{
			mypage.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}
	}

	function mypageHover2() {
		if(aside.style.transform == 'translateX(100%)') {
			$(".mypage2").hover(function() {
				$(this).css("background-color", "rgba(" + red + ", " + green + ", " + blue + ", 0.5)");
			}, function() {
				$(this).css("background-color", "rgba(248, 248, 255, 0.5)");
			});
		}else{
			mypage2.style.backgroundColor = 'rgba(178, 34, 34, 0.5)';
		}
	}
	
	$(".basket").hover(function() {
		$(this).css("background-color", "rgba(" + red + ", " + green + ", " + blue + ", 0.5)");
	}, function() {
		$(this).css("background-color", "rgba(248, 248, 255, 0.5)");
	});

	$(".basket2").hover(function() {
		$(this).css("background-color", "rgba(" + red + ", " + green + ", " + blue + ", 0.5)");
	}, function() {
		$(this).css("background-color", "rgba(248, 248, 255, 0.5)");
	});

	$(".ract").draggable();
});