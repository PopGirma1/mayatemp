import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import DetailPage from './DetailPage'

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

const AppProfile = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Profile', path: '/user/profile' },
                        { name: 'Profile' },
                    ]}
                />
            </div>
            <SimpleCard title="User Detail Information">
                <DetailPage />
            </SimpleCard>
            <Box py="12px" />
        </Container>
    )
}

export default AppProfile
