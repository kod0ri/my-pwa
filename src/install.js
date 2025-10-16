import './styles/install.css';

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
