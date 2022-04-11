import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

function Status() {
  return (
      <div className='paymentStatusHolder'>
        <FormControl component="fieldset">
            <FormLabel component="legend">User Status </FormLabel>
            <RadioGroup
            aria-label="Status"
            defaultValue="Active"
            name="radio-buttons-group"
            className='paymentStatus'
            >
            <FormControlLabel value="Banned" control={<Radio />} label="Banned" />
            <FormControlLabel value="Active" control={<Radio />} label="Active" />
            </RadioGroup>
        </FormControl>
      </div>

  )
}

export default Status