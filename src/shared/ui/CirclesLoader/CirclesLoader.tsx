import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CirclesLoader.module.scss';

export enum CirclesLoaderSizes {
    MEDIUM_SIZE = 'medium_size',
    SMALL_SIZE = 'small_size',
}

interface CirclesLoaderProps {
    className?: string;
    size?: CirclesLoaderSizes;
}

export const CirclesLoader = ({ className, size = CirclesLoaderSizes.MEDIUM_SIZE }: CirclesLoaderProps) => (
    <div className={classNames(cls.ldsEllipsis, {}, [className, cls[size]])}>
        <div className={cls.dot1} />
        <div className={cls.dot2} />
        <div className={cls.dot3} />
        <div className={cls.dot4} />
    </div>
);
