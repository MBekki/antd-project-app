import { createBrowserRouter, Navigate } from 'react-router';
import Layout from '../layout';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Admins from '../pages/Admins';

const AppRouter = () => {
    const token = useSelector(state => state.authReducer.token);

    if (!token) {
        return createBrowserRouter([
            { path: '*', element: <Navigate to='/login' /> },
            { path: '/login', element: <Login /> },
        ]);
    }

    const getRoleBasedRoutes = () => {
        // switch (role) {
        //     case 'administrator':
        //         return [
        //             { path: '/', element: <Home />, index: true },
        //             { path: '/admin', element: <Admins /> },
        //         ];
        //     default:
        //         return [{ path: '*', element: <Navigate to='/login' /> }];
        // }
        if (token) {
            return [
                { path: '/', element: <Home />, index: true },
                { path: '/admin', element: <Admins /> },
            ];
        }
    };

    const routes = [
        {
            path: '/',
            element: <Layout />,
            children: [
                ...getRoleBasedRoutes(),
                { path: '*', element: <Navigate to='/' /> },
            ],
        },
        {
            path: '/login',
            element: <Navigate to='/' />,
        },
        {
            path: '*',
            element: <Navigate to='/' />,
        },
    ];

    return createBrowserRouter(routes);
};

export default AppRouter;
