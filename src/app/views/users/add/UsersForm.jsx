import React, { useState, useEffect } from 'react'
import { Button, Alert, Grid } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import { useForm, Form } from 'app/components/Controls/UseFrom'
import Controls from 'app/components/Controls/Controls'
import { addUsers, getUsers, getSingleUser, updateUser, deleteUsers } from '../../../redux/actions/UserActions'
import { useDispatch } from 'react-redux'

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const UsersForm = () => {

    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()

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

    const userrolesvalues = [
        { id: '0', title: 'Super Admin' },
        { id: '1', title: 'Admin' },
        { id: '2', title: 'Sales Rep' }
    ]

    const gendervalues = [
        {id: '0', title: 'Male'},
        {id: '1', title: 'Female'}
    ]

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if('username' in fieldValues) {
            temp.username = fieldValues.username ? "" : "username is required"
        }
        if('first_name' in fieldValues) {
            temp.first_name = fieldValues.first_name ? "" : "first name is required"
        }
        if('last_name' in fieldValues) {
           temp.last_name = fieldValues.last_name ? "" : "last name is required"
        }
        if('phone_number' in fieldValues) {
            temp.phone_number = fieldValues.phone_number ? "" : "phone_number is required"
        }
        if('email' in fieldValues) {
            temp.emailValid = fieldValues.email ? "" : "email is required"
            temp.emailRequired = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "email is not valid"
        }
        if('gender' in fieldValues) {
            temp.gender = fieldValues.gender.length != 0 ? "" : "gender is required"
        }
        if('user_role' in fieldValues) {
            temp.user_role = fieldValues.user_role.length != 0 ? "" : "user_role is required"
        }
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
            dispatch(addUsers(values))
            console.log("values: ", values)
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
                            value={values.username}
                            onChange={handleInputChange}
                            error={errors.username}
                        />
                        <Controls.Input
                            label="first name"
                            name="first_name"
                            value={values.first_name}
                            onChange={handleInputChange}
                            error={errors.first_name}
                        />
                        <Controls.Input
                            label="last name"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleInputChange}
                            error={errors.last_name}
                        />
                        <Controls.Input
                            label="phone_number"
                            name="phone_number"
                            value={values.phone_number}
                            onChange={handleInputChange}
                            error={errors.phone_number}
                        />
                        <Controls.Input
                            name="email"
                            label="email"
                            value={values.email}
                            onChange={handleInputChange}
                            error={errors.emailValid ? errors.emailValid : errors.emailRequired}
                        />

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
                            options={userrolesvalues}
                            value={values.user_role}
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
                            Register User
                        </StyledButton>
                    </Grid>
                </Grid>
            </Form>
        </div>
    )
}

export default UsersForm
