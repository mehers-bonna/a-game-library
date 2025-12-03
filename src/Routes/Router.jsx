import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import BrowseGames from './../Pages/BrowseGames';
import Developers from './../Pages/Developers';
import GameDetails from "../Pages/GameDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRoute from "../Provider/PrivateRoute";
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgetPassword from "../Pages/ForgetPassword";
import About from "../Pages/About";
import Contact from "../Pages/Contact";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <p>Loading....</p>,
        children: [
            {
                index: true,
                Component: Home,
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
                path: "/about",
                Component: About,
            },
            {
                path: "/contact",
                Component: Contact,
            },
            {
                path: '/game/:id',
                element: <GameDetails></GameDetails>
            },
            {
                path: "*",
                Component: ErrorPage,
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            },
            {
                path: 'myProfile',
                Component: MyProfile,
            },
            {
                path: 'updateProfile',
                Component: UpdateProfile,
            },
            {
                path: 'forgetPassword',
                Component: ForgetPassword,
            },
        ],
    },
])

export default router;