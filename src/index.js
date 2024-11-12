let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let slides = document.querySelectorAll('img');
let firstSlide = 0;
let lastSlide =  slides.length - 1;
let activeSlide = 0;

function prev(){
    leftArrow.addEventListener('click', () => {
        slides[activeSlide].classList.add('visibility');

        if(activeSlide != firstSlide){
            activeSlide--;
        } else {
            activeSlide = lastSlide;
        }
        slides[activeSlide].classList.remove('visibility');
    });
}

function next(){
    rightArrow.addEventListener('click', () => {
        slides[activeSlide].classList.add('visibility');

        if(activeSlide != lastSlide){
            activeSlide++;
        } else {
            activeSlide = firstSlide;
        }
        slides[activeSlide].classList.remove('visibility');
    });
}

prev();
next();

