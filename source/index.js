const burgerButton = document.querySelector('.burger')
const nav = document.querySelector('.navigation')

burgerButton.onclick = function () {
    nav.classList.toggle('open')
}