let navMain = document.querySelector('.nav');
let navButton = document.querySelector('.nav__button');

navMain.classList.remove('nav--no-js');

navButton.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    navButton.setAttribute("aria-label", "Закрыть меню");
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    navButton.setAttribute("aria-label", "Открыть меню");
  }
});
