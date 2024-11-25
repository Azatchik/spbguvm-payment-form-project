import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Tooltip.module.scss';

interface TooltipProps {
    className?: string;
    isVisible?: boolean;
    children: string;
}

export const Tooltip = (props: TooltipProps) => {
    const {
        className,
        isVisible = false,
        children,
    } = props;
    const { t } = useTranslation();

    const mods: Mods = {
        [cls.isVisible]: isVisible,
    };

    return (
        <div className={classNames(cls.Tooltip, mods, [className])}>
            {children}
        </div>
    );
};
