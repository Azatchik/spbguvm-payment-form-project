import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const { t } = useTranslation('mainPage');

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            {t('Главная страница')}
            <BugButton />
        </div>
    );
};

export default MainPage;
