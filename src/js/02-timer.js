// Opisany w dokumentacji
import flatpickr from "flatpickr";
// Dodatkowy import stylów
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const btn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

btn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0]<=options.defaultDate){
            Notiflix.Notify.failure("Please choose a date in the future");
        }
        else {
            btn.disabled = false;
            console.log(selectedDates[0]);
        }
    },
  };

const fp = flatpickr("#datetime-picker", options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }


  function addLeadingZero(value){
    return value.toString().padStart(2,0)
  }

btn.addEventListener('click', () => {
    timerId = setInterval(() => {
        const date = new Date().getTime();
        const selectedDate = fp.selectedDates[0].getTime();
        const timer = selectedDate - date;
        const obj = convertMs(timer);
        days.innerText = addLeadingZero(obj.days);
        hours.innerText = addLeadingZero(obj.hours);
        minutes.innerText = addLeadingZero(obj.minutes);
        seconds.innerText = addLeadingZero(obj.seconds);
      }, 1000);
})


