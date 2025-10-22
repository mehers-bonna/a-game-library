import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import BrowseGames from './../Pages/BrowseGames';
import Developers from './../Pages/Developers';
import GameDetails from "../Pages/GameDetails";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
         hydrateFallbackElement: <p>Loading....</p>,
         children: [
            {
                index: true,
                Component:Home,
            },
            {
                path: "/browseGames",
                Component: BrowseGames,
            },
            {
                path: "/developers",
               Component: Developers,
            },
            {
                path: '/game/:id',
                Component: GameDetails,
            },
            {
                path: "*",
                Component: ErrorPage,
            }
        ]
    },
    // {
    //     path: '/auth',
    //     element: <h2>authentication layout</h2>
    // },
    // {
    //     path: '/game',
    //     element: <h2>game layout</h2>
    // },
    // {
    //     path: '/*',
    //     element: <h2>error404</h2>
    // },
])

export default router;