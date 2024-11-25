import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import { Input } from 'shared/ui/Input/Input';
import cls from './PaymentAddress.module.scss';

interface PaymentAddressProps {
    className?: string;
}

export const PaymentAddress = memo((props: PaymentAddressProps) => {
    const { className } = props;
    const { t } = useTranslation('checkoutPage');
    const [country, setCountry] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [index, setIndex] = useState<string>('');

    const onChangeCountry = useCallback((value: string) => {
        setCountry(value);
    }, []);

    const onChangeCity = useCallback((value: string) => {
        setCity(value);
    }, []);

    const onChangeAddress = useCallback((value: string) => {
        setAddress(value);
    }, []);

    const onChangeIndex = useCallback((value: string) => {
        setIndex(value);
    }, []);

    return (
        <VStack
            className={classNames(cls.PaymentAddress, {}, [className])}
            gap="30"
            maxW
        >
            <Text
                theme={TextTheme.BLUE}
                size={TextSize.H4_MEDIUM_DESKTOP}
            >
                {t('Адрес')}
            </Text>
            <VStack gap="8">
                <HStack
                    gap="8"
                    align="start"
                >
                    <Input
                        placeholder={t('Страна')}
                        value={country}
                        onChange={onChangeCountry}
                    />
                    <Input
                        placeholder={t('Город')}
                        value={city}
                        onChange={onChangeCity}
                    />
                </HStack>
                <HStack
                    gap="8"
                    align="start"
                >
                    <Input
                        placeholder={t('Адрес')}
                        value={address}
                        onChange={onChangeAddress}
                        isRequired
                        isEmptyError={false}
                    />
                    <Input
                        placeholder={t('Индекс')}
                        value={index}
                        onChange={onChangeIndex}
                        isRequired
                        isEmptyError={false}
                    />
                </HStack>
            </VStack>
        </VStack>
    );
});
