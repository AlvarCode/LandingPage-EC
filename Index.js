const header = document.getElementById("header");
const nav = document.getElementById("secondary-nav");
const btnMenu = document.getElementById("btn-menu");
const darkLayerHero = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))';
let showNav = false;

function setHeaderStyles() {
  if ((window.innerHeight > window.innerWidth) && (window.innerWidth <= 1024 && window.innerHeight < 1400)) {
    // De laptops a móviles
    header.style.backgroundImage = darkLayerHero + ', url(./imgs/background-hero-mobile-min.jpg)';
  } else {
    // De escritorios
    header.style.backgroundImage = darkLayerHero + ', url(./imgs/background-hero-desktop-min.jpg)';
  }
  
  if (window.innerWidth <= 550) {
    window.removeEventListener('scroll', showHideSecondaryNav);
  } else {
    window.addEventListener('scroll', showHideSecondaryNav);
  }
}

function showHideSecondaryNav() {
  let limit = header.offsetHeight + nav.offsetHeight;
  
  if(!(showNav) && window.scrollY >= limit) {
    // console.log('ha pasado');
    nav.style.visibility = 'visible';
    showNav = true;
  } else if (showNav && window.scrollY < limit) {
    // console.log("dentro del limite");
    nav.style.visibility = 'hidden';
    showNav = false;
  }
}

function hideMenu() {
  nav.style.visibility = 'hidden';
  showNav = false;
}

window.addEventListener('resize', setHeaderStyles);
window.addEventListener('load', setHeaderStyles);
btnMenu.addEventListener('click', () => {
  if (!showNav) {
    nav.style.visibility = 'visible';
    showNav = true;
  } else hideMenu();
});