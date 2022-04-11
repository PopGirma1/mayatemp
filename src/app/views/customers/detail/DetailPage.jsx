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
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./Profile.css"
import AppProfile from '../update/CustomersUpdateForm';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import StoreIcon from '@mui/icons-material/Store';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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

    const[posts,setPosts] = useState([])


    // useEffect(()=>{
    //     const  getData =async({query:email})=> {
    //         const {posts} =  await axios.get(`/customerDetails/${email}`);
    //         console.log(posts);
    //         setPosts(posts.docs)
    //     };
    //     getData();

    // },[]);


    const [checked, setChecked] = React.useState(['3m']);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };



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
          <Tab label="General Profile" {...a11yProps(0)} />
          <Tab label="Service Type" {...a11yProps(1)} />
          <Tab label="Update" {...a11yProps(2)} />
          <Tab label="Status" {...a11yProps(3)} />
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
                {/* {posts.map((subscriber, index) => ( */}
                <div className='userProfileList' key={"index"}>
                <div className='userProfileProps'>
                <Typography className='Label'>Phone Number</Typography>
                <Typography className='Props'>{"subscriber.phone"}</Typography>
                </div>

                <div className='userProfileProps'>
                <Typography className='Label'>First Name</Typography>
                <Typography className='Props'>{"subscriber.first_name"}</Typography>
                </div>


                <div className='userProfileProps'>
                <Typography className='Label'>Last Name</Typography>
                <Typography className='Props'>{"subscriber.last_name"}</Typography>
                </div>

                <div className='userProfileProps'>
                <Typography className='Label'>Email</Typography>
                <Typography className='Props'>{"subscriber.email"}</Typography>
                </div>
                    
                <div className='userProfileProps'>
                <Typography className='Label'>Gender</Typography>
                <Typography className='Props'>{"subscriber.gender"}</Typography>
                </div>

                <div className='userProfileProps'>
                <Typography className='Label'>Sub City</Typography>
                <Typography className='Props'>{"subscriber.subcity"}</Typography>
                </div>
                <div className='userProfileProps'>
                <Typography className='Label'>Wereda</Typography>
                <Typography className='Props'>{"subscriber.wereda"}</Typography>
                </div>
                <div className='userProfileProps'>
                <Typography className='Label'>House Number</Typography>
                <Typography className='Props'>{"subscriber.house_number"}</Typography>
                </div>

                <div className='userProfileProps'>
                <Typography className='Label'>House Hold Number</Typography>
                <Typography className='Props'>{"subscriber.house_hold_number"}</Typography>
                </div>
                <div className='userProfileProps'>
                <Typography className='Label'>Blood Type</Typography>
                <Typography className='Props'>{"subscriber.bloodType"}</Typography>
                </div>
                <div className='userProfileProps'>
                <Typography className='Label'>Medication</Typography>
                <Typography className='Props'>{"subscriber.medication"}</Typography>
                </div>

                <div className='userProfileProps'>
                <Typography className='Label'>Location</Typography>
                <Typography className='Props'>{"{9.0046464,38.7678208}"}</Typography>
                </div>
                </div>

                {/* ))} */}

                </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
     
         <div className='service'>
           <div>
            <List
                    sx={{ width: '100%',  bgcolor: 'background.paper' }}
                    subheader={<ListSubheader>Current Service of Customer </ListSubheader>}
                >

                {checked.reverse().map((item,index) => (
                    <ListItem divider key={index} className="addService">
                      <ListItemText primary={item} />
                    </ListItem>
                ))}
             </List>
           </div>
           <div>
           <List
                    sx={{ width: '100%',  bgcolor: 'background.paper' }}
                    subheader={<ListSubheader>All Available Services</ListSubheader>}
                >
            <ListItem>
                <ListItemIcon>
                  <ConnectedTvIcon/>
                </ListItemIcon>
                <ListItemText id="switch-list-label-canal+" primary="Canal +" />
                <Switch
                edge="end"
                onChange={handleToggle('canal+')}
                checked={checked.indexOf('canal+') !== -1}
                inputProps={{
                    'aria-labelledby': 'switch-list-label-canal+',
                }}
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <StoreIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-3m" primary="3m" />
                <Switch
                edge="end"
                onChange={handleToggle('3m')}
                checked={checked.indexOf('3m') !== -1}
                inputProps={{
                    'aria-labelledby': 'switch-list-label-3m',
                }}
                />
            </ListItem>

            <ListItem>
                <ListItemIcon>
                <StoreIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-3m" primary="tele birr" />
                <Switch
                edge="end"
                onChange={handleToggle('telebirr')}
                checked={checked.indexOf('telebirr') !== -1}
                inputProps={{
                    'aria-labelledby': 'switch-list-label-telebirr',
                }}
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <StoreIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-3m" primary="hello cash" />
                <Switch
                edge="end"
                onChange={handleToggle('hellocash')}
                checked={checked.indexOf('hellocash') !== -1}
                inputProps={{
                    'aria-labelledby': 'switch-list-label-hellocash',
                }}
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <StoreIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-3m" primary="yimulu" />
                <Switch
                edge="end"
                onChange={handleToggle('yimulu')}
                checked={checked.indexOf('yimulu') !== -1}
                inputProps={{
                    'aria-labelledby': 'switch-list-label-yimulu',
                }}
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <LocalPhoneIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-3m" primary="safari com" />
                <Switch
                edge="end"
                onChange={handleToggle('safaricom')}
                checked={checked.indexOf('safaricom') !== -1}
                inputProps={{
                    'aria-labelledby': 'switch-list-label-safaricom',
                }}
                />
            </ListItem>

            </List>
           </div>
         </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
         <AppProfile/>
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
            <div className='paymentStatusHolder'>
            <FormControl component="fieldset">
                <FormLabel component="legend">Payment Status </FormLabel>
                <RadioGroup
                aria-label="payment"
                defaultValue="Draft"
                name="radio-buttons-group"
                className='paymentStatus'
                >
                <FormControlLabel value="UnPaid" control={<Radio />} label="UnPaid" />
                <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
                <FormControlLabel value="Overdue" control={<Radio />} label="Overdue" />
                <FormControlLabel value="Draft" control={<Radio />} label="Draft" />
                </RadioGroup>
            </FormControl>
            </div>

        </TabPanel>

      </SwipeableViews>
    </Box>
  );
}

