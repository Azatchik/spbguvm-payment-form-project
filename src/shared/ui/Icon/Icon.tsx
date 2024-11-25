import { classNames } from 'shared/lib/classNames/classNames';
import React, { HTMLAttributes, memo } from 'react';
import cls from './Icon.module.scss';

export enum IconTheme {
    CLEAN = 'clean',
    MENU_ARROW = 'menu_arrow',
    HEADER_LIGHT = 'header_light',
    HEADER_DARK = 'header_dark',
    BLUE = 'blue',
    WHITE = 'white',
}

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    theme: IconTheme;
    onClick?: () => void;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        theme,
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.Icon, {}, [className, cls[theme]])} {...otherProps}>
            <Svg className={cls.svg} />
        </div>
    );
});
