var menu = document.getElementById("menu");
var ulist = document.getElementById("ulist");

ulist.addEventListener("mouseover", function( event ) {
  event.target.style.color = "#0020dd"; // #fec833 amarillo
  event.target.style.cursor = "pointer";
  event.target.style.transform = "translateY(-5px)";
}, false);
ulist.addEventListener("mouseout", function( event ) {
  event.target.style.color = "white";
  event.target.style.transform = "translateY(0px)";
}, false);



var title = document.getElementById("MAX");
var bott = document.getElementById("bottomBar");
var social = document.getElementById("social");
var credits = document.getElementById("credits");
var luckyB = document.getElementById("luckyB");
var luckyW = document.getElementById("luckyW");

// Web Design
var modal1 = document.getElementById("wdModal");
var btn1 = document.getElementById("wdbtn");
var span1 = document.getElementsByClassName("close-btn")[0];
var sideb1 = document.getElementById("sidebar1");

btn1.onclick = function() {
  modal1.style.display = "block";
  modal1.style.opacity = "1";
  sideb1.className = "open-side";
  title.style.top = "70vh";
  bott.style.color = "white";
  menu.style.opacity = "0";
  social.style.opacity = "0";
  credits.style.opacity = "0";
  luckyB.style.opacity = "0";
  luckyW.style.opacity = "1";
}

span1.onmousedown = function() {
  span1.style.color = "#fec833";
}
span1.onmouseenter = function() {
  span1.style.color = "#ea2a23";
  span1.style.cursor = "pointer";
}
span1.onmouseleave = function() {
  span1.style.color = "black";
}

span1.onclick = function() {
  span1.style.color = "black";
  sideb1.className = "close-side";
  title.style.top = "-5vh";
  bott.style.color = "black";
  menu.style.opacity = "1";
  social.style.opacity = "1";
  credits.style.opacity = "1";
  modal1.style.opacity = "0";
  luckyB.style.opacity = "1";
  luckyW.style.opacity = "0";
  setTimeout(function(){
    modal1.style.display = "none";
  }, 1000);
}

// Motion Graphics
var modal2 = document.getElementById("mgModal");
var btn2 = document.getElementById("mgbtn");
var span2 = document.getElementsByClassName("close-btn")[1];
var sideb2 = document.getElementById("sidebar2");

btn2.onclick = function() {
  modal2.style.display = "block";
  modal2.style.opacity = "1";
  sideb2.className = "open-side";
  title.style.top = "70vh";
  bott.style.color = "white";
  menu.style.opacity = "0";
  social.style.opacity = "0";
  credits.style.opacity = "0";
  luckyB.style.opacity = "0";
  luckyW.style.opacity = "1";
}

span2.onmousedown = function() {
  span2.style.color = "#fec833";
}
span2.onmouseenter = function() {
  span2.style.color = "#ea2a23";
  span2.style.cursor = "pointer";
}
span2.onmouseleave = function() {
  span2.style.color = "black";
}

span2.onclick = function() {
  span2.style.color = "black";
  sideb2.className = "close-side";
  title.style.top = "-5vh";
  bott.style.color = "black";
  menu.style.opacity = "1";
  social.style.opacity = "1";
  credits.style.opacity = "1";
  modal2.style.opacity = "0";
  luckyB.style.opacity = "1";
  luckyW.style.opacity = "0";
  setTimeout(function(){
    modal2.style.display = "none";
  }, 1000);
}

// Illustration
var modal3 = document.getElementById("illModal");
var btn3 = document.getElementById("illbtn");
var span3 = document.getElementsByClassName("close-btn")[2];
var sideb3 = document.getElementById("sidebar3");

btn3.onclick = function() {
  modal3.style.display = "block";
  modal3.style.opacity = "1";
  sideb3.className = "open-side";
  title.style.top = "70vh";
  bott.style.color = "white";
  menu.style.opacity = "0";
  social.style.opacity = "0";
  credits.style.opacity = "0";
  luckyB.style.opacity = "0";
  luckyW.style.opacity = "1";
}

span3.onmousedown = function() {
  span3.style.color = "#fec833";
}
span3.onmouseenter = function() {
  span3.style.color = "#ea2a23";
  span3.style.cursor = "pointer";
}
span3.onmouseleave = function() {
  span3.style.color = "black";
}

