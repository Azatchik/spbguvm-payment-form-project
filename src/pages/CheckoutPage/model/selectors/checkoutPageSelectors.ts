import { StateSchema } from 'app/providers/StoreProvider';

export const getCheckoutPageIsLoading = (state: StateSchema) => state.checkoutPage?.isLoading || false;
export const getCheckoutPageError = (state: StateSchema) => state.checkoutPage?.error;
export const getCheckoutPageValidationErrors = (state: StateSchema) => state.checkoutPage?.validationErrors;
export const getCheckoutPageNamePay = (state: StateSchema) => state.checkoutPage?.namePay || '';
export const getCheckoutPageFullName = (state: StateSchema) => state.checkoutPage?.fullName || '';
export const getCheckoutPagePhone = (state: StateSchema) => state.checkoutPage?.phone || '';
export const getCheckoutPageEmail = (state: StateSchema) => state.checkoutPage?.email || '';
export const getCheckoutPageDescription = (state: StateSchema) => state.checkoutPage?.description || '';
export const getCheckoutPageSum = (state: StateSchema) => state.checkoutPage?.sum || '';
export const getCheckoutPageOrderId = (state: StateSchema) => state.checkoutPage?.orderId || '';
export const getCheckoutPageFormUrl = (state: StateSchema) => state.checkoutPage?.formUrl || '';
