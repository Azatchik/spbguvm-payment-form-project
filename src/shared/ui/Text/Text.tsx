import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, ReactNode } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    BLUE = 'blue',
    WHITE = 'white',
    BLACK = 'black',
    RED = 'red',
    GREY = 'grey',
    GREY_LIGHT = 'grey_light',
    BLUE_LIGHT2 = 'blue_light2',
    HEADER_LIGHT = 'header_light',
    HEADER_DARK = 'header_dark',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    NUMBERS_DESKTOP = 'numbers_desktop',
    H1_DESKTOP = 'h1_desktop',
    H2_DESKTOP = 'h2_desktop',
    H2_LIGHT_DESKTOP = 'h2_light_desktop',
    H3_DESKTOP = 'h3_desktop',
    H4_DESKTOP = 'h4_desktop',
    H4_MEDIUM_DESKTOP = 'h4_medium_desktop',
    H4_ITALIC_DESKTOP = 'h4_italic_desktop',
    BODY_L_DESKTOP = 'body_l_desktop',
    BODY_DESKTOP = 'body_desktop',
    BODY_S_DESKTOP = 'body_s_desktop',
    BODY_S_MEDIUM_DESKTOP = 'body_s_medium_desktop',
    BODY_FOOTER_DESKTOP = 'body_footer_desktop',
    BUTTON_DESKTOP = 'button_desktop',
    MENU_DESKTOP = 'menu_desktop',
    MENU_CAPS_DESKTOP = 'menu_caps_desktop',
    MENU_LARGE_ITALIC_DESKTOP = 'menu_large_italic_desktop',
    MENU_LARGE_ITALIC_MEDIUM_DESKTOP = 'menu_large_italic_medium_desktop',
}

interface TextProps {
    className?: string;
    children?: ReactNode;
    theme: TextTheme;
    align?: TextAlign;
    size: TextSize;
}

type TextTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'p'

const mapSizeToTextTag: Record<TextSize, TextTagType> = {
    [TextSize.NUMBERS_DESKTOP]: 'h1',
    [TextSize.H1_DESKTOP]: 'h1',
    [TextSize.H2_DESKTOP]: 'h2',
    [TextSize.H2_LIGHT_DESKTOP]: 'h2',
    [TextSize.H3_DESKTOP]: 'h3',
    [TextSize.H4_DESKTOP]: 'h4',
    [TextSize.H4_MEDIUM_DESKTOP]: 'h4',
    [TextSize.H4_ITALIC_DESKTOP]: 'h4',
    [TextSize.BODY_L_DESKTOP]: 'p',
    [TextSize.BODY_DESKTOP]: 'p',
    [TextSize.BODY_S_DESKTOP]: 'p',
    [TextSize.BODY_S_MEDIUM_DESKTOP]: 'p',
    [TextSize.BODY_FOOTER_DESKTOP]: 'p',
    [TextSize.BUTTON_DESKTOP]: 'p',
    [TextSize.MENU_DESKTOP]: 'p',
    [TextSize.MENU_CAPS_DESKTOP]: 'p',
    [TextSize.MENU_LARGE_ITALIC_DESKTOP]: 'p',
    [TextSize.MENU_LARGE_ITALIC_MEDIUM_DESKTOP]: 'p',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        theme,
        align = TextAlign.LEFT,
        size,
        children,
    } = props;

    const TextTag = mapSizeToTextTag[size];
    const isThemeHeader = theme === TextTheme.HEADER_LIGHT || theme === TextTheme.HEADER_DARK;

    return (
        <TextTag className={classNames(cls.Text, {}, [className, cls[theme], cls[size], cls[align]])} data-testid="TextTest">
            {isThemeHeader && (
                <div className={cls.borderBottom} />
            )}
            {children}
        </TextTag>
    );
});
