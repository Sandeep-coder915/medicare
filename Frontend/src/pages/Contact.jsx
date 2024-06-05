import React from 'react'

const Contact = () => {
  return (<section>
  <div className="px-4 mx-auto max-w-screen-md">
    <h2 className="heading text-center">Contact Us</h2>
    <p className="mb-8 lg:mb:16 font-light text-center text_para">
      Got a Technical issue?want to send feedback?Reach out to us through our social media handles .want to send feedback abput a beta feature?let Us Know 
    </p>
<form className='space-y-8'>
  <div>
    <label htmlFor="email"  className='text-textColor font-semibold text-[15px] leading-7'>Your Email</label>
    <input type="email" id="email"   className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-black text-[16px]leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer rounded-md' required placeholder='exaple@gmail.com' />

  </div>
  <div>
    <label htmlFor="subject"  className='text-textColor font-semibold text-[15px] leading-7'>Subject</label>
    <input type="text" id="subject"   className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-black text-[16px]leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer rounded-md' required placeholder='Lets Us Know How Can We Help You' />

  </div>
  <div className='sm:col-span-2'> 
    <label htmlFor="message"  className='text-textColor font-semibold text-[15px] leading-7'>Your Message </label>
    <textarea 
    rows='6'
    type="text" id="message"   className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-black text-[16px]leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer rounded-md' required placeholder='Lets Us Know How Can We Help You' style={{borderColor:"rgb(0, 119, 255)"}} />

  </div>
  <button type='submit' className=' rounded sm:w-fit' style={{width:'100%',backgroundColor:"rgb(0, 119, 255)"}}>Submit</button>
</form>
    
  </div>
  </section>
  )
}

export default Contact
