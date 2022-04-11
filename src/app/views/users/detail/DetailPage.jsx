import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom'
import { getSingleUser } from 'app/redux/actions/UserActions';
import { useDispatch, useSelector } from 'react-redux'
import UpdateProfile from './tabs/Update';
import Profile from './tabs/Profile';
import ChangePassword from './tabs/ChangePassword';
import Status from './tabs/Status';

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

export default function DetailPage() {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const dispatch = useDispatch()

  const vieweduserid = location.pathname.split('/')[3]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const userdetail = useSelector((state) => state.user)
  console.log(userdetail)

  React.useEffect(() => {
    dispatch(getSingleUser(vieweduserid))
  }, [])

  return (
    <Box sx={{ bgcolor: 'white'}}>
      <AppBar position="static" style={{backgroundColor:"#232A44",overflow:"auto"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          className='tabWidth'
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Update" {...a11yProps(1)} />
          <Tab label="Change Password" {...a11yProps(2)} />
          <Tab label="Status" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* profile tab */}
        <TabPanel value={value} index={0} dir={theme.direction}>
            <Profile />
        </TabPanel>

        {/* update profile tab */}
        <TabPanel value={value} index={1} dir={theme.direction}>
            <UpdateProfile 
               username={userdetail?.userList[0]?.username}
               first_name={userdetail?.userList[0]?.first_name}
               last_name={userdetail?.userList[0]?.last_name}
               phone_number={userdetail?.userList[0]?.phone_number}
               email={userdetail?.userList[0]?.email}
               gender={userdetail?.userList[0]?.gender}
               user_role={userdetail?.userList[0]?.user_role[0]}
            />
        </TabPanel>

        {/* change password tab  */}
        <TabPanel value={value} index={2} dir={theme.direction}>
            <ChangePassword />
        </TabPanel>

        {/* status tab  */}
        <TabPanel value={value} index={3} dir={theme.direction}>
            <Status />
        </TabPanel>

      </SwipeableViews>
    </Box>
  );
}

