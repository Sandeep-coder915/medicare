import User from "../models/UserSchema.js"
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {

        const updateUser = await User.findByIdAndUpdate(
            id, {
            $set: req.body
        }, {
            new: true
        }
        );
        res
            .status(200).json({
                success: true,
                message: "user updated successfully",
                data: updateUser
            });
    } catch {
        res.status(500).json({ success: false, message: "failed to update " })
    }
};
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {

        await User.findByIdAndDelete(
            id,
        );
        res
            .status(200).json({
                success: true,
                message: "successfully deleted user",

            });
    } catch {
        res.status(500).json({ success: false, message: "failed to delete " })
    }
};
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {

        const user = await User.findById(
            id,
        );
        res.status(200).json({
            success: true,
            message: "Useer Found",
            data: user,
        });
    } catch {
        res.status(404).json({ success: false, message: "No found " })
    }
};
export const getAllUser = async (req, res) => {


    try {

        const users = await User.find({}).select("-password");
        res.status(200).json({
            success: true,
            message: "Useer Found",
            data: users,
        });
    } catch {
        res.status(404).json({ success: false, message: "No user Found " })
    }
};


export const getuserProfile = async (req, res) => {
    const userId = req.userId
    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        const { password, ...rest } = user._doc
        res.status(200).json({
            success: true,
            message: "profile info is getting",
            data: { ...rest },
        })
    }
    catch {

        res.status(500).json({
            success: true,
            message: "somethin went wrong cannot get data "
        })
    }
};

export const getMyAppointments = async (req, res) => {
    try {
        //step-1 retrive a[ppointments from booking for specific user 
        const bookings = await Booking.find({ user: req.userId })
        //step-2 extract doctor ids from appointment bookings

        const doctorIds = bookings.map(el => el.doctor.id)
        //step-3:retrive doctors using ids 
        const doctors=await Doct.find({_id:{$in:doctorIds}}).select('-password')
        res.status(200).json({success:true,message:'Appoint,ment are getting ',data:doctors})


    }
    catch {

        res.status(500).json({
            success: true,
            message: "something went wrong cannot get data "
        })
    }
}

