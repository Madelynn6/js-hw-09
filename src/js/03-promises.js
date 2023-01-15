import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => resolve({ position, delay }), delay);
    } else {
      setTimeout(() => reject({ position, delay }), delay);
    }
  });
}

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const firstDelay = Number(event.currentTarget[0].value)
  const delayStep = Number(event.currentTarget[1].value)
  const amount = Number(event.currentTarget[2].value)


  for(let i=0; i<amount; i++){
    const position = i+1;
    const delay = firstDelay + delayStep * i;

    createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    }}




  // Napisz skrypt, który po wysłaniu formularza wywoła funkcję 
  // createPromise(position, delay) tyle razy, ile wprowadzono w 
  // pole amount. Po każdym wywołaniu przekaż jej numer utworzonej 
  // obietnicy (position) i opóźnienie, uwzględniając wprowadzone przez 
  // użytkownika pierwsze opóźnienie (delay) i stopień (step).

  // Uzupełnij kod funkcji createPromise tak, aby przywracała jedną 
  // obietnicę, którą realizuje się lub odkłada poprzez delay czasu. 
  // Wartością obietnicy powinien być obiekt, w którym będą właściwości 
  // position i delay z wartościami parametrów o tej samej nazwie. 
  // Użyj kodu początkowego funkcji, aby wybrać to, co należy zrobić 
  // z obietnicą - zrealizować lub odłożyć.