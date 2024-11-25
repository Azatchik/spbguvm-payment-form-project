import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './FooterContacts.module.scss';

interface FooterContactsProps {
    className?: string;
}

export const FooterContacts = memo((props: FooterContactsProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.FooterContacts, {}, [className])}>
            FooterContacts
        </div>
    );
});
