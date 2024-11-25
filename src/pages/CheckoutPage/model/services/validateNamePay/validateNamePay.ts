import { CheckoutPageValidateErrorTypes } from '../../types/CheckoutPageValidateErrorTypes';

export const validateNamePay = (namePay: string) => {
    if (!namePay) {
        return [CheckoutPageValidateErrorTypes.EMPTY_NAME_PAY_ERROR];
    }

    const errors: CheckoutPageValidateErrorTypes[] = [];

    const correctNamesPay = ['00000000000000000130', '00000000000000000150'];
    const isValidNamePay = correctNamesPay.includes(namePay);
    if (!isValidNamePay) {
        errors.push(CheckoutPageValidateErrorTypes.FORMAT_NAME_PAY_ERROR);
    }

    return errors;
};
