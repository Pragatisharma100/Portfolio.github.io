AOS.init({
	duration: 1200,
	easing: 'ease-in-out',
	once: true,
	mirror: false
  });
  
  document.addEventListener('DOMContentLoaded', function () {

	$(window).stellar({
	  responsive: true,
	  parallaxBackgrounds: true,
	  parallaxElements: true,
	  horizontalScrolling: false,
	  hideDistantElements: false,
	  scrollProperty: 'scroll'
	});
  
	// Dark Mode Toggle
	const darkModeToggle = document.getElementById('dark-mode-toggle');
  
	darkModeToggle?.addEventListener('change', () => {
	  body.classList.toggle('dark-mode');
	  localStorage.setItem('dark-mode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
	  
	  const filterButtons = document.querySelectorAll(".btn-filter");
	  const projects = document.querySelectorAll(".project-grid > div");
	  filterButtons.forEach(button => {
		button.addEventListener("click", function () {
		  const filterValue = this.getAttribute("data-filter");
	  
		  // Activate the selected button
		  filterButtons.forEach(btn => btn.classList.remove("active"));
		  this.classList.add("active");
	  
		  // Show/hide projects based on filter
		  projects.forEach(project => {
			const category = project.getAttribute("data-category");
	  
			if (filterValue === "all" || category === filterValue) {
			  project.style.display = "flex"; // or "block" depending on layout
			} else {
			  project.style.display = "none";
			}
		  });
		});
	});
	});
	
  
	// Carousel Testimonials
	$('.carousel-testimony').owlCarousel({
	  loop: true,
	  margin: 10,
	  nav: false,
	  dots: true,
	  autoplay: true,
	  responsive: {
		0: { items: 1 },
		600: { items: 2 },
		1000: { items: 3 },
	  },
	});
  
	// Project Filter
	
	$(document).ready(function () {
		// ✅ TYPING ANIMATION START
		const typingAnimationElement = document.getElementById('typing-animation');
	  
		if (typingAnimationElement) {
		  const typingTexts = [
			'Student',
			'Software Engineer',
			'Data Enthusiast',
			'Tech Blogger',
			'AI + Finance Explorer'
		  ];
	  
		  let textIndex = 0;
		  let charIndex = 0;
	  
		  function playTypingAnimation() {
			if (charIndex < typingTexts[textIndex].length) {
			  typingAnimationElement.textContent += typingTexts[textIndex][charIndex];
			  charIndex++;
			  setTimeout(playTypingAnimation, 100);
			} else {
			  setTimeout(() => {
				typingAnimationElement.textContent = '';
				charIndex = 0;
				textIndex = (textIndex + 1) % typingTexts.length;
				playTypingAnimation();
			  }, 1500);
			}
		  }
	  
		  playTypingAnimation();
		}
		// ✅ TYPING ANIMATION END
	  });
	  
  
	// Load Saved Theme
	if (localStorage.getItem('dark-mode') === 'enabled') {
	  body.classList.add('dark-mode');
	  if (darkModeToggle) darkModeToggle.checked = true;
	}
  
	// Full Height Sections
	var fullHeight = function() {
	  $('.js-fullheight').css('height', $(window).height());
	  $(window).resize(function(){
		$('.js-fullheight').css('height', $(window).height());
	  });
	};
	fullHeight();
  
	// Loader
	var loader = function() {
	  setTimeout(function() { 
		$('#ftco-loader').removeClass('show');
	  }, 1);
	};
	loader();
  
	// Scrollax
	$.Scrollax();
  
	// Burger Menu
	var burgerMenu = function() {
	  $('body').on('click', '.js-fh5co-nav-toggle', function(event){
		event.preventDefault();
		$(this).toggleClass('active');
	  });
	};
	burgerMenu();
  
	// Smooth Scroll Navigation
	var onePageClick = function() {
	  $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
		event.preventDefault();
		$('html, body').animate({
		  scrollTop: $($.attr(this, 'href')).offset().top - 70
		}, 500);
	  });
	};
	onePageClick();
  
	// Hero Slider
	var carousel = function() {
	  $('.home-slider').owlCarousel({
		loop: true,
		autoplay: true,
		margin: 0,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		nav: false,
		autoplayHoverPause: false,
		items: 1,
		responsive: {
		  0: { items: 1 },
		  600: { items: 1 },
		  1000: { items: 1 }
		}
	  });
	};
	carousel();
  
	// Dropdown Hover
	$('nav .dropdown').hover(function(){
	  var $this = $(this);
	  $this.addClass('show');
	  $this.find('> a').attr('aria-expanded', true);
	  $this.find('.dropdown-menu').addClass('show');
	}, function(){
	  var $this = $(this);
	  $this.removeClass('show');
	  $this.find('> a').attr('aria-expanded', false);
	  $this.find('.dropdown-menu').removeClass('show');
	});
  
	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});
  
	// Navbar Scroll Effects
	var scrollWindow = function() {
	  $(window).scroll(function(){
		var $w = $(this),
			st = $w.scrollTop(),
			navbar = $('.ftco_navbar'),
			sd = $('.js-scroll-wrap');
  
		if (st > 150) {
		  navbar.addClass('scrolled');	
		} else {
		  navbar.removeClass('scrolled sleep');
		}
		if (st > 350) {
		  navbar.addClass('awake');
		  sd.length > 0 && sd.addClass('sleep');
		} else {
		  navbar.removeClass('awake').addClass('sleep');
		  sd.length > 0 && sd.removeClass('sleep');
		}
	  });
	};
	scrollWindow();
  
	// Counter Animation
	var counter = function() {
	  $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function(direction) {
		if(direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
		  $('.number').each(function(){
			var $this = $(this),
				num = $this.data('number');
			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
			$this.animateNumber({
			  number: num,
			  numberStep: comma_separator_number_step
			}, 7000);
		  });
		}
	  }, { offset: '95%' });
	};
	counter();
  
	// Content Animation on Scroll
	var contentWayPoint = function() {
	  var i = 0;
	  $('.ftco-animate').waypoint(function(direction) {
		if(direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
		  i++;
		  $(this.element).addClass('item-animate');
		  setTimeout(function(){
			$('body .ftco-animate.item-animate').each(function(k){
			  var el = $(this);
			  setTimeout(function () {
				var effect = el.data('animate-effect');
				if (effect === 'fadeIn') el.addClass('fadeIn ftco-animated');
				else if (effect === 'fadeInLeft') el.addClass('fadeInLeft ftco-animated');
				else if (effect === 'fadeInRight') el.addClass('fadeInRight ftco-animated');
				else el.addClass('fadeInUp ftco-animated');
				el.removeClass('item-animate');
			  }, k * 50, 'easeInOutExpo');
			});
		  }, 100);
		}
	  }, { offset: '95%' });
	};
	contentWayPoint();
  
	// Magnific Popup for Images & Videos
	$('.image-popup').magnificPopup({
	  type: 'image',
	  closeOnContentClick: true,
	  closeBtnInside: false,
	  fixedContentPos: true,
	  mainClass: 'mfp-no-margins mfp-with-zoom',
	  gallery: { enabled: true, navigateByImgClick: true, preload: [0,1] },
	  image: { verticalFit: true },
	  zoom: { enabled: true, duration: 300 }
	});
  
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	  disableOn: 700,
	  type: 'iframe',
	  mainClass: 'mfp-fade',
	  removalDelay: 160,
	  preloader: false,
	  fixedContentPos: false
	});
  
  });  