import React from 'react'
import AdminNavbar from '../../../components/admin/AdminNavbar'
import AdminRightBar from '../../../components/admin/AdminRightBar'
import AdminSidebar from '../../../components/admin/AdminSidebar'
import AppNavbar from '../../../components/shared/navbar/Navbar'

function Optimiser() {
  return (
    <div className="page-controller">
        <AdminNavbar />
        <div className="body-controller">
          <AdminSidebar />
          <div
              className="main-container"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "0px 2rem",
              }}
            >
              <AppNavbar title="Optimiser" />
          </div>
          <div className="right-bar-controller">
              <AdminRightBar />
            </div>
        </div>
    </div>
  )
}

export default Optimiser