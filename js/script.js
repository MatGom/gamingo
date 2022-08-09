const burgerIcon = document.querySelector('.burger-icon')
const navMenu = document.querySelector('.menu')

const triggerMenu = () => {
	navMenu.classList.toggle('show-menu')
	burgerIcon.classList.toggle('burger-close-icon')
}

burgerIcon.addEventListener('click', triggerMenu)
