const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadesItems = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){     //Close hamMenu
        body.classList.remove('no-scroll');
        header.classList.remove('open');
        fadesItems.forEach(element => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    } else { // open hamMenu
        body.classList.add('no-scroll');
        header.classList.add('open');
        fadesItems.forEach(element => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }
});