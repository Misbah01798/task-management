import React from 'react'
import { Outlet } from 'react-router-dom'

const Deshboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-300">
                <ul className="menu menu-xs bg-blue-200 w-56 rounded-box">
                    <li className="flex space-x-4 text-2xl font-bold text-red-300">

                        <NavLink to='/dashboard/'><FaUser></FaUser> Manage User</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default Deshboard