import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import cls from './ContentWrapper.module.scss';

interface ContentWrapperProps {
    className?: string;
    children: ReactNode;
}

export const ContentWrapper = memo((props: ContentWrapperProps) => {
    const { className, children } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ContentWrapper, {}, [className])}>
            <div
                className={cls.shadowWrapper}
            >
                {children}
            </div>
        </div>
    );
});
