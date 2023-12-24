$(document).ready(function() {
    $('nav a[href^="#"]').click(function() { 
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
    },500);
    $('nav a[href^="#"]').parent().removeClass('active');
    $(this).parent().addClass('active');
    $('.mobile-menu').toggle(500);
    $('.menu__burger').toggleClass('close');
    return false;
    });
    $('.menu__burger').click(function() {
        $('.mobile-menu').toggle(500);
        $(this).toggleClass('close');
    });
});
const sliderImages = document.querySelectorAll('.slider__img'),
    sliderLine = document.querySelector('.slider__line'),
    sliderDots = document.querySelectorAll('.slider__dot');

let sliderCount = 0,
    sliderWidth;
function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.computedStyleMap.width = sliderWidth * sliderImages + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
function thisSlide(index) {
    sliderDots.forEach(item =>item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})