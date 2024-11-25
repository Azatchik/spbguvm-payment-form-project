import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './PaymentCart.module.scss';

interface PaymentCartProps {
    className?: string;
}

export const PaymentCart = memo((props: PaymentCartProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.PaymentCart, {}, [className])}>
            <VStack
                className={cls.productsWrapper}
                gap="10"
                maxW
            >
                <div style={{
                    height: '358px',
                    width: '720px',
                    background: 'red',
                }}
                >
                    product
                </div>
                <div style={{
                    height: '358px',
                    width: '720px',
                    background: 'red',
                }}
                >
                    product
                </div>
            </VStack>
        </div>
    );
});
