
let leftset = 0; //смещение по левому краю
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    leftset = leftset + 256; //leftset += 256 //ширина картинки
    if(leftset > 1280){ //256*5, т.к. 6 -1 картинок 
        leftset = 0;
    }
    sliderLine.style.left = -leftset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    leftset = leftset - 256; //leftset += 256 //ширина картинки
    if(leftset < 0){
        leftset = 1280;
    }
    sliderLine.style.left = -leftset + 'px';
});