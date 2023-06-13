import Root from './pages/root';
import Error from './pages/error';
import Index from './pages/index';
import DynamicRoute from './pages/dynamic-route';
import QueryParams from './pages/query-params';

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
        ],
    },
]

export default routes;