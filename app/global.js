const slides = document.querySelectorAll(".js-slide");
const lines = document.querySelectorAll(".js-line");
const animationElements = document.querySelectorAll(".js-animation-element");
const next = document.querySelector(".js-next");
const prev = document.querySelector(".js-prev");
const pausePlay = document.querySelector(".js-pause-play");
const icon = document.querySelector(".js-pause-play-icon");

let currentSlide = 0;
let paused = false;

const slideTo = (num) => {
  slides.forEach((slide, index) => {
    if (index === num) {
      slide.removeAttribute("style");
      slide.classList.add("slider__slide--active");
    } else {
      slide.style.display = "none";
      slide.classList.remove("slider__slide--active");
    }
    currentSlide = num;
  });
};

const pauseSlider = () => {
    animationElements.forEach(animatingElement => {
        animatingElement.style.animationPlayState = 'paused';
    })
    icon.setAttribute("src", "/assets/svg/play.svg");
    paused = true;
}

const playSlider = () => {
    animationElements.forEach(animatingElement => {
        animatingElement.removeAttribute("style");
    })
    icon.setAttribute("src", "/assets/svg/pause.svg");
    paused = false;
}

const sliderSettings = () => {
  lines.forEach((line) => {
    line.addEventListener("animationend", () => {
        if(currentSlide < slides.length - 1){
            slideTo(currentSlide + 1);
        }else{
            slideTo(0);
        }
    });
  });

  prev.addEventListener("click",() => {
    if(currentSlide === 0){
        slideTo(slides.length - 1);
    }else{
        slideTo(currentSlide - 1);
    }
  })

  pausePlay.addEventListener("click",() => {
    paused ? playSlider() : pauseSlider();
  });

  next.addEventListener("click", () => {
    if(currentSlide < slides.length - 1){
        slideTo(currentSlide + 1);
    }else{
        slideTo(0);
    }
  });
};

sliderSettings();
slideTo(0);