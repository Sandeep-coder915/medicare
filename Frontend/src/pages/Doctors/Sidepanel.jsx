import React from 'react'
import convertTime from '../../utils/convertTime'
import { BASE_URL, token } from '../../../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
const Sidepanel = ({ doctorId, ticketPrice, timeSlots }) => {
    const bookinghandler = async () => {
        try {
            const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
                method: 'post',
                headers: {

                    Authorization: `Bearer ${token}`

                },

            })
            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.message + "please try again")
            }
            if (data.session.url) {
                window.location.href = data.session.url
            }

        }
        catch (err) {
            toast.error(err.message)

        }
    }

    return (
        <div className="shadow-panelShadow p-3 lg:p-5 rounded-">
            <div className="flex items-center justify-between">
                <p className="text_para mt-0 font-[400]">
                    Ticket Price
                </p>
                <span className='text-[16px] leadin7 lg:text-[22px] lg:legend-8 text-headingColor font-bold'> {ticketPrice = 500}rs</span>
            </div>
            <div className="mt-[30px]">
                <p className="text_para mt-0"> Availible time slots </p>
                <ul className="mt-3">
                    {timeSlots?.map((item, index) => (

                        <li key={index} className="flex items-center justify-between mb-2">
                            <p className='text-[15px] leading-6 text-texColor font-semibold'>{item.day.charAt(0).toUpperCase() + item.day.slice(1)}</p>
                            <p className='text-[15px] leading-6 text-texColor font-semibold'>
                                {item.startingTime}-{convertTime(item.endingTime)}
                            </p>
                        </li>

                    ))}

                </ul>
            </div>
            <Link to="/">  <button
                className='btn px-2 w-full rounded-md'> Book Appointment
            </button></Link>
            {/* <button 
            onClick={bookinghandler}
            className='btn px-2 w-full rounded-md'> Book Appointment</button> */}


        </div>
    )
}

export default Sidepanel


// <li className="flex items-center justify-between mb-2">
// <p className='text-[15px] leading-6 text-texColor font-semibold'>Tuesday</p>
// <p className='text-[15px] leading-6 text-texColor font-semibold'>
//     4:00 PM -9:30PM
// </p>
// </li>

// <li className="flex items-center justify-between mb-2">
// <p className='text-[15px] leading-6 text-texColor font-semibold'>Friday</p>
// <p className='text-[15px] leading-6 text-texColor font-semibold'>
//     4:00 PM -9:30PM
// </p>
// </li>