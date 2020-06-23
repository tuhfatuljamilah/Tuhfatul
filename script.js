var myNav = document.getElementById("navbar");
var slideIndex = 0;

// Scroll Navbar Animation

window.onscroll = function() {
    "use strict";

    if(this.screen.width > 678) {

      if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {

          this.myNav.classList.add("bg-nav");        
          this.document.getElementById("navbar").style.padding = "20px 10px";                          
          this.logoText("28px");
          this.menuText("14px");

      } else {      

          this.myNav.classList.remove("bg-nav");
          this.document.getElementById("navbar").style.padding = "60px 20px";            
          this.logoText("35px");
          this.menuText("18px");

      }   

    } else if (this.screen.width <= 678) {

      this.document.getElementById("navbar").style.padding = "20px";            
      this.logoText("28px");
      this.menuText("14px");

    }

};

function logoText(size) {
    var logo = document.getElementsByClassName("logo");
    for (var i = 0; i < logo.length; i++) {
        logo[i].style.fontSize=`${size}`;
    }
};

function menuText(size) {    
    var txt = document.getElementsByClassName("size");
    for (var i = 0; i < txt.length; i++) {
        txt[i].style.fontSize=`${size}`;
    }
};

// Image Slider Animation

showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-slide";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Navbar

function navbarCollapse() {
    var x = document.getElementById("topnav");
    if (x.className === "navbar-menu") {
      x.className += " responsive";
    } else {
      x.className = "navbar-menu";
    }
}

// Navbar Active

var container = document.getElementById("navbar");
var link = container.getElementsByClassName("nav-link");

  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

// Scroll active

const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

// Galeri

var slideIndex = 1;
showSlides2(slideIndex);

function plusSlides(n) {
  showSlides2(slideIndex += n);
}

function currentSlide(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides2.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides2[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}