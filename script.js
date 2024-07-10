// variable 
const para = document.getElementById('diplayer');
const incrementBtn = document.getElementById('Increment');
const reserBtn = document.getElementById('Reset');
const decrementBtn = document.getElementById('Decrement');

let initailValue = 0;
para.textContent = initailValue;

incrementBtn.addEventListener('click', ()=>{
     initailValue++;
     para.textContent = initailValue;
});

decrementBtn.addEventListener('click', ()=>{
     if(initailValue > 0){
          initailValue--;
     }
     // initailValue--;
     para.textContent = initailValue;
});

reserBtn.addEventListener('click', ()=>{
     initailValue = 0
     para.textContent = initailValue;
});





