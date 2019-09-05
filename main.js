'use strict';
const onlyButton = document.getElementById('button_press');

function showImage() {
	var pic=document.getElementById('duck_pic')
  		pic.style="visibility: visible";     
 };

function initializeUI() {
	var pic=document.getElementById('duck_pic')
	onlyButton.addEventListener('click', function() {
    onlyButton.enabled = true;
    showImage();
	})
};

if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('sw.js')
  .then(function(swReg) {
    console.log('Service Worker is registered', swReg);


    initializeUI();
  })
  .catch(function(error) {
    console.error('Service Worker Error', error);
  });
} else {
  console.warn('Push messaging is not supported');
  firstButton.textContent = 'Push Not Supported';
}



