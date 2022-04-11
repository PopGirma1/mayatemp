import React from 'react'
import { Button } from '@mui/material'
import { Box, styled } from '@mui/system'
import { useNavigate } from 'react-router-dom'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
    maxWidth: 320,
    flexDirection: 'column',
    justifyContent: 'center',
}))

const IMG = styled('img')(() => ({
    width: '100%',
    marginBottom: '32px',
}))

const NotAuthorizedRoot = styled(FlexBox)(() => ({
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh !important',
}))

const NotAuthorized = () => {
    const navigate = useNavigate()

    return (
        <NotAuthorizedRoot>
            <JustifyBox>
                <h1>Forbidden</h1>
                <h3>You are not authorized</h3>
                <Button
                    color="primary"
                    variant="contained"
                    sx={{ textTransform: 'capitalize' }}
                    onClick={() => navigate(-1)}
                >
                    Back to Dashboard
                </Button>
            </JustifyBox>
        </NotAuthorizedRoot>
    )
}

export default NotAuthorized
