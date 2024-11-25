import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { ArrowPosition, Button, ButtonTheme } from 'shared/ui/Button/Button';
import bg404Image from 'shared/assets/images/bg404.png';
import { Page } from 'widgets/Page';
import { useNavigate } from 'react-router-dom';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Page
            className={classNames(cls.NotFoundPage, {}, [className])}
        >
            <div
                className={cls.notFoundPageWrapper}
                style={{
                    backgroundImage: `url('${bg404Image}')`,
                }}
            >
                <VStack
                    className={cls.stack}
                    maxH
                    maxW
                    justify="center"
                    align="center"
                    gap="64"
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
                            {`${t('УПС')}!`}
                        </Text>
                        {`${t('СТРАНИЦА НЕ НАЙДЕНА')}...`}
                    </Text>
                    <Button
                        theme={ButtonTheme.PRIMARY_WHITE_FILL}
                        arrowPosition={ArrowPosition.ARROW_RIGHT}
                        onClick={() => navigate('/')}
                    >
                        {t('Вернуться на главную')}
                    </Button>
                </VStack>
            </div>
        </Page>
    );
};
