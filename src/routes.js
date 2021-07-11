import React from 'react'
const Dashboard = React.lazy(() => import('./views/Dashboard'))
const Icons = React.lazy(() => import('./views/Icons'))
const Notifications = React.lazy(() => import('./views/Notifications'))
const TableList = React.lazy(() => import('./views/TableList'))
const Typography = React.lazy(() => import('./views/Typography'))
const Upgrade = React.lazy(() => import('./views/Upgrade'))
const UserProfile = React.lazy(() => import('./views/UserProfile'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/icon', exact: true, name: 'Set Up', component: Icons },
    { path: '/notifications', exact: true, name: 'Set Up', component: Notifications },
    { path: '/table', exact: true, name: 'Set Up', component: TableList },
    { path: '/typography', exact: true, name: 'Set Up', component: Typography },
    { path: '/upgrade', exact: true, name: 'Set Up', component: Upgrade },
    { path: '/user', exact: true, name: 'Set Up', component: UserProfile },
]

export default routes
