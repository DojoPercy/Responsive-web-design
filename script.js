// change navbar styleson scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// faq funtionality

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

      
    })
});
// nav menu
const menu = document.querySelector('.nav__list');
const closebtn = document.querySelector("#close");
const menuBtn = document.querySelector('#menubar');

menuBtn.addEventListener('click', () => {
    menu.classList.add('show1');
    closebtn.classList.add("show");
    menuBtn.classList.add("hide");
})

closebtn.addEventListener('click', () => {
    menu.classList.remove('show1');
    closebtn.classList.remove("show");
    menuBtn.classList.remove("hide");
})

AOS.init({
    duration: 1200
   });