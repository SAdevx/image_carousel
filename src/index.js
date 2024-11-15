let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let slides = document.querySelectorAll('img');
let indicators = document.querySelectorAll('.indicator > button');
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

function circles(){
    //move the logic to their seperate files
    //but this what im thinking, associate each circle with a specific image
    //when clicked use e.target to set the current image visibility to hidden
    //and then change the one we want image to not hidden
}

function timer(){
    setInterval(() => {
        slides[activeSlide].classList.add('visibility');
        if(activeSlide === lastSlide){
            activeSlide = firstSlide;
        } else {
            activeSlide++;
        }
        slides[activeSlide].classList.remove('visibility');
    }, 5000)
}

prev();
next();
timer();


