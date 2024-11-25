import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ContentWrapper } from 'shared/ui/ContentWrapper/ContentWrapper';
import { FooterNavigation } from '../FooterNavigation/FooterNavigation';
import { FooterMenu } from '../FooterMenu/FooterMenu';
import { FooterContacts } from '../FooterContacts/FooterContacts';
import cls from './Footer.module.scss';
import { FooterLeft } from '../FooterLeft/FooterLeft';

interface FooterProps {
    className?: string;
}

export const Footer = memo((props: FooterProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Footer, {}, [className])}>
            <ContentWrapper>
                <FooterLeft />
                <FooterNavigation />
                <FooterMenu />
                <FooterContacts />
            </ContentWrapper>
        </div>
    );
});
