import React, { useContext } from 'react'
import { BiMenu } from 'react-icons/bi'
import { authContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const TABS = ({ tab, setTab }) => {

    const { dispatch } = useContext(authContext)
    const navigate = useNavigate();

    const handlelogout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
    }

    return (


        <div>
            
            {/* <span className='lg:hidden'>
                <BiMenu className='w-6 h-6 cursor-pointer' />
            </span> */}
            <div className="hidden lg:flex flex-col gap-[30px] bg-white shadow-panelShadow  items-center rounded-md ">
                <button
                    onClick={() => setTab('overview')}
                    className={`${tab === 'overview' ? 'bg-indigo-100 text-yellow-600' : 'bg-transparent text-headingColor'} mt-0 rounded-md`} style={{ width: "250px", height: "50px" }}>Overview</button>
                <button
                    onClick={() => setTab('appointments')} className={`${tab === 'appointments' ? 'bg-indigo-100 text-yellow-600' : 'bg-transparent text-headingColor'}  mt-0 rounded-md`} style={{ width: "250px", height: "50px" }}>Appointment</button>
                <button
                    onClick={() => setTab('settings')}
                    className={`${tab === 'settings' ? 'bg-indigo-100 text-yellow-600' : 'bg-transparent text-headingColor'}  mt-0 rounded-md`} style={{ width: "250px", height: "50px" }}>Profile</button>

                <div className="m-[100px ] w-full ">
                <button
                        onClick={handlelogout}
                        className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'  >Logout</button>
                <button className='w-full bg-red-600 mt-4 p-3 text-[16px]  leading-7 rounded-md text-white'>Delete Account
                </button>

                </div>

            </div>

        </div>
    )
}

export default TABS
