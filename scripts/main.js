import { greet } from './util.js';

document.addEventListener('DOMContentLoaded', () => {
    const greeting = greet('GitHub Pges');
    document.querySelector('h1').textContent = greeting;
});