import { currButton, activeSlide, slides, indicators, lastSlide, increaseSlide, increaseButton,  reAssignFirstSlide, reAssignFirstButton } from "./parts";

function timer(){
    setInterval(() => {
        slides[activeSlide].classList.add('visibility');
        indicators[currButton].classList.remove('btn-background');

        if(activeSlide === lastSlide){
            reAssignFirstSlide();
            reAssignFirstButton();
        } else {
            increaseSlide();
            increaseButton();
        }
        slides[activeSlide].classList.remove('visibility');
        indicators[currButton].classList.add('btn-background');
    }, 5000)
}

export { timer };