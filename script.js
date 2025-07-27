/* "use strict";
document.addEventListener('DOMContentLoaded', function () {
    const headerMenu = document.querySelector('.header-menu');
    const element = document.getElementById('MyElement');
    const header = document.querySelector(`.header-menu-items`);

    element.addEventListener('click', function (e) {
        if (element.classList.contains('open-menu')) {
            element.classList.remove('open-menu');
            headerMenu.style.insetInlineStart = '-100%';
            headerMenu.style.visibility = 'hidden';
        } else {
            element.classList.add('open-menu');
            headerMenu.style.insetBlockStart = '40px';
            headerMenu.style.insetInlineStart = '0';
            headerMenu.style.visibility = 'visible';
        }
    });
    document.addEventListener('click', function (e) {
        const isClickInsideMenu = headerMenu.contains(e.target);
        const isClickOnBurger = element.contains(e.target);
    
        if (!isClickInsideMenu && !isClickOnBurger) {
            element.classList.remove('open-menu');
            headerMenu.style.insetInlineStart = '-100%';
            headerMenu.style.visibility = 'hidden';
        }
    });
});
*/
"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const headerMenu = document.querySelector('.header-menu-items');
    const element = document.getElementById('MyElement');
    const header = document.querySelector(`.header-menu`);

    element.addEventListener('click', function (e) {
        if (element.classList.contains('open-menu')) {
            element.classList.remove('open-menu');
            header.style.insetInlineStart = '-100%';
            header.style.visibility = 'hidden';
        } else {
            element.classList.add('open-menu');
            header.style.insetBlockStart = '40px';
            header.style.insetInlineStart = '0';
            header.style.visibility = 'visible';
        }
    });
    document.addEventListener('click', function (e) {
        const isClickInsideMenu = headerMenu.contains(e.target);
        const isClickOnBurger = element.contains(e.target);

        if (!isClickInsideMenu && !isClickOnBurger) {
            element.classList.remove('open-menu');
            header.style.insetInlineStart = '-100%';
            header.style.visibility = 'hidden';
        }
    });
});