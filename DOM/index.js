

//button
// const btn =document.getElementById('input-btn');
//user -input
// const userInput =document.getElementById('user-input');



let foodContaiener =document.getElementById('food-container');

const createliEL =document.createElement('li');
createliEL.className="list-items"
createliEL.textContent=`Maagi`;

foodContaiener.append(createliEL); //append
foodContaiener.prepend(createliEL); //prepend

foodContaiener.before(createliEL); //before
foodContaiener.after(createliEL); //after


//Old way of doing
// foodContaiener.parentNode.insertBefore(createliEL,foodContaiener);//old way--before
foodContaiener.parentNode.insertBefore(createliEL,foodContaiener);//old way--before
foodContaiener.parentNode.insertBefore(createliEL,foodContaiener.nextSibling);//old way--before

