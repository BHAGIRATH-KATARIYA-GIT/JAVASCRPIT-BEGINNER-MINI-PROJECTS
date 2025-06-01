const close = document.querySelector('#close')
const menu = document.querySelector('#menu')
const sidebar = document.querySelector('.side-bar')


close.addEventListener('click' , () => {
    sidebar.style.display = 'none';
})

menu.addEventListener('click' , (e) => {
    sidebar.style.display = 'flex';
})