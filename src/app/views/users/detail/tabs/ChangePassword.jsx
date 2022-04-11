import React, { useState, useEffect } from 'react'
import { Button, Alert, Grid } from '@mui/material'
import { styled } from '@mui/system'
import { useForm, Form } from 'app/components/Controls/UseFrom'
import Controls from 'app/components/Controls/Controls'

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}))

function ChangePassword() {

  const [success, setSuccess] = useState(false)

  const initialValues = {
    password: '',
    confirmPassword: '',
}

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if('password' in fieldValues) {
        temp.password = fieldValues.password ? "" : "password is required"
    }
    if('confirmPassword' in fieldValues) {
        temp.confirmPassword = fieldValues.password == fieldValues.confirmPassword ? "" : "password does not match"
    }

    setErrors({
        ...temp
    })

    if(fieldValues == values) {
        return Object.values(temp).every(x => x == "")
    }
  }

  const { values, setValues, errors, setErrors, handleInputChange } = useForm(initialValues, false, validate)

  const handleSubmit = (e) => {
      e.preventDefault()
      if (validate()) {
          setSuccess(true)
      }
  }

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return
      }
      setSuccess(false)
  }

  return (
    <div>

      {
          success ? 
          <Alert
              onClose={handleClose}
              sx={{ m: 1 }}
              severity="success"
              variant="filled"
          >
              Password changed successfully
          </Alert>
          :
          null
      }

      <Form onSubmit={handleSubmit}>
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <Controls.Input
                  type="password"
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleInputChange}
                  error={errors.password}
              />
              <Controls.Input
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleInputChange}
                  error={errors.confirmPassword}
              />
              <StyledButton variant="contained" color="primary" type="submit">
                  Change Password
              </StyledButton>
            </Grid>
          </Grid>
      </Form>

    </div>
  )
}

export default ChangePassword