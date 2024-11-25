import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './FooterMenu.module.scss';

interface FooterMenuProps {
    className?: string;
}

export const FooterMenu = memo((props: FooterMenuProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.FooterMenu, {}, [className])}>
            FooterMenu
        </div>
    );
});
