import React from 'react'
import { LayoutV1 } from '../components/LayoutV1/layoutV1'
import { HomeV1 } from '../components/PagesV1/HomeV1'
import { BrowserRouter } from "react-router-dom";

export const RouteName = {
    home: '/',
    service: '/service',
    contact: '/contact'
}

export const routerPath = {
    home: {
        path: '/',
        element: <LayoutV1 />,
        children: [
            {
                path: RouteName.home,
                element: <HomeV1 />
            }
        ]
    },
}

export const Routes = BrowserRouter(Object.values(routerPath));