import React from 'react'
import "./layout.css"
import NavBar from './navbar/navbar';
const Layout = ( { children } ) => {
  return (
    <>
      <NavBar></NavBar>
      <div className="bg-blue-500">
        {children}
      </div>
    </>
  )
}

export default Layout;
