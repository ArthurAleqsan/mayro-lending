const imgArr = [
    'http://'+window.location.host+'/landing/imgs/sp-1.png',
    'http://'+window.location.host+'/landing/imgs/sp-2.png',
    'http://'+window.location.host+'/landing/imgs/offer.png',
    'http://'+window.location.host+'/landing/imgs/footer.png'
    ];
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const sliderImg = document.querySelector('#slider-img-front');
const sliderImgLeft = document.querySelector('#slider-img-left');
const sliderImgRight = document.querySelector('#slider-img-right');
function selectImg(num) {


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

    console.log(num)
}
function selectRight() {

    const index = imgArr.indexOf(sliderImg.src);


    leftArrow.style.display = 'block';

    if(index !== 3) {
        sliderImg.src = imgArr[index + 1];
        rightArrow.style.display = 'block';
        sliderImgLeft.style.display = 'block';
        sliderImgLeft.src = imgArr[index];
        console.log(index)
        if(index === 3) sliderImgRight.style.display = 'none';
        sliderImgRight.src = imgArr[index + 2]
        sliderImgRight.style.display = 'block'
    }
    if(index === 2) {rightArrow.style.display = 'none';}

}
function selectLeft() {
    const index = imgArr.indexOf(sliderImg.src);
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
