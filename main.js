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
