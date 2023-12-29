//forms input handle

const formsEl =document.forms.feedback;
let nameEL=formsEl.elements.fullname;


console.log(nameEL);

/*
  //!.Atributes
  nameEL.value="praveen";
  //nameEL.disabled='true';
  nameEL.readOnly='true';
  console.dir(nameEL.min);

  //Events
  //foucs
    nameEL.addEventListener('focus',()=>console.log('focused'));
  //blur
    nameEL.addEventListener('blur',()=>console.log("blur"));
  //input
    nameEL.addEventListener('input',(event)=>console.log(`${event.target.value}`));
  //change
   nameEL.addEventListener('change',(e)=>console.log(`changed value ${e.target.value}`));
 */

  //meathods
    nameEL.focus();

  //other events
    nameEL.addEventListener('cut',()=>{
      console.log('cuted')
    });
    nameEL.addEventListener('copy',()=>{
       alert("this text can'ot copy ")
    })
    nameEL.addEventListener("paste", (event) => {
      console.log("paste")
    });
 

handleSubmit =(event)=>{
  event.preventDefault();
 
  
  const formdata =new FormData(formsEl);
 
};

formsEl.addEventListener("submit",handleSubmit);
//1:58
