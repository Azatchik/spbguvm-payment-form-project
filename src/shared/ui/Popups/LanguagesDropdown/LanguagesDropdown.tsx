import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Language } from 'entities/Languages';
import radioSelectedIcon from 'shared/assets/icons/radio-selected.svg';
import radioNotSelectedIcon from 'shared/assets/icons/radio-notselected.svg';
import { HStack, VStack } from '../../Stack';
import { Text, TextSize, TextTheme } from '../../Text/Text';
import { Icon, IconTheme } from '../../Icon/Icon';
import cls from './LanguagesDropdown.module.scss';

export interface LanguagesDropdownItem {
    value: Language;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    text: string;
}

interface LanguagesDropdownProps {
    className?: string;
    items: LanguagesDropdownItem[];
    isVisible?: boolean;
    onClickItem: (value: string) => void;
}

export const LanguagesDropdown = memo((props: LanguagesDropdownProps) => {
    const {
        className,
        items,
        isVisible = false,
        onClickItem,
    } = props;
    const { t, i18n } = useTranslation();

    const onItemClickHandler = useCallback((value: string) => {
        onClickItem(value);
    }, [onClickItem]);

    const mods: Mods = {
        [cls.isVisible]: isVisible,
    };

    return (
        <VStack
            className={classNames(cls.LanguagesDropdown, mods, [className])}
        >
            {items.map((item) => (
                <HStack
                    onClick={i18n.language === item.value ? undefined : () => onItemClickHandler(item.value)}
                    align="center"
                    gap="14"
                    className={i18n.language === item.value ? cls.itemSelected : cls.item}
                    maxW
                    key={item.value}
                >
                    <Icon
                        Svg={i18n.language === item.value ? radioSelectedIcon : radioNotSelectedIcon}
                        theme={IconTheme.CLEAN}
                        className={cls.radioIcon}
                    />
                    <HStack className={cls.langWrapper} justify="between">
                        <Text
                            theme={TextTheme.BLACK}
                            size={TextSize.BODY_S_DESKTOP}
                            className={cls.textLang}
                        >
                            {item.text}
                        </Text>
                        <Icon
                            Svg={item.icon}
                            theme={IconTheme.CLEAN}
                            className={cls.flagIcon}
                        />
                    </HStack>
                </HStack>
            ))}
        </VStack>
    );
});
