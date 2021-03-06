import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const AppMap = Loadable(lazy(() => import('./AppMap')))

const MapRoutes = [
    {
        path: '/map',
        element: <AppMap />,
    },
]

export default MapRoutes
