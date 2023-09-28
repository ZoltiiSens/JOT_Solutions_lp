'use strict';
// Function opens sub menu on small screen devices
function openMobileSubMenu(index) {
	const burger = document.querySelector('.burger-menu');
	burger.onclick = closeMobileSubMenu;
	burger.children[0].style.transformOrigin = 'left';
	burger.children[0].style.transform =
		'rotate(45deg) translateX(-7.5px) translateY(7px)';
	burger.children[0].style.width = '20px';
	burger.children[1].style.transform = '';
	burger.children[2].style.transformOrigin = 'left';
	burger.children[2].style.transform =
		'rotate(-45deg) translateX(-7.5px) translateY(-7px)';
	burger.children[2].style.width = '20px';
	const subMenu = document.querySelector(`.mobile-subMenu--${index}`);
	subMenu.style.right = '0%';
	subMenu.style.opacity = '1';
}
function closeMobileSubMenu() {
	const burger = document.querySelector('.burger-menu');
	burger.onclick = closeMenu;
	burger.children[0].style.transformOrigin = 'center';
	burger.children[0].style.transform =
		'translateY(0) translateX(0) rotate(45deg)';
	burger.children[0].style.width = '40px';
	burger.children[1].style.transform = 'rotate(45deg) rotate(0deg)';
	burger.children[2].style.transformOrigin = 'center';
	burger.children[2].style.transform =
		'translateY(0) translateX(0) rotate(-45deg)';
	burger.children[2].style.width = '40px';
	const subMenus = document.querySelectorAll('.mobile-subMenu');
	for (const subMenu of subMenus) {
		subMenu.style.right = '-100%';
		subMenu.style.opacity = '0';
	}
}

// Function opens sub menu when mouse is on opener text
function mouseOverSubMenuOpener(index) {
	const opener = document.querySelectorAll('.subMenuOpener')[index];
	opener.querySelector('i').style.transform = 'rotate(180deg)';
	opener.querySelector('.hidden-line').classList.remove('hidden');
	opener.querySelector('.hidden-block').classList.remove('hidden');
	const subMenu = document.querySelectorAll('.subMenu')[index];
	subMenu.style.transform = 'translateX(-50%) translateY(0)';
	subMenu.style.opacity = 1;
	subMenu.style.pointerEvents = 'all';
}
// Function closes sub menu when mouse is out of opener text
function mouseOutSubMenu(index) {
	const opener = document.querySelectorAll('.subMenuOpener')[index];
	opener.querySelector('i').style.transform = 'rotate(0deg)';
	opener.querySelector('.hidden-line').classList.add('hidden');
	opener.querySelector('.hidden-block').classList.add('hidden');
	const subMenu = document.querySelectorAll('.subMenu')[index];
	subMenu.style.transform = 'translateX(-50%) translateY(-100px)';
	subMenu.style.opacity = 0;
	subMenu.style.pointerEvents = 'none';
}

// Function opens navbar menu on small screens
function openMenu() {
	const burger = document.querySelector('.burger-menu');
	for (let child of burger.children) {
		child.style.backgroundColor = 'white';
	}
	burger.onclick = closeMenu;
	burger.style.border = '0px solid rgba(255,255,255,0)';
	burger.style.backgroundColor = '#FFFFFF00';
	burger.children[0].style.transform = 'translateY(0) rotate(45deg)';
	burger.children[1].style.transform = 'rotate(45deg)';
	burger.children[2].style.transform = 'translateY(0) rotate(-45deg)';
	const mobileMenu = document.querySelector('.mobileMenu');
	mobileMenu.style.opacity = 1;
	mobileMenu.style.transform = 'translateY(0)';
	mobileMenu.style.pointerEvents = 'all';
}

// Function closes navbar menu on small screens
function closeMenu() {
	const burger = document.querySelector('.burger-menu');
	for (let child of burger.children) {
		child.style.backgroundColor = '#42C1EE';
	}
	burger.onclick = openMenu;
	burger.style.border = '2px solid rgba(66, 193, 238, 1)';
	burger.style.backgroundColor = '#EEF1F899';
	burger.children[0].style.transform = 'translateY(-10px) rotate(0)';
	burger.children[1].style.transform = 'rotate(0)';
	burger.children[2].style.transform = 'translateY(10px) rotate(0)';
	const mobileMenu = document.querySelector('.mobileMenu');
	mobileMenu.style.opacity = 0;
	mobileMenu.style.transform = 'translateY(-100px)';
	mobileMenu.style.pointerEvents = 'none';
}

// Swiper configuration
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 2,
	spaceBetween: 20,
	loop: true,
	centerSlide: true,
	fade: true,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
		},
	},
});

