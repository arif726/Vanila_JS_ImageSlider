const left = document.querySelector("#left");
const right = document.querySelector('.right-arrow');
const slider = document.getElementById('slider');
const images = document.querySelectorAll('.image');
const bottom = document.getElementById('bottom');

let slideNumber = 1; 
let length = images.length;


for (let i = 0; i < length; i++) {
    let div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);   
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = "transparent";
    })
}

const changeColor = () => {
    resetBg();
    buttons[slideNumber-1].style.backgroundColor = "white";
}

buttons.forEach((button,i) => {
    button.addEventListener('click', () => {
        slider.style.transform = `translateX(-${i * 500}px )`;
        resetBg();
        button.style.backgroundColor = "white";
    })
})

const getNextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 500}px )`;
        slideNumber++;
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}
right.addEventListener("click", () => {
    slideNumber < length ? getNextSlide() : getFirstSlide();
    changeColor();
})

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2) * 500}px )`;
    slideNumber--; 
}

const getPrevSlide = () => {
    slider.style.transform = `translateX(-${(length-1) * 500}px )`;
    slideNumber = length;
}
left.addEventListener("click", () => {
    slideNumber > 1 ? getLastSlide() : getPrevSlide();
    changeColor();
})

