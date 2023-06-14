import Root from './pages/root';
import Error from './pages/error';
import Index from './pages/index';
import DynamicRoute from './pages/dynamic-route';
import QueryParams from './pages/query-params';
import Users from './pages/users';

import { loader as usersLoader } from './data/users';

const routes = [
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: "query-params",
                element: <QueryParams />,
            },
            {
                path: "dynamic-route/:id?",
                element: <DynamicRoute />,
            },
            {
                path: "users",
                element: <Users />,
                loader: usersLoader,
            },
        ],
    },
]

export default routes;