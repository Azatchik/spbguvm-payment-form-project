import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    memo, useCallback, useMemo, useState,
} from 'react';
import { PaymentRadio, PaymentRadioItems } from 'shared/ui/PaymentRadio/PaymentRadio';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import cls from './PaymentDelivery.module.scss';

interface PaymentDeliveryProps {
    className?: string;
}

export const PaymentDelivery = memo((props: PaymentDeliveryProps) => {
    const { className } = props;
    const { t } = useTranslation('checkoutPage');
    const [deliveryRadioValue, setDeliveryRadioValue] = useState<string>('selfPickup');

    const deliveryRadioItems = useMemo<PaymentRadioItems>(() => {
        const items: PaymentRadioItems = [
            {
                value: 'selfPickup',
                text: `${t('Самовывоз')}: 196084, г.Санкт-Петербург, ул.Черниговская, д. 5`,
                indicator: (
                    <Text
                        theme={TextTheme.BLUE}
                        size={TextSize.BODY_DESKTOP}
                    >
                        {t('Бесплатно')}
                    </Text>
                ),
            },
            {
                value: 'delivery',
                text: t('Доставка по адресу'),
                indicator: (
                    <Text
                        theme={TextTheme.BLUE}
                        size={TextSize.H4_MEDIUM_DESKTOP}
                    >
                        0 р.
                    </Text>
                ),
            },
        ];

        return items;
    }, [t]);

    const onRadioItemClick = useCallback((value: string) => {
        setDeliveryRadioValue(value);
    }, []);

    return (
        <VStack
            className={classNames(cls.PaymentDelivery, {}, [className])}
            gap="30"
            maxW
        >
            <Text
                theme={TextTheme.BLUE}
                size={TextSize.H4_MEDIUM_DESKTOP}
            >
                {t('Доставка')}
            </Text>
            <PaymentRadio
                items={deliveryRadioItems}
                selectedValue={deliveryRadioValue}
                onClickItem={onRadioItemClick}
            />
        </VStack>
    );
});
