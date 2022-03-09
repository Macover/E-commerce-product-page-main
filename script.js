const cartButton = document.querySelector("#cartButton");
const inputNumber = document.querySelector("#inputNumber");
const minusButton = document.querySelector("#minusButton");
const addButton = document.querySelector("#addButton");

let inputNumberValue = 0;

const validateInputNumber = e =>{
    if(isNaN(e.key)) inputNumber.value = 0;
    else inputNumber.value = e.key;
}

inputNumber.addEventListener("keyup",e=>validateInputNumber(e));

addButton.addEventListener("click",()=>{    
    if(inputNumber.value > 8) inputNumber.value = 9;
    else inputNumber.value++;
});
minusButton.addEventListener("click",()=>{    
    if(inputNumber.value < 1) inputNumber.value = 0;
    else inputNumber.value--;
});
//asda