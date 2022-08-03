const input = document.querySelector('#name');
const form = document.querySelector('form');
const submit = document.querySelector('#submitName');
const remove = document.querySelector('#removeName');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

submit.addEventListener('click', () => {
  sessionStorage.setItem('name', input.value);
});

remove.addEventListener('click', () => {
  sessionStorage.removeItem('name');
});

const name = sessionStorage.getItem('name');

const h1 = document.querySelector('#title');

name
  ? (h1.textContent = `Welcome ${name}`)
  : (h1.textContent = 'So sad nobody to welcome');

// loclStorage vs sessionStorage
// when you want to maintain a state of your application,
// say a shopping cart, and want to control how long the
// state remains, use localStorage
// with timers in your code you can set how long the
// information remains with a persistant localStorage
// and then remove it whenever you feel is appropriate
// also, use localStorage for anything that makes the user
// experience better but DOES NOT compromise user privacy

// when the privacy of users is a concern and you'd like to
// or need to use web storage, use sessionStorage
// this way as soon as the user closes their browser, the
// data is gone
// sessionStorage is great when the data only needs to be
// there temporarily
