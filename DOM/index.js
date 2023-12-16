/*
button

const btn =document.getElementById('input-btn');
const userInput =document.getElementById('user-input');
*/



//Replace Dom elememts
  //replaceWith
  //old way
    //  replaceChild
    //  replaceChildren
let foodContaiener =document.getElementById('food-container');

let samberLi =document.querySelector('#food-container :first-child');
// console.log(samberLi);

const li =document.createElement('li');
li.textContent ="Paruppu samber";
li.className ="list-items";

// samberLi.replaceWith(li); 

//old way
  //samberLi.parentNode.replaceChild(li,samberLi);//old way
  
const li1 = document.createElement("li");
li1.textContent="mulaki sambar";
li1.className="list-items";

const li2 = document.createElement("li");
li2.textContent="carrot rice";
li2.className="list-items";

foodContaiener.replaceChildren(li1,li2);