import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './FooterContact.module.scss';

interface FooterContactProps {
    className?: string;
}

export const FooterContact = memo((props: FooterContactProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.FooterContact, {}, [className])}>
            FooterContact
        </div>
    );
});
