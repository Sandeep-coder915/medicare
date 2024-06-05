import User from "../models/UserSchema.js"
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const genratetoken=user=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{
        expiresIn:'15d'
    })
}


export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;

    if (!email || !password || !name || !role) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Check if user already exists
 

    try {
        let user = null;
        console.log(process.env.JWT_SECRET_KEY,'process.env.JWT_SECRET')
        if (role === "patient") {
            user = await User.findOne({ email });
        } else if (role === "doctor") {
            user = await Doctor.findOne({ email });
        }

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role === 'patient') {
            console.log(req.body,'6666')
            user = new User({ email, password: hashPassword, name, role, photo, gender });
            await user.save();
        } else if (role === 'doctor') {
            user = new Doctor({ email, password: hashPassword, name, role, photo, gender });
            await user.save();
        } else {
            return res.status(400).json({ message: 'Invalid role specified' });
        }

       

        // Generate JWT Token
       
      
        res.status(200).json({ success: true, message: 'User successfully created', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Internal server error, try again' });
    }
};
export const login=async (req,res)=>{
    const{email}=req.body

    try{
        let user=null;
        const patient=await User.findOne({email})
        const doctor=await Doctor.findOne({email})

        if(patient){
            user=patient
        }
        if(doctor){
            user=doctor
        }
        if(!user){
            return res.status(404).json({message:"user not found"});
        }
        const isPasswordMatch= await bcrypt.compare(req.body.password,user.password );
        if(!isPasswordMatch){
            return res.status(404).json({status:false,message:"invalid credentials "});
        }
        const token=genratetoken(user);
        const {password,role,appointments, ...rest}=user._doc
        res
        .status(200)
        // .cookie("access_token",token,{httpOnly:true})
        .json({success:true,message:"successfully login",token,data:{...rest},role})

    }
    catch(err){
   res.status(500).json({status:false,message:"failed to login"});
    }
}
