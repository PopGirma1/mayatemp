import React, { useState, useEffect } from 'react'
import { Button, Alert, Grid } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import { useForm, Form } from 'app/components/Controls/UseFrom'
import Controls from 'app/components/Controls/Controls'

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const CustomersUpdateForm = () => {

    const [success, setSuccess] = useState(false)


    const initialValues = {
        first_name:'',
        last_name:'',
        subcity:'',
        bloodType:'',
        wereda:'',
        house_number:'',
        house_hold_number:'',
        phone:'',
        medication:'',
        payment_amount:'',
        email:'',
        gender:''
    }

    const subcities = [
        { id: '1', title: 'Bole' },
        { id: '2', title: 'Kaliti' },
        { id: '3', title: '4 kilo' }
    ]
    const bloodType = [
        { id: '1', title: 'A' },
        { id: '2', title: 'B' },
        { id: '3', title: 'Ab' },
        { id: '4', title: 'O' }
    ]

    const items = [
        {id: '1', title: 'Male'},
        {id: '2', title: 'Female'}
    ]

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if('first_name' in fieldValues) {
            temp.first_name = fieldValues.first_name ? "" : " is required"            
        }
        if('last_name' in fieldValues) {
            temp.last_name = fieldValues.last_name ? "" : "last_name is required"
        }
        if('subcity' in fieldValues) {
            temp.subcity = fieldValues.subcity.length != 0 ? "" : "subcity is required"
        }
        if('bloodType' in fieldValues) {
            temp.bloodType = fieldValues.bloodType.length != 0 ? "" : "bloodType is required"
        }
        if('wereda' in fieldValues) {
            temp.wereda = fieldValues.wereda ? "" : "wereda is required"
        }
        
        if('house_number' in fieldValues) {
            temp.house_number = fieldValues.house_number ? "" : "house_number is required"
        }
        if('house_hold_number' in fieldValues) {
            temp.house_hold_number = fieldValues.house_hold_number ? "" : "house_hold_number is required"
        }
        if('phone' in fieldValues) {
            temp.phone = fieldValues.phone ? "" : "phone is required"
        }
        if('medication' in fieldValues) {
            temp.medication = fieldValues.medication ? "" : "medication is required"
        }
        if('payment_amount' in fieldValues) {
            temp.payment_amount = fieldValues.payment_amount ? "" : "payment_amount is required"
        }

        if('gender' in fieldValues) {
            temp.gender = fieldValues.gender ? "" : "gender is required"
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
                            label="First Name"
                            type="text"
                            name="first_name"
                            onChange={handleInputChange}
                            value={values.first_name}
                            error={errors.first_name}
                        />
                        <Controls.Input
                            label="Last Name"
                            type="text"
                            name="last_name"
                            onChange={handleInputChange}
                            value={values.last_name}
                            error={errors.last_name}
                        />
                        <Controls.Input
                            label="Phone Nubmer"
                            type="number"
                            name="phone"
                            onChange={handleInputChange}
                            value={values.phone}
                            error={errors.phone}
                        />
                        <Controls.Select
                            label="Sub City"
                            name="subcity"
                            onChange={handleInputChange}
                            options={subcities}
                            value={values.subcity}
                            error={errors.subcity}
                        />
                        <Controls.Select
                            label="Blood Type"
                            name="bloodType"
                            onChange={handleInputChange}
                            options={bloodType}
                            value={values.bloodType}
                            error={errors.bloodType}
                        />
                        <Controls.Input
                            label="Wereda"
                            type="text"
                            name="wereda"
                            onChange={handleInputChange}
                            value={values.wereda}
                            error={errors.wereda}
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

                    <Controls.Input
                            label="House Number"
                            type="number"
                            name="house_number"
                            onChange={handleInputChange}
                            value={values.house_number}
                            error={errors.house_number}
                        />
                        <Controls.Input
                            label="House Hold Number"
                            type="number"
                            name="house_hold_number"
                            onChange={handleInputChange}
                            value={values.house_hold_number}
                            error={errors.house_hold_number}
                        />
                      <Controls.Input
                            label="Medication"
                            type="text"
                            name="medication"
                            onChange={handleInputChange}
                            value={values.medication}
                            error={errors.medication}
                        />
                        <Controls.Input
                            label="Payment Amount"
                            name="payment_amount"
                            type="number"
                            onChange={handleInputChange}
                            value={values.payment_amount}
                            error={errors.payment_amount}
                        />
                        <Controls.Input
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                            value={values.email}
                            error={errors.email}
                        />

                       <Controls.RadioGroup
                            name="gender"
                            items={items}
                            value={values.gender}
                            onChange={handleInputChange}
                            error={errors.gender}
                        />
                        <StyledButton variant="contained" color="primary" type="submit">
                            Update Customer
                        </StyledButton>
                    </Grid>
                </Grid>
            </Form>
        </div>
    )
}

export default CustomersUpdateForm
