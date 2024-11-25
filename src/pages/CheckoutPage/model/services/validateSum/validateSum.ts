import { CheckoutPageValidateErrorTypes } from '../../types/CheckoutPageValidateErrorTypes';

export const validateSum = (sum: string) => {
    if (!sum) {
        return [CheckoutPageValidateErrorTypes.EMPTY_SUM_ERROR];
    }

    const errors: CheckoutPageValidateErrorTypes[] = [];

    const isValidSum = /^\d+$/.test(sum) && Number(sum) >= 1;
    const isCurrentSumLength = sum.length >= 1 && sum.length <= 10;
    if (!isValidSum || !isCurrentSumLength) {
        errors.push(CheckoutPageValidateErrorTypes.FORMAT_SUM_ERROR);
    }

    return errors;
};
