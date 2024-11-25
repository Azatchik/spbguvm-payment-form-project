import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { LanguagesDropdown, LanguagesDropdownItem } from 'shared/ui/Popups/LanguagesDropdown/LanguagesDropdown';
import ruFlagIcon from 'shared/assets/icons/ru-flag.svg';
import arFlagIcon from 'shared/assets/icons/ar-flag.svg';
import hiFlagIcon from 'shared/assets/icons/hi-flag.svg';
import enFlagIcon from 'shared/assets/icons/en-flag.svg';
import { Language } from '../model/types/Language';

interface LanguagesProps {
    className?: string;
    isVisible?: boolean;
    onClickLanguage: (value: string) => void;
}

export const Languages = memo((props: LanguagesProps) => {
    const {
        className,
        isVisible = false,
        onClickLanguage,
    } = props;
    const { t } = useTranslation();

    const languagesDropdownItems = useMemo<LanguagesDropdownItem[]>(() => {
        const items: LanguagesDropdownItem[] = [
            {
                value: Language.RU,
                icon: ruFlagIcon,
                text: Language.RU.toUpperCase(),
            },
            {
                value: Language.EN,
                icon: enFlagIcon,
                text: Language.EN.toUpperCase(),
            },
            {
                value: Language.HI,
                icon: hiFlagIcon,
                text: Language.HI.toUpperCase(),
            },
            {
                value: Language.AR,
                icon: arFlagIcon,
                text: Language.AR.toUpperCase(),
            },
        ];

        return items;
    }, []);

    const onItemClickHandler = useCallback((value: string) => {
        onClickLanguage(value);
    }, [onClickLanguage]);

    return (
        <LanguagesDropdown
            className={classNames('', {}, [className])}
            isVisible={isVisible}
            items={languagesDropdownItems}
            onClickItem={onItemClickHandler}
        />
    );
});
