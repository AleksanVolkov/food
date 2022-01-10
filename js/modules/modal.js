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

export default  modal;