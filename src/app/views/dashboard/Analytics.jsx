import React, { Fragment } from 'react'
import StatCards from './shared/StatCards'
import { Grid, Card } from '@mui/material'
import StatCards2 from './shared/StatCards2'
import DoughnutChart from './shared/Doughnut'
import { styled, useTheme } from '@mui/system'
import TopSellingTable from './shared/TopSellingTable'
import ComparisonChart from './shared/ComparisonChart'

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}))

const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
}))

const Analytics = () => {
    const { palette } = useTheme()
    const theme = useTheme()

    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <StatCards />
                        <TopSellingTable />
                        <StatCards2 />
                        <ComparisonChart
                            height="350px"
                            color={[
                                theme.palette.primary.dark,
                                // theme.palette.primary.main,
                                theme.palette.primary.light,
                            ]} />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card sx={{ px: 3, py: 2, mb: 3 }}>
                            <Title>Sub City Details</Title>
                            <SubTitle> Last 30 days</SubTitle>
                            <DoughnutChart
                                height="400px"
                                color={[
                                    palette.primary.dark,
                                    palette.primary.main,
                                    palette.primary.light,
                                ]}
                            />
                        </Card>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <ComparisonChart />
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    )
}

export default Analytics
