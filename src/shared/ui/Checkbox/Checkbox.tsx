import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import checkboxNotSelectedIcon from 'shared/assets/icons/checkbox-notselected.svg';
import checkboxSelectedIcon from 'shared/assets/icons/checkbox-selected.svg';
import { Icon, IconTheme } from '../Icon/Icon';
import cls from './Checkbox.module.scss';

interface CheckboxProps {
    className?: string;
    isSelected?: boolean;
    onClick?: () => void;
}

export const Checkbox = memo((props: CheckboxProps) => {
    const {
        className,
        isSelected = false,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    return (
        <Icon
            className={classNames(cls.Checkbox, {}, [className])}
            Svg={isSelected ? checkboxSelectedIcon : checkboxNotSelectedIcon}
            theme={IconTheme.CLEAN}
            {...otherProps}
        />
    );
});
