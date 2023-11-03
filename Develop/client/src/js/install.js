const butInstall = document.getElementById('buttonInstall');



if (window.matchMedia('(display-mode: standalone)').matches) {
    butInstall.style.display = 'none';
}

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.style.display = 'inline-block';
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.style.display = 'none';
});

window.addEventListener('appinstalled', () => {
    window.deferredPrompt = null;
});