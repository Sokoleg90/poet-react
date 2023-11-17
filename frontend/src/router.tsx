import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout.tsx";
import Main from "./views/Main.tsx";
import AuthLayout from "./components/AuthLayout.tsx";
import Login from "./views/Login.tsx";
import Registration from "./views/Registration.tsx";
import NotFound from "./views/NotFound.tsx";
import Poets from "./views/Poets.tsx";
import Poems from "./views/Poems.tsx";
import About from "./views/About.tsx";
import PersonalLayout from "./components/PersonalLayout.tsx";
import Index from "./views/personal/Index.tsx";
import Create from "./views/personal/Create.tsx";



const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Main/>
            },

            {
                path: '/poets',
                element: <Poets/>
            },

            {
                path: '/poems',
                element: <Poems/>
            },

            {
                path: '/about',
                element: <About/>
            },
        ]
    },
    {
        element: <AuthLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/registration',
                element: <Registration/>
            },

        ]
    },
    {
        path: '/personal',
        element: <PersonalLayout/>,
        children: [
            {
                path: '/personal',
                element: <Index/>
            },

            {
                path: '/personal/create',
                element: <Create/>
            },
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);
export default router;
