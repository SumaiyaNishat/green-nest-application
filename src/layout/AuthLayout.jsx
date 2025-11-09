import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className='bg-base-200 min-h-screen'>
        <header className='w-11/12 mx-auto py-2'>
            <Navbar></Navbar>
        </header>
        <main className=''>
            <Outlet></Outlet>
        </main>
    </div>
  )
}

export default AuthLayout;
