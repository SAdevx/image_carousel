let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let slides = document.querySelectorAll('img');
let indicators = document.querySelectorAll('.indicator button');

let firstSlide = 0;
let lastSlide =  slides.length - 1;
let activeSlide = 0;

let firstButton = 0;
let currButton = 0;
let lastButton = indicators.length-1;

function increaseSlide(){
    activeSlide++;
}

function decreaseSlide(){
    activeSlide--;
}

function increaseButton(){
    currButton++;
}

function decreaseButton(){
    currButton--;
}

function reAssignFirstSlide(){
    activeSlide = firstSlide;
}

function reAssignLastSlide(){
    activeSlide = lastSlide;
}

function reAssignFirstButton(){
    currButton = firstButton;;
}

function reAssignLastButton(){
    activeSlide = lastSlide;
    currButton = lastButton;
}

export {leftArrow, rightArrow, slides, indicators, firstSlide, lastSlide,
    activeSlide, firstButton, currButton, lastButton, increaseSlide, decreaseSlide,
    increaseButton, decreaseButton, reAssignFirstSlide, reAssignLastSlide, reAssignFirstButton,
    reAssignLastButton
}