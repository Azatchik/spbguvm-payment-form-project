import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import arrowRightIcon from 'shared/assets/icons/arrow-right.svg';
import { Icon, IconTheme } from '../Icon/Icon';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    FOOTER = 'footer',
    HEADER_LIGHT = 'header_light',
    HEADER_DARK = 'header_dark',
    MENU_ARROW = 'menu_arrow',
    MENU_GREY = 'menu_grey',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme,
        ...otherProps
    } = props;
    const [isHoverText, bindIsHoverText] = useHover();

    const mods: Mods = {
        [cls.textHovered]: isHoverText,
        [cls.textNotHovered]: !isHoverText && theme === AppLinkTheme.FOOTER,
    };

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {theme === AppLinkTheme.MENU_ARROW && (
                <Icon
                    theme={IconTheme.MENU_ARROW}
                    Svg={arrowRightIcon}
                    className={cls.arrow}
                />
            )}
            <div className={cls.text} {...bindIsHoverText}>{children}</div>
        </Link>
    );
});
