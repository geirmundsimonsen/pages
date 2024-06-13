import { greet } from './util.js';
import { getEncryptedData } from './querydb.js';

document.addEventListener('DOMContentLoaded', () => {
  const greeting = greet('GitHub Pges');
  document.querySelector('h1').textContent = greeting;

  document.querySelector('button').addEventListener('click', () => {
    getEncryptedData('foo', 'foo');
  });
});