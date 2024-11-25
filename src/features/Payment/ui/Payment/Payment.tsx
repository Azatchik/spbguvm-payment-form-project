import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { PaymentInfo } from '../PaymentInfo/PaymentInfo';
import cls from './Payment.module.scss';
import { PaymentTotalBlock } from '../PaymentTotalBlock/PaymentTotalBlock';
import { PaymentCart } from '../PaymentCart/PaymentCart';

interface PaymentProps {
    className?: string;
}

export const Payment = memo((props: PaymentProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack className={classNames(cls.Payment, {}, [className])}>
            <HStack
                className={cls.generalInfoWrapper}
                align="start"
                justify="between"
                maxW
            >
                <PaymentInfo />
                <PaymentCart />
            </HStack>
            <PaymentTotalBlock />
        </VStack>
    );
});
