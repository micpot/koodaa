var mobileRun = document.querySelector('.mobile-menu-title');

mobileRun.addEventListener('click', use);

function use() {
    var menuNode = document.querySelector('.menu');


    if (menuNode.classList.contains('open')) {
        menuNode.classList.remove('open');
    } else {
        menuNode.classList.add('open')
    }
}

$(document).ready(function(){
    $('.slick-example').slick({
        // settings goes here
    });
});
