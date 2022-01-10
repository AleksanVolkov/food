function slider (){
    const slider =document.querySelector('.offer__slider'),
      slide =document.querySelectorAll('.offer__slide'), 
      slideWrapper =document.querySelector('.offer__slider-wrapper'),
      slideField =document.querySelector('.offer__slider-inner'),
      nextSlide =document.querySelector('.offer__slider-next'),
      prevSlide =document.querySelector('.offer__slider-prev'),
      total =document.querySelector('#total'), 
      current =document.querySelector('#current'),
      width = window.getComputedStyle(slideWrapper).width;
      let slideIndex =1;
      let offset = 0;



function opacity(){
  dots.forEach(dot=>{
    dot.style.opacity = '0.5';
  });
  dots[slideIndex-1].style.opacity = '1';
}

function currentChange (){
  if(slide.length < 10){
    current.textContent = `0${slideIndex}`;
  }else{
    current.textContent = slideIndex;
  }
}
slide.forEach(slide=>{
  slide.style.width = width;
});


if(slide.length < 10){
  total.textContent = `0${slide.length}`;
  current.textContent = `0${slideIndex}`;
}else{
  total.textContent = slide.length;
  current.textContent = slideIndex;
}



slideField.style.transition = '0.7s all';
slideField.style.display = 'flex';
slideField.style.width = 100 * slide.length +'%';
slideWrapper.style.overflow= 'hidden';


const sliderInnerDots = document.createElement('ol');

const dots = [];
slider.style.position ='relative';
sliderInnerDots.style.cssText = `
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;

`;
slider.append(sliderInnerDots);

for(let i = 0 ;i<slide.length; i++){
  const dot = document.createElement('li');
  dot.setAttribute('get_to_dot', i+1);
  dot.style.cssText= `
          box-sizing: content-box;
          flex: 0 1 auto;
          width: 30px;
          height: 10px;
          margin-right: 3px;
          margin-left: 3px;
          cursor: pointer;
          background-color: #ffffff;
          background-clip: padding-box;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          opacity: .5;
          transition: opacity .6s ease;
        

  `;

  sliderInnerDots.append(dot);

  dots.push(dot);

  if(i == 0){
    dot.style.opacity = '1';
  }else{
    dot.style.opacity = '0.5';
  }

 
}



nextSlide.addEventListener('click', ()=>{
  
  if(offset == +width.replace(/\D/g, '')*(slide.length -1)){
    offset = 0;
  }else{
    offset += +width.replace(/\D/g, '');
  }



  slideField.style.transform = `translateX(-${offset}px)`;


  if(slideIndex == slide.length){
    slideIndex = 1;
  }else{
    slideIndex++;
  }


  currentChange ();

  
  opacity();


});



prevSlide.addEventListener('click', ()=>{
   

  if(offset == 0){
    offset = +width.replace(/\D/g, '')* (slide.length-1);
  }else{
    offset -= +width.replace(/\D/g, '');
  }


  slideField.style.transform= `translateX(-${offset}px)`;


  if(slideIndex == 1){
    slideIndex = slide.length;
  }else{
    slideIndex--;
  }

  if(slide.length < 10){
    current.textContent = `0${slideIndex}`;
  }else{
    current.textContent= slideIndex;
  }

  dots.forEach(dot=>{
    dot.style.opacity = '0.5';
  });
  dots[slideIndex-1].style.opacity = '1';


  
});

dots.forEach(dot =>{
  dot.addEventListener('click', (e) =>{
    const slideTo = e.target.getAttribute('get_to_dot');

    slideIndex = slideTo;
    offset = +width.replace(/\D/g, '')*(slideTo-1);
    slideField.style.transform = `translateX(-${offset}px)`;


    currentChange ();

    opacity();
   
  });
});

}

export default  slider;