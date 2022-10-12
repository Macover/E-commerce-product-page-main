//NAV
const mobCartButton = document.getElementById("mob-cartButton");
const cartCard = document.getElementById("cartCard"); 
const btnSideBarClose = document.getElementById("btnSideBarClose");
const btnSideBarOpen = document.getElementById("btnSideBarOpen");
const responsiveSidebar = document.getElementById("responsiveSideBar");
const resSideBarContainer = document.getElementById("resSideBarContainer");
const resSidebarBackTap = document.getElementById("resSidebarBackTap");
//Add Products to cart
const numberOfButtonCart = document.getElementById("numberOfButtonCart");
const addProductCart = document.getElementById("addProductCart");
//Container buttons
const mobLessButtonCart = document.getElementById("mob-lessButtonCart");
const mobInputCart = document.getElementById("mob-inputCart");
const mobPlusButtonCart = document.getElementById("mob-plusButtonCart");
//item body cart
const itemCart = document.getElementById("itemCart");
const cartEmpty = document.getElementById("cartEmpty");
const removeItemCart = document.getElementById("removeItemCart");
const totalItemCart = document.getElementById("totalItemCart");
const accounmentCartBody = document.getElementById("accounmentCartBody");

removeItemCart.addEventListener("click",()=>{
    numberOfButtonCart.classList.add("isDisabled");    
    itemCart.classList.add("items-remove-animated");
    setTimeout(()=>{ 
        itemCart.classList.add("isDisabled");
        itemCart.classList.remove("items-remove-animated");
    },500);
    if(cartEmpty.classList.contains("isDisabled")){
        cartEmpty.classList.remove("isDisabled");
    }
});

addProductCart.addEventListener("click",()=>{        
    if(mobInputCart.value == ""){
        console.log("esta vacio")        
    }else{        
        /* --> ADD PRODUCTS TO THE CART <-- */

        //add number to the cart icon
        numberOfButtonCart.classList.remove("isDisabled");
        numberOfButtonCart.innerHTML = mobInputCart.value;
        //add item to the body of the cart
        cartEmpty.classList.add("isDisabled");
        itemCart.classList.remove("isDisabled");        
        accounmentCartBody.innerHTML = mobInputCart.value;
          //calculate the total of the product.
        let total = mobInputCart.value * 125;        
        totalItemCart.innerHTML = `$${total}.00`;
    }    
});

btnSideBarOpen.addEventListener("click",()=>{    
    if(responsiveSidebar.classList.contains("onClose")){
        responsiveSidebar.classList.remove("onClose");
        responsiveSidebar.classList.add("isOpenFlex");

        /*Put animations here*/
        resSideBarContainer.style.animationName = "sideBarAnimationOpen";
        resSideBarContainer.style.animationDuration = "0.5s";
        resSideBarContainer.style.animationTimingFunction = "cubic-bezier(0.075, 0.82, 0.165, 1)";
        resSideBarContainer.style.animationFillMode = "forwards";
    }
});
const closeSideBar = ()=>{    
    if(responsiveSidebar.classList.contains("isOpenFlex")){
        responsiveSidebar.classList.remove("isOpenFlex");
        responsiveSidebar.classList.toggle("onClose");
    }
}
btnSideBarClose.addEventListener("click",()=>closeSideBar());
resSidebarBackTap.addEventListener("click",()=>closeSideBar());


mobCartButton.addEventListener("click", ()=>{       
   
   if(cartCard.classList.contains("onClose")){
       cartCard.classList.toggle("isOpen");
       cartCard.classList.remove("onClose")        
   }else{
    cartCard.classList.remove("isOpen")        
    cartCard.classList.toggle("onClose");
   }
});

const mobValidateInputNumber = e =>{
    if(isNaN(e.key)) mobInputCart.value = 1;
    else mobInputCart.value = e.key;
}

mobInputCart.addEventListener("keyup", (e)=>mobValidateInputNumber(e));

mobPlusButtonCart.addEventListener("click",()=>{    
    if(mobInputCart.value > 8) mobInputCart.value = 9;
    else mobInputCart.value++;
});
mobLessButtonCart.addEventListener("click",()=>{    
    if(mobInputCart.value < 2) mobInputCart.value = 1;
    else mobInputCart.value--;
});