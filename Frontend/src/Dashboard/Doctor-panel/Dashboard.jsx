import React, { useState } from 'react'
import Loader from '../../Loader/Loading'
import Error from '../../Error/Error'
import userGetProfile from '../../hooks/useFetchData'
import { BASE_URL } from '../../../config'
import TABS from './TABS'
// import vrinda from '../../assets/images/doctor-img03.png'
import starticon from '../../assets/images/Star.png'
import DoctorAbout from '../../pages/Doctors/DoctorAbout'
 
import Profile from './Profile'
import Appointments from './Appointments'
const Dashboard = (doctor) => {
  const { data, loading, error } = userGetProfile(`(${BASE_URL}/doctors/profile/me)`)

  const [tab, setTab] = useState("overview")

  return (

    <section>
      <div className="max-w-[1160px] px-5 mx-auto">
        {
          loading && !error && <Loader />
        }
        {
          error && !loading && <Error errorMessage={error} />

        }

        <div className='grid lg:grid grid-cols-3 gap-[30px] lg:gap-[50px]'>
          <TABS tab={tab} setTab={setTab} />
          <div className="lg:col-span-2">
            {doctor.isApproved === 'approved' && (<div className='flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg'>
              <svg aria-hidden="true"
                className='flex-shrink-0 w-5 h-5'
                fill="fillColor"
                viewBox='0 0 20 20 '
                xmlns='http://www.w3.org/2000/svg'
              >
                <path fillRule='evenodd'
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule={evenodd}
                >



                </path>


              </svg>
              <span className='sr-only'>Info</span>
              <div className='ml-3 text-sm font-medium'>
                TO get approvel please complete your profile .review manuaaly and approve within 3 days
              </div>

            </div>)}
            <div className="mt-8">

              {tab === 'overview' && (<div>

                <div className="flex items-center gap-4 mb-10">
                  <figure className='max-w-[200px] max-h-[200px]'></figure>
                  <div>
                    <span className='bg-[#CCF0F3] text-irisBLueColor py-2 px-4 lg:py-2 lg:px-6 rounded-md'>{doctor.specilization} surgen</span>
                    <h3 className='text-[22px] leading-9 font-bold text-headingColor mt-3'>{data.name} </h3>
                    <div className='flex items-center gap-[6px] '>
                      <span className='flex
                       items-center gap-[6px] text-headingColor text-[14px]  leading-5 lg:text-[16px] lg:leading-6 font-semibold '>
                        <img src={starticon} alt="" />{data.averagrRating}
                      </span>
                      <span className='text-textColor  text-[14px]  leading-5 lg:text-[16px] lg:leading-6 font-semibold '>
                    ({data.totalRating})
                      </span>

                    </div>
                    <p className='text_para font-[15px] lg:max-w-[390px] leading-6'>{data?.bio}</p>
                  </div>
                </div>
                <DoctorAbout 
                name={data.name} 
                about={data.about} 
                qualification={data.qualification} 
                experiences={data.experiences} />

              </div>)}



              {tab === 'appointments' && <Appointments appointments={data.appointments} />}
              {tab === 'settings' && <Profile doctorData={data}/>}

            </div>



          </div>
        </div>
      </div>
    </section>

  )
}

export default Dashboard
