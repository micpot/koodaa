var mobileMenuTitle = document.querySelector('.mobile-menu-title');

mobileMenuTitle.addEventListener('click', toggleMenuClass);

function toggleMenuClass() {
    var menuNode = document.querySelector('.menu');


    if (menuNode.classList.contains('open')) {
        menuNode.classList.remove('open');
    } else {
        menuNode.classList.add('open')
    }
}

$(document).ready(function(){
    $('.slider').slick({
slidesToShow: 1,

slidesToScroll: 3,
arrows: true,
dots: true,


    });
});
