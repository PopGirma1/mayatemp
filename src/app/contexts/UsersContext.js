import React, { useState, createContext } from 'react'

export const UserContext = createContext({})

export const UserProvider = props => {
    const [users, setUsers] = useState([
        {
            name: 'jane doe',
            date: '18 january, 2019',
            amount: 1000,
            status: 'close',
            company: 'ABC Fintech LTD.',
        },
        // {
        //     name: 'kessy bryan',
        //     date: '10 january, 2019',
        //     amount: 9000,
        //     status: 'open',
        //     company: 'My Fintech LTD.',
        // },
        // {
        //     name: 'kessy bryan',
        //     date: '10 january, 2019',
        //     amount: 9000,
        //     status: 'open',
        //     company: 'My Fintech LTD.',
        // },
        // {
        //     name: 'james cassegne',
        //     date: '8 january, 2019',
        //     amount: 5000,
        //     status: 'close',
        //     company: 'Collboy Tech LTD.',
        // },
        // {
        //     name: 'lucy brown',
        //     date: '1 january, 2019',
        //     amount: 89000,
        //     status: 'open',
        //     company: 'ABC Fintech LTD.',
        // },
        // {
        //     name: 'lucy brown',
        //     date: '1 january, 2019',
        //     amount: 89000,
        //     status: 'open',
        //     company: 'ABC Fintech LTD.',
        // },
        // {
        //     name: 'lucy brown',
        //     date: '1 january, 2019',
        //     amount: 89000,
        //     status: 'open',
        //     company: 'ABC Fintech LTD.',
        // },
        // {
        //     name: 'lucy brown',
        //     date: '1 january, 2019',
        //     amount: 89000,
        //     status: 'open',
        //     company: 'ABC Fintech LTD.',
        // },
        // {
        //     name: 'lucy brown',
        //     date: '1 january, 2019',
        //     amount: 89000,
        //     status: 'open',
        //     company: 'ABC Fintech LTD.',
        // }
        ]
    )

    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}