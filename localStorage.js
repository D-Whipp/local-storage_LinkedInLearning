localStorage.setItem('name', 'David');
localStorage.setItem('name2', 'Anthony');
localStorage.removeItem('name2');
const name = localStorage.getItem('name');

const h1 = document.querySelector('#title');

name
  ? (h1.textContent = `Welcome ${name}`)
  : (h1.textContent = 'So sad nobody to welcome');
