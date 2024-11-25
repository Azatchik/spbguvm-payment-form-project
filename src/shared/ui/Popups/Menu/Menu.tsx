import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    memo, MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Portal } from '../../Portal/Portal';
import cls from './Menu.module.scss';

interface Subsection {
    name: string;
    link: string;
}

interface MainSection {
    name: string;
    link: string;
    subsections: Subsection[];
}

interface Section {
    [key: string]: MainSection;
}

interface MenuData {
    title: string;
    section1: Section;
    section2: Section;
    section3: Section;
}

interface MenuProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    data: MenuData;
}

const ANIMATION_DELAY = 600;

export const Menu = memo((props: MenuProps) => {
    const {
        className,
        data,
        isOpen,
        onClose,
        lazy = true,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    // Новые ссылки!!!
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return (
            <Portal>
                <div className={classNames(cls.Menu, mods, [className])}>
                    <div className={cls.overlay} onClick={closeHandler}>
                        <div
                            className={cls.content}
                            onClick={onContentClick}
                        />
                    </div>
                </div>
            </Portal>
        );
    }

    return (
        <Portal>
            <div className={classNames(cls.Menu, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        <HStack className={cls.menuWrapper} justify="between" align="start">
                            <h2 className={cls.title}>
                                {data.title.toUpperCase()}
                            </h2>
                            <HStack className={cls.sectionsWrapper} align="start" maxH>

                                <VStack className={cls.sectionMain} maxH gap="16">
                                    {Object.values(data.section1).map((section) => (
                                        <VStack align="start" gap={section.subsections.length > 0 ? '20' : undefined} maxW>
                                            <AppLink
                                                theme={AppLinkTheme.MENU_ARROW}
                                                to={section.link}
                                                className={cls.linkArrow}
                                            >
                                                {section.name}
                                            </AppLink>
                                            <VStack align="start" maxW className={cls.subsections} gap="16">
                                                {section.subsections.map((subsection) => (
                                                    <AppLink
                                                        theme={AppLinkTheme.MENU_GREY}
                                                        to={subsection.link}
                                                        className={cls.subsection}
                                                    >
                                                        {subsection.name}
                                                    </AppLink>
                                                ))}
                                            </VStack>
                                        </VStack>
                                    ))}
                                </VStack>

                                <VStack className={cls.sectionMain} maxH gap="16">
                                    {Object.values(data.section2).map((section) => (
                                        <VStack align="start" gap={section.subsections.length > 0 ? '20' : undefined} maxW>
                                            <AppLink
                                                theme={AppLinkTheme.MENU_ARROW}
                                                to={section.link}
                                                className={cls.linkArrow}
                                            >
                                                {section.name}
                                            </AppLink>
                                            <VStack align="start" maxW className={cls.subsections} gap="16">
                                                {section.subsections.map((subsection) => (
                                                    <AppLink
                                                        theme={AppLinkTheme.MENU_GREY}
                                                        to={subsection.link}
                                                        className={cls.subsection}
                                                    >
                                                        {subsection.name}
                                                    </AppLink>
                                                ))}
                                            </VStack>
                                        </VStack>
                                    ))}
                                </VStack>

                                <VStack className={cls.sectionMain} maxH gap="16">
                                    {Object.values(data.section3).map((section) => (
                                        <VStack align="start" gap={section.subsections.length > 0 ? '20' : undefined} maxW>
                                            <AppLink
                                                theme={AppLinkTheme.MENU_ARROW}
                                                to={section.link}
                                                className={cls.linkArrow}
                                            >
                                                {section.name}
                                            </AppLink>
                                            <VStack align="start" maxW className={cls.subsections} gap="16">
                                                {section.subsections.map((subsection) => (
                                                    <AppLink
                                                        theme={AppLinkTheme.MENU_GREY}
                                                        to={subsection.link}
                                                        className={cls.subsection}
                                                    >
                                                        {subsection.name}
                                                    </AppLink>
                                                ))}
                                            </VStack>
                                        </VStack>
                                    ))}
                                </VStack>
                            </HStack>
                        </HStack>
                    </div>
                </div>
            </div>
        </Portal>
    );
});
