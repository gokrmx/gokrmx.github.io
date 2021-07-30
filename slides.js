/*
SLIDESHOW 2
*/

var slideIndex2 = 1;
showSlides2(slideIndex2);

//next-previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

//Thumbnail image controls
function currentSlide2(n){
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("motionSlides");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}


/*
SLIDESHOW 3
*/

// Slideshow Actions
var slideIndex3 = 1;
var slideIndex3b = 1;

showSlides3(slideIndex3);
showSlides3b(slideIndex3b);

//next-previous controls
function plusSlides3(n) {
 showSlides3(slideIndex3 += n);
}
function plusSlides3b(n) {
 showSlides3b(slideIndex3b += n);
}

//Thumbnail image controls
function currentSlide3(n){
 showSlides3(slideIndex3 = n);
}
function currentSlide3b(n){
 showSlides3b(slideIndex3b = n);
}

function showSlides3(n) {
   var i;
   var slides = document.getElementsByClassName("illSlides");
   var dots = document.getElementsByClassName("dot3");
   if (n > slides.length) { slideIndex3 = 1; }
   if (n < 1) { slideIndex3 = slides.length; }
   for (i = 0; i < slides.length; i++){
     slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++){
     dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";
  dots[slideIndex3-1].className += " active";
}

function showSlides3b(n) {
   var i;
   var slides = document.getElementsByClassName("illSlidesB");
   var dots = document.getElementsByClassName("dot3b");
   if (n > slides.length) { slideIndex3b = 1; }
   if (n < 1) { slideIndex3b = slides.length; }
   for (i = 0; i < slides.length; i++){
     slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++){
     dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3b-1].style.display = "block";
  dots[slideIndex3b-1].className += " active";
}


// Button Actions:
var vbtn = document.getElementById("vectorbtn");
var bbtn = document.getElementById("bitmapbtn");
var vectorSlides = document.getElementById("vectorSlides");
var bitmapSlides = document.getElementById("bitmapSlides");
var emptybtn = document.getElementById("closeBtn");

vbtn.onclick = function(){
   vbtn.style.display = "none";
   bbtn.style.display = "none";
   vectorSlides.style.display = "block";
   bitmapSlides.style.display = "none";
   emptybtn.style.display = "block";
   vectorSlides.style.opacity = "1";
   setTimeout(function(){
      emptybtn.style.opacity = "1";
   }, 750);
}

bbtn.onclick = function(){
   vbtn.style.display = "none";
   bbtn.style.display = "none";
   vectorSlides.style.display = "none";
   bitmapSlides.style.display = "block";
   emptybtn.style.display = "block";
   bitmapSlides.style.opacity = "1";
   setTimeout(function(){
      emptybtn.style.opacity = "1";
   }, 250);
}

emptybtn.onclick = function(){
  vbtn.style.display = "block";
  bbtn.style.display = "block";
  emptybtn.style.opacity = "0";
  vectorSlides.style.display = "none";
  bitmapSlides.style.display = "none";
  setTimeou(function(){
      emptybtn.style.display = "none";
   }, 1000);
}

emptybtn.onmousedown = function() {
 emptybtn.style.color = "#fec833";
}
emptybtn.onmouseenter = function() {
 emptybtn.style.color = "#ea2a23";
 emptybtn.style.cursor = "pointer";
}
emptybtn.onmouseleave = function() {
 emptybtn.style.color = "black";
}

/*
SLIDESHOW 4
*/
var slideIndex4 = 1;
showSlides4(slideIndex4);

//next-previous controls
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

//Thumbnail image controls
function currentSlide4(n){
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName("printSlides");
  var dots = document.getElementsByClassName("dot4");
  if (n > slides.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides.length}
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex4-1].style.display = "block";
  dots[slideIndex4-1].className += " active";
}

