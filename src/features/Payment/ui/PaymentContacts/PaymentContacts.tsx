import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { TextSize, TextTheme, Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import cls from './PaymentContacts.module.scss';

interface PaymentContactsProps {
    className?: string;
}

export const PaymentContacts = memo((props: PaymentContactsProps) => {
    const { className } = props;
    const { t } = useTranslation('checkoutPage');
    const [name, setName] = useState<string>('');
    const [secondName, setSecondName] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const onChangeName = useCallback((value: string) => {
        setName(value);
    }, []);

    const onChangeSecondName = useCallback((value: string) => {
        setSecondName(value);
    }, []);

    const onChangeNumber = useCallback((value: string) => {
        setNumber(value);
    }, []);

    const onChangeEmail = useCallback((value: string) => {
        setEmail(value);
    }, []);

    return (
        <VStack
            className={classNames(cls.PaymentContacts, {}, [className])}
            gap="30"
            maxW
        >
            <Text
                theme={TextTheme.BLUE}
                size={TextSize.H4_MEDIUM_DESKTOP}
            >
                {t('Контактная информация')}
            </Text>
            <VStack gap="8">
                <HStack
                    gap="8"
                    align="start"
                >
                    <Input
                        placeholder={t('Имя')}
                        value={name}
                        onChange={onChangeName}
                        isRequired
                        isEmptyError={false}
                    />
                    <Input
                        placeholder={t('Фамилия')}
                        value={secondName}
                        onChange={onChangeSecondName}
                    />
                </HStack>
                <HStack
                    gap="8"
                    align="start"
                >
                    <Input
                        placeholder="+7 (999) 999-99-99"
                        value={number}
                        onChange={onChangeNumber}
                        isNumber
                        isRequired
                        isEmptyError={false}
                    />
                    <Input
                        placeholder={t('E-mail')}
                        value={email}
                        onChange={onChangeEmail}
                    />
                </HStack>
            </VStack>
        </VStack>
    );
});
