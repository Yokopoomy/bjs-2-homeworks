class AlarmClock{
 constructor(){
  this.alarmCollection = [];
  this.intervalId = null;
 }

 addClock(time, callback){
  if(time && callback){
   for(let item of this.alarmCollection){
    if(item.time === time){
     console.warn('Уже присутствует звонок на это же время');
    }
   };
  }else{
   throw new Error('Отсутствуют обязательные аргументы');
  }
  this.alarmCollection.push({
   callback,
   time : time,
   canCall : true
  });
 }

 removeClock(time){
  this.alarmCollection = this.alarmCollection.filter(item => item.time !==time)
 }

 getCurrentFormattedTime(){
  let today = new Date();
  return today.getHours() + ":" + String(today.getMinutes()).padStart(2, '0');
 }

 start(){
  if(this.alarmCollection.intervalId !== null ){
   return;
  }else{
   this.intervalId = setInterval(function(){
    this.alarmCollection.forEach(item => {
     if(this.getCurrentFormattedTime() === item.time && item.time === true){
      item.canCall = false;
      item.callback;
     }
    })
   }, 1000)
  }
 }

 start (){
    if (this.intervalId !== null && this.intervalId !== undefined) {
      return
    } else {
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(element => { 
        if (element.time === this.getCurrentFormattedTime() && element.canCall === true) {
          element.canCall = false;
          element.callback();
        }
      }), 1000})
    }
  }

 stop(){
  clearInterval(this.intervalId);
  this.intervalId = null;
 }

 resetAllCalls(){
  this.alarmCollection.forEach(item => item.canCall = true);
 }

 clearAlarms(){
  this.stop();
  this.alarmCollection = [];
 }
}