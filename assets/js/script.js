'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);


function playVideo() {
  var video = document.getElementById("myVideo");
  if (video.paused) {
      video.play();
  } else {
      video.pause();
  }
}
    
// formValidation.js

// Function to validate login form
function validateLoginForm() {
  const username = document.querySelector('#loginForm input[type="text"]');
  const password = document.querySelector('#loginForm input[type="password"]');

  if (username.value.trim() === '') {
      alert('Please enter your username.');
      username.focus();
      return false;
  }

  if (password.value.trim() === '') {
      alert('Please enter your password.');
      password.focus();
      return false;
  }

  return true; // Proceed if all fields are filled
}


