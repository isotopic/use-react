import Root from './pages/root';
import Error from './pages/error';
import Index from './pages/index';
import DynamicRoute from './pages/dynamic-route';
import QueryParams from './pages/query-params';
import Users from './pages/users/Users';
import User from './pages/users/User';
import UserEdit from './pages/users/UserEdit';
import type { RouteObject } from 'react-router-dom';

import { getAllUsers, getSingleUser, editUser } from './requests/users';

const routes: RouteObject[] = [
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
                loader: getAllUsers,
            },
            {
                path: "users/:id",
                element: <User />,
                loader: getSingleUser,
            },
            {
                path: "users/:id/edit",
                element: <UserEdit />,
                loader: getSingleUser,
                action: editUser,
            },
        ],
    },
]

export default routes;