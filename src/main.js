import './styles/base.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(() => console.log('SW зареєстровано на index.html'))
    .catch(console.error);
}

// Тут можна додавати JS для головної сторінки
console.log('Головна сторінка завантажена');
