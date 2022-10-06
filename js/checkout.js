import { validateInputLength } from './validation.js';
import { emailValidation } from './validation.js';
import { phoneValidation } from './validation.js';


const checkoutForm = document.querySelector("#checkout_form")
const checkoutSuccess = document.querySelector(".checkout-success");
const checkoutError = document.querySelector(".checkout-error");


const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector(".first-name_error");

const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector(".last-name_error");

const emailCheckout = document.querySelector("#checkout-email");
const emailCheckoutError = document.querySelector(".checkout-email_error");
// const emailRegEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

const phoneCheckout = document.querySelector("#checkout-phone");
const phoneCheckoutError = document.querySelector(".checkout-phone_error");
// const phoneRegEx = /^\d+$/;

const address = document.querySelector("#address");
const addressError = document.querySelector(".address-error");

const zipCode = document.querySelector("#zip-code");
const zipCodeError = document.querySelector(".zip-error");

const cardNumber = document.querySelector("#card-number");
const cardNumberError = document.querySelector(".card-number_error");

const cvcCode = document.querySelector("#cvc");
const cvcCodeError = document.querySelector(".cvc-error");

const cardHolder = document.querySelector("#card-name");
const cardHolderError = document.querySelector(".card-name_error");


function submitCheckout() {
    event.preventDefault()

    if (validateInputLength(firstName.value, 1) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (validateInputLength(lastName.value, 1) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }
    
    if (validateInputLength(emailCheckout.value, emailValidation(emailCheckout.value)) === true) {
        emailCheckoutError.style.display = "none";
    } else {
        emailCheckoutError.style.display = "block";
    }
    
    if (phoneValidation(phoneCheckout.value, 1) === true) {
        phoneCheckoutError.style.display = "none";
    } else {
        phoneCheckoutError.style.display = "block";
    }
    
    if (validateInputLength(address.value, 1) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
    
    if (validateInputLength(zipCode.value, 1) === true) {
        zipCodeError.style.display = "none";
    } else {
        zipCodeError.style.display = "block";
    }
    
    if (validateInputLength(cardNumber.value, 1) === true) {
        cardNumberError.style.display = "none";
    } else {
        cardNumberError.style.display = "block";
    }
    
    if (validateInputLength(cvcCode.value, 1) === true) {
        cvcCodeError.style.display = "none";
    } else {
        cvcCodeError.style.display = "block";
    }
    
    if (validateInputLength(cardHolder.value, 1) === true) {
        cardHolderError.style.display = "none";
    } else {
        cardHolderError.style.display = "block";
    }


    if (validateInputLength(name.value, 1) && 
    validateInputLength(email.value, emailValidation(email.value)) && 
    validateInputLength(phoneNumber.value, phoneValidation(phoneNumber.value)) && 
    commentValidation(comment.value, 249)) {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    }




    console.log(event);
}

checkoutForm.addEventListener("submit", submitCheckout);
