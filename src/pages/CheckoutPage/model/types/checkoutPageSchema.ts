import { CheckoutPageValidateErrorTypes } from './CheckoutPageValidateErrorTypes';

export interface CheckoutPageSchema {
    isLoading: boolean;
    error?: string;
    validationErrors: CheckoutPageValidateErrorTypes[];
    namePay: string;
    fullName: string;
    phone: string;
    email: string;
    description: string;
    sum: string;

    orderId: string;
    formUrl: string;
}
