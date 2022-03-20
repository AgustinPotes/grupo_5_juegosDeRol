/* when a user clicks, toggle the 'is-animating' class */
let heartFavButton = document.querySelector('.heart')

heartFavButton.addEventListener('click', function() {
    heartFavButton.classList.toggle('is_animating');
  });
  
  /*when the animation is over, remove the class*/
  heartFavButton.addEventListener('animationend', function(){
    heartFavButton.classList.toggle('is_animating');
  });