import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import UsersTable from './UsersTable'
import { UserProvider } from 'app/contexts/UsersContext'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const AppViewUsers = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Table' },
                    ]}
                />
            </div>
            <SimpleCard title="View All Users">
                <UserProvider>
                    <UsersTable />
                </UserProvider>
            </SimpleCard>
        </Container>
    )
}

export default AppViewUsers
