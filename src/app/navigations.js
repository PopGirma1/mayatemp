export const navigations = [
    {
        label: 'Dashboard',
        type: 'label',
    },
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },
    {
        label: 'Users',
        type: 'label',
    },
    {
        name: 'Users',
        icon: 'person',

        children: [
            {
                name: 'Add',
                path: '/users/add',
                iconText: 'A',
            },
            {
                name: 'View',
                path: '/users/view',
                iconText: 'V',
            },
        ],
    },
    {
        label: 'Customers',
        type: 'label',
    },
    {
        name: 'Customers',
        icon: 'person_pin_circle',

        children: [
            {
                name: 'Add',
                path: '/customers/add',
                iconText: 'A',
            },
            {
                name: 'View',
                path: '/customers/view',
                iconText: 'V',
            },
        ],
    },
    {
        label: 'Maps',
        type: 'label',
    },
    {
        name: 'Maps',
        icon: 'pin_drop',
        path: '/map',
    },
]
