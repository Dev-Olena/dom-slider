const slides = [{
    src: 'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'landscape1'
}, {
    src: 'https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'landscape2'
}, {
    src: 'https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'landscape3'
}, {
    src: 'https://images.pexels.com/photos/1462892/pexels-photo-1462892.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'landscape4'
}, {
    src: 'https://images.pexels.com/photos/547119/pexels-photo-547119.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'landscape5'
}, {
    src: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'landscape6'
}]

// Get elements
const [prevBtn, nextBtn] = document.querySelectorAll('button');
const sliderImg = document.querySelector('.sliderWrapper img');

let currentSlideIndex = 0;

updateSlider(currentSlideIndex);

// Event listener
prevBtn.addEventListener('click', prevBtnHandler);
nextBtn.addEventListener('click', nextBtnHandler);

function prevBtnHandler () {
    if(currentSlideIndex === 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--;
    }
    updateSlider(currentSlideIndex);
};

function nextBtnHandler () {
    if(currentSlideIndex < slides.length -1) {
       currentSlideIndex++;
    } else {
        currentSlideIndex = 0;
    }
    updateSlider(currentSlideIndex);
};

function updateSlider(currentSlideIndex) {
    sliderImg.src = slides[currentSlideIndex].src;
    sliderImg.alt = slides[currentSlideIndex].alt; 
    
    sliderImg.onerror = () => {
        sliderImg.src='./images/question.jpeg'
    }
}










