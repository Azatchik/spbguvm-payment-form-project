import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { TextTheme, Text, TextSize } from 'shared/ui/Text/Text';
import cls from './HeaderNavigator.module.scss';

export enum HeaderNavigatorTheme {
    LIGHT_THEME = 'light_theme',
    DARK_THEME = 'dark_theme',
}

interface HeaderNavigatorProps {
    className?: string;
    theme: HeaderNavigatorTheme;
}

export const HeaderNavigator = memo((props: HeaderNavigatorProps) => {
    const { className, theme } = props;
    const { t } = useTranslation();

    return (
        <HStack className={classNames(cls.HeaderNavigator, {}, [className])} justify="center" maxW>
            <HStack gap="10">
                <Text
                    theme={theme === HeaderNavigatorTheme.LIGHT_THEME ? TextTheme.HEADER_LIGHT : TextTheme.HEADER_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                >
                    {t('УНИВЕРСИТЕТ')}
                </Text>
                <Text
                    theme={theme === HeaderNavigatorTheme.LIGHT_THEME ? TextTheme.HEADER_LIGHT : TextTheme.HEADER_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                >
                    {t('ПОСТУПАЮЩИМ')}
                </Text>
                <Text
                    theme={theme === HeaderNavigatorTheme.LIGHT_THEME ? TextTheme.HEADER_LIGHT : TextTheme.HEADER_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                >
                    {t('СТУДЕНТАМ')}
                </Text>
                <Text
                    theme={theme === HeaderNavigatorTheme.LIGHT_THEME ? TextTheme.HEADER_LIGHT : TextTheme.HEADER_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                >
                    {t('НАУКА')}
                </Text>
                <Text
                    theme={theme === HeaderNavigatorTheme.LIGHT_THEME ? TextTheme.HEADER_LIGHT : TextTheme.HEADER_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                >
                    {t('МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО')}
                </Text>
            </HStack>
        </HStack>
    );
});
