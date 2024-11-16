import { leftArrow, rightArrow, slides, indicators, firstSlide, lastSlide, activeSlide, decreaseSlide, decreaseButton, increaseSlide, increaseButton, reAssignFirstButton, reAssignLastButton, reAssignLastSlide, reAssignFirstSlide, currButton } from "./parts";

function prev(){
    leftArrow.addEventListener('click', () => {
        slides[activeSlide].classList.add('visibility');
        indicators[currButton].classList.remove('btn-background');

        if(activeSlide != firstSlide){
            decreaseSlide();
            decreaseButton();
        } else {
            reAssignLastSlide();
            reAssignLastButton();
        }
        slides[activeSlide].classList.remove('visibility');
        indicators[currButton].classList.add('btn-background');
    });
}

function next(){
    rightArrow.addEventListener('click', () => {
        slides[activeSlide].classList.add('visibility');
        indicators[currButton].classList.remove('btn-background');

        if(activeSlide != lastSlide){
           increaseSlide();
           increaseButton();
        } else {
            reAssignFirstSlide();
            reAssignFirstButton();
        }
        slides[activeSlide].classList.remove('visibility');
        indicators[currButton].classList.add('btn-background');
    });
}

export { prev, next };