// mouse event

//mouse in
//mouse up
//mouse out
//mouse hover


// globally
// document.addEventListener("mousedown",(event)=>{
//    console.log('mosuedown',event)
// });

// document.addEventListener('copy',(event)=>{
//   event.preventDefault();
//   alert("Copied is prohibited")
// });

// document.addEventListener("mouseup",(event)=>{
//   console.log('mouseup',event);
// });

// mouseenter
//    when a touch screeen fires
    // document.addEventListener('mouseenter',(event)=>{
    // console.log("Mosueenter");
    // })

//mouse over 
    //when is like a css hover 
// document.addEventListener('mouseover',(event)=>{
//     console.log(event);
// })

//mouseleave
    // document.addEventListener('mouseleave',()=>{
    // console.log('MosueLeave');
    // });

//mousemove
// document.addEventListener('mousemove',()=>{
//     console.log('mousemove')
// })

//mouseout
    // document.addEventListener('mouseout',()=>{
    // console.log("mouseout");
    // });

//task
   //create an mouse tester app 
     //which should display respective message when that button is clicked
 //based on the click 
 //you have click

document.addEventListener('mouseup',(event)=>{
  switch(event.which){
    case 1:
        console.log("you have clicked left key");
        break;
    case 2:
        console.log("you have clicked middle key");
        break;
    default:
        console.log("you have clicked right key");
        break;
  }
});

//which

//which=1 --left key
//which=2 --middle key
//which=3 --right key