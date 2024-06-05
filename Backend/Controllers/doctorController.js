import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js"

export const updateDoctor=async(req,res)=>{
   const id=req.params.id ;

   try{

    const updatedDoctor= await Docrtor.findByIdAndUpdate(
        id,{
            $set:req.body
        },{
            new:true
        }
    );
    res
    .status(200).json({
        success:true,
        message:"user updated successfully",
        data:updatedDoctor
    });
   } catch{
    res.status(500).json({success:false,message:"failed to update "}) 
   }
};
export const deleteDoctor=async(req,res)=>{
   const id=req.params.id ;

   try{

    await Doctor.findByIdAndDelete(
        id,
    );
    res
    .status(200).json({
        success:true,
        message:"successfully deleted Doctor",
        
    });
   } catch{
    res.status(500).json({success:false,message:"failed to delete "}) 
   }
};
export const getSingleDoctor=async(req,res)=>{
    const id=req.params.id ;
    
    try{
        
        const doctor= await Doctor.findById(id).populate("reviews")
        .select("-password")
        res.status(200).json({
        success:true,
        message:"Doctor  Found",
        data:doctor,
    });
} catch{
    res.status(404).json({success:false,message:"No found "}) 
}
};
export const getAllDoctor=async(req,res)=>{
    

   try{
    const {query}=req.query
    let doctors;
    if(query) {
        doctors= await Doctor.find({isApproved:'approved',
        $or:[{name:{$regex:query,$options:"i"}},
        {specialization:{$regex:query,$options:"i"}}
            
        ],

        }).select("-password");
    } else{
        doctors=await Doctor.find({isApproved:"approved"}).select("-password");
    }

    const doctores= await Doctor.find({}).select("-password");
    res.status(200).json({
        success:true,
        message:"Useer Found",
        data:doctores,
    });
   } catch{
    res.status(404).json({success:false,message:"No user Found "}) 
   }
};


export const getDoctorProfile=async (req,res)=>{
    const doctorId = req.userId
    try {
        const doctor = await Doctor.findById(userId)
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found"
            })
        }
        const { password, ...rest } = doctor._doc;
        const appointments=await Booking.find({doctor:doctorId})
        res.status(200).json({
            success: true,
            message: "profile info is getting",
            data: { ...rest,appointments },
        })
    }
    catch {

        res.status(500).json({
            success: true,
            message: "somethin went wrong cannot get data "
        })
    }
}
