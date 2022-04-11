import React from 'react'
import TextField from '@mui/material/TextField'

export default function Input(props) {

    const { type, label, name, value, onChange, error=null } = props

    return (
        <TextField
            type={type}
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            { ...(error && {error: true, helperText: error}) }
            sx={{ width: '100%', marginBottom: '16px' }} 
        />
    )
}