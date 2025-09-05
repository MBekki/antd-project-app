import { RouterProvider } from 'react-router';
import AppRouter from './router';

const Root = () => {
    return <RouterProvider router={AppRouter()} />;
};
export default Root;
