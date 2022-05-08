function onScroll() {
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  } else {
    navigation.classList.add('scroll')
  }
}

openMenu = () => {
  document.body.classList.add('menu-expanded')
}

closeMenu = () => {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
#home img, 
#home .dados, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)
