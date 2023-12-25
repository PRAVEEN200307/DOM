//formating

const formEl =document.forms.feedback;

const handleSubmit =(event)=>{
  event.preventDefault();
   //query string:contet-type : application/x-www-form-urlencoded
  // http://127.0.0.1:5500/Feedback.html?fullname=Rachel+Sweeney&type=Contributions&email=made%40mailinator.com&description=Est+natus+incidunt+&terms=on

  const formdata=new FormData(formEl);
  const data =[...formdata.entries()];
/*
   const dataString=data
// .map((x)=>`${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
   .map(([key,value])=>`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
   .join('&');  //old way of doing
   console.log(dataString);
*/
  //interface
    const dataString2= new URLSearchParams(formdata);
    console.log(dataString2.toString());

  //JSON 
    // const jsonData = JSON.stringify(Object.fromEntries(formdata));                                                                                                       
    // console.log(jsonData);
    
}
formEl.addEventListener("submit",handleSubmit)

