
const userInput =document.querySelector("#input-food-container input");

const inputDiv =document.querySelector('#input-food-container');
const hideBtn =document.querySelector('#hide-btn');
// console.log(hideBtn);

//task: show div based on click (toggle)

// hideBtn.addEventListener('click',()=>{
//     if( inputDiv.style.display ==="none"){
//        hideBtn.style.backgroundColor="gray";
//        hideBtn.innerHTML="hide div";
//        inputDiv.style.display="block";
//     }
//     else{
//         inputDiv.style.display ="none";
//         hideBtn.style.backgroundColor="royalblue";
//         hideBtn.innerHTML="show text";
//     }
// });


//animation
   hideBtn.addEventListener('click',()=>{
      if(inputDiv.classList.contains('hide')){
         inputDiv.classList.remove('hide');
         hideBtn.innerHTML="hide div";
         hideBtn.style.backgroundColor="gray";
      }
      else{
         inputDiv.classList.add('hide');
         hideBtn.style.backgroundColor="royalblue";
         hideBtn.innerHTML="show text";
      }
   });