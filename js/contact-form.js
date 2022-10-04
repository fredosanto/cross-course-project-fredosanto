const contactForm = document.querySelector("#contact_form");
const errorMessage = document.querySelector(".form-error");
const successMessage = document.querySelector(".form-success")

const name = document.querySelector("#name");
const nameError = document.querySelector(".name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
const emailRegEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

const phoneNumber = document.querySelector("#phone");
const phoneNumberError = document.querySelector(".phone-error");
const phoneRegEx = /^\d+$/;

const comment = document.querySelector("#comment");
const commentError = document.querySelector(".comment-error");



function submitContactForm() {
    event.preventDefault();

    if (validateInputLength(name.value, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateInputLength(email.value, emailValidation(email.value)) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (validateInputLength(phoneNumber.value, phoneValidation(phoneNumber.value)) === true) {
        phoneNumberError.style.display = "none";
    } else {
        phoneNumberError.style.display = "block";
    }

    if (commentValidation(comment.value, 249) === true) {
        commentError.style.display = "none";
    } else {
        commentError.style.display = "block";
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

contactForm.addEventListener("submit", submitContactForm);

function emailValidation(email) {
    const checkEmailFormat = emailRegEx.test(email);
    return checkEmailFormat;
}

function phoneValidation(phoneNumber) {
    const checkPhoneFormat = phoneRegEx.test(phoneNumber);
    return checkPhoneFormat;
}

function commentValidation(value, requiredLength) {
    if ((value.trim().length < requiredLength) && (value.trim().length) > 49) {
        return true;
    } else {
        return false;
    }
}

function validateInputLength(value, requiredLength) {
    if (value.trim().length > requiredLength) {
        return true;
    } else {
        return false;
    }
}
