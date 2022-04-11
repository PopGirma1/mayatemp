import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
} from '@mui/material'
import React, {useState,useEffect} from 'react'
import { Box, styled } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'
import DeleteAlert from './DeleteAlert';
import './Search.css'
import AddIcon from '@mui/icons-material/Add';
const axios = require('axios');


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

// const subscribarList = [
//     {
//         name: 'john doe',
//         date: '18 january, 2019',
//         amount: 1000,
//         status: 'close',
//         company: 'ABCD Fintech LTD.',
//     },
//     {
//         name: 'kessy bryan',
//         date: '10 january, 2019',
//         amount: 9000,
//         status: 'open',
//         company: 'My Fintech LTD.',
//     },
//     {
//         name: 'kessy bryan',
//         date: '10 january, 2019',
//         amount: 9000,
//         status: 'open',
//         company: 'My1 Fintech LTD.',
//     },
//     {
//         name: 'james cassegne',
//         date: '8 january, 2019',
//         amount: 5000,
//         status: 'close',
//         company: 'Collboy1 Tech LTD.',
//     },
//     {
//         name: 'lucy brown',
//         date: '1 january, 2019',
//         amount: 89000,
//         status: 'open',
//         company: 'ABC1 Fintech LTD.',
//     },
//     {
//         name: 'lucy brown',
//         date: '1 january, 2019',
//         amount: 89000,
//         status: 'open',
//         company: 'ABC2 Fintech LTD.',
//     },
//     {
//         name: 'lucy brown',
//         date: '1 january, 2019',
//         amount: 89000,
//         status: 'open',
//         company: 'ABC3 Fintech LTD.',
//     },
//     {
//         name: 'lucy brown',
//         date: '1 january, 2019',
//         amount: 89000,
//         status: 'open',
//         company: 'ABC4 Fintech LTD.',
//     },
//     {
//         name: 'lucy brown',
//         date: '1 january, 2019',
//         amount: 89000,
//         status: 'open',
//         company: 'ABC5 Fintech LTD.',
//     },
// ];


const CustomersTable = () => {

    const[posts,setPosts] = useState([])
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)
    const [keyword, setKeyword] = useState('');

    useEffect(()=>{
        axios.get("http://localhost:5001/AllCustomers")
        .then(res=> {
            console.log(res)
            setPosts(res.data) 
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const getFilteredUsers = () => {
        return posts.filter((subscribarLists) =>
        keyword === ""
            ? true
            : subscribarLists.first_name.toLowerCase().includes(keyword.toLowerCase())
        );
      }

    const onFormSubmit = async (e) => {
        e.preventDefault();
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

    return (
        <Box width="100%" overflow="auto">
            
                <div className='searchAndAdd'>
                        <form className="searchBarHolder" onSubmit={onFormSubmit}>
                        <input id="search" name="search" type="text" value={keyword} placeholder="Search" className="searchBar" onChange={onInputChange}/>   
                        <SearchIcon className="searchIconPostion"/>
                        </form>
                        <Link to="/customers/add" >
                            <IconButton  style={{backgroundColor:"#31AF91"}}>
                                <AddIcon />
                            </IconButton>
                        </Link>


                </div>

 
            <StyledTable style={{ marginTop:"20px"}}>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>House Number</TableCell>
                        <TableCell>Payment Amount</TableCell>
                        <TableCell>Wereda</TableCell>
                        <TableCell>Sub City</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                
                    {getFilteredUsers().reverse()
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((subscriber, index) => (
                            <TableRow key={index}>
                                
                                <TableCell align="left" > {subscriber.first_name}</TableCell>
                                <TableCell align="left">{subscriber.last_name}</TableCell>
                                <TableCell> {subscriber.email}</TableCell>
                                <TableCell >{subscriber.phone}</TableCell>
                                <TableCell>{subscriber.house_number}</TableCell>
                                <TableCell>{subscriber.payment_amount}</TableCell>
                                <TableCell>{subscriber.wereda}</TableCell>
                                <TableCell>{subscriber.subcity}</TableCell>
                                <TableCell>{subscriber.gender}</TableCell>
                                <TableCell sx={{ display: 'flex' }}>
                                    {/* to view single user */}
                                    <Link to={`/customers/detail/${subscriber.email}`}>
                                        <IconButton>
                                            <Icon color="secondary"><VisibilityIcon/></Icon>
                                        </IconButton>
                                    </Link>
                                    {/* to update user */}
                                    <Link to={`/customers/update/${subscriber.email}`}>
                                        <IconButton>
                                            <Icon color="primary">edit</Icon>
                                        </IconButton>
                                    </Link>
                                    {/* to delete user */}
                                    <DeleteAlert />
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </StyledTable>
            <div className='totalNumberOfCustomers'>
            <p> Total = {posts.length} Customers </p>
            </div>
            <TablePagination
                className='TablePaginationCustomer'
                sx={{ px: 2 }}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={posts.length}
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



export default CustomersTable
