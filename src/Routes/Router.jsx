import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>
    },
    {
        path: '/auth',
        element: <h2>authentication layout</h2>
    },
    {
        path: '/game',
        element: <h2>game layout</h2>
    },
    {
        path: '/*',
        element: <h2>error404</h2>
    },
])

export default router;