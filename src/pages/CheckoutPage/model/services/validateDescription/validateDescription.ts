import { CheckoutPageValidateErrorTypes } from '../../types/CheckoutPageValidateErrorTypes';

export const validateDescription = (description: string) => {
    if (!description) {
        return [CheckoutPageValidateErrorTypes.EMPTY_DESCRIPTION_ERROR];
    }

    const errors: CheckoutPageValidateErrorTypes[] = [];

    const isCurrentDescriptionLength = description.length >= 9 && description.length <= 128;
    if (!isCurrentDescriptionLength) {
        errors.push(CheckoutPageValidateErrorTypes.FORMAT_DESCRIPTION_ERROR);
    }

    return errors;
};
