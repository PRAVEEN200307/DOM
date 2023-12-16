/*
button
*/
const btn =document.getElementById('input-btn');
const userInput =document.getElementById('user-input');

let foodContaiener =document.getElementById('food-container');
console.log(foodContaiener);
btn.addEventListener('click',()=>{
   const li =document.createElement('li');
   li.textContent =userInput.value;
   li.className="list-items"
   foodContaiener.append(li);
});
//Clone

const  AsyncBtn =document.getElementById('AsyncBtn');

AsyncBtn.addEventListener('click',()=>{
     
    let cloneDiv =document.getElementById('duplicate');
    cloneDiv.innerHTML='';  
    const cloneTrueEL =foodContaiener.cloneNode(true);
    cloneDiv.append(cloneTrueEL);
});