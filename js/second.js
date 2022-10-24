const currentObject = JSON.parse(localStorage.getItem('carList'))[JSON.parse(localStorage.getItem('index'))];

document.querySelector('.item__model').innerHTML = currentObject.model;
document.querySelector('.item__color').innerHTML = currentObject.color;
document.querySelector('.item__power').innerHTML = currentObject.power;
document.querySelector('.item__price').innerHTML = currentObject.price;
document.querySelector('.item__body').innerHTML = currentObject.body;
document.querySelector('.item__engineVolume').innerHTML = currentObject.engineVolume;
document.querySelector('.item__cylinders').innerHTML = currentObject.cylinders;
document.querySelector('.item__fuel').innerHTML = currentObject.fuel;
document.querySelector('.item__weight').innerHTML = currentObject.weight;
document.querySelector('.item__gearbox').innerHTML = currentObject.gearbox;
document.querySelector('.item__gears').innerHTML = currentObject.gear;
document.querySelector('.item__doors').innerHTML = currentObject.doors;
document.querySelector('.item__seats').innerHTML = currentObject.seats;
document.querySelector('.item__length').innerHTML = currentObject.length;
document.querySelector('.item__width').innerHTML = currentObject.width;
document.querySelector('.item__height').innerHTML = currentObject.height;

const currentSlide = document.querySelector('.slider-item__photos img');

const prevBtn = document.querySelector('.slider-item__prev'),
    nextBtn = document.querySelector('.slider-item__next');

const wrapperDots = document.querySelector('.slider-item__dots'),
    dots = document.querySelectorAll('.item__dot');

let indexSlide = 0;

let arrSlides = [];
for (let i = 0; i < 4; i++) arrSlides.push(`img/${currentObject.photos[`photo${i + 1}`]}.jpg`);
currentSlide.src = arrSlides[0];

const checkDots = () => {
    currentSlide.src = arrSlides[indexSlide];
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[indexSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    indexSlide--;
    if (indexSlide == -1) indexSlide = 3;
    checkDots();
});

nextBtn.addEventListener('click', () => {
    indexSlide++;
    if (indexSlide == 4) indexSlide = 0;
    checkDots();
});

wrapperDots.addEventListener('click', event => {
    if (event.target.classList.contains('item__dot')) {
        for (let i = 0; i < dots.length; i++) {
            if (dots[i] == event.target) {
                indexSlide = i;
                checkDots();
            }
        }
    }
});