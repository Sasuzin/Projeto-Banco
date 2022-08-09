const q = elemento => document.querySelector(elemento)


q('.menu-toggle').addEventListener('click', () => {
    q('.div').style.display = 'none'
    q('.menu-toggle-open').style.width = '100%'
    q('body').style.overflow = 'hidden'
    q('.menu-toggle-open nav').classList.add('open')
})

q('.menu-toggle-fechar').addEventListener('click', () => {
    q('.menu-toggle-open').style.width = '0'
    q('.div').style.display = 'block'
    q('body').style.overflow = 'auto'
    q('.menu-toggle-open nav').classList.remove('open')
})