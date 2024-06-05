import React from 'react'
import aboutimg from '../../assets/images/about.png'
import aboutCardimg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
   <section>
    <div className="container">
        <div className="flex  gap-[50px] justify-between lg:gap-[130px] xl:gap-0 flex-col lg:flex-row "> 
        
        
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] x-10 order-2 lg:order-1">
            <img src={aboutimg} alt="" />
            <div className="absolute z-20 bottom-4 w-200px] md:w-[300px] right-[-30%] md:right-[-7%] lg-right-[22%]">
               <img src={aboutCardimg} alt="" />
            </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading" style={{fontSize:"44px" ,fontWeight:"700",fontFamily:' "Manrope", sans-serif'}}>Proud  To Be One Of The Nation  Best  </h2>
            <p className="text_para" style={{fontFamily:' "Manrope", sans-serif',fontSize:"18px",fontWeight:"400",textAlign:"justify"}}>for 30  years in a row ,us news ans wolrd report has recognized as  one f 
            of the best  publicies  hospiltals  in  the nation  na d #1 in texsas .lorem ispus dolor siramet cosceptur aduspicing  rlit """?</p>
            <p className="text_para mt-[30px]" style={{fontFamily:' "Manrope", sans-serif',fontSize:"18px",fontWeight:"400",textAlign:"justify"}}>our best is somethind we strive for wach day acring dfor our  patients nor looking backata what weaccomplished but towards what wecan do tommarow .providung the best lprem dolor spilt amer consceptor addipsivting elit aliwuid amird  ?</p>
         
         
        <Link to="/">  <button className='btn'> Learn More </button></Link>
        
        </div>
        </div>
    </div>
   </section>
  )
}

export default About
