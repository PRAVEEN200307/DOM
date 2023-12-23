

//38-Event Delegation & Dyanmic Events

const tableEl = document.querySelector('table');
// console.log(tableEl);

let selectedId;

tableEl.addEventListener('click',(event)=>{
    const target =event.target
    const closestTr =target.closest('tr');


    if(target.tagName ==='TH') return; //Ignoring TH element.

    if(selectedId != undefined){
        selectedId.classList.remove('active')
    }
     selectedId=closestTr;
    closestTr.classList.add("active");

   alert(`hello ${closestTr.children[0].textContent}`);
});


//task  1 : Show a donate page based on Toggle

//id="supportBtn"



const supportBtn = document.querySelector('#supportBtn');


const userInputEL = document.querySelectorAll('#donate-form')[0];
const userInput = userInputEL.children[1];
const donateBtn = userInputEL.lastElementChild;

supportBtn.addEventListener('click', () => {
    userInputEL.classList.toggle('togglediv');
});


donateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    alert(`You have donated $${userInput.value}`)
});
