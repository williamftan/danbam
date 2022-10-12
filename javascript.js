var menu = document.querySelector(".menu");
var submenu = document.querySelector(".sub-menu");

menu.addEventListener("click", function(event){
    menu.classList.toggle("active");
    submenu.classList.toggle("active");

    
});

window.onclick = function (event){
    if(!event.target.matches(".menu")){
        var line = document.getElementsByClassName("menu")
        var dd = document.getElementsByClassName("sub-menu")
       
        
    for(var i=0; i<dd.length; i++){
        var x = dd[i];

    for(var i=0; i<line.length; i++){
        var y = line[i];
        
    if(x.classList.contains("active")) {x.classList.remove("active")}
    if(y.classList.contains("active")) {y.classList.remove("active")}
    }
    }
    }
}

const myslide = document.querySelectorAll('.slider .slide'),
      dot = document.querySelectorAll('.dot');

let counter = 1;

slidefun(counter);

let timer = setInterval(autoSlide, 5000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}

function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 5000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].classList.remove('active')
	}
	if(n > myslide.length){
        
	   counter = 1;
       
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter-1].style.display = "block";
    
	dot[counter- 1].classList.add('active')
}


const slidebox = document.querySelectorAll('.latest-list .box');

let count = 1;

slideboxfun(count);

function plusSlidesbox(m){
    count += m;
    slideboxfun(count);
}

function currentSlidebox(m) {
	count = m;
	slideboxfun(count);
}

function slideboxfun(m) {
	let i;
	for(i = 0;i<slidebox.length;i++){
		slidebox[i].style.display = "none";
	}
	if(m > slidebox.length){
	   count = 1;
	   }
	if(m < 1){
	   count = slidebox.length;
	   }
	slidebox[count-1].style.display = "block";
}