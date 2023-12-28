import React from 'react'
import { DndProvider } from 'react-dnd'
import { Link, NavLink, Outlet } from 'react-router-dom'


const Deshboard = () => {
    return (
        <div className="flex ">
            <div className="w-64 min-h-screen bg-blue-300 pt-5">
                <ul className="menu menu-xs bg-blue-200 w-56 rounded-box">
                    <li className="flex space-x-4 text-2xl font-bold text-red-300">

                        <NavLink to='/deshboard/createtask'> Create Task</NavLink>
                    </li>
                    <li className="flex space-x-4 text-2xl font-bold text-red-300">

                        <NavLink to='/deshboard/mytask'> My Task</NavLink>
                    </li>
                    <div className="divider"></div>
                    <NavLink
                        to='/'
                        className=' px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                        Home
                    </NavLink>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default Deshboard
