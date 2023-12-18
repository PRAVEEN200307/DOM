/*
button
// */
// const li=document.querySelector('#food-container li');

// console.log(li.parentNode);
// console.log(li.parentElement.parentElement);

// console.log(li.closest('main'));

const userInput =document.querySelector("#input-food-container input");
console.dir(userInput);


//properties
  //this only change a properites it don't change renter html
  //this is a bad pratice
// console.log("type :",userInput.type);
// console.log('id :',userInput.id);
// console.log("name :",userInput.name);
// console.log("placeholder :",userInput.placeholder);
// console.log(userInput.value);
// userInput.value="praveen"
// console.log(userInput.value);

//Atribute
const firstName=prompt("enter you name");
userInput.setAttribute('value',`${firstName}`);

