import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './PaymentTotalBlock.module.scss';

interface PaymentTotalBlockProps {
    className?: string;
}

export const PaymentTotalBlock = memo((props: PaymentTotalBlockProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.PaymentTotalBlock, {}, [className])}>
            PaymentTotalBlock
        </div>
    );
});
