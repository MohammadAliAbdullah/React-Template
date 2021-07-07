import React from 'react'
import { AppHeader, AppSidebar, AppBreadcrumb, AppContent, AppFooter } from '../components/partials/index'

const DefaultLayout = () => {
  return (
    <div className="wrapper">
      {/* Preloader */}
      <div className="preloader flex-column justify-content-center align-items-center">
        <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
      </div>
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
