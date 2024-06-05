import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import { useParams } from 'react-router-dom'
import { BASE_URL ,token} from '../../../config'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'



// import React, { useState } from 'react'
// import { AiFillStar } from "react-icons/ai"
// import { useParams } from 'react-router-dom'
// import { BASE_URL, token } from '../../../config'
// import { toast } from 'react-toastify'
// import HashLoader from 'react-spinners/HashLoader'

const FeedbackForm = () => {
  const [rating, setrating] = useState(0)
  const [hover, sethover] = useState(0)
  const [reviewText, setreviewText] = useState("")
  const [loading, setloading] = useState(false)
  const { id } = useParams()

  const handlesubmit = async (e) => {
    e.preventDefault()
    setloading(true)

    if (!rating ||!reviewText) {
      setloading(false)
      return toast.error("Please fill all the fields")
    }

    try {
      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          rating,
          reviewText
        })
      })
      const result=await res.json()
      if(!res.ok){
          throw new Error(result.message)
      }
      setloading(false)
      toast.success(result.message)
  
    } catch (error) {
      setloading(false)
      toast.error("An error occurred. Please try again later.")
    }
  }

  return (
    // Your JSX code here
    
    <form action="">
    <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>How Would You Rate the overall experiance *</h3>
        <div>
            {
                [...Array(5).keys()].map((_, index) => {
                    index += 1
                    return <button
                        key={index}
                        type='button'
                        className={`${index <= ((rating && hover) || hover) ? "text-yellow-400" : "text-gray-400"}
bg-transparent border-none outline-none text-[22px] cursor-pointer `}
                        onClick={() => setrating(index)}
                        onMouseEnter={() => sethover(index)}
                        onMouseLeave={() => sethover(rating)}
                        onDoubleClick={() => {
                            sethover(0);
                            setrating(0)
                        }}>
                        <span><AiFillStar /></span>
                    </button>
                })
            }


        </div>
    </div>

    <div className="mt-[30px]">
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>Share Your FeeDBack Or Suggestions *</h3>
      <textarea className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md row-5' placeholder='Write your message ' onChange={e=>setreviewText(e.target.value)}></textarea>

    </div>
    <button type='submit' className='btn' onClick={handlesubmit}>
       {loading ?<HashLoader size={25} color='#0067FF'/>: 'Submit feedback'}
        </button>




</form>
  )
}

export default FeedbackForm