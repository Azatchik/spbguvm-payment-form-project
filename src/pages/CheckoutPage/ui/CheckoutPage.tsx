import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { Page } from 'widgets/Page';
import { Input } from 'shared/ui/Input/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArrowPosition, Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { CirclesLoader } from 'shared/ui/CirclesLoader/CirclesLoader';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import masterCardIcon from 'shared/assets/icons/mastercard-logo.svg';
import mirIcon from 'shared/assets/icons/mir-logo.svg';
import visaIcon from 'shared/assets/icons/visa-logo.svg';
import sberbankIcon from 'shared/assets/icons/sberbank-logo.svg';
import { CheckoutPageValidateErrorTypes } from '../model/types/CheckoutPageValidateErrorTypes';
import { fetchCreateOrder } from '../model/services/fetchOrder/fetchCreateOrder';
import {
    getCheckoutPageDescription,
    getCheckoutPageEmail,
    getCheckoutPageError,
    getCheckoutPageFormUrl,
    getCheckoutPageFullName,
    getCheckoutPageIsLoading,
    getCheckoutPageNamePay,
    getCheckoutPagePhone,
    getCheckoutPageSum, getCheckoutPageValidationErrors,
} from '../model/selectors/checkoutPageSelectors';
import { checkoutPageActions } from '../model/slices/checkoutPageSlice';
import cls from './CheckoutPage.module.scss';

interface CheckoutPageProps {
    className?: string;
}

