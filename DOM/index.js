/*
button
// */
// const li=document.querySelector('#food-container li');

// console.log(li.parentNode);
// console.log(li.parentElement.parentElement);

// console.log(li.closest('main'));

const userInput =document.querySelector("#input-food-container input");

/*
style="background-color: royalblue;border: none;
padding: 2px 15px;color: #fff;border-radius: 2px;cursor: pointer;"
*/

/*
//1.setAttribute
  const btnEl =document.querySelector("#input-food-container button");
  // btnEl.setAttribute("style","background-color: royalblue;border: none;
  padding: 2px 15px;color: #fff;border-radius: 2px;cursor: pointer;");           

//2.Direct Property access
  console.log(btnEl.style);

  btnEl.style.padding="2px 15px";
  btnEl.style.backgroundColor="royalblue";
  btnEl.style.border="none";
  btnEl.style.color="#fff";
  btnEl.style.borderRadius="2px";
  btnEl.style.cursor="pointer";

  12:32

const btnEl =document.querySelector("#input-food-container button");
//3.cssText
btnEl.style.cssText="background-color: royalblue;border: none;padding: 2px 15px;color: #fff;border-radius: 2px;cursor: pointer;"

btnEl.style.cssText +="background-color:red;"

console.log(btnEl.style.cssText)

//Getting the style
console.log(btnEl.style.padding);
console.log(btnEl.style.border);
console.log(btnEl.style.backgroundColor);

//getComputedStyle() meathod
  //window meathod

const overStateinput=document.querySelector('.input-parent button');
console.log(overStateinput);

console.log(window.getComputedStyle(overStateinput,":hover"));

const btnEl =document.querySelector("#input-food-container button");
btnEl.removeAttribute('style');

btnEl.style.cssText="background-color: royalblue;border: none;padding: 2px 15px;color: #fff;border-radius: 2px;cursor: pointer;"

*/
