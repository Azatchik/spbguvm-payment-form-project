import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    memo, useCallback, useMemo, useState,
} from 'react';
import { PaymentRadio, PaymentRadioItems } from 'shared/ui/PaymentRadio/PaymentRadio';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import visaMethodIcon from 'shared/assets/icons/visa-method.svg';
import mastercardMethodIcon from 'shared/assets/icons/mastercard-method.svg';
import cls from './PaymentMethods.module.scss';

interface PaymentMethodsProps {
    className?: string;
}

export const PaymentMethods = memo((props: PaymentMethodsProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [methodsRadioValue, setMethodsRadioValue] = useState<string>('bankCard');

    const methodsRadioItems = useMemo<PaymentRadioItems>(() => {
        const items: PaymentRadioItems = [
            {
                value: 'bankCard',
                text: t('Банковская карта'),
                indicator: (
                    <HStack
                        gap="6"
                    >
                        <Icon
                            Svg={visaMethodIcon}
                            theme={IconTheme.CLEAN}
                        />
                        <Icon
                            Svg={mastercardMethodIcon}
                            theme={IconTheme.CLEAN}
                        />
                    </HStack>
                ),
            },
            {
                value: 'uponReceipt',
                text: t('При получении'),
                indicator: undefined,
            },
        ];

        return items;
    }, [t]);

    const onRadioItemClick = useCallback((value: string) => {
        setMethodsRadioValue(value);
    }, []);

    return (
        <VStack
            className={classNames(cls.PaymentMethods, {}, [className])}
            gap="30"
            maxW
        >
            <VStack
                gap="10"
            >
                <Text
                    theme={TextTheme.BLUE}
                    size={TextSize.H4_MEDIUM_DESKTOP}
                >
                    {t('Способ оплаты')}
                </Text>
                <Text
                    theme={TextTheme.GREY}
                    size={TextSize.BODY_S_DESKTOP}
                >
                    {t('Все транзакции защищены')}
                </Text>
            </VStack>
            <PaymentRadio
                items={methodsRadioItems}
                selectedValue={methodsRadioValue}
                onClickItem={onRadioItemClick}
            />
        </VStack>
    );
});
