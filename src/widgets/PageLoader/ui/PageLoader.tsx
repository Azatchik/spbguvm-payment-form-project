import { classNames } from 'shared/lib/classNames/classNames';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import logoDesktopIcon from 'shared/assets/icons/logo-desktop.svg';
import { HStack } from 'shared/ui/Stack';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <HStack
        className={classNames(cls.PageLoader, {}, [className])}
        justify="center"
    >
        <Icon
            Svg={logoDesktopIcon}
            theme={IconTheme.WHITE}
        />
    </HStack>
);