const CheckoutPage = memo((props: CheckoutPageProps) => {
    const { className } = props;
    const { t } = useTranslation('checkoutPage');
    const dispatch = useAppDispatch();
    const namePay = useSelector(getCheckoutPageNamePay);
    const fullName = useSelector(getCheckoutPageFullName);
    const phone = useSelector(getCheckoutPagePhone);
    const email = useSelector(getCheckoutPageEmail);
    const description = useSelector(getCheckoutPageDescription);
    const sum = useSelector(getCheckoutPageSum);
    const error = useSelector(getCheckoutPageError);
    const validationErrors = useSelector(getCheckoutPageValidationErrors);
    const isLoading = useSelector(getCheckoutPageIsLoading);
    const formUrl = useSelector(getCheckoutPageFormUrl);

    const validateErrorTranslates: Partial<Record<CheckoutPageValidateErrorTypes, string>> = {
        [CheckoutPageValidateErrorTypes.FORMAT_NAME_PAY_ERROR]: 'Неверный код КБК',
        [CheckoutPageValidateErrorTypes.FORMAT_FULL_NAME_ERROR]: 'Недопустимое ФИО',
        [CheckoutPageValidateErrorTypes.FORMAT_PHONE_ERROR]: 'Недопустимый номер телефона',
        [CheckoutPageValidateErrorTypes.FORMAT_EMAIL_ERROR]: 'Недопустимый электронный адрес почты',
        [CheckoutPageValidateErrorTypes.FORMAT_DESCRIPTION_ERROR]: 'Недопустимое наименование',
        [CheckoutPageValidateErrorTypes.FORMAT_SUM_ERROR]: 'Недопустимая сумма',
    };

    const onChangeNamePay = useCallback((value: string) => {
        const newNamePay = value.replace(/[^\d]/g, '').trim();
        if (newNamePay.length <= 20) {
            dispatch(checkoutPageActions.setNamePay(newNamePay));
        }
    }, [dispatch]);

    const onChangeFullName = useCallback((value: string) => {
        if (!value.startsWith(' ') && !value.endsWith('  ')) {
            const newFullName = value.replace(/\d/g, '');
            if (newFullName.length <= 128) {
                dispatch(checkoutPageActions.setFullName(newFullName));
            }
        }
    }, [dispatch]);

    const onChangePhone = useCallback((value: string) => {
        const newPhone = value.replace(/[^\d]/g, '').trim();
        if (newPhone.length <= 15) {
            dispatch(checkoutPageActions.setPhone(newPhone));
        }
    }, [dispatch]);

    const onChangeEmail = useCallback((value: string) => {
        const newEmail = value.replace(/[а-яА-ЯёЁ]/, '').trim();
        if (newEmail.length <= 128) {
            dispatch(checkoutPageActions.setEmail(newEmail));
        }
    }, [dispatch]);

    const onChangeDescriptionPay = useCallback((value: string) => {
        if (!value.startsWith(' ') && !value.endsWith('  ')) {
            if (value.length <= 128) {
                dispatch(checkoutPageActions.setDescription(value));
            }
        }
    }, [dispatch]);

    const onChangeSum = useCallback((value: string) => {
        if (!value.startsWith('0')) {
            const newSum = value.replace(/[^\d]/g, '').trim();
            if (newSum.length <= 10) {
                dispatch(checkoutPageActions.setSum(newSum));
            }
        }
    }, [dispatch]);

    const fetchCreateOrderFunc = useCallback(() => {
        dispatch(fetchCreateOrder());
    }, [dispatch]);

    const debouncedFetchCreateOrder = useThrottle(fetchCreateOrderFunc, 2000);

    const onPayClick = useCallback(() => {
        debouncedFetchCreateOrder();
    }, [debouncedFetchCreateOrder]);

    useEffect(() => {
        if (formUrl) {
            window.location.assign(formUrl);
        }
    }, [formUrl]);

    if (formUrl) {
        return (
            <HStack
                maxW
                maxH
                justify="center"
                className={cls.redirection}
            >
                <Text theme={TextTheme.BLACK} size={TextSize.H4_DESKTOP}>
                    Подготовка...
                </Text>
            </HStack>
        );
    }

    if (isLoading) {
        return (
            <HStack
                maxW
                maxH
                justify="center"
                style={{
                    height: '100vh',
                }}
            >
                <CirclesLoader />
            </HStack>
        );
    }

    return (
        <Page className={classNames(cls.CheckoutPage, {}, [className])}>
            {/* <Cover */}
            {/*     headTextTheme={TextTheme.BLUE_LIGHT2} */}
            {/*     greyText={t('Корзина')} */}
            {/* > */}
            {/*     {t('ОФОРМЛЕНИЕ ЗАКАЗА')} */}
            {/* </Cover> */}
            {/* <ContentWrapper> */}
            {/*     <Payment /> */}
            {/* </ContentWrapper> */}
            <VStack
                maxW
                maxH
                align="center"
                justify="center"
            >
                <VStack
                    gap="10"
                    align="center"
                >
                    <Text
                        theme={TextTheme.GREY}
                        size={TextSize.BODY_S_DESKTOP}
                    >
                        Для оплаты введите ваши данные и выберите удобный для Вас способ оплаты:
                    </Text>
                    <VStack>
                        <Text
                            theme={TextTheme.BLACK}
                            size={TextSize.BODY_S_DESKTOP}
                        >
                            Код КБК:
                        </Text>
                        <Input
                            placeholder="00000000000000000130"
                            value={namePay}
                            onChange={onChangeNamePay}
                            isRequired
                            isEmptyError={validationErrors.includes(CheckoutPageValidateErrorTypes.EMPTY_NAME_PAY_ERROR)}
                        />
                    </VStack>
                    <VStack>
                        <Text
                            theme={TextTheme.BLACK}
                            size={TextSize.BODY_S_DESKTOP}
                        >
                            ФИО:
                        </Text>
                        <Input
                            placeholder="Иванов Иван Иванович"
                            value={fullName}
                            onChange={onChangeFullName}
                            isRequired
                            isEmptyError={validationErrors.includes(CheckoutPageValidateErrorTypes.EMPTY_FULL_NAME_ERROR)}
                        />
                    </VStack>
                    <VStack>
                        <Text
                            theme={TextTheme.BLACK}
                            size={TextSize.BODY_S_DESKTOP}
                        >
                            Номер телефона:
                        </Text>
                        <Input
                            placeholder="+79102123123"
                            value={phone ? `+${phone}` : ''}
                            onChange={onChangePhone}
                            isRequired
                            isEmptyError={validationErrors.includes(CheckoutPageValidateErrorTypes.EMPTY_PHONE_ERROR)}
                        />
                    </VStack>
                    <VStack>
                        <Text
                            theme={TextTheme.BLACK}
                            size={TextSize.BODY_S_DESKTOP}
                        >
                            Email:
                        </Text>
                        <Input
                            placeholder="myname@mail.ru"
                            value={email}
                            onChange={onChangeEmail}
                            isRequired
                            isEmptyError={validationErrors.includes(CheckoutPageValidateErrorTypes.EMPTY_EMAIL_ERROR)}
                        />
                    </VStack>
                    <VStack>
                        <Text
                            theme={TextTheme.BLACK}
                            size={TextSize.BODY_S_DESKTOP}
                        >
                            Наименование услуги:
                        </Text>
                        <Input
                            placeholder="Оплата за..... номер договора..... дату договора......."
                            value={description}
                            onChange={onChangeDescriptionPay}
                            isRequired
                            isEmptyError={validationErrors.includes(CheckoutPageValidateErrorTypes.EMPTY_DESCRIPTION_ERROR)}
                        />
                    </VStack>
                    <VStack>
                        <Text
                            theme={TextTheme.BLACK}
                            size={TextSize.BODY_S_DESKTOP}
                        >
                            Сумма:
                        </Text>
                        <Input
                            placeholder="990"
                            value={sum}
                            onChange={onChangeSum}
                            isRequired
                            isEmptyError={validationErrors.includes(CheckoutPageValidateErrorTypes.EMPTY_SUM_ERROR)}
                        />
                    </VStack>
                    {!!validationErrors.length && Object.entries(validateErrorTranslates)
                        .filter(([err, text]) => validationErrors.includes(err as CheckoutPageValidateErrorTypes))
                        .map(([err, text]) => (
                            <Text
                                key={err}
                                theme={TextTheme.RED}
                                size={TextSize.BODY_S_DESKTOP}
                            >
                                {text}
                            </Text>
                        ))}
                    {!!error && (
                        <Text
                            theme={TextTheme.RED}
                            size={TextSize.BODY_S_DESKTOP}
                        >
                            {`Ошибка с сервера: ${error}`}
                        </Text>
                    )}
                    <Button
                        theme={ButtonTheme.PRIMARY_BLUE_FILL}
                        onClick={onPayClick}
                        arrowPosition={ArrowPosition.ARROW_RIGHT}
                    >
                        Оплатить
                    </Button>
                    <VStack
                        maxW
                        align="center"
                    >
                        <HStack
                            maxW
                            gap="30"
                            justify="center"
                        >
                            <Icon
                                Svg={visaIcon}
                                theme={IconTheme.CLEAN}
                            />
                            <Icon
                                Svg={masterCardIcon}
                                theme={IconTheme.CLEAN}
                            />
                            <Icon
                                Svg={mirIcon}
                                theme={IconTheme.CLEAN}
                            />
                        </HStack>
                        <Icon
                            Svg={sberbankIcon}
                            theme={IconTheme.CLEAN}
                        />
                    </VStack>
                </VStack>
            </VStack>
        </Page>
    );
});

export default CheckoutPage;
