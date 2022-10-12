const cartButton = document.querySelector("#cartButton");
const inputNumber = document.querySelector("#inputNumber");
const minusButton = document.querySelector("#minusButton");
const addButton = document.querySelector("#addButton");

//Functionally to open images modal.
const modal = document.querySelector("#modalImg");
const primaryImageD = document.querySelector("#primaryImageD");
const modalCloseButton = document.querySelector("#modalCloseButton");

modalCloseButton.addEventListener("click", () => {    
    if (modal.classList.contains("onOpenFlex")) {
        modal.classList.remove("onOpenFlex");
        modal.classList.add("onClose");
    }
});

primaryImageD.addEventListener("click", () => {
    if (modal.classList.contains("onClose")) {
        modal.classList.remove("onClose");
        modal.classList.add("onOpenFlex");
    }
});

// Functionality to put preview images as the principal.

const secondaryImages = document.querySelectorAll(".secondary-img");
const priImgModal = document.getElementById('pri-img-modal');

secondaryImages.forEach(button => {    
    button.addEventListener("click", () => {                
        let src = button.firstChild.getAttribute("src");        
        src = src.split('-thumbnail');        
        const newSrc = src[0] + src[1];        
        primaryImageD.setAttribute("src",newSrc)        
        priImgModal.setAttribute("src",newSrc)
    })
});

// Cart Functionality

let inputNumberValue = 0;

const validateInputNumber = e => {
    if (isNaN(e.key)) inputNumber.value = 0;
    else inputNumber.value = e.key;
}

inputNumber.addEventListener("keyup", e => validateInputNumber(e));

addButton.addEventListener("click", () => {
    if (inputNumber.value > 8) inputNumber.value = 9;
    else inputNumber.value++;
});
minusButton.addEventListener("click", () => {
    if (inputNumber.value < 1) inputNumber.value = 0;
    else inputNumber.value--;
});

const deskCardCart = document.getElementById("deskCardCart");

cartButton.addEventListener("click", () => {


    if (cartButton.style.backgroundColor != "var(--nBlack)") {
        cartButton.style.backgroundColor = "var(--nBlack)"
    } else {
        cartButton.style.backgroundColor = "var(--nDrkGrayishBlue)"
    }

    if (deskCardCart.classList.contains("onClose")) {
        deskCardCart.classList.remove("onClose");
        deskCardCart.classList.toggle("onOpenFlex");
    } else {
        deskCardCart.classList.remove("onOpenFlex");
        deskCardCart.classList.toggle("onClose");
    }
})

//add an item to the cart functionality.

const addToCartButton = document.getElementById('addToCartButton');

addToCartButton.addEventListener("click", () => {

    const notificationCart = document.getElementById('notificationCart');
    const notificationCartNumber = document.getElementById('notificationCartNumber');

    notificationCartNumber.textContent = inputNumber.value;

    if (inputNumber.value == 0) {
        notificationCart.classList.replace("onOpenFlex", "onClose");
    } else {
        notificationCart.classList.replace("onClose", "onOpenFlex");
    }
})



