var mobileRun = document.querySelector('.mobile-menu-title');
console.log("mobileRun: ", mobileRun);

mobileRun.addEventListener('click', use);

function use() {
    var menuNode = document.querySelector('.menu');

    console.log('run: ', menuNode);

    if (menuNode.classList.contains('open')) {
        menuNode.classList.remove('open');
    } else {
        menuNode.classList.add('open')
    }
}
