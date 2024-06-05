import React from 'react'
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = ({ name, about, qualifications, experiences }) => {
    return (
        <div>
            <div>

                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold text-[600] flex items-center gap-2 ">About
                    <span className=' font-bold text-[24px] leading-9' style={{ color: " rgba(28,184,195)" }}>{name}</span></h3>
                <p className="text_para">

                    {about}
                </p>
            </div>

            <div className="mt-12">
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Educations</h3>
                <ul className="pt-4 md:p-5">
                    {qualifications?.map((item,index)=>
                    
                    <li  key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className='text-irisBlueColor text-[20 px] leading-6 font-semibold ' style={{ color: " rgba(28,184,195)" }}>{formateDate(item.startingDate)}-{formateDate(item.endinngDate)}</span>
                            <p className='text-[16px] leading-6 font-medium text-textColor' >{item.degree}</p>
                        </div>
                        <p className='text-[16px] leading-5 font-medium text-textColor' >{item.university}</p>
                    </li>)} 
                    {/* <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className='text-irisBlueColor text-[20 px] leading-6 font-semibold ' style={{ color: " rgba(28,184,195)" }}>{formateDate("04-06-2010")}-{formateDate(
                                "09-13-2014")}</span>
                            <p className='text-[15px] leading-6 font-medium text-textColor' >PHD in Surgeon</p>
                        </div>
                        <p className='text-[16px] leading-5 font-medium text-textColor' >New Apollo Hospital,jalandhar</p>
                    </li> */}

                </ul>
            </div>
            <div className="mt-12">
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experiance</h3>
                <ul className=' flex gap-[30px]'>
                {experiences?.map((item,index)=>
            
            <li 
            key={index}
            className="p-4 rounded bg-[#fff9ea]">
            <span className=" text-[15px] leading-6 font-semibold 
             " style={{ color: "yellowgreen" }}>{formateDate(item.startingDate)}-{formateDate( item.endinngDate)}</span>
            <p className='text-[16px] leading-6 font-medium text-textColor' style={{ color: "yellowgreen" }} >{item.position}</p>
            <p className='text-[16px] leading-5 font-medium ' style={{ color: "yellowgreen" }}>{item.hospital} </p>

        </li>     
            )}



                </ul>


            </div>


        </div>
    )
}

export default DoctorAbout
