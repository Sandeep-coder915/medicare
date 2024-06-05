import React, { useEffect, useState } from 'react'
import DoctorCard from '../../Components/Doctors/DoctorCard'
import { doctors } from "../../assets/data/doctors"
import Testimonials from '../../Components/Testimonials/Testimonials'
import { BASE_URL } from '../../../config';
import useFetchData from '../../hooks/useFetchData'
import Loader from "../../Loader/Loading"
import Error from "../../Error/Error"


const Doctors = () => {
  const [query,setquery]=useState('')
  const[debounceQuery,setdebounceQuery]=useState("")


  const handlesearch=()=>{
    setquery(query.trim())
    console.log('handle search')

  };
  

  useEffect(()=>{
    const timeout=setTimeout(() => {
      setdebounceQuery(query)
    },700);
    return ()=>clearTimeout(timeout)
  },[query] )

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${query}`)


  return (
    <>

      {loading && <Loader />}
      {error && <Error />}

      {/* ===search baar=== */}
      <section className='bg-[#fff9ea]'>
        <div className="container text-center" >
          <h2 className='heading'>
            FInd A Doctor
          </h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input
              type="search"
              className='"py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder::text-textColor'
              placeholder='Search Doctors by name or specialization' 
              value={query}
              onChange={e=>setquery(e.target.value)}
              />
            <button className='btn mt-0 rounded-[0px] rounded-r-md'
            onClick={handlesearch} >Search
            </button>
          </div>
        </div>
      </section>

      {/* ====serchbarend-==== */}
      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}

       { !loading && !error &&  
       (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
            {doctors.map((doctor) =>
              <DoctorCard key={doctor.id} doctor={doctor} />)}

          </div>)}

        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>What Our Patient Say </h2>
            <p className='text_para'>
              World Class Care For Everyone .Our Health System Offers Unmartched ,expert Health care
            </p>

          </div>

          <Testimonials />
        </div>
      </section>

    </>
  )
}

export default Doctors
