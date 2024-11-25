import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';
import { CheckoutPage } from 'pages/CheckoutPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    CHECKOUT = 'checkout',
    NOT_FOUND = 'not_found',
    // Админам
    ADMIN = 'admin',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CHECKOUT]: '/checkout',
    [AppRoutes.NOT_FOUND]: '*',
    // Админам
    [AppRoutes.ADMIN]: '/admin',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <CheckoutPage />,
    },
    [AppRoutes.CHECKOUT]: {
        path: RoutePath.checkout,
        element: <NotFoundPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    // Админам
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <NotFoundPage />,
        authOnly: true,
    },
};
