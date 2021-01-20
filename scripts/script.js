// JavaScript Document
var count = 1200;


var deButton = document.querySelector("header nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  var deNav = document.querySelector('nav')
  deNav.classList.toggle("toonMenu");
  // deNav.classList.toggle("schuifPagina")
}

//var carousel aangemaakt
var backbutton = document.getElementById('backbutton')
var nextbutton = document.getElementById('nextbutton')
var alsoLikeCarousel = document.getElementById('alsoLikeCarousel')

//buttons event listerner 
backbutton.addEventListener('click', back)
nextbutton.addEventListener('click', next)

//functies voor de buttons aanmaken
function next() {
    count -= 450;
    alsoLikeCarousel.style.transform = `translateX(${count}px)`;
    console.log('next')
}

function back() {
    count += 450;
    alsoLikeCarousel.style.transform = `translateX(${count}px)`;
    console.log('back')
}
