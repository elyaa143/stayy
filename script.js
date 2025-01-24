// script.js

import gsap from 'gsap';

// Function to trigger animations when components mount
export function triggerAnimations() {
  // Header Logo: Slide down and fade in
  gsap.from('.header .logo', {
    opacity: 0,
    duration: 1.5,
    y: -100,
    ease: 'bounce.out',
  });

  // Navigation Links: Slide in from left with staggered animation
  gsap.from('.header .nav ul li', {
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    x: -200,
    ease: 'power4.out',
  });

  // Albums Section: Fade and scale up
  gsap.from('.albums .album', {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    stagger: 0.3,
    ease: 'elastic.out(1, 0.75)',
  });

  // Skizo Section: Zoom-in effect for images with rotation
  gsap.from('.skizo-gallery img', {
    opacity: 0,
    duration: 2,
    scale: 0.7,
    rotation: 180,
    stagger: 0.4,
    ease: 'back.out(1.7)',
  });

  // World Tour Section: Bounce in tour dates
  gsap.from('.tour-dates ul li', {
    opacity: 0,
    duration: 1.2,
    y: 50,
    stagger: 0.3,
    ease: 'bounce.out',
  });
  
  // Footer: Fade in and move up
  gsap.from('.footer p', {
    opacity: 0,
    duration: 1.5,
    y: 100,
    ease: 'power4.out',
  });
}

