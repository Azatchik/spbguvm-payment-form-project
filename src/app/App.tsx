import React, { Suspense, useEffect, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useDispatch } from 'react-redux';
import { Header, HeaderTheme } from 'widgets/Header';
import { AppRouter } from 'app/providers/router';
import { Footer } from 'widgets/Footer';
import { isMobile, isTablet } from 'react-device-detect';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const appClassName = useMemo<string>(() => {
        if (isMobile) {
            return 'app_mobile';
        }
        if (isTablet) {
            return 'app_tablet';
        }
        return 'app';
    }, []);

    return (
        <div className={classNames(appClassName, {}, [])}>
            <Suspense fallback="">
                {/* <Header theme={HeaderTheme.LIGHT_THEME} /> */}
                <AppRouter />
                {/* <Footer /> */}
            </Suspense>
        </div>
    );
}

export default App;
