import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, ReactNode, useCallback } from 'react';
import radioSelectedBlue from 'shared/assets/icons/radio-selected-blue.svg';
import radioNotSelectedGrey from 'shared/assets/icons/radio-notselected-grey.svg';
import { HStack, VStack } from '../Stack';
import { Icon, IconTheme } from '../Icon/Icon';
import { Text, TextSize, TextTheme } from '../Text/Text';
import cls from './PaymentRadio.module.scss';

export interface PaymentRadioItem {
    value: string;
    text: string;
    indicator: ReactNode | undefined;
}

export type PaymentRadioItems = [PaymentRadioItem, PaymentRadioItem];

interface PaymentRadioProps {
    className?: string;
    items: PaymentRadioItems;
    selectedValue: string;
    onClickItem: (value: string) => void;
}

export const PaymentRadio = memo((props: PaymentRadioProps) => {
    const {
        className,
        items,
        selectedValue,
        onClickItem,
    } = props;
    const { t } = useTranslation();

    const onItemClickHandler = useCallback((value: string) => {
        onClickItem(value);
    }, [onClickItem]);

    return (
        <VStack
            className={classNames(cls.PaymentRadio, {}, [className])}
            maxW
        >
            {items.map((item) => (
                <HStack
                    justify="between"
                    onClick={() => onItemClickHandler(item.value)}
                    className={cls.item}
                    key={item.value}
                    maxW
                >
                    <HStack
                        gap="10"
                    >
                        <Icon
                            Svg={selectedValue === item.value ? radioSelectedBlue : radioNotSelectedGrey}
                            theme={IconTheme.CLEAN}
                        />
                        <Text
                            theme={selectedValue === item.value ? TextTheme.GREY : TextTheme.BLUE}
                            size={TextSize.BODY_DESKTOP}
                        >
                            {item.text}
                        </Text>
                    </HStack>
                    {item.indicator ? item.indicator : false}
                </HStack>
            ))}
        </VStack>
    );
});
