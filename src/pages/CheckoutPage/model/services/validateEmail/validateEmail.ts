import { CheckoutPageValidateErrorTypes } from '../../types/CheckoutPageValidateErrorTypes';

export const validateEmail = (email: string) => {
    if (!email) {
        return [CheckoutPageValidateErrorTypes.EMPTY_EMAIL_ERROR];
    }

    const errors: CheckoutPageValidateErrorTypes[] = [];

    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const isCurrentEmailLength = email.length >= 3 && email.length <= 128;
    if (!isValidEmail || !isCurrentEmailLength) {
        errors.push(CheckoutPageValidateErrorTypes.FORMAT_EMAIL_ERROR);
    }

    return errors;
};
