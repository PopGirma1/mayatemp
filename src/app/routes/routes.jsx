import AuthGuard from 'app/auth/AuthGuard'
import NotFound from 'app/views/sessions/NotFound'
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes'
import profileRoutes from 'app/views/profile/ProfileRoutes'
import userRoutes from 'app/views/users/UserRoutes'
import customerRoutes from 'app/views/customers/CustomerRoutes'
import mapRoutes from 'app/views/map/MapRoutes'
import sessionRoutes from 'app/views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import { Navigate } from 'react-router-dom'

export const AllPages = () => {
    const all_routes = [
        {
            element: (
                <AuthGuard>
                    <MatxLayout />
                </AuthGuard>
            ),
            children: [...dashboardRoutes, ...userRoutes, ...customerRoutes,  ...profileRoutes, ...mapRoutes],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="dashboard/default" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]

    return all_routes
}
