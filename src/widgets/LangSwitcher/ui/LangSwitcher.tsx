import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { Language, Languages } from 'entities/Languages';
import languageIcon from 'shared/assets/icons/language.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './LangSwitcher.module.scss';

export enum LangSwitcherTheme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface LangSwitcherProps {
    className?: string;
    theme: LangSwitcherTheme;
}

export const LangSwitcher = memo(({ className, theme }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

    const onIconClick = useCallback(() => {
        setIsDropdownVisible((prevState) => !prevState);
    }, []);

    const onTransparentOverlayClick = useCallback(() => {
        setIsDropdownVisible(false);
    }, []);

    const onClickLanguage = useCallback((value: string) => {
        switch (value) {
        case Language.RU:
            i18n.changeLanguage('ru');
            break;
        case Language.EN:
            i18n.changeLanguage('en');
            break;
        case Language.HI:
            i18n.changeLanguage('hi');
            break;
        case Language.AR:
            i18n.changeLanguage('ar');
            break;
        default:
            break;
        }
    }, [i18n]);

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            {isDropdownVisible && (
                <div className={cls.transparentOverlay} onClick={onTransparentOverlayClick} />
            )}
            <Icon
                Svg={languageIcon}
                theme={theme === LangSwitcherTheme.LIGHT ? IconTheme.HEADER_LIGHT : IconTheme.HEADER_DARK}
                onClick={onIconClick}
                className={cls.icon}
            />
            {isDropdownVisible && (
                <Languages
                    isVisible
                    onClickLanguage={onClickLanguage}
                    className={cls.dropdown}
                />
            )}
        </div>
    );
});
