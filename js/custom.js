$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);




// full round searcher
let currentCell;
let musicPlayStatus = false;
$('.js-table tr td a').on('click', function(){
	if($(this).parent().hasClass('used-cell')){
		return false;
	}else{
		currentCell = $(this);
	 	$(this).parents('.js-content').find('.js-full-round').addClass('hide');
	 	$(this).parents('.js-main-frame').addClass('slide-up').removeClass('slide-down-2');
	 	// $(this).parent().siblings().removeClass('shown');
	 	var id = $(this).attr('href');
	 	$(id).removeClass('hide').addClass('slide-down');

	 	$(this).addClass('blink');
	 	$(this).parent().addClass('used-cell');
	}
	
 	
 	
 	return false;
 });



// click on back btn

$('.js-back__btn').on('click', function(){
	$(this).parents('.js-full-round').removeClass('.slide-down')
	.addClass('hide');
	$('.js-main-frame').removeClass('slide-up');
	$(this).parents('.js-full-round').hide().removeClass('slide-down ');
	$(this).parents('.js-full-round').find('.js-frame-question').removeClass('slide-up-2');
	$(this).parents('.js-full-round').find('.js-frame-answer').removeClass('slide-down-2');
	$('.js-main-frame').removeClass('slide-up').addClass('slide-down-2');
	currentCell.removeAttr('href');
	currentCell.removeClass('blink').addClass('shown');


	$(this).parent('.js-frame-question').find('.my-audio')[0].pause();
	
	musicPlayStatus = false;
});


// click on back btn music
$('.js-music-back__btn').on('click', function(){
	$(this).parents('.js-full-round').removeClass('.slide-down')
	.addClass('hide');
	$('.js-main-frame').removeClass('slide-up');
	$(this).parents('.js-full-round').hide().removeClass('slide-down ');
	$(this).parents('.js-full-round').find('.js-frame-question').removeClass('slide-up-2');
	$(this).parents('.js-full-round').find('.js-frame-answer').removeClass('slide-down-2');
	$('.js-main-frame').removeClass('slide-up').addClass('slide-down-2');
	currentCell.removeAttr('href');
	currentCell.removeClass('blink').addClass('shown');

	$(this).parent('.js-frame-answer').find('.my-audio')[0].pause();
	musicPlayStatus = false;
});


// click on right answer

$('.js-btn').on('click', function(){
	$(this).parents('.js-full-round').find('.js-frame-answer').removeClass('frame-answer')
	.addClass('slide-down-2').removeClass('slide-up-2');
	$(this).parents('.js-frame-question').addClass('slide-up-2').removeClass('slide-down-2');
	currentCell.removeAttr('href');
	currentCell.removeClass('blink').addClass('shown');

	
	$(this).parents('.js-frame-question').find('.my-audio')[0].pause();
	musicPlayStatus = false;
});


// click on green btn

$('.js-success').on('click', function(){
	var href = $(this).parents('.js-full-round').attr('id');
	console.log(href);
	var row = $('.js-table tr td a');
	console.log(row);
	var foundRow = row.attr('href');
	console.log(foundRow);

	currentCell.removeAttr('href');
	currentCell.removeClass('blink').addClass('shown');

	if( row === href){
		foundRow.removeAttr('href').parent('td').addClass('shown').removeClass('blink');
	}

	$(this).parents('.js-full-round').hide().removeClass('slide-down ');
	$(this).parents('.js-full-round').find('.js-frame-question').removeClass('slide-up-2');
	$(this).parents('.js-full-round').find('.js-frame-answer').removeClass('slide-down-2');
	$('.js-main-frame').removeClass('slide-up').addClass('slide-down-2');


	
	$(this).parents('.js-frame-answer').find('.my-audio')[0].pause();
	musicPlayStatus = false;
	
	console.log(musicPlayStatus);
});


// video frame question




$('.js-video__btn').on('click', function(){
	$(this).parents('.js-full-round').find('.js-video').addClass('show slide-down-2');

	$(this).parents('.js-frame-question').addClass('slide-up-2');
});

$('.js-cross').on('click', function(){
	$(this).next('iframe').removeAttr('src');

	$(this).parents('.js-full-round').find('.js-video').removeClass('show slide-down-2');

	$(this).parent('.js-video').prev('.js-frame-question').removeClass('slide-up-2').addClass('slide-down-2')
	.find('.video__btn').removeClass('js-video__btn');
	// $(this).parent('.js-video').next('.js-frame-answer').removeClass('slide-up-2').addClass('slide-down-2 show');
});

// video frame answer

$('.js-video-answer__btn').on('click', function(){
	$(this).parents('.js-full-round').find('.js-video-answer').addClass('show slide-down-2');

	$(this).parents('.js-frame-answer').removeClass('slide-down-2').addClass('slide-up-2');
});

$('.js-cross-answer').on('click', function(){
	$(this).next('iframe').removeAttr('src');

	$(this).parents('.js-full-round').find('.js-video-answer').removeClass('show slide-down-2');

	$(this).parent('.js-video-answer').prev('.js-frame-answer').removeClass('slide-up-2').addClass('slide-down-2')
	.find('.video__btn').removeClass('js-video-answer__btn');
});





 const items = document.querySelectorAll('.js-audio');


