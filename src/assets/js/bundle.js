// for creating the inner elements of an SVG, https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS
const createSVGElement = (s) =>
  document.createElementNS('http://www.w3.org/2000/svg', s);

// alias the querySelector
const $ = (s) => document.querySelector(s);

// used to easily give a number between x and y
const randomRange = (min, max) => Math.random() * (max - min) + min;

// grab some of the DOM elements needed
const $flame = $('.flame');

// generate a set of a transforms that randomly scales the width and height
// of the rocket’s flame
const flicker = Array.from({ length: 20 }).map(() => ({
  transform: `scale(${randomRange(0.9, 1.2)}, ${randomRange(0.9, 1.2)})`,
}));

$flame.animate(flicker, { duration: 750, iterations: Infinity });
