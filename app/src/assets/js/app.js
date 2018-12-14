/*
 Your Javascript
  */

console.log("I am a beta version of pwafireapp 🐹");

const divResult = document.getElementById('result');
const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');
const butShare = document.getElementById('butShare');

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('👍', 'beforeinstallprompt', event);
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container
  butInstall.removeAttribute('disabled');
});

butInstall.addEventListener('click', () => {
  console.log('👍', 'butInstall-clicked');
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  promptEvent.userChoice.then((result) => {
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since 
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    butInstall.setAttribute('disabled', true);
  });
});

window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
});

if ('share' in navigator) {
  console.log('👍', 'navigator.share is supported');
  butShare.removeAttribute('disabled');
  butShare.addEventListener('click', (e) => {
    console.log('👍', 'butShare-clicked', e);
    e.preventDefault();
    const shareOpts = {
      title: 'PWA Fire App',
      text: 'Starter Web App Designed With Progressive Web App Best Practices And Packaged Ready For Your PWA Project',
      url: 'https://pwafire.org/developer/app/',
    };
    navigator.share(shareOpts)
        .then((e) => {
          const msg = 'navigator.share succeeded.';
          divResult.textContent = msg;
          console.log('👍', msg, e);
        })
        .catch((err) => {
          const msg = 'navigator.share failed';
          divResult.textContent = `${msg}\n${JSON.stringify(err)}`;
          console.error('👎', msg, err);
        });
  });
} 
 else  {
  console.warn('👎', 'navigator.share is not supported');
  // const divNotSup = document.getElementById('shareNotSupported');
  // divNotSup.classList.toggle('hidden', false);

  // Add the snackbar to show no support [2]
  document.getElementById("snackbar").innerHTML = "<code>navigator.share</code> is not supported in this browser, already in chrome for android 70+";
  var snackbar = document.getElementById("snackbar");
  // Add the "show" class to div
  snackbar.className = "show";
  // After 5 seconds, remove the show class from div
  setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 5000);
  // divResult.classList.toggle('hidden', true);
}

/**
 * Warn the page must be served over HTTPS
 * The `beforeinstallprompt` event won't fire if the page is served over HTTP.
 * Installability requires a service worker with a fetch event handler, and
 * if the page isn't served over HTTPS, the service worker won't load.
 */
if (window.location.protocol === 'http:') {
  const requireHTTPS = document.getElementById('requireHTTPS');
  const link = requireHTTPS.querySelector('a');
  link.href = window.location.href.replace('http://', 'https://');
  requireHTTPS.classList.remove('hidden');
}