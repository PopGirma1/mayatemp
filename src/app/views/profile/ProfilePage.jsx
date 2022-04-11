import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Alert, Grid } from '@mui/material'
import { styled } from '@mui/system'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./Profile.css"
import AppProfile from '../users/update/UsersUpdateForm';
import TextField from '@mui/material/TextField';
import { useForm, Form } from 'app/components/Controls/UseFrom'
import Controls from 'app/components/Controls/Controls'

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function AccountPage() {

    const [success, setSuccess] = useState(false)

    const initialValues = {
        oldPassword:'',
        newPassword: '',
        confirmNewPassword: '',

    }


    
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if('oldPassword' in fieldValues) {
            temp.oldPassword = fieldValues.oldPassword ? "" : "Old password is required"
        }
        if('newPassword' in fieldValues) {
            temp.newPassword = fieldValues.newPassword ? "" : "New password is required"
        }
        if('confirmNewPassword' in fieldValues) {
            temp.confirmNewPassword = fieldValues.newPassword == fieldValues.confirmNewPassword ? "" : "password does not match"
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
        setValues("")
    }


  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'white'}}>
      <AppBar position="static" style={{backgroundColor:"#232A44"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Change Password" {...a11yProps(1)} />
          <Tab label="Update" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div className='UserProfile'>
        <Stack direction="row" spacing={2} className="ProfileImage">
            <Avatar alt="User Profile" src="/assets/images/avatars/001-man.svg" style={{ height: '200px', width: '200px' }}/>
        </Stack>
       <div className='userProfileList'>
         <div className='userProfileProps'>
         <Typography className='Label'>User Name</Typography>
         <Typography className='Props'>{"{Papa}"}</Typography>
         </div>
       
         <div className='userProfileProps'>
         <Typography className='Label'>First Name</Typography>
         <Typography className='Props'>{"{Papa}"}</Typography>
         </div>
      
       
         <div className='userProfileProps'>
         <Typography className='Label'>Last Name</Typography>
         <Typography className='Props'>{"{Duck}"}</Typography>
         </div>
       
         <div className='userProfileProps'>
         <Typography className='Label'>Email</Typography>
         <Typography className='Props'>{"{Papa@gmail.com}"}</Typography>
         </div>
       
         <div className='userProfileProps'>
         <Typography className='Label'>Phone Number</Typography>
         <Typography className='Props'>{"{0987654321}"}</Typography>
         </div>
        
       
         <div className='userProfileProps'>
         <Typography className='Label'>Gender</Typography>
         <Typography className='Props'>{"{Male}"}</Typography>
         </div>
       
         <div className='userProfileProps'>
         <Typography className='Label'>User Role</Typography>
         <Typography className='Props'>{"{Admin}"}</Typography>
         </div>
       
       </div>
       </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
     
        <div>

            {
                success ? 
                <Alert
                    onClose={handleClose}
                    sx={{ m: 1 }}
                    severity="success"
                    variant="filled"
                >
                You Have Successfully Changed Your Password!
                </Alert>
                :
                null
            }

            <Form onSubmit={handleSubmit} >
                <Grid container spacing={6} className="UserAccount">
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }} >
                        <Controls.Input
                            label="Old PassWord"
                            name="oldPassword"
                            type="password"
                            value={values.oldPassword}
                            onChange={handleInputChange}
                            error={errors.oldPassword}
                        />
                        <Controls.Input
                            label="New PassWord"
                            name="newPassword"
                            type="password"
                            value={values.newPassword}
                            onChange={handleInputChange}
                            error={errors.newPassword}
                        />
                        <Controls.Input
                            label="Confirm PassWord"
                            name="confirmNewPassword"
                            type="password"
                            value={values.confirmNewPassword}
                            onChange={handleInputChange}
                            error={errors.confirmNewPassword}
                        />
                        <div className='btnSave'>
                        <StyledButton variant="contained" color="primary" type="submit" >
                            Save Changes
                        </StyledButton>
                        </div>

                    </Grid>

                </Grid>
            </Form>
        </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
         <AppProfile/>
        </TabPanel>

 

      </SwipeableViews>
    </Box>
  );
}
