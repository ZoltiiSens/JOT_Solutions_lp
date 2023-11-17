'use strict';

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
	burger.style.border = `2px solid ${primaryColor}`;
	burger.style.backgroundColor = '#EEF1F899';
	burger.children[0].style.transform = 'translateY(-10px) rotate(0)';
	burger.children[0].style.backgroundColor = `${primaryColor}`;
	burger.children[1].style.transform = 'rotate(0)';
	burger.children[1].style.backgroundColor = `${primaryColor}`;
	burger.children[2].style.transform = 'translateY(10px) rotate(0)';
	burger.children[2].style.backgroundColor = `${primaryColor}`;
	const mobileMenu = document.querySelector('.mobileMenu');
	mobileMenu.style.opacity = 0;
	mobileMenu.style.transform = 'translateY(-100px)';
	mobileMenu.style.pointerEvents = 'none';
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

// class for special Swipers
class myOwnSwiper {
	constructor(maxNumOfCards, previousActiveIndex, sliderId) {
		this.MAX_NUM_OF_CARDS = maxNumOfCards;
		this.previousActiveIndex = previousActiveIndex;
		this.sliderId = sliderId;
		this.cardsList = document
			.getElementById(sliderId)
			.querySelectorAll('.slider-card');
		this.changePosition(0, '0', null, 'scale(1)', 2);
		this.changePosition(1, '10%', null, 'scale(1.2)', 3);
		this.changePosition(2, '50%', null, 'scale(1.5) translateX(-35.71%)', 4);
		this.changePosition(3, null, '10%', 'scale(1.2)', 3);
		this.changePosition(4, null, '0', 'scale(1)', 2);
		for (let i = 5; i <= this.MAX_NUM_OF_CARDS; i++) {
			this.changePosition(i, null, '0', 'scale(1)', 1);
		}
	}
	changePosition(index, left, right, transform, zIndex) {
		this.cardsList[index].style.left = left;
		this.cardsList[index].style.right = right;
		this.cardsList[index].style.transform = transform;
		this.cardsList[index].style.zIndex = zIndex;
	}
	changeActive(index) {
		const previousActive = document
			.getElementById(this.sliderId)
			.querySelector(`.slider-card--${this.previousActiveIndex}`);
		const currentActive = document
			.getElementById(this.sliderId)
			.querySelector(`.slider-card--${index}`);
		previousActive.style.transform = 'scale(1)';
		currentActive.style.transform = 'scale(1.5) translate(-35.71%)';
		currentActive.style.left = '50%';
		currentActive.style.zIndex = 4;

		switch (index) {
			case 0:
				this.changePosition(1, null, '10%', 'scale(1.2)', 3);
				this.changePosition(2, null, '0', 'scale(1)', 2);
				for (let i = 3; i <= this.MAX_NUM_OF_CARDS; i++) {
					this.changePosition(i, null, '0', 'scale(1)', 1);
				}
				break;
			case 1:
				this.changePosition(0, '10%', null, 'scale(1.2)', 3);
				this.changePosition(2, null, '10%', 'scale(1.2)', 3);
				this.changePosition(3, null, '0', 'scale(1)', 2);
				for (let i = 4; i <= this.MAX_NUM_OF_CARDS; i++) {
					this.changePosition(i, null, '0', 'scale(1)', 1);
				}
				break;
			case 2:
				this.changePosition(0, '0', null, 'scale(1)', 2);
				this.changePosition(1, '10%', null, 'scale(1.2)', 3);
				this.changePosition(3, null, '10%', 'scale(1.2)', 3);
				this.changePosition(4, null, '0', 'scale(1)', 2);
				if (this.MAX_NUM_OF_CARDS >= 5) {
					for (let i = 5; i <= this.MAX_NUM_OF_CARDS; i++) {
						this.changePosition(i, null, '0', 'scale(1)', 1);
					}
				}
				break;
			case this.MAX_NUM_OF_CARDS - 2:
				if (this.MAX_NUM_OF_CARDS >= 5) {
					this.changePosition(
						this.MAX_NUM_OF_CARDS - 4,
						'0',
						null,
						'scale(1)',
						2
					);
					this.changePosition(
						this.MAX_NUM_OF_CARDS - 3,
						'10%',
						null,
						'scale(1.2)',
						3
					);
					this.changePosition(
						this.MAX_NUM_OF_CARDS - 1,
						null,
						'10%',
						'scale(1.2)',
						3
					);
					this.changePosition(
						this.MAX_NUM_OF_CARDS,
						null,
						'0',
						'scale(1)',
						2
					);
					for (let i = 0; i <= this.MAX_NUM_OF_CARDS - 5; i++) {
						this.changePosition(i, '0', null, 'scale(1)', 1);
					}
				}
				break;
			case this.MAX_NUM_OF_CARDS - 1:
				this.changePosition(
					this.MAX_NUM_OF_CARDS - 3,
					'0',
					null,
					'scale(1)',
					2
				);
				this.changePosition(
					this.MAX_NUM_OF_CARDS - 2,
					'10%',
					null,
					'scale(1.2)',
					3
				);
				this.changePosition(
					this.MAX_NUM_OF_CARDS,
					null,
					'10%',
					'scale(1.2)',
					3
				);
				for (let i = 0; i <= this.MAX_NUM_OF_CARDS - 4; i++) {
					this.changePosition(i, '0', null, 'scale(1)', 1);
				}
				break;
			case this.MAX_NUM_OF_CARDS:
				this.changePosition(
					this.MAX_NUM_OF_CARDS - 2,
					'0',
					null,
					'scale(1)',
					2
				);
				this.changePosition(
					this.MAX_NUM_OF_CARDS - 1,
					'10%',
					null,
					'scale(1.2)',
					3
				);
				this.changePosition(
					this.MAX_NUM_OF_CARDS - 1,
					'10%',
					null,
					'scale(1.2)',
					3
				);
				for (let i = 0; i <= this.MAX_NUM_OF_CARDS - 4; i++) {
					this.changePosition(i, '0', null, 'scale(1)', 1);
				}
				break;
			default:
				if (index - 3 >= 0) {
					for (let i = 0; i < index - 2; i++) {
						this.changePosition(i, '0', null, 'scale(1)', 1);
					}
				}
				this.changePosition(index - 2, '0', null, 'scale(1)', 2);
				this.changePosition(index - 1, '10%', null, 'scale(1.2)', 3);
				this.changePosition(index + 1, null, '10%', 'scale(1.2)', 3);
				this.changePosition(index + 2, null, '0', 'scale(1)', 2);
				if (index + 3 <= this.MAX_NUM_OF_CARDS) {
					for (let i = index + 3; i <= this.MAX_NUM_OF_CARDS; i++) {
						this.changePosition(i, null, '0', 'scale(1)', 1);
					}
				}
				break;
		}
		this.previousActiveIndex = index;
	}
}

let primaryColor, secondaryColor;

const swiperTemp = new myOwnSwiper(4, 2, 'sliderTemp');
const swiper2 = new myOwnSwiper(8, 2, 'sliderJotApp');
function changeActive(index) {
	swiper2.changeActive(index);
}
function swiper1_change(index) {
	swiper1.changeActive(index);
}
function swiperTempChange(index) {
	swiperTemp.changeActive(index);
}

function switchTheme() {
	if (document.documentElement.classList.contains('dark')) {
		document.documentElement.classList.remove('dark');
		console.log('switched to light');
		secondaryColor = '#3F5477';
		primaryColor = '#42C1EE';
	} else {
		console.log('switched to dark');
		document.documentElement.classList.add('dark');
		primaryColor = '#D37101';
		secondaryColor = '#F9F9F9';
	}
}

if (
	localStorage.getItem('color-theme') === 'dark' ||
	(!('color-theme' in localStorage) &&
		window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
	document.documentElement.classList.add('dark');
	primaryColor = '#D37101';
	secondaryColor = '#F9F9F9';
} else {
	document.documentElement.classList.remove('dark');
	secondaryColor = '#3F5477';
	primaryColor = '#42C1EE';
}
