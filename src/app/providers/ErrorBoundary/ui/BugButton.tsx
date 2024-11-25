import { ArrowPosition, Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
            theme={ButtonTheme.PRIMARY_WHITE_FILL}
            arrowPosition={ArrowPosition.ARROW_LEFT}
        >
            {t('throw error')}
        </Button>
    );
};
