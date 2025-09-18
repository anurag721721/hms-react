import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'

const AppRoutes = () => {
    return (
        <div className=' flex'>
            <Sidebar />
            <div className=' w-full' >
                <Header />
            </div>
        </div>
    )
}

export default AppRoutes
