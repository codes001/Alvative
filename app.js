const hamburger = document.getElementById('menu-icon');
const menu = document.getElementById('mobile-menu');
const plus = document.querySelectorAll('#plus')
const content = document.querySelectorAll('.content')

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  bar.classList.toggle('rotate');
})

//Slider
let sliderImages = document.querySelectorAll('.slide');
let arrowRight = document.querySelector('#arrow-right')
let arrowLeft = document.querySelector('#arrow-left')
let current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';

    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowLeft.addEventListener('click', function() {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
})
arrowRight.addEventListener('click', function() {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();

})
startSlide();


//Accordion
for(let i=0; i<plus.length; i++){
    let ftitle = plus[i]
    ftitle.addEventListener('click', () => {
        ftitle.classList.toggle ('active')
        console.log("yes")
    })
}