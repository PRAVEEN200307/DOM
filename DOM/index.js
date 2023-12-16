/*
button
*/
const btn =document.getElementById('input-btn');
const userInput =document.getElementById('user-input');

let foodContaiener =document.getElementById('food-container');
// console.log(foodContaiener);
// btn.addEventListener('click',()=>{
//    const li =document.createElement('li');
//    li.textContent =userInput.value;
//    li.className="list-items"
//    foodContaiener.append(li);
// });

//remove
function removeitem(event){
  const removeLi =event.target.parentNode.parentNode;
  removeLi.remove();  
}