span3.onclick = function() {
  span3.style.color = "black";
  sideb3.className = "close-side";
  title.style.top = "-5vh";
  bott.style.color = "black";
  menu.style.opacity = "1";
  social.style.opacity = "1";
  credits.style.opacity = "1";
  modal3.style.opacity = "0";
  luckyB.style.opacity = "1";
  luckyW.style.opacity = "0";
  setTimeout(function(){
    modal3.style.display = "none";
  }, 1000);
  /* resets illustration modal when clicking the span3 element instead of the emptybtn */
  vbtn.style.display = "block";
  bbtn.style.display = "block";
  emptybtn.style.opacity = "0";
  vectorSlides.style.display = "none";
  bitmapSlides.style.display = "none";
  setTimeou(function(){
      emptybtn.style.display = "none";
   }, 1000);

}

// Print
var modal4 = document.getElementById("prModal");
var btn4 = document.getElementById("prbtn");
var span4 = document.getElementsByClassName("close-btn")[3];
var sideb4 = document.getElementById("sidebar4");

btn4.onclick = function() {
  modal4.style.display = "block";
  modal4.style.opacity = "1";
  sideb4.className = "open-side";
  title.style.top = "70vh";
  bott.style.color = "white";
  menu.style.opacity = "0";
  social.style.opacity = "0";
  credits.style.opacity = "0";
  luckyB.style.opacity = "0";
  luckyW.style.opacity = "1";
}

span4.onmousedown = function() {
  span4.style.color = "#fec833";
}
span4.onmouseenter = function() {
  span4.style.color = "#ea2a23";
  span4.style.cursor = "pointer";
}
span4.onmouseleave = function() {
  span4.style.color = "black";
}

span4.onclick = function() {
  span4.style.color = "black";
  sideb4.className = "close-side";
  title.style.top = "-5vh";
  bott.style.color = "black";
  menu.style.opacity = "1";
  social.style.opacity = "1";
  credits.style.opacity = "1";
  modal4.style.opacity = "0";
  luckyB.style.opacity = "1";
  luckyW.style.opacity = "0";
  setTimeout(function(){
    modal4.style.display = "none";
  }, 1000);
}


// BIO
var modal5 = document.getElementById("bioModal");
var btn5 = document.getElementById("biobtn");
var span5 = document.getElementsByClassName("close-btn")[4];
var sideb5 = document.getElementById("sidebar5");
var maxpx = document.getElementById("MaxpxCont");

var tab1 = document.getElementById("table01");
var tab2 = document.getElementById("table02");
var tab3 = document.getElementById("table03");
var tab4 = document.getElementById("table04");


btn5.onclick = function() {
  modal5.style.display = "block";
  modal5.style.opacity = "1";
  sideb5.className = "open-side";
  title.style.top = "70vh";
  bott.style.color = "white";
  menu.style.opacity = "0";
  social.style.opacity = "0";
  credits.style.opacity = "0";
  luckyB.style.opacity = "0";
  luckyW.style.opacity = "1";
  setTimeout(function(){
    maxpx.style.top = "0vh";
    maxpx.style.opacity = "1";
  },150);
  setTimeout(function(){
    tab1.style.scale = "1";
    /*tab2.style.scale = "1";
    tab3.style.scale = "1";
    tab4.style.scale = "1";*/
  },500);
}


span5.onmousedown = function() {
  span5.style.color = "#fec833";
}
span5.onmouseenter = function() {
  span5.style.color = "#ea2a23";
  span5.style.cursor = "pointer";
}
span5.onmouseleave = function() {
  span5.style.color = "black";
}

span5.onclick = function() {
  span5.style.color = "black";
  sideb5.className = "close-side";
  title.style.top = "-5vh";
  bott.style.color = "black";
  menu.style.opacity = "1";
  social.style.opacity = "1";
  credits.style.opacity = "1";
  modal5.style.opacity = "0";
  luckyB.style.opacity = "1";
  luckyW.style.opacity = "0";
  //maxpx.style.top = "100vh";
  tab1.style.scale = "0";
  /*tab2.style.scale = "0";
  tab3.style.scale = "0";
  tab4.style.scale = "0";*/
  setTimeout(function(){
    modal5.style.display = "none";
    maxpx.style.opacity = "0";
  },1000);

}

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;


function copiarFon() {
  var copyText = document.getElementById("WAPP");

  copyText.select();
  copyText.setSelectionRange(0,99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Número copiado");
}


function copiarMail() {
  var copyText = document.getElementById("MAIL");

  copyText.select();
  copyText.setSelectionRange(0,99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Correo copiado");
}
