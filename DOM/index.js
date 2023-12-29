
//forms input handle

const formsEl =document.forms.feedback;
const hobbiesEl =formsEl.elements.hobbies;


const terms =formsEl.elements.terms
/*
//Get properties & Methods
  //console.log(hobbiesEl[0].value)

//attribute
  //hobbiesEl[0].checked =true;
  //terms.checked=true;
  // terms.indeterminate=true;
  console.log(terms.value);
//event
  terms.addEventListener('change',(event)=>{
      console.log(event.target.checked);
  })
//meathod
terms.select();
terms.checked = true;
*/

//Task
terms.addEventListener('change',(event)=>{
    if(event.target.checked === true){
      alert("I accept terms and conditions")
    }
});
