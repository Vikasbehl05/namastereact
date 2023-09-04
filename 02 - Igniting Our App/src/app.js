import React, { Children } from 'react'
import ReactDom from 'react-dom/client'
import Header from './Componets/Header/Header';
import Body from './Componets/Body/Body';
import { About } from './Componets/About/About';
import Error from './Error';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from './Componets/Contact/Contact';
import ResurantMenu from './Componets/Body/ResMenu';

const root = ReactDom.createRoot(document.getElementById('root'));


const AppLayout = () => {
    return (
        <div className='mb-5'>
            <Header />
            <Outlet />

        </div>

    )
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/resmenu/:resId",
                    element: <ResurantMenu />
                }

            ]
        }
    ]

)

root.render(<RouterProvider router={appRouter} />);

