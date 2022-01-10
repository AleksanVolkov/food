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

export default  tabs;