import React, { useState, useEffect } from 'react'
import { Button, Alert, Grid } from '@mui/material'
import { styled } from '@mui/system'
import { useForm, Form } from 'app/components/Controls/UseFrom'
import Controls from 'app/components/Controls/Controls'

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const UsersForm = (props) => {


    console.log("props", props.user_role)
    const [success, setSuccess] = useState(false)

    const initialValues = {
        username: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        gender: '',
        user_role: '',
        password: '',
        confirmPassword: '',
    }

    const userrolevalues = [
        { id: '0', title: 'Super Admin' },
        { id: '1', title: 'Admin' },
        { id: '2', title: 'Sales Rep' }
    ]

    const gendervalues = [
        {id: '0', title: 'Male'},
        {id: '1', title: 'Female'}
    ]

    console.log("wow: ", userrolevalues[props.user_role].title)

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if('username' in fieldValues) {
            temp.username = fieldValues.username ? "" : "username is required"
        }
        if('firstName' in fieldValues) {
            temp.firstName = fieldValues.firstName ? "" : "first name is required"
        }
        if('lastName' in fieldValues) {
           temp.lastName = fieldValues.lastName ? "" : "last name is required"
        }
        if('phone' in fieldValues) {
            temp.phone = fieldValues.phone ? "" : "phone is required"
        }
        if('email' in fieldValues) {
            temp.emailValid = fieldValues.email ? "" : "email is required"
            temp.emailRequired = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "email is not valid"
        }
        if('password' in fieldValues) {
            temp.password = fieldValues.password ? "" : "password is required"
        }
        if('confirmPassword' in fieldValues) {
            temp.confirmPassword = fieldValues.password == fieldValues.confirmPassword ? "" : "password does not match"
        }
        if('gender' in fieldValues) {
            temp.gender = fieldValues.gender.length != 0 ? "" : "gender is required"
        }
        if('user_role' in fieldValues) {
            temp.user_role = fieldValues.user_role.length != 0 ? "" : "user_role is required"
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
                    User Registered Successfully!
                </Alert>
                :
                null
            }

            <Form onSubmit={handleSubmit}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <Controls.Input
                            label="user name"
                            name="username"
                            value={props.username}
                            onChange={handleInputChange}
                            error={errors.username}
                        />
                        <Controls.Input
                            label="first name"
                            name="firstName"
                            value={props.first_name}
                            onChange={handleInputChange}
                            error={errors.firstName}
                        />
                        <Controls.Input
                            label="last name"
                            name="lastName"
                            value={props.last_name}
                            onChange={handleInputChange}
                            error={errors.lastName}
                        />
                        <Controls.Input
                            label="phone"
                            name="phone"
                            value={props.phone_number}
                            onChange={handleInputChange}
                            error={errors.phone}
                        />
                        <Controls.Input
                            name="email"
                            label="email"
                            value={props.email}
                            onChange={handleInputChange}
                            error={errors.emailValid ? errors.emailValid : errors.emailRequired}
                        />

                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={date}
                                onChange={handleDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Date picker"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider> */}

                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <Controls.RadioGroup
                            name="gender"
                            items={gendervalues}
                            value={values.gender}
                            onChange={handleInputChange}
                            error={errors.gender}
                        />
                        <Controls.Select
                            name="user_role"
                            label="User Role"
                            options={userrolevalues}
                            value={values.userrolevalues}
                            onChange={handleInputChange}
                            error={errors.user_role}
                        />
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
                            Update User
                        </StyledButton>
                    </Grid>
                </Grid>
            </Form>
        </div>
    )
}

export default UsersForm
