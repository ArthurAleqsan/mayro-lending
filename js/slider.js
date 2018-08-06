const imgArr = [
    'file:///D:/prog/landing/imgs/sp-1.png',
    'file:///D:/prog/landing/imgs/sp-2.png',
    'file:///D:/prog/landing/imgs/sp-3.png',
    'file:///D:/prog/landing/imgs/sp-4.png'
    ];
const leftArrow = document.querySelector('.left-arrow');
console.log(leftArrow.src)
console.log(window.location)
const rightArrow = document.querySelector('.right-arrow');
const sliderImg = document.querySelector('#slider-img-front');
const sliderImgLeft = document.querySelector('#slider-img-left');
const sliderImgRight = document.querySelector('#slider-img-right');
const selectNumArr = document.getElementsByClassName('slider-img-num');
function selectImg(num) {
    for(let i = 0; i < 4; i++) {
        selectNumArr[i].style.opacity = 0.5;
    }
    selectNumArr[num].style.opacity = 1;


    if(num === 3) {
        sliderImgRight.style.display = 'none';
        rightArrow.style.display = 'none';
        sliderImgLeft.src = imgArr[2]
    }else {
        sliderImgRight.style.display = 'block';
        rightArrow.style.display = 'block';
        if(num !== 0){
            sliderImgLeft.src = imgArr[num - 1];
            sliderImgRight.src = imgArr[num + 1];
        }
    }
    if(num === 0) {
        sliderImgLeft.style.display = 'none';
        leftArrow.style.display = 'none';
        sliderImgRight.src = imgArr[num + 1];
    } else {
        sliderImgLeft.style.display = 'block';
        leftArrow.style.display = 'block';
        if(num !== 3){
            sliderImgRight.src = imgArr[num + 1];
        }
    }
    sliderImg.src = imgArr[num];
}
function selectRight() {
    for(let i = 0; i < 4; i++) {
        selectNumArr[i].style.opacity = 0.5;
    }

    const index = imgArr.indexOf(sliderImg.src);

    // selectNumArr[index].style.opacity = 1;
    leftArrow.style.display = 'block';

    if(index !== 3) {
        sliderImg.src = imgArr[index + 1];
        rightArrow.style.display = 'block';
        sliderImgLeft.style.display = 'block';
        sliderImgLeft.src = imgArr[index];
        if(index === 3) sliderImgRight.style.display = 'none';
        sliderImgRight.src = imgArr[index + 2]
        sliderImgRight.style.display = 'block'
    }
    if(index === 2) {rightArrow.style.display = 'none';}

}
function selectLeft() {
    for(let i = 0; i < 4; i++) {
        selectNumArr[i].style.opacity = 0.5;
    }
    const index = imgArr.indexOf(sliderImg.src);
    // selectNumArr[index - 1].style.opacity = 1;
    sliderImg.src = imgArr[index - 1];
    rightArrow.style.display = 'block';
    sliderImgLeft.style.display = 'block';

    if(index !== 1) {
        leftArrow.style.display = 'block';
        sliderImgRight.src = imgArr[index];
        if(index === 1 ) sliderImgLeft.style.display = 'none';
        sliderImgLeft.src = imgArr[index - 2];
    }
    if(index === 1) {
        leftArrow.style.display = 'none';
        sliderImgLeft.style.display = 'none';
    }
}
