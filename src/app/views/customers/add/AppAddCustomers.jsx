import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import CustomersForm from './CustomersForm'

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

const AppAddCustomers = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Customer Form">
                <CustomersForm />
            </SimpleCard>
            <Box py="12px" />
        </Container>
    )
}

export default AppAddCustomers
