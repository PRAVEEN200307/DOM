

/**
 * document
 * forms
 *   using inded[0]
 *   names
 * elements
 *    using inded[0]
 *    names
 * destruture
 *   >this is good way to code easy
 */

//document
//forms
//name
//name=feedback

//const formEl =document.forms[0]; //ny index
//const formEl =document.forms.feedback; //my name

//formEl.elements
//const fullNameEL=formEl.elements[0] //by index value
//const fullNameEL=formEl.elements.fullname; //by name

/*
const formEl =document.forms.feedback;
// const fullNameEL =formEl.elements.fullname
// const typeEL =formEl.elements.type
// const emailEL =formEl.elements.email
// const descriptionEL =formEl.elements.description
// const termsEL=formEl.elements.terms

// console.log(fullNameEL,typeEL,emailEL,descriptionEL,termsEL);

const fullNameEL = formEl.fullname;
console.log(fullNameEL); //by do this way
*/

//modern the object destruting object es6

const formEl =document.forms[0].elements;
//object destruturing
const { fullname,type,email,description,terms }=formEl
console.log(fullname);
console.log(type);
console.log(email);
console.log(description);
console.log(terms);