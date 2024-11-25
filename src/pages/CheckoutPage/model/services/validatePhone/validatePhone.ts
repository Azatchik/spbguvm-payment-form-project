import { CheckoutPageValidateErrorTypes } from '../../types/CheckoutPageValidateErrorTypes';

export const validatePhone = (phone: string) => {
    if (!phone) {
        return [CheckoutPageValidateErrorTypes.EMPTY_PHONE_ERROR];
    }

    const errors: CheckoutPageValidateErrorTypes[] = [];

    const isValidPhone = /^\d+$/.test(phone);
    const isCurrentPhoneLength = phone.length >= 7 && phone.length <= 15;
    if (!isValidPhone || !isCurrentPhoneLength) {
        errors.push(CheckoutPageValidateErrorTypes.FORMAT_PHONE_ERROR);
    }

    return errors;
};
