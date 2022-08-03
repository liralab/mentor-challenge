const shareButton = document.querySelectorAll('.article-share-button');
const shareButtonFirst = document.querySelector('.first');
const shareButtonSecond = document.querySelector('.second');
const shareSection = document.querySelector('.article-share-open');

shareButton.forEach( x => {
  x.addEventListener('click', function(){
    shareSection.classList.toggle('activer');
    shareButtonFirst.classList.toggle('disabler');
    shareButtonSecond.classList.toggle('activer');
  });
});