import React from 'react'
import { AppHeader, AppSidebar, AppBreadcrumb, AppContent, AppFooter } from '../components/partials/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="wrapper">
      {/* Preloader */}
    
      {/* Navbar */}
      <AppHeader />
      {/* Main Sidebar Container */}
      <AppSidebar />
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <AppBreadcrumb />
        {/* /.content-header */}
        {/* Main content */}
        <AppContent />
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      <AppFooter />
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
    </div>
  )
}

export default DefaultLayout
