const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStop.disabled = true;

let timerId;

btnStart.addEventListener('click', () => {
    btnStop.disabled = false;
    btnStart.disabled = true;
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    },1000)
})

btnStop.addEventListener('click', () =>{
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(timerId);
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
