
//inline event  ex attribute
//inline properties
//event listeners


const spanEL =document.querySelector('header span');

const handleCreditMsg =(event)=>{
    alert('creadit alert')
}

spanEL.addEventListener('click',handleCreditMsg,{once:true})


//event bubbling
const form=document.querySelector('form');
const div=document.querySelector('form div');
const p=document.querySelector('form div p');

form.addEventListener('click',(event)=>
{
  alert('form tag');
//   console.dir(`target:${event.target.tagName},this:${form.tagName}`);
});

//-------------------------------
div.addEventListener('click',(event)=>{
 alert('div element');

    //Stop Bubbling
  // event.stopPropagation();

  // Removes all active event listeners 
  // event.stopImmediatePropagation();

  
});

p.addEventListener('click',()=>{
    alert('p element')
});

//stoppropagation

div.addEventListener('click',(event)=>{
    alert('this is a another div element');
   
});

//22:12

//To catch an event on the capturing phase
  // form.addEventListener('click',()=>{
  //   console.log('form capture capturing')
  // },{capture:true}); //by default false,

  // div.addEventListener('click',()=>{
  //   console.log('the is a div capture')
  // },{capture:true});

  
  // p.addEventListener('click',()=>{
  //   console.log('this is paragraph capturing')
  // },{capture:true});

//Task:Catch the capturing & Bubbbling phrase


for(let ele of document.querySelectorAll("form,form *")){
  console.log(ele);
  ele.addEventListener('click',()=>{
    console.log(`capture phase ${ele.tagName}`)
  },{capture:true});

  ele.addEventListener('click',()=>{
    console.log(`babble phase ${ele.tagName}`);
  })
}