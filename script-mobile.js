//NAV
const mobCartButton = document.getElementById("mob-cartButton");
const cartCard = document.getElementById("cartCard"); 
const btnSideBarClose = document.getElementById("btnSideBarClose");
const btnSideBarOpen = document.getElementById("btnSideBarOpen");
const responsiveSidebar = document.getElementById("responsiveSideBar");
const resSideBarContainer = document.getElementById("resSideBarContainer");
const resSidebarBackTap = document.getElementById("resSidebarBackTap");

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

//Container buttons
const mobLessButtonCart = document.getElementById("mob-lessButtonCart");
const mobInputCart = document.getElementById("mob-inputCart");
const mobPlusButtonCart = document.getElementById("mob-plusButtonCart");

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