const menuSaklar = document.querySelector('.menu-saklar')
const nav =document.querySelector('nav ul')
menuSaklar.addEventListener('click', function(){
    nav.classList.toggle('slide')
    menuSaklar.classList.toggle('hamburger-on');
})

const goTop = () =>{
    return location.href="/"
}