function takeAudio(){
	var newArray = Array.from(items);
	newArray.forEach(item => item.addEventListener('click', checkItem));
	console.log(newArray);
}

function checkItem(){
	//let myAudio = this.children('.my-audio');
	var myAudio = this.children[1];
	
	if (musicPlayStatus) {
		this.classList.remove('pause');
		myAudio.pause();
		musicPlayStatus = false;
	} else {
		myAudio.play();
		musicPlayStatus = true;
		this.classList.add('pause');
	}
	

	console.log(this.children);
}

takeAudio();








window.setInterval(onCanvasClick, 6000);
ccc.addEventListener("click",onCanvasClick);
var Configs = {
    backgroundColor: '#030722',
    particleNum: 700,
    step: 17,
    base: 3000,
    zInc: 0.000009
};


// Vars
var fadeTime = 2000; // in ms
var fadeTimeStart;

var canvas;
var context;
var screenWidth;
var screenHeight;
var centerX;
var centerY;
var particles = [];
var hueBase = 0;
var simplexNoise;
var zoff = 0;
var gui;
var can2;
var ctx2;

// Initialize

function init() {
    canvas = document.getElementById('ccc');
    can2 =  document.createElement("canvas");
    ctx = can2.getContext("2d");
    ctx2 = canvas.getContext("2d");
    window.addEventListener('resize', onWindowResize, false);
    onWindowResize(null);

    for (var i = 0, len = Configs.particleNum; i < len; i++) {
        initParticle((particles[i] = new Particle()));
    }

    simplexNoise = new SimplexNoise();

    canvas.addEventListener('click', onCanvasClick, true);

    gui = new dat.GUI();
    gui.add(Configs, 'step', 1, 5);
    gui.add(Configs, 'base', 1500, 4000);
    gui.add(Configs, 'zInc', 0.001, 0.01);
    gui.close();


    requestAnimationFrame(update);
    ctx.lineWidth = 0.7;
    ctx.lineCap = ctx.lineJoin = 'round';
    ctx.fillStyle = Configs.backgroundColor;
    ctx.fillRect(0, 0, screenWidth, screenHeight);

}


// Event listeners

function onWindowResize(e) {
    can2.width = screenWidth  = canvas.width  = window.innerWidth;
    can2.height = screenHeight = canvas.height = window.innerHeight;
    centerX = screenWidth / 10;
    centerY = screenHeight / 10;
}

function onCanvasClick(e) {
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = Configs.backgroundColor;
    ctx.fillRect(0, 0, screenWidth, screenHeight);
    
    simplexNoise = new SimplexNoise();
    fadeTimeStart = undefined;
}


// Functions

function getNoise(x, y, z) {
    var octaves = 2,
        fallout = 0.5,
        amp = 1, f = 1, sum = 1,
        i;

    for (i = 0; i < octaves; ++i) {
        amp *= fallout;
        sum += amp * (simplexNoise.noise3D(x * f, y * f, z * f) + 1) * 4.4;
        f *= 3;
    }

    return sum;
}

function initParticle(p) {
    p.x = p.pastX = screenWidth * Math.random();
    p.y = p.pastY = screenHeight * Math.random();
    p.color.h = hueBase + Math.atan2(centerY - p.y, centerX - p.x) * 200 / Math.PI;
    p.color.s = 1;
    p.color.l = 0.6;
    p.color.a = 0;
}


// Update

function update(time) {
    var step = Configs.step;
    var base = Configs.base;
    var i, p, angle;
    
    for (i = 0; i < particles.length; i++) {
        p = particles[i];

        p.pastX = p.x;
        p.pastY = p.y;
    
        angle = Math.PI * 6 * getNoise(p.x / base * 1.75, p.y / base * 1.75, zoff);
        p.x += Math.cos(angle) * step;
        p.y += Math.sin(angle) * step;
        
        if (p.color.a < 1) p.color.a += 0.001;

        ctx.beginPath();
        ctx.strokeStyle = p.color.toString();
        ctx.moveTo(p.pastX, p.pastY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        
        if (p.x < 0 || p.x > screenWidth || p.y < 0 || p.y > screenHeight) {
            initParticle(p);
        }
    }
    
    hueBase += 0.4;
    zoff += Configs.zInc;
    
    // Code to fade in the view
    if(fadeTimeStart === undefined){
        fadeTimeStart = time;
    }
    var fTime = (time - fadeTimeStart) / fadeTime;
    if(fTime < 1){
        ctx2.globalAlpha = fTime;
        ctx2.clearRect(0,0,canvas.width,canvas.height);
        ctx2.drawImage(can2,0,0);
    }else{
        ctx2.globalAlpha = 1;
        ctx2.drawImage(can2,0,0);
    }

    requestAnimationFrame(update);
}


/**
 * HSLA
 */
function HSLA(h, s, l, a) {
    this.h = h || 0;
    this.s = s || 0;
    this.l = l || 0;
    this.a = a || 0;
}

HSLA.prototype.toString = function() {
    return 'hsla(' + this.h + ',' + (this.s * 100) + '%,' + (this.l * 100) + '%,' + this.a + ')';
}

/**
 * Particle
 */
function Particle(x, y, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.color = color || new HSLA();
    this.pastX = this.x;
    this.pastY = this.y;
}


// Run

init();






// blure js-video
$('frame-bg').blurjs({
	source: 'body',
	radius: 10
});