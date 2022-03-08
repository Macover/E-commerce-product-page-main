//NAV
const mobCartButton = document.getElementById("mob-cartButton");

mobCartButton.addEventListener("click", ()=>{
   console.log("first") 
});

//Container buttons
const mobLessButtonCart = document.getElementById("mob-lessButtonCart");
const mobInputCart = document.getElementById("mob-inputCart");
const mobPlusButtonCart = document.getElementById("mob-plusButtonCart");

const mobValidateInputNumber = e =>{
    if(isNaN(e.key)) mobInputCart.value = 0;
    else mobInputCart.value = e.key;
}

mobInputCart.addEventListener("keyup", (e)=>mobValidateInputNumber(e));

mobPlusButtonCart.addEventListener("click",()=>{    
    if(mobInputCart.value > 8) mobInputCart.value = 9;
    else mobInputCart.value++;
});
mobLessButtonCart.addEventListener("click",()=>{    
    if(mobInputCart.value < 1) mobInputCart.value = 0;
    else mobInputCart.value--;
});