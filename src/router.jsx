import { createBrowserRouter } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage'
import GamesPage from "./pages/GamesPage";
//import PruebaParaMostrarDatos from "./pages/PruebaParaMostrarDatos";
import ClubsPage from "./pages/ClubsPage";


export const router = createBrowserRouter ([
    {
        path:'/home',
        element: <HomePage/>,
    },
    {
        path:'/',
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
        path:'/club',
        element: <ClubsPage/>,
    }

    
]); 