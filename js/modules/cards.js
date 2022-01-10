

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

  export default card;