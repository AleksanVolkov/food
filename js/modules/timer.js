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


export default  timer;





