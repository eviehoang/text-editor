const butInstall = document.getElementById('buttonInstall');
let deferredPrompt; // Declare the variable

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  // Store the event for later use
  deferredPrompt = event;

  // Show the install button or take other actions to notify the user
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Hide the install button
  butInstall.style.display = 'none';

  // Show the installation prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const userChoice = await deferredPrompt.userChoice;

  // Check if the user accepted the prompt
  if (userChoice.outcome === 'accepted') {
    console.log('User accepted the PWA installation prompt');
  } else {
    console.log('User dismissed the PWA installation prompt');
  }

  // Reset the deferredPrompt variable
  deferredPrompt = null;
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed successfully');
});
