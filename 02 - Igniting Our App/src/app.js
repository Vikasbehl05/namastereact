import React from 'react'
import ReactDom from 'react-dom'
import Header from './Componets/Header/Header';
import Body from './Componets/Body/Body';
import { About } from './Componets/About/About';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from './Error';
import Contact from './Componets/Contact/Contact';

const root = ReactDom.createRoot(document.getElementById('root'));


const AppLayout = () => {
    return (
        <div className='appLayout'>
            <Header />
            <Body />
        </div>

    )
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />
        },
        {
            path: "/about",
            element: <About />
        }, {
            path: "/contact",
            element: <Contact />
        }
    ]
)

root.render(<RouterProvider router={appRouter} />);

