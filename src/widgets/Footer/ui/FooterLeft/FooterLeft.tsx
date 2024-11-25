import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './FooterLeft.module.scss';

interface FooterLeftProps {
    className?: string;
}

export const FooterLeft = memo((props: FooterLeftProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.FooterLeft, {}, [className])}>
            FooterLeft
        </div>
    );
});
