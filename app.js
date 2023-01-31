
const navbar = document.getElementsByClassName('nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar[0].classList.add('nav-active');
    } else {
        navbar[0].classList.remove('nav-active');
    }
};