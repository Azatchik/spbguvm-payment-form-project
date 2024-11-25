import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { TextSize, TextTheme, Text } from 'shared/ui/Text/Text';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { PaymentContacts } from '../PaymentContacts/PaymentContacts';
import { PaymentAddress } from '../PaymentAddress/PaymentAddress';
import { PaymentDelivery } from '../PaymentDelivery/PaymentDelivery';
import { PaymentMethods } from '../PaymentMethods/PaymentMethods';
import cls from './PaymentInfo.module.scss';

interface PaymentInfoProps {
    className?: string;
}

export const PaymentInfo = memo((props: PaymentInfoProps) => {
    const { className } = props;
    const { t } = useTranslation('checkoutPage');
    const [conditionsAccepted, setConditionsAccepted] = useState<boolean>(false);

    const onConditionsCheckboxClick = useCallback(() => {
        setConditionsAccepted((prevState) => !prevState);
    }, []);

    return (
        <VStack
            className={classNames(cls.PaymentInfo, {}, [className])}
            gap="80"
        >
            <PaymentContacts />
            <PaymentAddress />
            <PaymentDelivery />
            <PaymentMethods />
            <HStack gap="8">
                <Checkbox
                    isSelected={conditionsAccepted}
                    onClick={onConditionsCheckboxClick}
                />
                <Text
                    theme={TextTheme.GREY}
                    size={TextSize.BODY_S_DESKTOP}
                    className={cls.textConditions}
                >
                    {t('Я даю согласие на использование моих персональных данных в '
                        + 'соответствии с условиями политики конфиденциальности')}
                </Text>
            </HStack>
        </VStack>
    );
});
