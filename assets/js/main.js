(function ($) {

	"use strict";

	$(function () {
		$("#tabs").tabs();
	});

	$(window).scroll(function () {
		const scroll = $(window).scrollTop();
		const box = $('.header-text').height();
		const header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});


	$('.schedule-filter li').on('click', function () {
		const tsfilter = $(this).data('tsfilter');
		$('.schedule-filter li').removeClass('active');
		$(this).addClass('active');
		if (tsfilter == 'all') {
			$('.schedule-table').removeClass('filtering');
			$('.ts-item').removeClass('show');
		} else {
			$('.schedule-table').addClass('filtering');
		}
		$('.ts-item').each(function () {
			$(this).removeClass('show');
			if ($(this).data('tsmeta') == tsfilter) {
				$(this).addClass('show');
			}
		});
	});


	// Window Resize Mobile Menu Fix
	mobileNav();

	// Window Resize Mobile Menu Fix
	$(window).on('resize', function () {
		mobileNav();
	});

	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}

	// Window Resize Mobile Menu Fix
	function mobileNav() {
		const width = $(window).width();
		$('.submenu').on('click', function () {
			if (width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', (e) => {
		e.preventDefault();
		// scroll smoothly to the element
		document.querySelector(e.target.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

window.onload = () => {
	//hide the preloader
	document.getElementById("js-preloader").classList.add('loaded')
}

const contact_form = document.getElementById("contact");

contact_form.addEventListener("submit", (e) => {
	e.preventDefault();
	const subject = document.getElementById("subject");
	const email = document.getElementById("email");
	const number = document.getElementById("number");
	const message = document.getElementById("message");
	window.location.href = `mailto:info@thedataprotectors.com?\
	subject=${subject.value}\
	&body=number:${number.value}%0A%0A${message.value}
	`;
	// subject.value = "Form Submission: " + subject.value;
	// contact_form.submit()

	// then redirect to https://www.thedataprotectors.com/
});