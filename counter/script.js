const decrease = document.getElementById('btn--decrease');
const reset = document.getElementById('btn--reset');
const increase = document.getElementById('btn--increase');

const CountNumber =document.getElementById('cnt--number')

decrease.addEventListener('click', function () {
    let temp = Number(CountNumber.innerText);
    if(temp)
    CountNumber.textContent = --temp;
})
increase.addEventListener("click", function () {
  let temp = Number(CountNumber.innerText);
  CountNumber.textContent = ++temp;
});
reset.addEventListener("click", function () {
  CountNumber.textContent = 0;
});