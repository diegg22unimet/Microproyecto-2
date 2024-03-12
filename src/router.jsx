import { createBrowserRouter } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage'
import GamesPage from "./pages/GamesPage";
import ProfilePage from "./pages/ProfilePage"

export const router = createBrowserRouter ([
    {
        path:'/home',
        element: <HomePage/>,
    },
    {
        path:'/login',
        element: <LoginPage/>,
    },
    {
        path:'/signup',
        element: <SignUpPage/>,
    },
    {
        path:'/games',
        element: <GamesPage/>,
    },
    {
        path:'/profile',
        element: <ProfilePage/>,
    }

    
]); 