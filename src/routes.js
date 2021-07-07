import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const SetUp = React.lazy(() => import('./views/setup/Dashboard'))
const StudentAddmissionInfo = React.lazy(() => import('./views/setup/Dashboard'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/setup', name: 'Set Up', component: SetUp, exact: true },
    { path: '/setup/student-admission-info', name: 'Student Admission Info', component: StudentAddmissionInfo },
]

export default routes