import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Category from '../../Pages/Category/Category/Category';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import News from '../../Pages/News/News/News';
import Signup from '../../Pages/Signup/Signup';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: async ()=> fetch(`http://localhost:5000/news`)
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: async ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<PrivateRoutes><News></News></PrivateRoutes>,
                loader: async ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
        ]
    }
]);