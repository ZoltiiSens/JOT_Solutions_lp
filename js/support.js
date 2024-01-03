'use strict';

// Function opens navbar menu on small screens
function openMenu() {
	const burger = document.querySelector('.burger-menu');
	// for (let child of burger.children) {
	// 	child.style.backgroundColor = 'white';
	// }
	burger.onclick = closeMenu;
	// burger.style.border = '0px solid rgba(255,255,255,0)';
	// burger.style.backgroundColor = '#FFFFFF00';
	// burger.children[0].style.transform = 'translateY(0) rotate(45deg)';
	// burger.children[1].style.transform = 'rotate(45deg)';
	// burger.children[2].style.transform = 'translateY(0) rotate(-45deg)';
	burger.querySelector('img').src = 'images/burger active.svg';
	const mobileMenu = document.querySelector('.mobileMenu');
	mobileMenu.style.opacity = 1;
	mobileMenu.style.transform = 'translateY(0)';
	mobileMenu.style.pointerEvents = 'all';
}
// Function closes navbar menu on small screens
function closeMenu() {
	const burger = document.querySelector('.burger-menu');
	// for (let child of burger.children) {
	// 	child.style.backgroundColor = '#42C1EE';
	// }
	burger.onclick = openMenu;
	// burger.style.border = `2px solid ${primaryColor}`;
	// burger.style.backgroundColor = '#EEF1F899';
	// burger.children[0].style.transform = 'translateY(-10px) rotate(0)';
	// burger.children[0].style.backgroundColor = `${primaryColor}`;
	// burger.children[1].style.transform = 'rotate(0)';
	// burger.children[1].style.backgroundColor = `${primaryColor}`;
	// burger.children[2].style.transform = 'translateY(10px) rotate(0)';
	// burger.children[2].style.backgroundColor = `${primaryColor}`;
	burger.querySelector('img').src = 'images/burger.svg';
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
// Function opens more blocks in JOT APP block
function seeMoreJotAppOpen() {
	const wrapper = document.querySelector('.jot-app-wrapper');
	const button = document.querySelector('.jot-app-button');
	wrapper.style.height = '1850px';
	button.onclick = seeLessJotAppOpen;
	button.innerHTML = 'See less';
}
function seeLessJotAppOpen() {
	const wrapper = document.querySelector('.jot-app-wrapper');
	const button = document.querySelector('.jot-app-button');
	wrapper.style.height = '900px';
	button.onclick = seeMoreJotAppOpen;
	button.innerHTML = 'See more';
}
// Functions opens popups in JOT APP block
function jotAppOpenPopup(index) {
	const popup = document.getElementById(`jot-app-popup--${index}`);
	popup.style.opacity = 1;
	popup.style.pointerEvents = 'auto';
}
function jotAppClosePopup(index) {
	const popup = document.getElementById(`jot-app-popup--${index}`);
	popup.style.opacity = 0;
	popup.style.pointerEvents = 'none';
}
// Functions to open questions on support page
const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
	question.querySelector('.question-h2').addEventListener('click', () =>{
		if ( question.classList.contains('active')){
			question.classList.remove('active');
			question.querySelector('.question-answer').style.display = 'none';
			question.querySelector('.question-arrow').style.transform = 'rotate(0deg)';
		} else {
			question.classList.add('active');
			question.querySelector('.question-answer').style.display = 'block';
			question.querySelector('.question-arrow').style.transform = 'rotate(180deg)';
		}
	})
});
function openAnswer(index){
	const question = document.getElementById(`question-${index}`);
	const answer = question.querySelector('.question-answer');
	const arrow = question.querySelector('question-arrow');
	const questionH2 = question.querySelector('.question-h2');

	answer.style.display = 'block';
	arrow.style.transform = 'rotate(180deg)';
	questionH2.onclick = openAnswer(index)
}
// Function to pause videos on scroll
function pauseVideos(){
	document.querySelectorAll('video').forEach((video) => {
		video.pause();
	})
}
// function scrolls you up
function goUp(){
	window.scrollTo({top: 0, behavior: 'smooth'});
}

document.querySelectorAll('.swiper-slide').forEach((swiper_slide) => {
	swiper_slide.querySelector('button').addEventListener('click', (butt) =>{
		swiper_slide.querySelector('button').style.display = 'none';
		const video = swiper_slide.querySelector('video');
		video.play();
		video.controls = true;
	})
	// video = swiper_slide.querySelector('video');
	// console.log(video)
});

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    // spaceBetween: 150,
    initialSlide: 1,
    centeredSlides: true,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});





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
