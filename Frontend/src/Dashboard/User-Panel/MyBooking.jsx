import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../../config'
import DoctorCard from "../../Components/Doctors/DoctorCard"
import Loading from '../../Loader/Loading'
import Error from '../../Error/Error'

const MyBooking = () => {
  const { data: appointments = [], loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)

  return (
    <div>
      {
        loading && !error && <Loading />
      }

      {
        error && !loading && <Error errorMessage={error} />
      }
      {
        !loading && !error && (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {appointments.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
        )}


      {!loading && !error && appointments.length===0 && (<h2 className='mt-5 text-center leading-7 text-[20px] font-semibold text-blue-500'>You did not book any appointment </h2>)}



    </div>



  )
}

export default MyBooking
