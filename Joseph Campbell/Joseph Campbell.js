// JavaScript Document

window.addEventListener('DOMContentLoaded', function(){

	let category = document.querySelector(".category");
	let category2 = document.querySelector(".category2");
	let mypage = document.querySelector(".mypage");
	let mypage2 = document.querySelector(".mypage2");
    let basket = document.querySelector(".basket");
    let basket2 = document.querySelector(".basket2");
	let nav = document.querySelector("nav");
	let aside = document.querySelector("aside");
	let nav_ul = document.querySelector(".nav");
	let aside_ul = document.querySelector(".aside");

    let buy = document.querySelector(".buy");
    let booklist = document.querySelector("#Bbooklist");
    let review = document.querySelector("#Breview");
    let Fbooklist = document.querySelector("#Fbooklist");
    let Freview = document.querySelector("#Freview");
    let Bbooklist = document.querySelector("#Bbooklist");
    let Breview = document.querySelector("#Breview");
    
    let buyBackground = document.querySelector(".buyBackground");
    let booklistBackground = document.querySelector(".booklistBackground");
    let reviewBackground = document.querySelector(".reviewBackground");

    let bookScale = document.querySelector(".bookScale");
    let mainbook = document.querySelector(".mainbook");
    let bookGroup = document.querySelector(".bookGroup");
    let bookMarkShadow = document.querySelector(".bookMarkShadow");
    let bookCoverShadow = document.querySelector(".bookCoverShadow");
    let bookRact = document.querySelector(".bookRact");
    let bookShadow = document.querySelector(".bookShadow");
    let bookRact1 = document.querySelectorAll(".bookRact1");
    let bookRact2 = document.querySelectorAll(".bookRact2");
    let bookRact3 = document.querySelectorAll(".bookRact3");
    let bookRact4 = document.querySelectorAll(".bookRact4");
    let bookRact5 = document.querySelectorAll(".bookRact5");
    let bookRact6 = document.querySelectorAll(".bookRact6");
    let bookRact7 = document.querySelectorAll(".bookRact7");
    let bookRact8 = document.querySelectorAll(".bookRact8");
    let bookRact9 = document.querySelectorAll(".bookRact9");
    let bookRact10 = document.querySelectorAll(".bookRact10");

    let bookSample = document.querySelector(".bookSample");
    let bookReview = document.querySelector(".bookReview");

    let cancelbutton = document.querySelectorAll(".cancelbutton");
    let nextbutton1 = document.querySelector(".nextbutton1");
    let nextbutton2 = document.querySelector(".nextbutton2");
    let previousbutton1 = document.querySelector(".previousbutton1");
    let previousbutton2 = document.querySelector(".previousbutton2");

    let booksampleGroup = document.querySelector(".booksampleGroup");
    let bookreviewGroup = document.querySelector(".bookreviewGroup");

    let bookRact11 = document.querySelector(".bookRact11");
    let bookRact12 = document.querySelector(".bookRact12");
    let bookRact13 = document.querySelector(".bookRact13");
    let bookRact14 = document.querySelector(".bookRact14");
    let bookRact15 = document.querySelector(".bookRact15");

    let now = document.querySelector(".now");
    let get = document.querySelector(".get");
    let priceLabel = document.querySelector(".priceLabel");
    let priceLabelShadow = document.querySelector(".priceLabelShadow");
    
    let purchase = document.querySelector(".purchase");
    let thank = document.querySelector(".thank");

    let mainShadow  = document.querySelector(".mainShadow");
    let booklistShadow  = document.querySelector(".booklistShadow");
    let reviewShadow  = document.querySelector(".reviewShadow");
    let purchaseBox = document.querySelector(".purchaseBox");
    let complete = document.querySelector(".complete");

    let backGround = document.querySelector("#backGround");

    const ns = 'http://www.w3.org/2000/svg';

    let body = document.querySelector("body");
    let a = document.querySelectorAll("a");
    let subShadow = document.querySelector(".subShadow");

	let mouseX;
	let mouseY;
    let dragX;
    let dragY;
    let positionX;
    let positionY;
    let dragXm;
    let dragYm;

    let red1 = Math.floor(Math.random() * 256);
    let green1 = Math.floor(Math.random() * 256);
    let blue1 = Math.floor(Math.random() * 256);

    let red2 = Math.floor(Math.random() * 256);
    let green2 = Math.floor(Math.random() * 256);
    let blue2 = Math.floor(Math.random() * 256);

    let red3 = Math.floor(Math.random() * 256);
    let green3 = Math.floor(Math.random() * 256);
    let blue3 = Math.floor(Math.random() * 256);

    let muralNum = 9;

    let muralShadow = document.querySelector("#muralShadow");

    for(let i = 0; i < muralNum; i++) {
        let j = i + 1;
        eval("let mural" + j + " = document.querySelector('#mural" + j + "');");
        window["muralRandom" +  j] = Math.floor(Math.random() * 2);
        window["mXRandom" + j] = Math.floor(Math.random() * 86) - 15;
        window["mYRandom" + j] = Math.floor(Math.random() * 86) - 15;
        eval("muralVisible(muralRandom" + j + ", mural" + j + ", mXRandom" + j + ", mYRandom" + j + ");");
    }

    function muralVisible(muralRandom, mural, mXRandom, mYRandom) {
        if(muralRandom == 0) {
            mural.style.visibility = 'visible';
            mural.style.top = mXRandom + 'vw';
            mural.style.left = mYRandom + 'vh';
        }else{
            mural.style.visibility = 'hidden';
        }
    }

    //fire motion

    console.clear();

    const flameFrag = document.querySelector("#flame-frag").textContent;
    const baseUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/";

    const manifest = [
    { name: "noise", url: "noise-texture-11.png?v=9" }
    ];


    //
    // FLAME FILTER
    // ===========================================================================
    class FlameFilter extends PIXI.Filter {
    
    constructor(texture, time = 0.0) {    
        super(null, flameFrag);
        
        this.uniforms.dimensions = new Float32Array(2);   
        this.texture = texture;
        this.time = time;
    }
    
    get texture() {
        return this.uniforms.mapSampler;
    }
    
    set texture(texture) {
        texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        this.uniforms.mapSampler = texture;
    }
    
    apply(filterManager, input, output, clear) {
            
        this.uniforms.dimensions[0] = input.sourceFrame.width;
        this.uniforms.dimensions[1] = input.sourceFrame.height;    
        this.uniforms.time = this.time;

        filterManager.applyFilter(this, input, output, clear);
    }
    }


    //
    // APPLICATION
    // ===========================================================================
    class Application extends PIXI.Application {
        
    constructor() {
        
        if (window.devicePixelRatio > 1) {
        PIXI.settings.RESOLUTION = 2;
        }
        
        PIXI.settings.PRECISION_FRAGMENT = "highp";
        
        super({
        view: document.querySelector("#view"),
        width: window.innerHeight * 0.8,
        height: window.innerHeight * 0.6,
        backgroundColor: 0x000000,
        transparent: true,
        autoResize: true
        });   
        
        this.isResized = true;    
        this.loader.baseUrl = baseUrl;   
    }
        
    load(manifest) {
        
        this.loader
        .add(manifest)
        .load((l, r) => this.init(r));   
    }
        
    init(resources) {     
            
        this.flame = new FlameFilter(resources.noise.texture);
        
        this.stage.filterArea = this.screen;
        this.stage.filters = [this.flame];
        
        this.ticker.add(this.update, this);                     
        window.addEventListener("resize", () => this.isResized = true);
    }
    
    update(delta) {
        
        if (this.isResized) {
        this.renderer.resize(window.innerHeight * 0.8, window.innerHeight * 0.6);
        this.isResized = false;
        }
        
        this.flame.time += 0.1 * delta;
    }
    }

    const app = new Application();
    app.load(manifest);

    //wood motion

    let fireCanvas = document.querySelector("#fireCanvas");
    let wood = document.querySelector("#wood");

    function woodMotion() {
        let fireCanvasX = (dragX / 100) + 48;
        let fireCanvasY = (dragY / 100) + 30;
        let woodX = (dragX / 100) + 48;
        let woodY = (dragY / 100) + 30;
        fireCanvas.style.left = fireCanvasX + '%';
        fireCanvas.style.top = fireCanvasY + '%';
        wood.style.left = woodX + '%';
        wood.style.top = woodY + '%';
        console.log(fireCanvasX);
        console.log(fireCanvasY);
    }

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

    function moveObject() {
        mainShadow.style.transform = 'translate(' + -dragX * 50 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
        booklistShadow.style.transform = 'translate(' + -dragX * 100 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
        reviewShadow.style.transform = 'translate(' + -dragX * 100 / window.innerWidth + '%, ' + -dragY * 100 / window.innerHeight + '%)';
        muralShadow.style.background = "radial-gradient(circle at " + dragX + "px " + dragY + "px, rgba(66, 33, 11, 0) 30%, rgba(66, 33, 11, 1))";
        woodMotion();
    }

    function mouseControl1() {
        moveObject();
    }

    function mouseControl2() {
        moveObject();
    }

    let ugoku = 1;
    let tomaru = 0;
    let purupuru = ugoku;

    function shapeAndObject() {
        if(purupuru == ugoku) {
            mouseControl1();
        }else{
            mouseControl2();
        }
    }

	if( is_mobile ) {
        purchaseBox.style.transform = 'scale(0.7, 0.7)';
        complete.style.transform = 'scale(0.7, 0.7)';

        document.addEventListener("touchstart", (e) => {
			dragX = e.touches[0].clientX;
			dragY = e.touches[0].clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            shapeAndObject();
		});
		document.addEventListener("touchmove", (e) => {
			dragX = e.changedTouches[0].clientX;
			dragY = e.changedTouches[0].clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            shapeAndObject();
		});
		document.addEventListener("touchend", (e) => {
			dragX = e.changedTouches[0].clientX;
			dragY = e.changedTouches[0].clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            shapeAndObject();
		});
	} else {
		// tranlate images in pc
		document.addEventListener("mousemove", (e) => {
			mouseX = -e.clientX * 5 / window.innerWidth;
			mouseY = -e.clientY * 10 / window.innerHeight;
            dragX = e.clientX;
			dragY = e.clientY;
            positionX = 100 - (dragX * 100 / window.innerWidth);
            positionY = 100 - (dragY * 100 / window.innerHeight);
            dragXm = dragX - (1.5 * window.innerWidth / 100);
            dragYm = dragY - (1.5 * window.innerWidth / 100);
            shapeAndObject();
		});
	}

    // browser check & event//////////////////////////////////////////////////
    var agent = window.navigator.userAgent.toLowerCase();
	var browserName;
	switch (true) {
		case agent.indexOf("edge") > -1: 
			browserName = "MS Edge"; // MS 엣지
			break;
		case agent.indexOf("edg/") > -1: 
			browserName = "Edge (chromium based)"; // 크롬 기반 엣지
			break;
		case agent.indexOf("opr") > -1 && !!window.opr: 
			browserName = "Opera"; // 오페라
			break;
		case agent.indexOf("chrome") > -1 && !!window.chrome: 
			browserName = "Chrome"; // 크롬
			break;
		case agent.indexOf("trident") > -1: 
			browserName = "MS IE"; // 익스플로러
			break;
		case agent.indexOf("firefox") > -1: 
			browserName = "Mozilla Firefox"; // 파이어 폭스
			break;
		case agent.indexOf("safari") > -1: 
			browserName = "Safari"; // 사파리
			break;
		default: 
			browserName = "other"; // 기타
	}

    if(browserName == "Safari") {
        // mixBlendMode1();
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

    // $(".ract").draggable();

    // button transition//////////////////////////////////////////////////

	nav.style.transform = 'translateX(-100%)';
	aside.style.transform = 'translateX(100%)';
	nav_ul.style.transform = 'translateX(-80px)';
    aside_ul.style.transform = 'translateX(80px)';
    mainbook.style.transform = 'translate(-50%, -50%)';
    bookCoverShadow.style.opacity = '0';
    bookScale.style.transform = 'scale(1, 1)';
    bookScale.style['-webkit-transform'] = 'scale(1, 1)';
    booksampleGroup.style.transform = 'translateX(0%)';
    bookreviewGroup.style.transform = 'translateX(0%)';

	category.onclick = categoryClick;
	category2.onclick = categoryClick2;
	mypage.onclick = mypageClick;
	mypage2.onclick = mypageClick2;

    buy.onclick = buyClick;
    // booklist.onclick = booklistClick;
    Fbooklist.onclick = FbooklistClick;
    // review.onclick = reviewClick;
    Freview.onclick = FreviewClick;

    cancelbutton[0].onclick = cancelClick;
    cancelbutton[1].onclick = cancelClick;

    nextbutton1.onclick = nextClick1;
    nextbutton2.onclick = nextClick2;
    previousbutton1.onclick = previousClick1;
    previousbutton2.onclick = previousClick2;

    now.onclick = nowClick;
    get.onclick = getClick;

    complete.onclick = completeClick;
	
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

    function bookanimation1(background) {
        purupuru = tomaru;
        buy.style.opacity = '0';
        buy.style.transition = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        buy.style['-webkit-transition'] = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        booklist.style.opacity = '0';
        booklist.style.transition = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        booklist.style['-webkit-transition'] = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        Fbooklist.style.zIndex = '0';
        review.style.opacity = '0';
        review.style.transition = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        review.style['-webkit-transition'] = 'opacity 0.5s ease 0s, color 0.5s ease 0s';
        Freview.style.zIndex = '0';
        booklistShadow.style.opacity = '0';
        booklistShadow.style.transitionDelay = '0s';
        booklistShadow.style['-webkit-transitionDelay'] = '0s';
        reviewShadow.style.opacity = '0';
        reviewShadow.style.transitionDelay = '0s';
        reviewShadow.style['-webkit-transitionDelay'] = '0s';
        bookScale.style.zIndex = '1';
        bookScale.style.transitionDelay = '0s';
        bookScale.style['-webkit-transitionDelay'] = '0s';
        mainbook.style.transform = 'translate(0, -50%)';
        mainbook.style.transitionDelay = '0s';
        mainbook.style['-webkit-transitionDelay'] = '0s';
        bookSample.style.visibility = 'visible';
        bookSample.style.transitionDelay = '1.8s';
        bookSample.style['-webkit-transitionDelay'] = '1.8s';
        bookReview.style.visibility = 'visible';
        bookReview.style.transitionDelay = '1.8s';
        bookReview.style['-webkit-transitionDelay'] = '1.8s';
        bookCoverShadow.style.transform = 'translateX(50%)';
        bookCoverShadow.style.transitionDelay = '0s';
        bookCoverShadow.style['-webkit-transitionDelay'] = '0s';
        bookCoverShadow.style.opacity = '1';
        bookGroup.style.transform = 'translateX(50%)';
        bookGroup.style.transitionDelay = '0s';
        bookGroup.style['-webkit-transitionDelay'] = '0s';
        bookMarkShadow.style.left = '30%';
        bookMarkShadow.style.transitionDelay = '0s';
        bookMarkShadow.style['-webkit-transitionDelay'] = '0s';
        bookRact1[0].style.transform = 'rotateY(-180deg)';
        bookRact2[0].style.transform = 'rotateY(-180deg)';
        bookRact3[0].style.transform = 'rotateY(-180deg)';
        bookRact4[0].style.transform = 'rotateY(-180deg)';
        bookRact5[0].style.transform = 'rotateY(-180deg)';
        bookRact6[0].style.transform = 'rotateY(-180deg)';
        bookRact7[0].style.transform = 'rotateY(-180deg)';
        bookRact8[0].style.transform = 'rotateY(-180deg)';
        bookRact9[0].style.transform = 'rotateY(-180deg)';
        bookRact10[0].style.transform = 'rotateY(-180deg)';
        bookRact1[1].style.transform = 'rotateY(-180deg)';
        bookRact2[1].style.transform = 'rotateY(-180deg)';
        bookRact3[1].style.transform = 'rotateY(-180deg)';
        bookRact4[1].style.transform = 'rotateY(-180deg)';
        bookRact5[1].style.transform = 'rotateY(-180deg)';
        bookRact6[1].style.transform = 'rotateY(-180deg)';
        bookRact7[1].style.transform = 'rotateY(-180deg)';
        bookRact8[1].style.transform = 'rotateY(-180deg)';
        bookRact9[1].style.transform = 'rotateY(-180deg)';
        bookRact10[1].style.transform = 'rotateY(-180deg)';
        booksampleGroup.style.transitionDelay = '0s';
        bookreviewGroup.style.transitionDelay = '0s';
        now.style.visibility = 'hidden';
        now.style.opacity = '0';
        get.style.visibility = 'hidden';
        get.style.opacity = '0';
        priceLabel.style.opacity = '0';
        priceLabelShadow.style.opacity = '0';
        purchase.style.opacity = '0';
        purchase.style.visibility = 'hidden';
    }

    function bookanimation2() {
        purupuru = ugoku;
        buy.style.opacity = '1';
        buy.style.transition = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        buy.style['-webkit-transition'] = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        booklist.style.opacity = '1';
        booklist.style.transition = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        booklist.style['-webkit-transition'] = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        Fbooklist.style.zIndex = '2';
        review.style.opacity = '1';
        review.style.transition = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        review.style['-webkit-transition'] = 'opacity 0.5s ease 2s, color 0.5s ease 0s';
        Freview.style.zIndex = '2';
        booklistShadow.style.opacity = '1';
        booklistShadow.style.transitionDelay = '2s';
        booklistShadow.style['-webkit-transitionDelay'] = '2s';
        reviewShadow.style.opacity = '1';
        reviewShadow.style.transitionDelay = '2s';
        reviewShadow.style['-webkit-transitionDelay'] = '2s';
        bookScale.style.top = '0';
        bookScale.style.zIndex = '0';
        bookScale.style.transform = 'scale(1, 1)';
        bookScale.style.transitionDelay = '1s';
        bookScale.style['-webkit-transitionDelay'] = '1s';
        mainbook.style.transform = 'translate(-50%, -50%)';
        mainbook.style.transitionDelay = '1s';
        mainbook.style['-webkit-transitionDelay'] = '1s';
        bookSample.style.visibility = 'hidden';
        bookSample.style.opacity = '0';
        bookSample.style.transitionDelay = '0s';
        bookSample.style['-webkit-transitionDelay'] = '0s';
        bookReview.style.visibility = 'hidden';
        bookReview.style.opacity = '0';
        bookReview.style.transitionDelay = '0s';
        bookReview.style['-webkit-transitionDelay'] = '0s';
        bookCoverShadow.style.transform = 'translateX(0)';
        bookCoverShadow.style.transitionDelay = '1s';
        bookCoverShadow.style['-webkit-transitionDelay'] = '1s';
        bookCoverShadow.style.opacity = '0';
        bookGroup.style.transform = 'translateX(0)';
        bookGroup.style.transitionDelay = '1s';
        bookGroup.style['-webkit-transitionDelay'] = '1s';
        bookMarkShadow.style.left = '5%';
        bookMarkShadow.style.transitionDelay = '1s';
        bookMarkShadow.style['-webkit-transitionDelay'] = '1s';
		bookRact1[0].style.transform = 'rotateY(0)';
        bookRact2[0].style.transform = 'rotateY(0)';
        bookRact3[0].style.transform = 'rotateY(0)';
        bookRact4[0].style.transform = 'rotateY(0)';
        bookRact5[0].style.transform = 'rotateY(0)';
        bookRact6[0].style.transform = 'rotateY(0)';
        bookRact7[0].style.transform = 'rotateY(0)';
        bookRact8[0].style.transform = 'rotateY(0)';
        bookRact9[0].style.transform = 'rotateY(0)';
        bookRact10[0].style.transform = 'rotateY(0)';
        bookRact1[1].style.transform = 'rotateY(0)';
        bookRact2[1].style.transform = 'rotateY(0)';
        bookRact3[1].style.transform = 'rotateY(0)';
        bookRact4[1].style.transform = 'rotateY(0)';
        bookRact5[1].style.transform = 'rotateY(0)';
        bookRact6[1].style.transform = 'rotateY(0)';
        bookRact7[1].style.transform = 'rotateY(0)';
        bookRact8[1].style.transform = 'rotateY(0)';
        bookRact9[1].style.transform = 'rotateY(0)';
        bookRact10[1].style.transform = 'rotateY(0)';
        booksampleGroup.style.transform = 'translateX(0%)';
        booksampleGroup.style.transitionDelay = '1.5s';
        bookreviewGroup.style.transform = 'translateX(0%)';
        bookreviewGroup.style.transitionDelay = '1.5s';
        bookRact11.style.transform = 'rotateY(0)';
        bookRact12.style.transform = 'rotateY(0)';
        bookRact13.style.transform = 'rotateY(0)';
        bookRact14.style.transform = 'rotateY(0)';
        bookRact15.style.transform = 'rotateY(0)';
        buy.style.visibility = 'visible';
    }

    function booklistAnimaition(number) {
        bookanimation1(booklistBackground);
        bookScale.style.transform = 'scale(' + window.innerWidth / number / 100 + ', ' + window.innerWidth / number / 100 + ')';
        bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / number / 100 + ', ' + window.innerWidth / number / 100 + ')';
        bookSample.style.opacity = '1';
        bookReview.style.visibility = 'hidden';
    }

    function reviewAnimaition(number) {
        bookanimation1(reviewBackground);
        bookScale.style.transform = 'scale(' + window.innerWidth / number / 100 + ', ' + window.innerWidth / number / 100 + ')';
        bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / number / 100 + ', ' + window.innerWidth / number / 100 + ')';
        bookReview.style.opacity = '1';
        bookReview.style.visibility = 'visible';
    }

    function booklistAnimaition2() {
        mainbook.style.transform = 'translate(50%, -50%)';
        bookScale.style.top = '8.5%';
        bookCoverShadow.style.transform = 'translateX(100%)';
        bookGroup.style.transform = 'translateX(100%)';
        bookMarkShadow.style.left = '55%';
    }

    function reviewAnimaition2() {
        mainbook.style.transform = 'translate(-50%, -50%)';
        bookReview.style.left = '0';
        bookScale.style.top = '8.5%';
        bookCoverShadow.style.transform = 'translateX(0)';
        bookGroup.style.transform = 'translateX(0)';
        bookMarkShadow.style.left = '5%';
    }

    function buyClick() {
        buy.style.transition = 'all 0.5s ease';
        buy.style.visibility = 'hidden';
        buy.style.opacity = '0';
        now.style.visibility = 'visible';
        now.style.opacity = '1';
        get.style.visibility = 'visible';
        get.style.opacity = '1';
        priceLabel.style.opacity = '1';
        priceLabelShadow.style.opacity = '1';
	}

    function nowClick() {
        purchase.style.zIndex = '2';
        purchase.style.opacity = '1';
        purchase.style.visibility = 'visible';
        now.style.visibility = 'hidden';
        now.style.opacity = '0';
        get.style.visibility = 'hidden';
        get.style.opacity = '0';
	}

    function completeClick() {
        $(thank).animate({opacity: '1'}, 500).animate({opacity: '1'}, 1000).animate({opacity: '0'}, 500);
        thank.style.visibility = 'visible';
        purchase.style.zIndex = '0';
        purchase.style.opacity = '0';
        purchase.style.visibility = 'hidden';
        buy.style.visibility = 'visible';
        $(buy).animate({opacity: '0'}, 2000).animate({opacity: '1'}, 500);
        priceLabel.style.opacity = '0';
        priceLabelShadow.style.opacity = '0';
    }

    function getClick() {
        $(thank).animate({opacity: '1'}, 500).animate({opacity: '1'}, 1000).animate({opacity: '0'}, 500);
        thank.style.visibility = 'visible';
        purchase.style.opacity = '0';
        purchase.style.visibility = 'hidden';
        buy.style.visibility = 'visible';
        $(buy).animate({opacity: '0'}, 2000).animate({opacity: '1'}, 500);
        now.style.visibility = 'hidden';
        now.style.opacity = '0';
        get.style.visibility = 'hidden';
        get.style.opacity = '0';
        priceLabel.style.opacity = '0';
        priceLabelShadow.style.opacity = '0';
	}

    function FbooklistClick() {
		if (window.innerWidth > 1200) {
            booklistAnimaition(8);
		}else if(window.innerWidth > 1000) {
            booklistAnimaition(7);
		}else if(window.innerWidth > 800) {
            booklistAnimaition(6);
        }else if(window.innerWidth > 700) {
            booklistAnimaition(5.5);
        }else if(window.innerWidth > 650) {
            booklistAnimaition(3.5);
            booklistAnimaition2();
        }else if(window.innerWidth > 600) {
            booklistAnimaition(3);
            booklistAnimaition2();
        }else if(window.innerWidth > 520) {
            booklistAnimaition(2.8);
            booklistAnimaition2();
        }else if(window.innerWidth > 480) {
            booklistAnimaition(2.6);
            booklistAnimaition2();
        }else if(window.innerWidth > 410) {
            booklistAnimaition(2.2);
            booklistAnimaition2();
        }else if(window.innerWidth > 370) {
            booklistAnimaition(2);
            booklistAnimaition2();
        }else if(window.innerWidth > 340) {
            booklistAnimaition(1.8);
            booklistAnimaition2();
        }else if(window.innerWidth > 300) {
            booklistAnimaition(1.6);
            booklistAnimaition2();
        }else if(window.innerWidth > 260) {
            booklistAnimaition(1.4);
            booklistAnimaition2();
        }else{
            booklistAnimaition(1.2);
            booklistAnimaition2();
        }
	}

    function FreviewClick() {
		if (window.innerWidth > 1200) {
            reviewAnimaition(8);
		}else if(window.innerWidth > 1000) {
            reviewAnimaition(7);
		}else if(window.innerWidth > 800) {
            reviewAnimaition(6);
        }else if(window.innerWidth > 700) {
            reviewAnimaition(5.5);
        }else if(window.innerWidth > 650) {
            reviewAnimaition(3.5);
            reviewAnimaition2();
        }else if(window.innerWidth > 600) {
            reviewAnimaition(3);
            reviewAnimaition2();
        }else if(window.innerWidth > 520) {
            reviewAnimaition(2.8);
            reviewAnimaition2();
        }else if(window.innerWidth > 480) {
            reviewAnimaition(2.6);
            reviewAnimaition2();
        }else if(window.innerWidth > 410) {
            reviewAnimaition(2.2);
            reviewAnimaition2();
        }else if(window.innerWidth > 370) {
            reviewAnimaition(2);
            reviewAnimaition2();
        }else if(window.innerWidth > 340) {
            reviewAnimaition(1.8);
            reviewAnimaition2();
        }else if(window.innerWidth > 300) {
            reviewAnimaition(1.6);
            reviewAnimaition2();
        }else if(window.innerWidth > 260) {
            reviewAnimaition(1.4);
            reviewAnimaition2();
        }else{
            reviewAnimaition(1.2);
            reviewAnimaition2();
        }
	}

    $(Fbooklist).hover(
        function() {
            $(Bbooklist).css("color", "rgba(0, 0, 0)");
        },
        function() {
            $(Bbooklist).css("color", "rgba(248, 248, 255)");
        }
    );

    $(Freview).hover(
        function() {
            $(Breview).css("color", "rgba(0, 0, 0)");
        },
        function() {
            $(Breview).css("color", "rgba(248, 248, 255)");
        }
    );

    function cancelClick() {
        bookanimation2();
    }

    function nextClick1() {
        if(window.innerWidth > 700) {
            booksampleGroup.style.transform == 'translateX(0%)' ? booksampleGroup.style.transform = 'translateX(-100%)':
            booksampleGroup.style.transform = 'translateX(-200%)';
            booksampleGroup.style.transform == 'translateX(-100%)' ? bookRact11.style.transform = 'rotateY(-180deg)':
            booksampleGroup.style.transform == 'translateX(-200%)' ? bookRact12.style.transform = 'rotateY(-180deg)':
            bookRact13.style.transform = 'rotateY(-180deg)';
        }else{
            booksampleGroup.style.transform == 'translateX(0%)' ? booksampleGroup.style.transform = 'translateX(-50%)':
            booksampleGroup.style.transform == 'translateX(-50%)' ? booksampleGroup.style.transform = 'translateX(-100%)':
            booksampleGroup.style.transform == 'translateX(-100%)' ? booksampleGroup.style.transform = 'translateX(-150%)':
            booksampleGroup.style.transform == 'translateX(-150%)' ? booksampleGroup.style.transform = 'translateX(-200%)':
            booksampleGroup.style.transform = 'translateX(-250%)';
            booksampleGroup.style.transform == 'translateX(-50%)' ? bookRact11.style.transform = 'rotateY(-180deg)':
            booksampleGroup.style.transform == 'translateX(-100%)' ? bookRact12.style.transform = 'rotateY(-180deg)':
            booksampleGroup.style.transform == 'translateX(-150%)' ? bookRact13.style.transform = 'rotateY(-180deg)':
            booksampleGroup.style.transform == 'translateX(-200%)' ? bookRact14.style.transform = 'rotateY(-180deg)':
            booksampleGroup.style.transform == 'translateX(-250%)' ? bookRact15.style.transform = 'rotateY(-180deg)':
            bookRact15.style.transform = 'rotateY(-180deg)';
        }

        booksampleGroup.style.transition = 'transform 0s ease 0.5s';
        $(booksampleGroup).animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
        $(".buttonCancel1").animate({height: '30px'}, 0).animate({height: '30px'}, 1000).animate({height: '0'}, 0);
        $(".buttonbar").animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
    }

    function nextClick2() {
        if(window.innerWidth > 700) {
            bookreviewGroup.style.transform == 'translateX(0%)' ? bookreviewGroup.style.transform = 'translateX(-100%)':
            bookreviewGroup.style.transform = 'translateX(-200%)';
            bookreviewGroup.style.transform == 'translateX(-100%)' ? bookRact11.style.transform = 'rotateY(-180deg)':
            bookreviewGroup.style.transform == 'translateX(-200%)' ? bookRact12.style.transform = 'rotateY(-180deg)':
            bookRact13.style.transform = 'rotateY(-180deg)';
        }else{
            bookreviewGroup.style.transform == 'translateX(0%)' ? bookreviewGroup.style.transform = 'translateX(-50%)':
            bookreviewGroup.style.transform == 'translateX(-50%)' ? bookreviewGroup.style.transform = 'translateX(-100%)':
            bookreviewGroup.style.transform == 'translateX(-100%)' ? bookreviewGroup.style.transform = 'translateX(-150%)':
            bookreviewGroup.style.transform == 'translateX(-150%)' ? bookreviewGroup.style.transform = 'translateX(-200%)':
            bookreviewGroup.style.transform = 'translateX(-250%)';
            bookreviewGroup.style.transform == 'translateX(-50%)' ? bookRact11.style.transform = 'rotateY(-180deg)':
            bookreviewGroup.style.transform == 'translateX(-100%)' ? bookRact12.style.transform = 'rotateY(-180deg)':
            bookreviewGroup.style.transform == 'translateX(-150%)' ? bookRact13.style.transform = 'rotateY(-180deg)':
            bookreviewGroup.style.transform == 'translateX(-200%)' ? bookRact14.style.transform = 'rotateY(-180deg)':
            bookreviewGroup.style.transform == 'translateX(-250%)' ? bookRact15.style.transform = 'rotateY(-180deg)':
            bookRact15.style.transform = 'rotateY(-180deg)';
        }

        bookreviewGroup.style.transition = 'transform 0s ease 0.5s';
        $(bookreviewGroup).animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
        $(".buttonCancel2").animate({height: '30px'}, 0).animate({height: '30px'}, 1000).animate({height: '0'}, 0);
        $(".buttonbar").animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
    }

    function previousClick1() {
        if(window.innerWidth > 700) {
            booksampleGroup.style.transform == 'translateX(-200%)' ? booksampleGroup.style.transform = 'translateX(-100%)':
            booksampleGroup.style.transform = 'translateX(0%)';
            booksampleGroup.style.transform == 'translateX(-100%)' ? bookRact12.style.transform = 'rotateY(0deg)':
            booksampleGroup.style.transform == 'translateX(0%)' ? bookRact11.style.transform = 'rotateY(0deg)':
            bookRact13.style.transform = 'rotateY(0deg)';
        }else{
            booksampleGroup.style.transform == 'translateX(-250%)' ? booksampleGroup.style.transform = 'translateX(-200%)':
            booksampleGroup.style.transform == 'translateX(-200%)' ? booksampleGroup.style.transform = 'translateX(-150%)':
            booksampleGroup.style.transform == 'translateX(-150%)' ? booksampleGroup.style.transform = 'translateX(-100%)':
            booksampleGroup.style.transform == 'translateX(-100%)' ? booksampleGroup.style.transform = 'translateX(-50%)':
            booksampleGroup.style.transform = 'translateX(0%)';
            booksampleGroup.style.transform == 'translateX(-200%)' ? bookRact15.style.transform = 'rotateY(0deg)':
            booksampleGroup.style.transform == 'translateX(-150%)' ? bookRact14.style.transform = 'rotateY(0deg)':
            booksampleGroup.style.transform == 'translateX(-100%)' ? bookRact13.style.transform = 'rotateY(0deg)':
            booksampleGroup.style.transform == 'translateX(-50%)' ? bookRact12.style.transform = 'rotateY(0deg)':
            booksampleGroup.style.transform == 'translateX(0%)' ? bookRact11.style.transform = 'rotateY(0deg)':
            bookRact11.style.transform = 'rotateY(0deg)';
        }

        booksampleGroup.style.transition = 'transform 0s ease 0.5s';
        $(booksampleGroup).animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
        $(".buttonCancel1").animate({height: '30px'}, 0).animate({height: '30px'}, 1000).animate({height: '0'}, 0);
        $(".buttonbar").animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
    }

    function previousClick2() {
        if(window.innerWidth > 700) {
            bookreviewGroup.style.transform == 'translateX(-200%)' ? bookreviewGroup.style.transform = 'translateX(-100%)':
            bookreviewGroup.style.transform = 'translateX(0%)';
            bookreviewGroup.style.transform == 'translateX(-100%)' ? bookRact12.style.transform = 'rotateY(0deg)':
            bookreviewGroup.style.transform == 'translateX(0%)' ? bookRact11.style.transform = 'rotateY(0deg)':
            bookRact13.style.transform = 'rotateY(0deg)';
        }else{
            bookreviewGroup.style.transform == 'translateX(-250%)' ? bookreviewGroup.style.transform = 'translateX(-200%)':
            bookreviewGroup.style.transform == 'translateX(-200%)' ? bookreviewGroup.style.transform = 'translateX(-150%)':
            bookreviewGroup.style.transform == 'translateX(-150%)' ? bookreviewGroup.style.transform = 'translateX(-100%)':
            bookreviewGroup.style.transform == 'translateX(-100%)' ? bookreviewGroup.style.transform = 'translateX(-50%)':
            bookreviewGroup.style.transform = 'translateX(0%)';
            bookreviewGroup.style.transform == 'translateX(-200%)' ? bookRact15.style.transform = 'rotateY(0deg)':
            bookreviewGroup.style.transform == 'translateX(-150%)' ? bookRact14.style.transform = 'rotateY(0deg)':
            bookreviewGroup.style.transform == 'translateX(-100%)' ? bookRact13.style.transform = 'rotateY(0deg)':
            bookreviewGroup.style.transform == 'translateX(-50%)' ? bookRact12.style.transform = 'rotateY(0deg)':
            bookreviewGroup.style.transform == 'translateX(0%)' ? bookRact11.style.transform = 'rotateY(0deg)':
            bookRact11.style.transform = 'rotateY(0deg)';
        }

        bookreviewGroup.style.transition = 'transform 0s ease 0.5s';
        $(bookreviewGroup).animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
        $(".buttonCancel2").animate({height: '30px'}, 0).animate({height: '30px'}, 1000).animate({height: '0'}, 0);
        $(".buttonbar").animate({opacity: '0'}, 300).animate({opacity: '0'}, 400).animate({opacity: '1'}, 300);
    }

    //viewport transition//////////////////////////////////////////////////
    window.onresize = function(event){
        if(bookScale.style.transform != 'scale(1, 1)') {
            var innerWidth = window.innerWidth;
            innerWidth > "1200" ? bookScale.style.transform = 'scale(' + window.innerWidth / 8 / 100 + ', ' + window.innerWidth / 8 / 100 + ')':
            innerWidth > "1000" ? bookScale.style.transform = 'scale(' + window.innerWidth / 7 / 100 + ', ' + window.innerWidth / 7 / 100 + ')':
            innerWidth > "800" ? bookScale.style.transform = 'scale(' + window.innerWidth / 6 / 100 + ', ' + window.innerWidth / 6 / 100 + ')':
            innerWidth > "700" ? bookScale.style.transform = 'scale(' + window.innerWidth / 5.5 / 100 + ', ' + window.innerWidth / 5.5 / 100 + ')':
            innerWidth > "650" ? bookScale.style.transform = 'scale(' + window.innerWidth / 3.5 / 100 + ', ' + window.innerWidth / 3.5 / 100 + ')':
            innerWidth > "600" ? bookScale.style.transform = 'scale(' + window.innerWidth / 3 / 100 + ', ' + window.innerWidth / 3 / 100 + ')':
            innerWidth > "520" ? bookScale.style.transform = 'scale(' + window.innerWidth / 2.8 / 100 + ', ' + window.innerWidth / 2.8 / 100 + ')':
            innerWidth > "480" ? bookScale.style.transform = 'scale(' + window.innerWidth / 2.6 / 100 + ', ' + window.innerWidth / 2.6 / 100 + ')':
            innerWidth > "410" ? bookScale.style.transform = 'scale(' + window.innerWidth / 2.2 / 100 + ', ' + window.innerWidth / 2.2 / 100 + ')':
            innerWidth > "370" ? bookScale.style.transform = 'scale(' + window.innerWidth / 2 / 100 + ', ' + window.innerWidth / 2 / 100 + ')':
            innerWidth > "340" ? bookScale.style.transform = 'scale(' + window.innerWidth / 1.8 / 100 + ', ' + window.innerWidth / 1.8 / 100 + ')':
            innerWidth > "300" ? bookScale.style.transform = 'scale(' + window.innerWidth / 1.6 / 100 + ', ' + window.innerWidth / 1.6 / 100 + ')':
            innerWidth > "260" ? bookScale.style.transform = 'scale(' + window.innerWidth / 1.4 / 100 + ', ' + window.innerWidth / 1.4 / 100 + ')':
            bookScale.style.transform = 'scale(' + window.innerWidth / 1.2 / 100 + ', ' + window.innerWidth / 1.2 / 100 + ')';
            innerWidth > "1200" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 8 / 100 + ', ' + window.innerWidth / 8 / 100 + ')':
            innerWidth > "1000" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 7 / 100 + ', ' + window.innerWidth / 7 / 100 + ')':
            innerWidth > "800" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 6 / 100 + ', ' + window.innerWidth / 6 / 100 + ')':
            innerWidth > "700" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 5.5 / 100 + ', ' + window.innerWidth / 5.5 / 100 + ')':
            innerWidth > "650" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 3.5 / 100 + ', ' + window.innerWidth / 3.5 / 100 + ')':
            innerWidth > "600" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 3 / 100 + ', ' + window.innerWidth / 3 / 100 + ')':
            innerWidth > "520" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 2.8 / 100 + ', ' + window.innerWidth / 2.8 / 100 + ')':
            innerWidth > "480" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 2.6 / 100 + ', ' + window.innerWidth / 2.6 / 100 + ')':
            innerWidth > "410" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 2.2 / 100 + ', ' + window.innerWidth / 2.2 / 100 + ')':
            innerWidth > "370" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 2 / 100 + ', ' + window.innerWidth / 2 / 100 + ')':
            innerWidth > "340" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 1.8 / 100 + ', ' + window.innerWidth / 1.8 / 100 + ')':
            innerWidth > "300" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 1.6 / 100 + ', ' + window.innerWidth / 1.6 / 100 + ')':
            innerWidth > "260" ? bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 1.4 / 100 + ', ' + window.innerWidth / 1.4 / 100 + ')':
            bookScale.style['-webkit-transform'] = 'scale(' + window.innerWidth / 1.2 / 100 + ', ' + window.innerWidth / 1.2 / 100 + ')';
        }
        if(bookSample.style.opacity == '1') {
            innerWidth <= "700" ? mainbook.style.transform = 'translate(50%, -50%)':
            mainbook.style.transform = 'translate(0, -50%)';
            innerWidth <= "700" ? bookScale.style.top = '8.5%':
            bookScale.style.top = '0';
            innerWidth <= "700" ? bookCoverShadow.style.transform = 'translateX(100%)':
            bookCoverShadow.style.transform = 'translateX(50%)';
            innerWidth <= "700" ? bookGroup.style.transform = 'translateX(100%)':
            bookGroup.style.transform = 'translateX(50%)';
            innerWidth <= "700" ? bookMarkShadow.style.left = '55%':
            bookMarkShadow.style.left = '30%';
        }else if(bookReview.style.opacity == '1'){
            innerWidth <= "700" ? mainbook.style.transform = 'translate(-50%, -50%)':
            mainbook.style.transform = 'translate(0, -50%)';
            innerWidth <= "700" ? bookReview.style.left = '0':
            bookReview.style.left = '-100%';
            innerWidth <= "700" ? bookScale.style.top = '8.5%':
            bookScale.style.top = '0';
            innerWidth <= "700" ? bookCoverShadow.style.transform = 'translateX(0)':
            bookCoverShadow.style.transform = 'translateX(50%)';
            innerWidth <= "700" ? bookGroup.style.transform = 'translateX(0)':
            bookGroup.style.transform = 'translateX(50%)';
            innerWidth <= "700" ? bookMarkShadow.style.left = '5%':
            bookMarkShadow.style.left = '30%';
        }
    }

    // button color change: hover//////////////////////////////////////////////////
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

    $(".cancelbutton").hover(function() {
		$(this).css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(this).css("color", "slategrey");
	});

    $(".nextbutton1").hover(function() {
		$(this).css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(this).css("color", "slategrey");
	});

    $(".nextbutton2").hover(function() {
		$(this).css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(this).css("color", "slategrey");
	});

    $(".previousbutton1").hover(function() {
		$(this).css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(this).css("color", "slategrey");
	});

    $(".previousbutton2").hover(function() {
		$(this).css("color", "rgba(" + red + ", " + green + ", " + blue + ")");
	}, function() {
		$(this).css("color", "slategrey");
	});

    let startScreen = document.querySelector(".startScreen");
    startScreen.style.backgroundColor = 'rgba(' + red1 + ', ' + green2 + ', ' + blue3 + ')';
});

// loading//////////////////////////////////////////////////
window.onload = function() {
	$(".START").delay(2000).fadeOut(1000);
}

var radius;
var paintColor;

let plusCount1 = 0;
let plusCount2 = 0;
let plusCount3 = 0;
let minusCount1 = 0;
let minusCount2 = 0;
let minusCount3 = 0;

function preload() {
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("muralCanvas"); 
    createP();
    colorMode(RGB)
    paintColor = color(30, 10, 5);
    createColorPicker();
    // background(120, 40, 30);
}

function draw() {
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
    stroke(paintColor);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
}