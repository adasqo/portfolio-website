const menuRoll = document.querySelector('.menu-roll')
const smallMenu = document.querySelector('.menu-roll-content')
const menuRollOpenButton = document.querySelector('.menu-roll-open')
const menuRollCloseButton = document.querySelector('.menu-roll-close')
const headerSmallMenuLinks = document.querySelectorAll('.menu-roll-link')

menuRoll.addEventListener('click', () => {
  if (smallMenu.classList.contains('menu-roll-active')) {
    smallMenu.classList.remove('menu-roll-active')
  } else {
    smallMenu.classList.add('menu-roll-active')
  }
  if (menuRollOpenButton.classList.contains('display-not')) {
    menuRollOpenButton.classList.remove('display-not')
    menuRollCloseButton.classList.add('display-not')
  } else {
    menuRollOpenButton.classList.add('display-not')
    menuRollCloseButton.classList.remove('display-not')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('menu-roll-active')
    menuRollOpenButton.classList.remove('display-not')
    menuRollCloseButton.classList.add('display-not')
  })
}

