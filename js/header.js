const logoWhite = document.getElementById('logo_white');
const logoColor = document.getElementById('logo_color');
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const body = document.body;
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const overlay = document.getElementById('overlay');
const textBlack = document.querySelectorAll('.onChangeBlack');

/*
A função serve para quando se desce na página existir uma mudança na cor do header, background, icons e texto
*/
export function headerToggle() {
  function updateHeader(scrollPosition) {
    if (scrollPosition > 50) {
      logoWhite.classList.add('d-none');
      logoColor.classList.remove('d-none');
      header.classList.remove('toggled-orange');
      header.classList.add('toggle-white');
      hamburger.classList.remove('white');
      hamburger.classList.add('primary');
      textBlack.forEach((item) => item.classList.add('text-black'));
    } else {
      logoWhite.classList.remove('d-none');
      logoColor.classList.add('d-none');
      header.classList.add('toggled-orange');
      header.classList.remove('toggle-white');
      hamburger.classList.add('white');
      hamburger.classList.remove('primary');
      textBlack.forEach((item) => item.classList.remove('text-black'));
    }
  }

  // Esta parte serve para quando se fizer refresh a informação ficar guardada no browser.
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    updateHeader(scrollPosition);
    localStorage.setItem('scrollPosition', scrollPosition);
  });

  const initialScrollPosition = window.scrollY;
  updateHeader(initialScrollPosition);
}

/*
Para no mobile o header aparecer a informalção completa precisamos não só de um onclick
como também de informar quais as mudanças obtidas, como aparecerem elementos que até então não estavam visiveis.
*/
export function menuToggle() {
  function toggleIcons() {
    const scrollPosition = window.scrollY;

    if (body.classList.contains('overhidden')) {
      enableScroll();
      menuOpen.classList.add('d-none');
      menuClose.classList.remove('d-none');
      header.classList.remove('toggle-white');
      overlay.classList.remove('overlay');
      if (scrollPosition > 50) {
        header.classList.add('toggle-white');
      }
    } else {
      disableScroll();
      overlay.classList.add('overlay');
      menuOpen.classList.remove('d-none');
      header.classList.remove('toggled-orange');
      header.classList.add('toggle-white');
      menuClose.classList.add('d-none');
    }
  }

  hamburger.addEventListener('click', toggleIcons);
  close.addEventListener('click', toggleIcons);
}

// Desativa a possibilidade de scroll
function disableScroll() {
  body.classList.add('overhidden');
}

// Ativa a possibilidade de scroll
function enableScroll() {
  body.classList.remove('overhidden');
}
