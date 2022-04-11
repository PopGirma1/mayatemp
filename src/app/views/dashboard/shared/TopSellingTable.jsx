import React from 'react'
import { Box, styled, useTheme } from '@mui/system'
import {
    Card,
    Table,
    MenuItem,
    Select,
} from '@mui/material'

const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const Small = styled('small')(({ bgcolor }) => ({
    height: 15,
    width: 50,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}))

const TopSellingTable = () => {
    const { palette } = useTheme()

    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
                <Title>Filter </Title>
                <Select size="small" defaultValue="this_month">
                    <MenuItem value="this_month">This Week</MenuItem>
                    <MenuItem value="last_month">This Month</MenuItem>
                </Select>
            </CardHeader>
        </Card>
    )
}

export default TopSellingTable
