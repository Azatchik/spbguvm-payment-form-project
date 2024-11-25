import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, ReactNode } from 'react';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { HStack } from '../Stack';
import cls from './Cover.module.scss';
import { Text, TextSize, TextTheme } from '../Text/Text';

interface CoverProps {
    className?: string;
    children: ReactNode;
    greyText: string;
    headTextTheme: TextTheme;
    bgImage?: string;
}

export const Cover = (props: CoverProps) => {
    const {
        className,
        children,
        greyText,
        headTextTheme,
        bgImage,
    } = props;

    const style: CSSProperties = {
        backgroundImage: bgImage ? `url('${bgImage}')` : 'none',
    };

    return (
        <HStack
            className={classNames(cls.Cover, {}, [className])}
            style={bgImage ? style : undefined}
            maxW
        >
            <ContentWrapper>
                <HStack
                    className={cls.coverWrapper}
                    align="end"
                    maxW
                    maxH
                >
                    <HStack
                        align="start"
                        maxW
                    >
                        <Text
                            theme={TextTheme.GREY}
                            size={TextSize.BODY_DESKTOP}
                            className={cls.greyText}
                        >
                            {`[ ${greyText} ]`}
                        </Text>
                        <Text
                            theme={headTextTheme}
                            size={TextSize.H1_DESKTOP}
                        >
                            {children}
                        </Text>
                    </HStack>
                </HStack>
            </ContentWrapper>
        </HStack>
    );
};
