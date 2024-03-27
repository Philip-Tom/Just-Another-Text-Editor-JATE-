// client/src/js/install.js

const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  console.log("before install prompt event triggered");
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  console.log("install button clicked")
  if (!window.deferredPrompt) {
    // butInstall.classList.toggle("hidden", true);
    return;
  };
  deferredPrompt.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("J.A.T.E. was installed!");
  window.deferredPrompt = null;
});
