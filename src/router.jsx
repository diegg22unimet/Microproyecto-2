import { createBrowserRouter } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage'

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
    }

    
]); 