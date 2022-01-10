/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calck.js":
/*!*****************************!*\
  !*** ./js/modules/calck.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calck (){
    const result = document.querySelector('.calculating__result span'),
      itemCalk = document.querySelector('.ckall'),
      parentResult = document.querySelector('.calculating__result');
      let sex = 'female',
      weight,height,age,
      ratio = '1.375';
  
  
  function totalCalc(){
  
   if(weight == ''){}
  
   if(!sex||!weight||!height||!age||!ratio){
     result.textContent = 'не все данные введены....';
     itemCalk.style.display = 'none';
     return;
   }else{
    itemCalk.style.display = 'block';
    parentResult.style.display = 'flex';
   }
  
   if(sex==='female'){
     result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
   }else{
     result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
   }
  
  }
  
  totalCalc();
  
   function getStatickData (parentSelector, activeClass){
  
      const element = document.querySelectorAll(`${parentSelector} div`);
  
      element.forEach(elem =>{
        elem.addEventListener('click', (e)=>{
  
          
          if(e.target.getAttribute('data-ratio')){
            ratio = +e.target.getAttribute('data-ratio');
            localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
          }else{
            sex = e.target.getAttribute('id');
            localStorage.setItem('sex' , e.target.getAttribute('id'));
          }
  
          element.forEach(elem =>{
            elem.classList.remove(activeClass);
          });
          e.target.classList.add(activeClass);
          totalCalc();
        });
      });
  
   }
  
   getStatickData('#gender', 'calculating__choose-item_active');
   getStatickData('.calculating__choose_big', 'calculating__choose-item_active');
  
  function getDinamicData(selector){
    const input = document.querySelector(selector);
  
    
  
    input.addEventListener('input', ()=>{
    
    if(input.value.match(/\D/g)){
      input.style.border = '1px solid #ed3941';
  
    
    }else{
      input.style.border = 'none';
    }
      switch (input.getAttribute('id')) {
        case 'weight':
          weight = input.value.replace(/\D/g,'');
          break;
        case 'height':
          height = input.value.replace(/\D/g,'');
          break;
        case 'age':
          age = input.value.replace(/\D/g,'');
          break;  
      }
  
  
    totalCalc();  
    });
  }
  
  getDinamicData('#weight');
  getDinamicData('#height');
  getDinamicData('#age');
  
  
  

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calck);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


  function card(){
    class Card{
      constructor(src, altimg, title, descr, price, parentsSeletor)
      {
        this.src = src;
        this.altimg = altimg;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.parent = document.querySelector(parentsSeletor);
        this.will = 2.5;
        this.toByn();
    
      }
        toByn(){
          this.price = this.price *this.will;
        }
      
        render(){
          const cardParent = document.createElement('div');
              cardParent.innerHTML=`
              <div class="menu__item">
              <img src=${this.src} alt=${this.altimg}>
              <h3 class="menu__item-subtitle">${this.title}</h3>
              <div class="menu__item-descr">${this.descr}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
              </div>
           </div>
      
              
              `;
              
      
        
       
        this.parent.append(cardParent); 
      
    
    
        
      
    }
    }
    
    const getResurce = async  (url)=>{
      const resulte = await fetch(url);
    
      return await resulte.json();
    };
    
    
    getResurce('http://localhost:3000/menu')
    .then(
      data=>{data.forEach(({img, altimg, title, descr, price})=>{
        new Card(img, altimg, title, descr, price, '.menu .container').render();
      });}
    );
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function modal(){
    const modalOpen = document.querySelectorAll('[data-open]'),
         modalClose = document.querySelectorAll('[data-close]'),
         modal = document.querySelector('.modal');

function openModal(){
  modalOpen.forEach((item)=>{
    item.addEventListener('click', ()=>{

         modal.classList.remove('hide');
         modal.classList.add('show');

         document.body.style.overflow = 'hidden';
         


    });
});
}
   
    

function closeModal(){
    modalClose.forEach((btn)=>{
      btn.addEventListener('click', ()=>{
           
           modal.classList.remove('show');
           modal.classList.add('hide');

           document.body.style.overflow = 'scroll';

           


      });
 });


 modal.addEventListener('click', (e)=>{
    const target = e.target;
if(target === modal ||  target.getAttribute('data-close') == ''){   /////первый вариант закрытия через крестик и при клике вне модалки,"target.getAttribute('data-close') == ''", прописан для закрытия модалки при создании динамического окна(так как элементы созданные денамически не видит слушатель)
    // if(target && target.classList.contains('modal') || target && target.classList.contains('modal__close')  ){    ///////////то же рабочий второй вариант закрытия через крестик и при клике вне модалки,"target && target.classList.contains('modal__close')", прописан для закрытия модалки при создании динамического окна(так как элементы созданные денамически не видит слушатель)
      modal.classList.remove('show');
      modal.classList.add('hide');

      document.body.style.overflow = 'scroll';
    }
  

 });

  document.addEventListener('keydown' , (e)=>{

    if(e.code === 'Escape' ){
      modal.classList.remove('show');
           modal.classList.add('hide');

           document.body.style.overflow = 'scroll';
    }

 });
}





 openModal();

 closeModal();

 ///украшение модалки 



 function showThanksModal(message){

  const modalCloseForThanks = document.querySelector('.modal__dialog');
        //modalCloseForThanks.classList.add('show');
 
  

  const modalThaParent = document.createElement('div');
  modalThaParent.classList.add('modal__dialog');
  modalThaParent.innerHTML=`
  <div class = "modal__content">
      
  
      <div data-close class="modal__close" >&times;</div>
      <div class = "modal__title">${message}</div>
  
  
  
  
  
  
  </div>

  

  `;

  

  document.querySelector('.modal').append(modalThaParent);
  openModal();
  setTimeout(()=>{
   modalThaParent.remove();
    modalCloseForThanks.classList.add('show');
    modalCloseForThanks.classList.remove('hide');
    modal.classList.remove('show');
    modal.classList.add('hide');
  
    document.body.style.overflow = 'scroll';
    
  }, 1000);

}
const forms =  document.querySelectorAll('form');

const message = {
  loading:'SVG/spinner.svg',  //установка svg  в сообщение перед  добовлением его  к модалке (также тут может быть текст)
  success:'мы скоро с Вами свяжемся',
  failure:'что-то пошло не так'
};

forms.forEach(item =>{
  BindPostData(item);
});





function BindPostData(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
  
  
  let statusMessage = document.createElement('img');  ////Создание родителя для сообщения (работает для всех, но вэтом проекте используется в таком виде для loading). так как поставлен тег img(необходимый для добавления svg)
  //statusMessage.classList.add('status');  ////КОД добавления стиля к сообщению
  //statusMessage.textContent = message.loading;////КОД  для помещения текстового солбщения в див через обьект message
  statusMessage.src= message.loading;   ////КОД  для помещения рисунка солбщения в див через обьект message
  statusMessage.style.cssText = ` 
          display: block;
          margin: 0 auto;
          
  `;/////добавление сстилей для сообщения (что-бы было поцентру)


  form.appendChild(statusMessage);
///----через XMLHttpReqyest------////
  // const request = new XMLHttpRequest();
  // request.open('POST', 'server.php');
  // request.setRequestHeader('Content-type','application/json; charset= utf-8');
  
  const formData = new FormData(form);
// const object = {};
//  formData.forEach(function(value,key){
//    object[key]=value;
//  });


const json = JSON.stringify(Object.fromEntries(formData.entries()));
  
 const postData = async (url,data)=>{  ///async -означает, что postData выполниться только после выполнения await
  const res = await fetch(url,{
      method:"POST",
      headers:{'Content-type':'application/json'},
      body: data
  
  });
  
  //return await res.json();

};

    postData('http://localhost:3000/requests', json)
  // .then(data=>data.text()) перевод в вормат текста если не json
  .then(data=>{console.log(data);
    showThanksModal(message.success);
  

     statusMessage.textContent = message.success;
               
               setTimeout(() => {
                   statusMessage.remove();
               }, 2000);})
  .catch(()=>{statusMessage.textContent = message.failure;})
  .finally(()=>{form.reset();});
  
  
  


  //request.send(json);
  
  
  
  
  
  
  
  
  // request.addEventListener('load', ()=>{
  //   if(request.status ===200){
  //     console.log(request.response);
  //    showThanksModal(message.success);
   

  //     statusMessage.textContent = message.success;
  //               form.reset();
  //               setTimeout(() => {
  //                   statusMessage.remove();
  //               }, 2000);




  //   }else{statusMessage.textContent = message.failure;}

  // });

});


}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(){
    const content =document.querySelectorAll('.tabcontent'),
      tab =document.querySelectorAll('.tabheader__item'),
      tabParents =document.querySelector('.tabheader__items');


      function hideContent(){
          content.forEach((item)=>{
              item.classList.remove('show');
              item.classList.add('hide');
              item.classList.add('fade');
          });

          tab.forEach((item)=>{
            item.classList.remove('tabheader__item_active');
            
        });
      }



      function showContent(i=0){
        content[i].classList.remove('hide');
        content[i].classList.add('show');
       
        tab[i].classList.add('tabheader__item_active');

      }
      hideContent();
      showContent();



      tabParents.addEventListener('click', (e)=>{

        const target = e.target;

        if(target && target.classList.contains('tabheader__item')){
          tab.forEach((item, i)=>{
              if(item==target){
                hideContent();
                showContent(i);
              }
          });
        }

      });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer (){
    const deadLine = '2022-02-25';



function timeCalck(endTime){
  const t = Date.parse(endTime)- Date.parse(new Date()),
        days = Math.floor(t/(1000*60*60*24)),
        hours = Math.floor(t/(1000*60*60)%24),
        minutes = Math.floor(t/(1000*60)%60),
        seconds = Math.floor(t/(1000)%60);


        return{
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds


        };

}
timeCalck(deadLine);

const timer = document.querySelector('.timer');

function setTimer(selector,endTime){
     const t = document.querySelector(selector),
           days = t.querySelector('#days'),
            hours= t.querySelector('#hours'),
            minutes= t.querySelector('#minutes'),
            seconds= t.querySelector('#seconds'),
            reStart = setInterval(innerTime, 1000);

            innerTime();

            
              
            
            function getZero(num){
                if(num >= 0 && num<10 ){
                  return `0${num}`;
                }
                else{
                  return num;
                }

            }
            
            function innerTime(){
              const t = timeCalck(endTime);
        
              days.innerHTML= getZero(t.days);
              hours.innerHTML=getZero(t.hours);
              minutes.innerHTML=getZero(t.minutes);
              seconds.innerHTML= getZero(t.seconds);
        

              if(t.total <= 0){
                clearInterval(reStart);
                
                
              }
        
        
        }
}
setTimer('.timer', deadLine);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);







/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calck */ "./js/modules/calck.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");







window.addEventListener('DOMContentLoaded', ()=>{


(0,_modules_cards__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_calck__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__["default"])();



});






















})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map