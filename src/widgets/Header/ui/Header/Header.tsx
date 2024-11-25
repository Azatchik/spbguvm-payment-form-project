import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { ArrowPosition, Button, ButtonTheme } from 'shared/ui/Button/Button';
import eyeIcon from 'shared/assets/icons/eye.svg';
import searchIcon from 'shared/assets/icons/search.svg';
import logoLargeIcon from 'shared/assets/icons/logo-large.svg';
import { LangSwitcher, LangSwitcherTheme } from 'widgets/LangSwitcher';
import { Tooltip } from 'shared/ui/Popups/Tooltip/Tooltip';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { HeaderNavigator, HeaderNavigatorTheme } from '../HeaderNavigator/HeaderNavigator';
import cls from './Header.module.scss';

// const [isOpenPopupUniversity, bindOpenPopupUniversity] = useModal();

const universityMenu = {
    title: 'Университет',
    section1: {
        main1: {
            name: 'Об университете',
            link: '#',
            subsections: [],
        },
        main2: {
            name: 'Структура и контакты',
            link: '#',
            subsections: [],
        },
        main3: {
            name: 'Ректорат',
            link: '#',
            subsections: [
                { name: 'О ректоре', link: '#' },
                { name: 'Проректор по учебно-воспитательной работе и молодежной политике', link: '#' },
                { name: 'Проректор по научной работе и международным связям', link: '#' },
                { name: 'Проректор по развитию, качеству образования и цифровой трансформации', link: '#' },
            ],
        },
    },
    section2: {
        main1: {
            name: 'Новости и афиша',
            link: '#',
            subsections: [],
        },
        main2: {
            name: 'Цифровая трансформация',
            link: '#',
            subsections: [],
        },
        main3: {
            name: 'Инклюзивное образования',
            link: '#',
            subsections: [],
        },
        main4: {
            name: 'Ветеринарная клиники',
            link: '#',
            subsections: [],
        },
        main5: {
            name: 'Музеи',
            link: '#',
            subsections: [
                { name: 'Музей кафедры анатомии животных', link: '#' },
                { name: 'Музей кафедры патологической анатомии и судебной ветеринарной медицины', link: '#' },
                { name: 'Музей кафедры ветеринарно-санитарной экспертизы', link: '#' },
                { name: 'Музей кафедры паразитологии', link: '#' },
            ],
        },
    },
    section3: {
        main1: {
            name: 'Работникам',
            link: '#',
            subsections: [],
        },
        main2: {
            name: 'Партнерам',
            link: '#',
            subsections: [],
        },
        main3: {
            name: 'Выпускникам',
            link: '#',
            subsections: [
                { name: 'Практика студентов', link: '#' },
                { name: 'Трудоустройство выпускников', link: '#' },
            ],
        },
    },
};

export enum HeaderTheme {
    LIGHT_THEME = 'light_theme',
    DARK_THEME = 'dark_theme',
}

interface HeaderProps {
    className?: string;
    theme: HeaderTheme;
}

export const Header = memo((props: HeaderProps) => {
    const { className, theme } = props;
    const { t } = useTranslation();
    const [isHoverTooltip, bindIsHoverTooltip] = useHover();

    return (
        <div className={classNames(cls.Header, {}, [className, cls[theme]])}>
            <VStack className={cls.headerWrapper}>
                <HStack className={cls.mainPanel} justify="between">
                    <HStack className={cls.links} gap="24">
                        <AppLink
                            theme={theme === HeaderTheme.LIGHT_THEME ? AppLinkTheme.HEADER_LIGHT : AppLinkTheme.HEADER_DARK}
                            to="#"
                        >
                            {t('Контакты')}
                        </AppLink>
                        <AppLink
                            theme={theme === HeaderTheme.LIGHT_THEME ? AppLinkTheme.HEADER_LIGHT : AppLinkTheme.HEADER_DARK}
                            to="#"
                        >
                            {t('Медиа-центр')}
                        </AppLink>
                        <AppLink
                            theme={theme === HeaderTheme.LIGHT_THEME ? AppLinkTheme.HEADER_LIGHT : AppLinkTheme.HEADER_DARK}
                            to="#"
                        >
                            {t('Нормативные документы')}
                        </AppLink>
                    </HStack>
                    <Icon
                        className={cls.logo}
                        Svg={logoLargeIcon}
                        theme={theme === HeaderTheme.LIGHT_THEME ? IconTheme.WHITE : IconTheme.BLUE}
                    />
                    <HStack className={cls.tools} gap="16">
                        {/* Потом сделать вместо иконки и тултипа один земсвитчер и все, useHover будет там внутри */}
                        <Icon
                            Svg={eyeIcon}
                            theme={theme === HeaderTheme.LIGHT_THEME ? IconTheme.HEADER_LIGHT : IconTheme.HEADER_DARK}
                            {...bindIsHoverTooltip}
                        />
                        <Tooltip
                            isVisible={isHoverTooltip}
                            className={cls.tooltipEye}
                        >
                            {t('Версия для слабовидящих')}
                        </Tooltip>
                        <Icon
                            Svg={searchIcon}
                            theme={theme === HeaderTheme.LIGHT_THEME ? IconTheme.HEADER_LIGHT : IconTheme.HEADER_DARK}
                        />
                        <LangSwitcher theme={theme === HeaderTheme.LIGHT_THEME ? LangSwitcherTheme.LIGHT : LangSwitcherTheme.DARK} />
                        <Button
                            theme={theme === HeaderTheme.LIGHT_THEME ? ButtonTheme.PRIMARY_WHITE_FILL : ButtonTheme.PRIMARY_BLUE_FILL}
                            arrowPosition={ArrowPosition.ARROW_RIGHT}
                        >
                            {t('Приемная кампания')}
                        </Button>
                    </HStack>
                </HStack>
                <HeaderNavigator
                    theme={theme === HeaderTheme.LIGHT_THEME ? HeaderNavigatorTheme.LIGHT_THEME : HeaderNavigatorTheme.DARK_THEME}
                />
            </VStack>
        </div>
    );
});
