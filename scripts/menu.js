const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");
const div = document.querySelector('#hamb-menu');
var closeMenu = true;


menubutton.addEventListener("click", () => {
	if (closeMenu) {
		menubutton.src = 'images/billwill.jpg';
		closeMenu = false;
	} else {
		menubutton.src = "images/ham-menu.png";
		closeMenu = true;
	}
	menuitems.forEach((item) => item.classList.toggle("open"));
	div.style.display = 'flex';
	menubutton.classList.toggle("close");
});
