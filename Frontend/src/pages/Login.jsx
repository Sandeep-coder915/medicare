import React, { useState ,useContext} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {BASE_URL} from '../../config'
import { toast } from 'react-toastify'
import {authContext} from '../Context/AuthContext.jsx'
import HashLoader from 'react-spinners/HashLoader.js'
const Login = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: ""
  });
  const[loading,setloading]=useState(false)
  const navigate=useNavigate();
  const {dispatch}=useContext(authContext)

  const handleInputChange = e => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  };


  const submithandler = async event => {

    event.preventDefault();
    setloading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
      })
      const result = await res.json()
      if (!res.ok) {
        throw new Error(result.message)
      }
      
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload:{
          user:result.data,
          token:result.token,
          role:result.role
        }
      })
      console.log(result,"login_data")

      setloading(false)
      toast.success(result.message)
      navigate('/home')

    } catch (err) {
      toast.error(err.message)
      setloading(false)


    }

  
  
  };



  return (
    <section className='px-5 lg:px-0'>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10" style={{ boxShadow: "20px 50px 200px 100px rgba(28,184,195)" }}>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Hello! <span className='text-primaryColor' style={{ color: "rgba(28,184,195)" }}>Welcome </span>Back🎉

        </h3>
        <form action="" className='py-4 md:py-0' onSubmit={submithandler}>
          <div className="mb-5">
            <input type="email"
              placeholder='Enter Your Email'
              name='email'
              value={formdata.email}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-black text-[16px]leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer' required />
          </div>

          {/* ====passwordd=== */}
          <div className="mb-5">
            <input type="password"
              placeholder='Password'
              name='password'
              value={formdata.password}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-black text-[16px]leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px]  cursor-pointer' required />
          </div>

          <div className="mt-7">
            <button
              type='submit'
              className='btn1 w-full text-white text-[18px] leading-[30px] rounded-lg px-4 py-'  >
            {loading ?<HashLoader size={25} color={"#ffffff"} />: 'Login'}

            </button>
          </div>

          <p className='mt-5 text-textColor text-center '>
            Dont Have an Account?? <Link to="/register" className='font-medium ml-1' style={{color:"rgba(28,184,195)"}}>Register</Link>
          </p>
        </form>

      </div>

    </section>
  )
}

export default Login
