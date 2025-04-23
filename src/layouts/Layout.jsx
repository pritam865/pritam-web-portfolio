import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout

