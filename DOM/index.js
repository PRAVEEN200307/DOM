/*
button
*/
const btn =document.getElementById('input-btn');
const userInput =document.getElementById('user-input');
let foodContaiener =document.getElementById('food-container');

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
                                                                        
//remove() 
function removeitem(event){
  const removeLi =event.target.parentNode.parentNode;
  removeLi.remove();  
}






