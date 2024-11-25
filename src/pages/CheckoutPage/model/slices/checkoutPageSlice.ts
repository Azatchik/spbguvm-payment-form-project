import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCreateOrder } from '../services/fetchOrder/fetchCreateOrder';
import { CheckoutPageSchema } from '../types/checkoutPageSchema';

const initialState: CheckoutPageSchema = {
    isLoading: false,
    error: undefined,
    validationErrors: [],
    namePay: '',
    fullName: '',
    phone: '',
    email: '',
    description: '',
    sum: '',

    orderId: '',
    formUrl: '',
};

const checkoutPageSlice = createSlice({
    name: 'checkoutPageSlice',
    initialState,
    reducers: {
        setNamePay: (state, action: PayloadAction<string>) => {
            state.namePay = action.payload;
        },
        setFullName: (state, action: PayloadAction<string>) => {
            state.fullName = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        setSum: (state, action: PayloadAction<string>) => {
            state.sum = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCreateOrder.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCreateOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.formUrl = action.payload.formUrl;
                state.orderId = action.payload.orderId;
            })
            .addCase(fetchCreateOrder.rejected, (state, action) => {
                if (typeof action.payload === 'string') {
                    state.error = action.payload;
                }
                if (typeof action.payload === 'object') {
                    state.validationErrors = action.payload;
                }
                state.isLoading = false;
            });
    },
});

export const {
    reducer: checkoutPageReducer,
    actions: checkoutPageActions,
} = checkoutPageSlice;
