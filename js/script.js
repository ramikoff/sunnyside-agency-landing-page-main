let menu = document.querySelector(".nav__menu");

let burger = document.querySelector(".hamburger");

burger.addEventListener("click", toggleMenu);

function toggleMenu(){

	window.setTimeout(function() {

	menu.classList.toggle("nav__menu--aktive");
	
}, 200);


}




