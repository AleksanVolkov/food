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

export default  calck;