//forms data

const formEL =document.forms.feedback;
/*
*/
// console.log(formEL);

const handleSummit = (event)=>{
    event.preventDefault();
  
    //destruture array
        //  const {fullname,type,email,description,terms} =formEL.elements;
        // console.log(fullname,type,email,description,terms);
  
  
    //backend API
      // console.log(new FormData(formEL));
    //   console.log([...new FormData(formEL)]);
    const formData = new FormData(formEL);
    console.log("My api keys is"+formData.get('api-key'));
  
    console.log("form submited")
} 
const handleFormData=(e)=>{
  console.log("Formdata fired");
   const formdata =e.formData;

   //userfull meathods
   formdata.append("api-key","A3434SEDFSF23D");
   console.log([...formdata.entries()]);
   console.log([...formdata.values()]);
   console.log([...formdata.keys()]);
   console.log(formdata.get("email"));
   console.log(formdata.getAll("type"));//get more then value in array
   console.log(formdata.has("type"));//return true or false
   formdata.set("hobbies","Leaning new things");
   formdata.delete("type")
   console.log([...formdata.entries()])
   console.log(formdata);
}

formEL.addEventListener("submit",handleSummit);
formEL.addEventListener('formdata',handleFormData);

