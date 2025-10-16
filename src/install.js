import './styles/install.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')  // або './my-pwa/sw.js' якщо base=/my-pwa/
    .then(() => console.log('SW зареєстровано на install.html'))
    .catch(console.error);
}

let deferredPrompt;
const installButton = document.getElementById('installButton');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installButton.classList.remove('hidden');
});

installButton.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('Користувач встановив додаток');
    }
    deferredPrompt = null;
    installButton.classList.add('hidden');
  }
});

window.addEventListener('appinstalled', () => {
  installButton.classList.add('hidden');
});
