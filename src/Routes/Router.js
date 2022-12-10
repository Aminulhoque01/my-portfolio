
import { createBrowserRouter } from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Portfolio from '../components/Protfolio/Portfolio';
import Main from '../Main/Main';
import About from '../Pages/About/About';
import ErrorPages from '../Pages/ErrorPages';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPages></ErrorPages>
    },
    {
        path:'/',
        element:<Home></Home>
    },
    // {
    //     path:'/about',
    //     element:<About></About>
    // },
    {
        path:'/contact',
        element:<Contact></Contact>
    }

])