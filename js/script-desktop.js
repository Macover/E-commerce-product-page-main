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

    // Functionality to put preview images as the principal in the modal.
    const scdImgModal = document.querySelectorAll(".scd-img-modal");
    const priImgModal = document.getElementById('pri-img-modal');

    scdImgModal.forEach(img => {
        img.addEventListener("click", () => {
            let style = img.currentStyle || window.getComputedStyle(img, false)
            let bi = style.backgroundImage.slice(4, -1);
            let imgSrc = bi.split("images/");
            let newImgSrc = imgSrc[1].split('-thumbnail');
            newImgSrc = `images/${newImgSrc[0]}.jpg`;
            priImgModal.setAttribute('src', newImgSrc)
        })
    });
});

//Functionality to change image through the arrows.

const desktopLeftButton = document.getElementById('desktopLeftButton');
const desktopRightButton = document.getElementById('desktopRightButton');

const changeImage = mode => {
    const currentPrincipalImage = document.getElementById('pri-img-modal');
    const srcImage = currentPrincipalImage.getAttribute('src');
    let currentNumber = srcImage.split('-')
    currentNumber = currentNumber[2].split('.');
    currentNumber = Number(currentNumber[0]);
    let newImgSrc = `../images/image-product-1.jpg`

    if (mode === 'increment') {
        if (!(currentNumber >= 4)) {
            currentNumber++;
        } else {
            currentNumber = 1;
        }
    }
    if (mode === 'decrement') {
        if (currentNumber > 1) {
            currentNumber--;
        } else {
            currentNumber = 4;
        }
    }
    newImgSrc = `../images/image-product-${currentNumber}.jpg`
    priImgModal.setAttribute('src', newImgSrc)
}

desktopRightButton.addEventListener("click", () => {
    changeImage('increment');
})
desktopLeftButton.addEventListener("click", () => {
    changeImage('decrement');
})

// Functionality to put preview images as the principal.

const secondaryImages = document.querySelectorAll(".secondary-img");
const priImgModal = document.getElementById('pri-img-modal');

secondaryImages.forEach(button => {
    button.addEventListener("click", () => {
        let src = button.firstChild.getAttribute("src");
        src = src.split('-thumbnail');
        const newSrc = src[0] + src[1];
        primaryImageD.setAttribute("src", newSrc)
        priImgModal.setAttribute("src", newSrc)
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

    // Functionality to add items to cart in desktop version

    const dEmptyCart = document.getElementById('dEmptyCart');
    const dItemCartContainer = document.getElementById('dItemCartContainer');
    const dCartQuantity = document.getElementById('dCartQuantity')
    const dCartTotal = document.getElementById('dCartTotal')

    if (inputNumber.value != 0) {
        notificationCart.classList.replace("onClose", "onOpenFlex");
        dItemCartContainer.classList.replace("onClose", "onOpenFlex");
        dEmptyCart.classList.replace("onOpenFlex", "onClose");
        dCartQuantity.textContent = inputNumber.value;
        let total = 125 * inputNumber.value;
        dCartTotal.textContent = `$${total}`
    }else{
        notificationCart.classList.replace("onOpenFlex", "onClose");
        dItemCartContainer.classList.replace("onOpenFlex", "onClose");
        dEmptyCart.classList.replace("onClose", "onOpenFlex");
    }
    
})



