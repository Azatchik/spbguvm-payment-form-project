import { CheckoutPageValidateErrorTypes } from '../../types/CheckoutPageValidateErrorTypes';

export const validateFullName = (fullName: string) => {
    if (!fullName) {
        return [CheckoutPageValidateErrorTypes.EMPTY_FULL_NAME_ERROR];
    }

    const errors: CheckoutPageValidateErrorTypes[] = [];

    const isValidFullName = /^[\p{L}\s]+$/u.test(fullName);
    const isCurrentFullNameLength = fullName.length > 6 && fullName.length <= 128;
    if (!isValidFullName || !isCurrentFullNameLength) {
        errors.push(CheckoutPageValidateErrorTypes.FORMAT_FULL_NAME_ERROR);
    }

    return errors;
};
