import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
    Button,
} from '@mui/material'
import React, { useEffect, useState} from 'react'
import { Box, styled } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'
import DeleteAlert from './DeleteAlert';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import {  getUsers } from '../../../redux/actions/UserActions'
import { useDispatch } from 'react-redux';

const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    width:"150%",
    [theme.breakpoints.down('sm')]: {
        width: '500%',
        padding: 10,
        margin: 0,
        overflowX:"scroll",
    },
    [theme.breakpoints.down('md')]: {
        width: '500%',
        padding: 10,
        margin: 0,
        overflowX:"scroll",
    },
    [theme.breakpoints.down('lg')]: {
        width: '500%',
        padding: 10,
        margin: 0,
        overflowX:"scroll",
    },
    [theme.breakpoints.down('xl')]: {
        width: '400%',
        padding: 10,
        margin: 0,
        overflowX:"scroll",
    },
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 10,
                paddingRight: 0,
                backgroundColor:"#E5E5E5"

            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 10,
                textTransform: 'capitalize',
            },
        },
    },
}))

;

const UsersTable = () => {

    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)
    const dispatch = useDispatch()

    // const [users, setUsers] = useContext(UserContext)
    // console.log(users)

    const users = useSelector((state) => state.user)
    console.log("users: ", users)

    const [keyword, setKeyword] = useState('');
    // const history = useRouter();

    const getFilteredUsers = () => {
        return users?.userList?.filter((user) =>
        keyword === ""
            ? true
            : user.first_name.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        // history.push(`/search?q=${keyword}`)
    };

    const onInputChange = async (e) => {
        setKeyword(e.target.value)
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const gendervalues = ['male', 'female']
    const userrolevalues = ['super_admin', 'admin',  'sales']

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <Box width="100%" overflow="auto">
            <div className='searchAndAdd'>
              <form className="searchBarHolder" onSubmit={onFormSubmit}>
                <input id="search" name="search" type="text" value={keyword} placeholder="Search" className="searchBar" onChange={onInputChange}/>   
                <SearchIcon className="searchIconPostion"/>
                {/* <button>hi</button> */}
              </form>
              <Link to="/users/add">
                <IconButton style={{backgroundColor:"#31AF91"}}>
                  <AddIcon/>
                </IconButton>
              </Link>
            </div>
            <StyledTable className="main-container" style={{marginTop:"2%"}}>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                {
                    users?.userList?.length > 0 ? 
                    <TableBody>
                        {getFilteredUsers()
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        ).map((user) => (
                                <TableRow key={user._id}>
                                    <TableCell align="left">
                                        {user.first_name}
                                    </TableCell>
                                    <TableCell align="left">
                                        {user.last_name}
                                    </TableCell>
                                    <TableCell align="left">
                                        {user.phone_number}
                                    </TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{gendervalues[user.gender]}</TableCell>
                                    <TableCell>{userrolevalues[user.user_role]}</TableCell>
                                    <TableCell sx={{ display: 'flex' }}>
                                        {/* to view single user */}
                                        <Link to={`/users/detail/${user._id}`}>
                                            <IconButton>
                                                <Icon color="secondary"><VisibilityIcon/></Icon>
                                            </IconButton>
                                        </Link>
                                        {/* to update user */}
                                        <Link to={`/users/update/${user.username}`}>
                                            <IconButton>
                                                <Icon color="primary">edit</Icon>
                                            </IconButton>
                                        </Link>
                                        {/* to delete user */}
                                        <DeleteAlert />
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                        {/* } */}
                    </TableBody>
                    :
                    null
                }
            </StyledTable>
            <div className='totalNumberOfCustomers'>
            <p> Total = {users?.userList.length} Users </p>
            </div>
            <TablePagination
                sx={{ px: 2 }}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={4}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    )
}

export default UsersTable
