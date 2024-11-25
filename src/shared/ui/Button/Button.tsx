import { classNames } from 'shared/lib/classNames/classNames';
import {
    CSSProperties, HTMLAttributes, memo, ReactNode,
} from 'react';
import ArrowRightIcon from 'shared/assets/icons/arrow-right.svg';
import ArrowLeftIcon from 'shared/assets/icons/arrow-left.svg';
import cls from './Button.module.scss';

export enum ButtonTheme {
    // primary while
    PRIMARY_WHITE_FILL = 'primary_white_fill',
    PRIMARY_WHITE_OUTLINE = 'primary_white_outline',
    // primary blue
    PRIMARY_BLUE_FILL = 'primary_blue_fill',
    PRIMARY_BLUE_OUTLINE = 'primary_blue_outline',
    // primary dark
    PRIMARY_DARK_FILL = 'primary_dark_fill',
    PRIMARY_DARK_OUTLINE = 'primary_dark_outline',
    // secondary
    SECONDARY_WHITE = 'secondary_white',
    SECONDARY_BLUE = 'secondary_blue',
    SECONDARY_DARK = 'secondary_dark',
}

export enum ArrowPosition {
    ARROW_RIGHT = 'arrow_right',
    ARROW_LEFT = 'arrow_left',
}

interface ButtonProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    theme: ButtonTheme;
    children: string;
    isMobile?: boolean;
    isTablet?: boolean;
    arrowPosition: ArrowPosition;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        isMobile = false,
        isTablet = false,
        arrowPosition,
        ...otherProps
    } = props;

    const styles: CSSProperties = {
        width: `${children.length * 20}px`,
    };

    return (
        <div
            role="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            style={styles}
            {...otherProps}
        >
            <div className={cls.hoverBlock} />
            <div className={cls.textWithArrow}>
                {arrowPosition === ArrowPosition.ARROW_LEFT && <ArrowLeftIcon className={cls.icon} />}
                {children}
                {arrowPosition === ArrowPosition.ARROW_RIGHT && <ArrowRightIcon className={cls.icon} />}
            </div>
        </div>
    );
});
