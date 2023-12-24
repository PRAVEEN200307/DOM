/*
button
*/
const btn =document.getElementById('input-btn');
const userInput =document.getElementById('user-input');

let foodContaiener =document.getElementById('food-container');
// console.log(foodContaiener);

const handleInuptFood =()=>{
   const li =document.createElement('li');
   li.className="list-items";
   
   const div =document.createElement('div');

   if(userInput.value.length<1){
       return 
   }
   else{
    div.textContent=userInput.value;
    const div1 =document.createElement('div');
    div1.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
    div1.setAttribute('onclick','removeitem(event)')
   
    li.append(div,div1);
    foodContaiener.append(li);
   }
}

btn.addEventListener('click',handleInuptFood);

userInput.addEventListener('keyup',(event)=>{
   if(event.key === "Enter"){
      handleInuptFood();
   }else if(event.key === "KeyZ" && (event.ctrlkey="true"||event.metakey))
   {
       userInput.value='';
   }
});

                                                                        
//remove() meathod
function removeitem(event){
  const removeLi =event.target.parentNode.parentNode;
  removeLi.remove();  
}



//keydown
// document.addEventListener("keydown",(event)=>{
//   console.log(event.type,event);
// })

// document.addEventListener("keyup",(event)=>{
//   //console.log(`${event.type},${event.code},${event.key}`);
//   console.log(event);
// });


// Task :Build a simple typing-test screen
/*
document.addEventListener("keyup",(event)=>{
   switch(event.key){
     default:
      console.log(event.key);
      break;
   }

   switch(event.key){
      case 'ArrowUp':
         alert(`You have pressed ${event.key}`);
         break;
      case 'ArrowDown':
         alert(`You have pressed ${event.key}`);
         break;
      case 'ArrowLeft':
         alert(`You have pressed ${event.key}`);
         break;
      case 'ArrowRight':
         alert(`You have pressed ${event.key}`);
         break;
      default:
         alert('You have pressed unwanted key')
   }
});
*/



