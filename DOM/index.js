//forms input handle

const formsEl =document.forms.feedback;
let nameEL=formsEl.elements.fullname;


const categoryEl=formsEl.elements.type;

const allCategories =[...categoryEl]

const catagoresParnetEL =document.querySelector("#categoryes");

// console.log(catagoryes);
// console.log(allCategories);

//attribute
  // allCategories.forEach(cateogory =>{
  //   console.log(cateogory.value);
  //   console.log(cateogory.checked);
  // })

//event
//  const handleChange=(event)=>{
   
//       // const checked=allCategories.find(category =>{
//       //   return category.checked;
//       // })
//       // console.log("selected :",checked.value);
    
//     console.log(event.target.value);
//  }
//  catagoryes.addEventListener("change",handleChange);

//meathod
//for server process radio check
// allCategories[1].select();
// allCategories[1].checked=true;

//Task
/**
 * if contribution radio button clicked,then show an alert message
 * of "Thank you for contributing "after 1
 */

//change
//alert
// setTimeout(() => {
  
// }, timeout);

const handleChange =(event)=>{

  // const checked =allCategories.find( (ce)=>{
  //      return ce.checked            
  // });
  
  // if(checked.value === 'Contributions'){
  //      setTimeout(()=>{
  //         alert("Thank for contributing");
  //       },1000)
  // }

    if(event.target.value === 'Contributions'){
              setTimeout(()=>{
                 alert("Thank for contributing");
               },1000)
    }
}
catagoresParnetEL.addEventListener('change',handleChange);