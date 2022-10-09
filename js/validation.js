function emailValidation(email) {
    const emailRegEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const checkEmailFormat = emailRegEx.test(email);
    return checkEmailFormat;
}

function phoneValidation(phoneNumber) {
    const phoneRegEx = /^\d+$/;
    const checkPhoneFormat = phoneRegEx.test(phoneNumber);
    return checkPhoneFormat;
}

function checkoutPhoneValidation(phoneCheckout) {
    const phoneRegEx = /^\d+$/;
    const checkPhoneFormat = phoneRegEx.test(phoneCheckout);
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

export { emailValidation, phoneValidation, checkoutPhoneValidation, commentValidation, validateInputLength};