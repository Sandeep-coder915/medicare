import React from 'react'
import { Link } from 'react-router-dom'

const CheckOutSuccess = () => {
  return (
    <div className='bg-gray-100 h-screen'>
        <div className="bg-white p-6 md:mx-auto">
            helllooo
        </div>
        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center"paymet Done></h3>
            <p className="text-gray-600">
                thank you complting your secureonline payment 
            </p>
            <p>have a great day</p>
            <div className="py-10">
                <Link to='/' className="text-indigo-600 hover:text-indigo-500">
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Home
                    </button>
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default CheckOutSuccess
