import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './FooterNavigation.module.scss';

interface FooterNavigationProps {
    className?: string;
}

export const FooterNavigation = memo((props: FooterNavigationProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.FooterNavigation, {}, [className])}>
            FooterNavigation
        </div>
    );
});
