import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArrowPosition, Button, ButtonTheme } from 'shared/ui/Button/Button';
import { VStack } from 'shared/ui/Stack';
import bg404Image from 'shared/assets/images/bg404.png';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div
            className={classNames(cls.ErrorPage, {}, [className])}
            style={{
                backgroundImage: `url('${bg404Image}')`,
            }}
        >
            <VStack
                maxH
                maxW
                justify="center"
                align="center"
                gap="64"
                className={cls.notFoundPageWrapper}
            >
                <Text
                    size={TextSize.H1_DESKTOP}
                    theme={TextTheme.WHITE}
                    className={cls.whiteText}
                    align={TextAlign.CENTER}
                >
                    <Text
                        size={TextSize.H1_DESKTOP}
                        theme={TextTheme.BLUE_LIGHT2}
                        className={cls.blueText}
                    >
                        {`${t('ХММ')}...`}
                    </Text>
                    {`${t('ЧТО-ТО ПОШЛО НЕ ТАК')}...`}
                </Text>
                <Button
                    theme={ButtonTheme.PRIMARY_WHITE_FILL}
                    arrowPosition={ArrowPosition.ARROW_RIGHT}
                    onClick={reloadPage}
                >
                    {t('Вернуться на главную')}
                </Button>
            </VStack>
        </div>
    );
};
