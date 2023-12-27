//formating
//const formEl =document.forms.feedback;


/*
const handleSubmit=(event)=>{
  event.preventDefault();

  const formdata=new FormData(formEl);
  const data =[...formdata.entries()]
 
 
  const JsonData =JSON.stringify(Object.fromEntries(formdata));

   //send to Backend
    //XMLHttpRequest(XHR)
        // let xhr = new XMLHttpRequest();
        // xhr.open("GET","https://reqres.in/api/users/2",true);
        // xhr.onload = function(){
        
        //   const obj= JSON.parse(xhr.responseText);

        //   document.querySelector('#response').innerText=obj.data.first_name;
        // }
        // xhr.send();

    //2.fetch()
      //async
    fetch("https://reqres.in/api/users?page=2",{
       method:"GET",
        // headers:{
        //   "Content-Type":"application/json", //MIME- multi purpose internet mail extension
        //   // "Content-Type":"application/x-www-form-urlencoded",  //when form queryselector
        // },
        // body :JsonData, //get a  object
        // // body: new FormData(formEl),  //get the object string formate
    })
    .then(res => res.json())
    .then( data =>{
      document.querySelector('#response').innerText=JSON.stringify(data.data);
    }) 

}
*/
const formEl=document.forms.feedback

const handleSubmit =(event)=>{
   event.preventDefault();

    const formdata=new FormData(formEl);
    const formdataOb =JSON.stringify(Object.fromEntries(formdata));
  //XMLHttpRequest
  const xhr =new XMLHttpRequest();
  xhr.open("GET","https://reqres.in/api/users/2",true);
  xhr.onload=function(){
      const obj =JSON.parse(xhr.responseText);
      document.querySelector('#response').innerText = obj.data.first_name
  }
  xhr.send();//old way



 //fetch, axis
  //post meathod have body
    fetch('https://reqres.in/api/users/2',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:formdataOb
    });
 
    //GET MEATHOD
    fetch('https://reqres.in/api/users?page=2',{
      method:"GET",
    })
    .then(res => res.json())
    .then(data => document.querySelector("#response").innerText=JSON.stringify(data.data));

}
formEl.addEventListener("submit",handleSubmit);
