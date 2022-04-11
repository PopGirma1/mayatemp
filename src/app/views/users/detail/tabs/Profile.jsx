import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import "./Profile.css"

function Profile() {

  const userdetail = useSelector((state) => state.user)
  console.log(userdetail)

  const gendervalues = ['male', 'female']
  const userrolevalues = ['super_admin', 'admin',  'sales']

  return (
    <div className='UserProfile'>
        <Stack direction="row" spacing={2} className="ProfileImage">
            <Avatar alt="User Profile" src="/assets/images/avatars/001-man.svg" style={{ height: '200px', width: '200px' }}/>
        </Stack>
        {
          userdetail?.userList.map((user) => (
            <div className='userProfileList' key={user._id}>

              <div className='userProfileProps'>
              <Typography className='Label'>User Name</Typography>
              <Typography className='Props'>{user.username}</Typography>
              </div>

              <div className='userProfileProps'>
              <Typography className='Label'>First Name</Typography>
              <Typography className='Props'>{user.first_name}</Typography>
              </div>

              <div className='userProfileProps'>
              <Typography className='Label'>Last Name</Typography>
              <Typography className='Props'>{user.last_name}</Typography>
              </div>

              <div className='userProfileProps'>
              <Typography className='Label'>Phone Number</Typography>
              <Typography className='Props'>{user.phone_number}</Typography>
              </div>

              <div className='userProfileProps'>
              <Typography className='Label'>Email</Typography>
              <Typography className='Props'>{user.email}</Typography>
              </div>

              <div className='userProfileProps'>
              <Typography className='Label'>Gender</Typography>
              <Typography className='Props'>{gendervalues[user.gender]}</Typography>
              </div>

              <div className='userProfileProps'>
              <Typography className='Label'>User Role</Typography>
              <Typography className='Props'>{userrolevalues[user.user_role]}</Typography>
              </div>

            </div>
          ))
        }
    </div>
  )
}

export default Profile