import { createBrowserRouter } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

export const router = createBrowserRouter ([
    {
        path:'/home',
        element: <HomePage/>,
    },
    {
        path:'/login',
        element: <LoginPage/>,
    }

    
]); 