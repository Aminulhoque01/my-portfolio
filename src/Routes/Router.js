
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Main from '../Main/Main';
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
    
])