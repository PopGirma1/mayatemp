import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const AppAddUsers = Loadable(lazy(() => import('./add/AppAddUsers')))
const AppViewUsers = Loadable(lazy(() => import('./view/AppViewUsers')))
const AppUpdateUsers = Loadable(lazy(() => import('./update/AppUpdateUsers')))
const AppDetailUsers = Loadable(lazy(() => import('./detail/AppDetailUsers')))
 
const UserRoutes = [
    {
        path: '/users/add',
        element: <AppAddUsers />,
    },
    {
        path: '/users/view',
        element: <AppViewUsers />,
    },
    {
        path: '/users/update/:username',
        element: <AppUpdateUsers />
    },
    {
        path: '/users/detail/:username',
        element: <AppDetailUsers />
    },
]

export default UserRoutes
