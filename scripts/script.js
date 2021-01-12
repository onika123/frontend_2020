// JavaScript Document

var deButton = document.querySelector("header nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
  // deNav.classList.toggle("schuifPagina")
}

