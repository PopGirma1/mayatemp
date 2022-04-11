import React from 'react'
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';

export default function RadioGroup(props) {

    const { name, label, value, onChange, error=null, items } = props;

    return (
        <FormControl  variant="outlined" {...(error && {error:true})} sx={{ width: '100%', marginBottom: '16px' }} >
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}>
                {
                    items.map(
                        item => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                        )
                    )
                }
            </MuiRadioGroup>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}