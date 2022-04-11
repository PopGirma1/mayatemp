import React, { useState } from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Card } from '@mui/material'
import { useLoadScript } from '@react-google-maps/api'
import Map from './Map'
import './mapstyle.css'

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

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const AppMap = () => {
    
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_API_KEY })

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Map', path: '/map' },
                        { name: 'map' },
                    ]}
                />
            </div>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
                {
                  !isLoaded ? 'loading...' : 
                  <div id="mapContainer">
                        <Map />
                  </div>
                }
            </Card>
            {/* <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63054.73316301023!2d38.797025169872654!3d8.979433350078029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b33a3569139%3A0xb505349b8c87fdd2!2z4Ymm4YiMIOGKreGNjeGIiCDhiqjhibDhiJssIOGKoOGLsuGItSDhiqDhiaDhiaM!5e0!3m2!1sam!2set!4v1645973403862!5m2!1sam!2set" width={1000} height={500} ></iframe>
            </Card> */}
        </Container>
    )
}

export default AppMap
