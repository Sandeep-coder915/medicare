import { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import uploadIMageToCloudinary from '../../utils/uploadCloudinary.js'
import { BASE_URL, token } from '../../../config'
import { toast } from 'react-toastify'
const Profile = ({doctorData}) => {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password:"",
        phone: "",
        bio: "",
        gender: "",
        specialization: "",
        ticketPrice: 0,
        qualifications: [{
            startingDate: "",
            endingDate: "",
            degree: 'PHD',
            university: 'dav college '

        }],
        experiences: [],
        timeslots: [],
        about: '',
        photo: null,
    })
    useEffect(()=>{
        setformData({
            name:doctorData?.name,
            email:doctorData?.email,
           
            phone:doctorData?.phone,
            bio:doctorData?.bio,
            gender:doctorData?.gender,
            specialization:doctorData?.specialization,
            ticketPrice:doctorData?.ticketPrice,
            qualifications:doctorData?.qualifications,
            experiences:doctorData?.experiences,
            timeslots:doctorData?.timeslots,
            about:doctorData?.about,
            photo: doctorData?.photo,
        })
    },[doctorData])


    const handleInputChange = e => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleFileInputChange = async event => {
        const file = event.target.files[0]
        const data = await uploadIMageToCloudinary(file)

        setformData({ ...formData, photo: data?.url })
    };
    const updateProfileHandler = async e => {
        e.preventDefault()

        try {
            const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`,{
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })
            const result =await res.json();
            if(!res.ok){
                throw new Error(result.message)
            }
            toast.success(result,message)
        }
        catch (err) {
            toast.error(err.message)
        }

    };

    //reusable d\function for adding item  
    const addItem = (key, item) => {
        setformData(prevformData => ({ ...prevformData, [key]: [prevformData[key], item] }))
    }
    const deleteItem = (key, index) => {
        setformData(prevformData => ({ ...prevformData, [key]: prevformData[key].filter((item, i) => i !== index) }))
    }
    // reusabele input change funcgtuon  
    const handleReusableInputChangeFunc = (key, index, event) => {
        const { name, value } = event.target;
        setformData(prevformData => {
            const updateItems = [...prevformData[key]];
            updateItems[index][name] = value;
            return {
                ...prevformData,
                [key]: updateItems,
            };
        });
    };


    const addQualification = e => {
        e.preventDefault()

        addItem('qualifications', {
            startingDate: "",
            endingDate: "",
            degree: 'PHD',
            university: 'dav college '

        })
    }

    const deleteQualification = (e, index) => {
        e.preventDefault()
        deleteItem('qualifications', index)
    }

    const handleQualificationChange = (event, index) => {
        handleReusableInputChangeFunc('qualifications')
    }


    const addexperiences = e => {
        e.preventDefault()

        addItem('experiences', {
            startingDate: "",
            endingDate: "",
            position: "senior surgen",
            hospital: " appollo jal "
        })
    }

    const deleteexperiences = (e, index) => {
        e.preventDefault()
        deleteItem('experiences', index)
    }

    const handleexperiencesChange = (event, index) => {
        handleReusableInputChangeFunc('experiences')
    }

    const addTimeSlots = e => {
        e.preventDefault()

        addItem('timeslots',
            {
                day: "Sunday",
                startingDate: "10:00",
                endingDate: "4:30"
            })
    }

    const deleteTimeSlots = (e, index) => {
        e.preventDefault()
        deleteItem('timeslots', index)
    }

    const handleTimeslotSChange = (event, index) => {
        handleReusableInputChangeFunc('timeslots')
    }



    return (
        <div>
            <h2 className='text-heading font-bold text-[24px] leading-9 mb-10'>
                Profile  Information
            </h2>

            <form >
                <div className="mb-5">
                    <p className="form_label">Name<span style={{ color: "red" }}>*</span></p>
                    <input
                        type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange} placeholder='Full Name ' className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border'  />
                </div>
                <div className="mb-5">
                    <p className="form_label">Phone<span style={{ color: "red" }}>*</span></p>
                    <input type="number" name='phone' value={formData.phone} onChange={handleInputChange} placeholder='Phone Number ' className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' />
                </div>
                <div className="mb-5">
                    <p className="form_label">Bio<span style={{ color: "red" }}>*</span></p>
                    <input type="email" name='bio' value={formData.bio} onChange={handleInputChange} placeholder='Bio ' maxLength={100} className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' />
                </div>
                <div className="mb-5">
                    <p className="form_label">Email<span style={{ color: "red" }}>*</span></p>
                    <input type="email" name='email' value={formData.email} onChange={handleInputChange} placeholder='Email ' className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' aria-readonly disabled="true"/>
                </div>

                <div className="mb-5">
                    {/* =====profije infomtion ==== */}
                    <div className="grid grid-cols-3 gap-5 mb-[30px]">
                        <div>
                            <p className="form_label">
                                Gender
                            </p>
                            <select name="gender" value={formData.gender} onChange={handleInputChange} className='w-full pr-4 py-3.5 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border'>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div>
                            <p className="form_label">
                                Specialization*
                            </p>
                            <select name="specialization" value={formData.specialization} onChange={handleInputChange} className='w-full pr-4 py-3.5 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border'>
                                <option value="">Select</option>
                                <option value="surgen">Surgen</option>
                                <option value="neurologist">Neurologist</option>
                                <option value="dermatologist">Dermatologist</option>
                            </select>
                        </div>

                        <div>
                            <label className="form_label">Ticket Price</label>
                            <input type="number" placeholder='100' name="ticketPrice" id="" value={formData.ticketPrice} className='w-full pr-4 py-3.5 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' onChange={handleInputChange} />


                        </div>

                    </div>
                </div>
                {/* ======qualificiation====== */}
                <div className="mb-5">
                    <p className="form_label">Qualification<span style={{ color: "red" }}>*</span></p>
                    {formData.qualifications?.map((item, index) => <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>

                                    <p className="form_label">Starting Date *</p>
                                    <input type="date" name="startingDate" value={item.startingDate} className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' onChange={e => handleQualificationChange(e, index)} />
                                </div>
                                <div>
                                    <p className="form_label">Ending Date *</p>
                                    <input type="date" name="endingDate" value={item.endingDate} className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' onChange={e => handleQualificationChange(e, index)} />
                                </div>

                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div>

                                    <p className="form_label">Degree *</p>
                                    <input type="text" name="degree" value={item.degree} className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' onChange={e => handleQualificationChange(e, index)} />
                                </div>
                                <div>
                                    <p className="form_label">University*</p>
                                    <input type="text" name="university" value={item.university} className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' onChange={e => handleQualificationChange(e, index)} />
                                </div>

                            </div>


                            <button
                                onClick={e => deleteQualification(e, index)}
                                className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2  mb-[30px] cursor-pointer'>
                                <AiOutlineDelete />
                            </button>


                        </div>
                    </div>)}
                    <button
                        onClick={addQualification}
                        className='bg-[#000f] py-3 px-5 rounded text-white h-fit cursor-pointer '>Add Qualification</button>

                </div>
                {/* ====add experiance==== */}

                <div className="mb-5">
                    <p className="form_label">Experiance<span style={{ color: "red" }}>*</span></p>
                    {formData.experiences?.map((item, index) => <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>

                                    <p className="form_label">Starting Date *</p>
                                    <input type="date" name="startingDate" value={item.startingDate} className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' onChange={e => handleexperiencesChange(e, index)} />
                                </div>
                                <div>
                                    <p className="form_label">Ending Date *</p>
                                    <input type="date" name="endingDate" value={item.endingDate} className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' onChange={e => handleexperiencesChange(e, index)} />
                                </div>

                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div>

                                    <p className="form_label">Position *</p>
                                    <input type="text" name="position" value={item.position} className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' onChange={e => handleexperiencesChange(e, index)} />
                                </div>
                                <div>
                                    <p className="form_label"> Hostpital*</p>
                                    <input type="text" name="hospital" value={item.hospital} className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' onChange={e => handleexperiencesChange(e, index)} />
                                </div>

                            </div>


                            <button className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2  mb-[30px] cursor-pointer' onClick={e => deleteexperiences(e, index)} >
                                <AiOutlineDelete />
                            </button>


                        </div>
                    </div>)}
                    <button
                        onClick={addexperiences}
                        className='bg-[#000f] py-3 px-5 rounded text-white h-fit cursor-pointer '>Add Experiance </button>

                </div>
                {/* ======time slot======== */}

                <div className="mb-5">
                    <p className="form_label">Time Slots<span style={{ color: "red" }}>*</span></p>
                    {formData.timeslots?.map((item, index) => <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                                <div>

                                    <p className="form_label">Day <span style={{ color: "red" }}>*</span></p>
                                    <select name="day" value={item.day} className='w-full pr-4 py-3.5 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border'
                                        onChange={e => handleTimeslotSChange(e, index)}>

                                        <option value="">Select</option>
                                        <option value="saturday">Saturday</option>
                                        <option value="sunday">Sunday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednessday">Wednessday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option></select>

                                </div>
                                <div>
                                    <p className="form_label">Starting time*</p>
                                    <input type="time" name="startingDate" value={item.startingDate} className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' onChange={e => handleTimeslotSChange(e, index)} />
                                </div>
                                <div>
                                    <p className="form_label">Ending time*</p>
                                    <input type="time" name="endingTime" value={item.endingDate} className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border' onChange={e => handleTimeslotSChange(e, index)} />
                                </div>
                                <div className='flex items-center'>


                                    <button
                                        onClick={e => deleteTimeSlots(e, index)}
                                        className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 cursor-pointer '>
                                        <AiOutlineDelete />
                                    </button>

                                </div>

                            </div>


                        </div>
                    </div>)}
                    <button
                        onClick={addTimeSlots}
                        className='bg-[#000f] py-3 px-5 rounded text-white h-fit cursor-pointer '>Add TimeSlot </button>

                </div>


                {/* =======///////=======///////=== */}
                <div className="mb-5">
                    <p className='form_label'>About <span style={{ color: "red" }}>*</span></p>
                    <textarea name="about" rows={5} value={formData.about} placeholder='write about you ' onChange={handleInputChange}
                        className='w-full pr-4 py-3 border-b border-solid bordeer-[#0055ff61] focus:outline-none focus:border-b-[#5A4FCF] text-[16px] leading-7 text-headingColor placeholder:text-textColor placeholder:text-[20px] cursor-pointer border'
                    ></textarea>
                </div>

                <div className="mb-5 flex items-center gap-3">
                    {formData.photo && (
                        <figure className='w-[60px] rounded-full border border-solid border-black  flex items-center justify-center'>
                            <img src={formData.photo}
                                alt=""
                                className='w-full rounded-full' />
                        </figure>

                    )}



                    <div className='relative w-[160px] h-[50px]'>
                        <input type="file"
                            name='photo'
                            id='customFile'
                            onChange={handleFileInputChange}
                            accept='.jpg,.png' className='absolute top-0 w-full h-full opacity-0 cursor-pointer' />
                        <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>Upload Photo
                        </label>
                    </div>
                </div>
                <div className='mt-7'>
                    <button
                        type='submit'
                        className='bg-[#5244e6] py-3 px-5 rounded-lg text-white w-full h-fit cursor-pointer ' onClick={updateProfileHandler}>Update Profile</button>
                </div>

            </form>
        </div>
    )
}

export default Profile
















const FeedbackForm = () => {
    const [rating, setrating] = useState(0)
    const [hover, sethover] = useState(0)
    const [reviewtext,setreviewtext]=useState("")
    const [loading,setloading]=useState(false)
    const{id} =useParams()


    const handlesubmit= async e=>{
        e.preventDefault()
        setloading(true)
        try{

            if(!rating || !reviewtext){
            setloading(false)
            return toast.error("Please fill all the fields")
            }
            
            const res=await fetch(`${BASE_URL}/doctors/${id}/reviews`,{
                method:'post',
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                },
                body:JSON.stringify({
                    rating,
                    reviewtext
                })

            })


            const result=await res.json()
            if(!res.ok){
                throw new Error(result.message)
            }
            setloading(false)
            toast.success(result.message)
        }
        catch(err){
setloading(false)
toast.error(err.message)
        }
        //later ill use aour api 
    }
    return (
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
              <textarea className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md row-5' placeholder='Write your message ' onChange={e=>setreviewtext(e.target.value)}></textarea>

            </div>
            <button type='submit' className='btn' onClick={handlesubmit}>
               {loading ?<HashLoader size={25} color='#0067FF'/>: 'Submit feedback'}
                </button>




        </form>
    )
}

export default FeedbackForm








import { useContext, useState } from 'react'
import { authContext } from '../../Context/AuthContext'
import userimg from '../../assets/images/doctor-img01.png'
import MyBooking from './MyBooking'
import Profile from './Profile'
import useGetProfile from '../../hooks/useFetchData'
import { BASE_URL } from '../../../config'
import Loading from '../../Loader/Loading'
import Error from '../../Error/Error'
const MyAccount = () => {



    const { dispatch } = useContext(authContext)
    const { data:userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`)
    console.log(userData, 'userdata')
    const [tab, setTab] = useState('bookings')

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
    }



    return (
        <section>
            <div className='max-w-[1170px] px-5 mx-auto'>
                {loading && !error && <Loading />}

                {error && !loading && <Error errorMessage={error} />}


                {
                    !loading && !error && (
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="pb-[50px] px-[30px] rounded-md">
                                <div className="flex items-center justify-center">

                                    <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-[#1CB8C3]'>
                                        <img src={userimg} className='w-full h-full rounded-full' alt="" />

                                    </figure>
                                </div>

                                <div className="text-center mt-4">
                                    <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">{userData?.name}</h3>
                                    <p className="text-textColor text-[15px] leading-6 font-medium">{userData?.email}
                                    </p>
                                    <p className="text-textColor text-[15px] leading-6 font-medium">
                                        Blood Type:<span className='ml-2 text-headingColor  text-[22px] leading-8'> {userData?.bloodType}</span>
                                    </p>
                                </div>
                                <div className="mt-[50px] md:mt-[100px]">
                                    <button className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white' onClick={handleLogout} >Logout</button>
                                    <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>Delete Account</button>

                                </div>


                            </div>

                            <div className="md:col-span-2 md:px-[30px]">
                                <div>
                                    <button
                                        onClick={() => setTab('bookings')}
                                        className={`${tab === 'bookings' && 'bg-[#1CB8C3] text-whitw font-normal'}   p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-[#1CB8C3]`}>My Bookings</button>


                                    <button
                                        onClick={() => setTab('settings')}
                                        className={`${tab === 'settings' && 'bg-[#1CB8C3] text-whitw font-normal'} 
                        p-2 px-5 rounded-md textheadingColor font-semibold text-[16px] leading-7 border border-solid border-[#1CB8C3]` }
                                    >Profile Setting
                                    </button>

                                </div>
                                {
                                    tab === 'bookings' && <MyBooking />
                                }

                                {
                                    tab === 'settings' && <Profile user={userData} />
                                }

                            </div>

                        </div>

                    )
                }

            </div>
        </section>
    )
}

export default MyAccount
