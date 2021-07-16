let test = document.getElementById("test");

// This handler will be executed only when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.color = "white";
  // reset the color after a short delay
  //setTimeout(function() {event.target.style.color ="";}, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function( event) {
  //highlight the mouseover target
  event.target.style.color="#BBBBBB";
  // reset the color after a short delay
  //setTimeout(function() {event.target.style.color="";}, 1000);
}, false);

test.addEventListener("mouseout", function(event){
  event.target.style.color="white";
}, false);


// Get the modal
var modal1 = document.getElementById("uxModal");
// Get the button that opens the modal
var btn1 = document.getElementById("uxbtn");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn1.onclick = function() {modal1.style.display = "block";}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() { modal1.style.display = "none";}

var modal2 = document.getElementById("mgModal");
var btn2 = document.getElementById("mgbtn");
var span2 = document.getElementsByClassName("close")[1];
btn2.onclick = function() { modal2.style.display = "block";}
span2.onclick = function() { modal2.style.display = "none";}

var modal3 = document.getElementById("vgModal");
var btn3 = document.getElementById("vgbtn");
var span3 = document.getElementsByClassName("close")[2];
btn3.onclick = function() { modal3.style.display = "block";}
span3.onclick = function() { modal3.style.display = "none";}

var modal4 = document.getElementById("ipModal");
var btn4 = document.getElementById("ipbtn");
var span4 = document.getElementsByClassName("close")[3];
btn4.onclick = function() { modal4.style.display = "block";}
span4.onclick = function() { modal4.style.display = "none";}

var modal5 = document.getElementById("muModal");
var btn5 = document.getElementById("mubtn");
var span5 = document.getElementsByClassName("close")[4];
btn5.onclick = function() { modal5.style.display = "block";}
span5.onclick = function() { modal5.style.display = "none";}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}
