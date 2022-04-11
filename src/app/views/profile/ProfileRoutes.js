import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const AppProfile = Loadable(lazy(() => import('./AppProfile')))

const ProfileRoutes = [
    {
        path: '/user/profile',
        element: <AppProfile />,
    },
]

export default ProfileRoutes
