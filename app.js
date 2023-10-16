"use strict";
const mobileNavBtn = document.getElementById("mobile-nav-btn");
const headerMenu = document.getElementById("nav");
const navMenuIcon = document.getElementById("nav-menu-icon");
function toggleMenu() {
  headerMenu.classList.toggle("hidden");
  navMenuIcon.classList.toggle("navIconToggle");
}
mobileNavBtn.addEventListener("click", toggleMenu);
