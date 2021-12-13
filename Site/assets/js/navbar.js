/*------------PROPERTIES--------------*/

const accueil = document.getElementById('accueil-button');
const apropos = document.getElementById('apropos-button');

const buttons = new Array(accueil,apropos);

const accueilContent = document.getElementById( 'accueil-content' );
const aproposContent = document.getElementById( 'apropos-content' );

var currentButton;

/*---------INIT HTML ELEMENTS---------*/

//Init navbar
setActiveNavBtn(accueil, false);
currentButton = accueil;

/*-----------INIT LISTENERS-----------*/

//Init navbar button
for (var i = buttons.length - 1; i >= 0; i--) {
	let btn = buttons[i];
	btn.onclick = function() {
		switchNavBarBtn(btn);
	}
}

//Init navbar update on scroll
document.addEventListener( 'scroll', event => {
  activeButtonByContent(accueilContent,accueil);
  activeButtonByContent(aproposContent,apropos);
});

/*-------------METHODS----------------*/

//Switch to a new active button and deactivate the previous one
function switchNavBarBtn(button){
	setActiveNavBtn(currentButton, true);
	setActiveNavBtn(button, false);
	currentButton = button
}

//Active or deactive the button
function setActiveNavBtn(button, isActive){
	if (!isActive){
		button.classList.remove("navigate");
		button.classList.add("active");
	}
	else {
		button.classList.remove("active");
		button.classList.add("navigate");
	}
}

//Check if an element is in the viewport
function inViewportMiddle(element){
	let rect = element.getBoundingClientRect();
	return !(rect.top > innerHeight/3 || rect.bottom < 0);
}

//Active the current button corresponding to the main content on the viewport
function activeButtonByContent(content, btn){
	if( inViewportMiddle(content) )
		switchNavBarBtn(btn);
}