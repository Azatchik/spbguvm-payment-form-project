import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { validateNamePay } from '../validateNamePay/validateNamePay';
import { validateFullName } from '../validateFullName/validateFullName';
import { validatePhone } from '../validatePhone/validatePhone';
import { validateEmail } from '../validateEmail/validateEmail';
import { validateDescription } from '../validateDescription/validateDescription';
import { validateSum } from '../validateSum/validateSum';
import { CheckoutPageValidateErrorTypes } from '../../types/CheckoutPageValidateErrorTypes';
import {
    getCheckoutPageDescription,
    getCheckoutPageEmail,
    getCheckoutPageFullName,
    getCheckoutPageNamePay,
    getCheckoutPagePhone,
    getCheckoutPageSum,
} from '../../selectors/checkoutPageSelectors';

interface FetchOrderReturnData {
    orderId: string;
    formUrl: string;
}

export const fetchCreateOrder = createAsyncThunk<
    FetchOrderReturnData,
    void,
    ThunkConfig<string | CheckoutPageValidateErrorTypes[]>
>(
    'pages/checkoutPage/fetchCreateOrder',
    async (_, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkApi;
        const namePay = getCheckoutPageNamePay(getState());
        const fullName = getCheckoutPageFullName(getState());
        const phone = getCheckoutPagePhone(getState());
        const email = getCheckoutPageEmail(getState());
        const description = getCheckoutPageDescription(getState());
        const sum = getCheckoutPageSum(getState());

        const errors: CheckoutPageValidateErrorTypes[] = [
            ...validateNamePay(namePay),
            ...validateFullName(fullName),
            ...validatePhone(phone),
            ...validateEmail(email),
            ...validateDescription(description),
            ...validateSum(sum),
        ];

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.post<FetchOrderReturnData>('/api/payment/create-order', {
                namePay,
                fullName,
                phone,
                email,
                description,
                sum,
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError instanceof Error && axiosError.response) {
                return rejectWithValue(axiosError.response.data.message);
            }
            // Обработка других типов ошибок
            return rejectWithValue('An unexpected error occurred');
        }
    },
);
