import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const AppAddCustomers = Loadable(lazy(() => import('./add/AppAddCustomers')))
const AppViewCustomers = Loadable(lazy(() => import('./view/AppViewCustomers')))
const AppUpdateCustomers = Loadable(lazy(() => import('./update/AppUpdateCustomers')))
const AppDetailCustomers = Loadable(lazy(() => import('./detail/AppDetailCustomers')))

const CustomerRoutes = [
    {
        path: '/customers/add',
        element: <AppAddCustomers />,
    },
    {
        path: '/customers/view',
        element: <AppViewCustomers />,
    },
    {
        path: '/customers/update/:username',
        element: <AppUpdateCustomers />
    },
    {
        path: '/customers/detail/:username',
        element: <AppDetailCustomers />
    },
]

export default CustomerRoutes
