const burgerMenu = document.getElementById('bars')
const nav = document.querySelector('nav')
const links = document.querySelectorAll('a')

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('show')
    burgerMenu.classList.toggle('fa-times')
})


links.addEventListener('click', () => {
    nav.classList.add('show')
})
