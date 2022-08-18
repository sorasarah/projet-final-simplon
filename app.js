// MENU BURGER
let burger = document.querySelector('.burger');
let menu = document.querySelector('nav');

burger.addEventListener('click', function () {
  burger.classList.toggle('croix');
  menu.classList.toggle('navOpen');
})

let liens = document.querySelectorAll('nav a')

liens.forEach(function (lien) {
  lien.addEventListener('click', function () {
    burger.classList.remove('croix');
    menu.classList.remove('navOpen');
  })
})

// Timeline
let items = document.querySelectorAll("#timeline li");
function isElementInViewport(el) {
  // retourne un objet qui renseigne sa taille et sa position relative
  var rect = el.getBoundingClientRect();
  return (
    // positionnement des div de la timeline
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

// listen for events
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);

