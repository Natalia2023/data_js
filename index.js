// робимо лічильник відлік час
// 1) потрібно задати дедлайн
// 2)задати поточну дату
// 3)задати різницю
// 4)конвертувати різницю в нормальний формат для користувача
// 5)відобразити це все на екран

const deadLine = new Date(2023, 4, 26);
const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minuresElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
function timer () {

       const today = new Date();
    const delta = deadLine - today;
     
    const seconds = Math.floor(delta / 1000) % 60 ;
      const minutes = Math.floor(delta / 1000 / 60) % 60 ;
     const hours = Math.floor(delta / 1000 / 60 / 60) % 24 ;
     const days = Math.floor(delta / 1000 / 60 / 60 / 24);
     
daysElement.textContent = days;
hoursElement.textContent = hours;
minuresElement.textContent = minutes;
secondsElement.textContent = seconds;

     
    
}
setInterval(timer, 1000);