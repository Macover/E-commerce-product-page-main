//NAV
const mobCartButton = document.getElementById("mob-cartButton");
const cartCard = document.getElementById("cartCard"); 
const btnSideBarClose = document.getElementById("btnSideBarClose");
const btnSideBarOpen = document.getElementById("btnSideBarOpen");
const responsiveSidebar = document.getElementById("responsiveSideBar");

btnSideBarOpen.addEventListener("click",()=>{
    console.log("sideBarOpen");
    if(responsiveSidebar.classList.contains("onClose")){
        responsiveSidebar.classList.remove("onClose");
        responsiveSidebar.classList.add("isOpenFlex");
    }
});
btnSideBarClose.addEventListener("click",()=>{
    console.log("sideBarClose");
    if(responsiveSidebar.classList.contains("isOpenFlex")){
        responsiveSidebar.classList.remove("isOpenFlex");
        responsiveSidebar.classList.toggle("onClose");
    }
});

mobCartButton.addEventListener("click", ()=>{       
   
   if(cartCard.classList.contains("onClose")){
       cartCard.classList.toggle("isOpen");
       cartCard.classList.remove("onClose")        
   }else{
    cartCard.classList.remove("isOpen")        
    cartCard.classList.toggle("onClose");
   }
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