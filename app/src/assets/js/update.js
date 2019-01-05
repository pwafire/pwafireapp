function showRefreshUI(registration) {
    // TODO: Display a toast or refresh UI.
  
    // This demo creates and injects a button.
  
    var button = document.createElement('button');
    button.style.position = 'absolute';
    button.style.bottom = '24px';
    button.style.left = '24px';
    button.textContent = 'This site has updated. Please click to see changes.';
  
    button.addEventListener('click', function() {
      if (!registration.waiting) {
        // Just to ensure registration.waiting is available before
        // calling postMessage()
        return;
      }
  
      button.disabled = true;
  
      registration.waiting.postMessage('skipWaiting');
    });
  
    document.body.appendChild(button);
  }
  
  function onNewServiceWorker(registration, callback) {
    if (registration.waiting) {
      // service-worker is waiting to activate. Can occur if multiple clients open and
      // one of the clients is refreshed.
      return callback();
    }
  
    function listenInstalledStateChange() {
      registration.installing.addEventListener('statechange', function(event) {
        if (event.target.state === 'installed') {
          // A new service worker is available, inform the user
          callback();
        }
      });
    }
  
    if (registration.installing) {
      return listenInstalledStateChange();
    }
  
    // We are currently controlled so a new service-worker may be found...
    // Add a listener in case a new service-worker is found,
    registration.addEventListener('updatefound', listenInstalledStateChange);
  }
  
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('../service-worker.js')
    .then(function (registration) {
        // Track updates to the Service Worker.
      if (!navigator.serviceWorker.controller) {
        // The window client isn't currently controlled so it's a new service
        // worker that will activate immediately
        return;
      }
  
      // When the user asks to refresh the UI, we'll need to reload the window
      var preventDevToolsReloadLoop;
      navigator.serviceWorker.addEventListener('controllerchange', function(event) {
        // Ensure refresh is only called once.
        // This works around a bug in "force update on reload".
        if (preventDevToolsReloadLoop) return;
        preventDevToolsReloadLoop = true;
        console.log('Controller loaded');
        window.location.reload();
      });
  
      onNewServiceWorker(registration, function() {
        showRefreshUI(registration);
      });
    });
  });