// Custom function for large screen swiper work
function changeActive(index) {
	const previousActive = document.querySelector(
		`.slider-card--${previousActiveIndex}`
	);
	const currentActive = document.querySelector(`.slider-card--${index}`);
	previousActive.style.transform = 'scale(1)';
	currentActive.style.transform = 'scale(1.5) translate(-35.71%)';
	currentActive.style.left = '50%';
	currentActive.style.zIndex = 4;

	switch (index) {
		case 0:
			changePosition(1, null, '10%', 'scale(1.2)', 3);
			changePosition(2, null, '0', 'scale(1)', 2);
			for (let i = 3; i < MAX_NUM_OF_CARDS; i++) {
				changePosition(i, null, '0', 'scale(1)', 1);
			}
			break;
		case 1:
			changePosition(0, '10%', null, 'scale(1.2)', 3);
			changePosition(2, null, '10%', 'scale(1.2)', 3);
			changePosition(3, null, '0', 'scale(1)', 2);
			for (let i = 4; i < MAX_NUM_OF_CARDS; i++) {
				changePosition(i, null, '0', 'scale(1)', 1);
			}
			break;
		case 2:
			changePosition(0, '0', null, 'scale(1)', 2);
			changePosition(1, '10%', null, 'scale(1.2)', 3);
			changePosition(3, null, '10%', 'scale(1.2)', 3);
			changePosition(4, null, '0', 'scale(1)', 2);
			for (let i = 5; i < MAX_NUM_OF_CARDS; i++) {
				changePosition(i, null, '0', 'scale(1)', 1);
			}
			break;
		case MAX_NUM_OF_CARDS - 2:
			changePosition(MAX_NUM_OF_CARDS - 4, '0', null, 'scale(1)', 2);
			changePosition(MAX_NUM_OF_CARDS - 3, '10%', null, 'scale(1.2)', 3);
			changePosition(MAX_NUM_OF_CARDS - 1, null, '10%', 'scale(1.2)', 3);
			changePosition(MAX_NUM_OF_CARDS, null, '0', 'scale(1)', 2);
			for (let i = 0; i < MAX_NUM_OF_CARDS - 5; i++) {
				changePosition(i, '0', null, 'scale(1)', 1);
			}
			break;
		case MAX_NUM_OF_CARDS - 1:
			changePosition(MAX_NUM_OF_CARDS - 3, '0', null, 'scale(1)', 2);
			changePosition(MAX_NUM_OF_CARDS - 2, '10%', null, 'scale(1.2)', 3);
			changePosition(MAX_NUM_OF_CARDS, null, '10%', 'scale(1.2)', 3);
			for (let i = 0; i < MAX_NUM_OF_CARDS - 4; i++) {
				changePosition(i, '0', null, 'scale(1)', 1);
			}
			break;
		case MAX_NUM_OF_CARDS:
			changePosition(MAX_NUM_OF_CARDS - 2, '0', null, 'scale(1)', 2);
			changePosition(MAX_NUM_OF_CARDS - 1, '10%', null, 'scale(1.2)', 3);
			changePosition(MAX_NUM_OF_CARDS - 1, '10%', null, 'scale(1.2)', 3);
			for (let i = 0; i < MAX_NUM_OF_CARDS - 4; i++) {
				changePosition(i, '0', null, 'scale(1)', 1);
			}
			break;
		default:
			if (index - 3 >= 0) {
				for (let i = 0; i < index - 2; i++) {
					changePosition(i, '0', null, 'scale(1)', 1);
				}
			}
			changePosition(index - 2, '0', null, 'scale(1)', 2);
			changePosition(index - 1, '10%', null, 'scale(1.2)', 3);
			changePosition(index + 1, null, '10%', 'scale(1.2)', 3);
			changePosition(index + 2, null, '0', 'scale(1)', 2);
			if (index + 3 <= MAX_NUM_OF_CARDS) {
				for (let i = index + 3; i <= MAX_NUM_OF_CARDS; i++) {
					changePosition(i, null, '0', 'scale(1)', 1);
				}
			}
			break;
	}
	previousActiveIndex = index;
}

// Additional function for changing the card position in swiper
function changePosition(index, left, right, transform, zIndex) {
	cardsList[index].style.left = left;
	cardsList[index].style.right = right;
	cardsList[index].style.transform = transform;
	cardsList[index].style.zIndex = zIndex;
}

// Custom swiper configuration
const MAX_NUM_OF_CARDS = 8;
let previousActiveIndex = 2;
let cardsList = document.querySelectorAll('.slider-card');
let i = 0;
changePosition(0, '0', null, 'scale(1)', 2);
changePosition(1, '10%', null, 'scale(1.2)', 3);
changePosition(2, '50%', null, 'scale(1.5) translateX(-35.71%)', 4);
changePosition(3, null, '10%', 'scale(1.2)', 3);
changePosition(4, null, '0', 'scale(1)', 2);
for (let i = 5; i <= MAX_NUM_OF_CARDS; i++) {
	changePosition(i, null, '0', 'scale(1)', 1);
}
