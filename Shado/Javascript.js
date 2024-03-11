const slideShow__elements = document.querySelectorAll('.slideShow__element');

let counterElement = 1;

setInterval(() => {
    counterElement ++;

    let  currentElement = document.querySelector('.current')
    currentElement.classList.remove('current')

    if (counterElement > slideShow__elements.length) {
        slideShow__elements[0].classList.add('current')
        counterElement = 1
    } else {

        currentElement.nextElementSibling.classList.add('current')
    }

}, 2000);