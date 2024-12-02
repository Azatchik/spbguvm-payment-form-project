import React, { Suspense, useEffect, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useDispatch } from 'react-redux';
import { Header, HeaderTheme } from 'widgets/Header';
import { AppRouter } from 'app/providers/router';
import { Footer } from 'widgets/Footer';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                {/* <Header theme={HeaderTheme.LIGHT_THEME} /> */}
                <AppRouter />
                {/* <Footer /> */}
            </Suspense>
        </div>
    );
}

export default App;
