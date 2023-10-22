const MovieBookingModel = require("../Schema/Schema.js")

const storeMovieBooking = async (req, res) => {
    try {
        const { movie, slot, seats } = req.body;

        const movieData = new MovieBookingModel({ movie, slot, seats });

        /*Save Booking Data*/
        const data = await movieData.save();

        /*Send response of successful booking*/
        return res.status(200).json({
            message:"Booking successful",
            status:200,
            data:data
        })
    } catch (error) {
        /*Send response if booking is not successful*/
        console.log("error", error.message);
        return res.status(500).json({
            message:"something went wrong!",
            status:500,
            data:{}
        })
    }
}

const getMovieBooking = async (req, res) => {
    try {
        /* find last booking of user */
        const [data] = await MovieBookingModel.find().sort({_id:-1}).limit(1)
        
        if (data===undefined || data.length === 0) {
            /* if no booking found then print this message*/
            return res.status(200).json({
                message:"No previous Booking found!",
                status:200,
                data:null
            })    
        }
        
        /* have any booking then print this message*/
        return res.status(200).json({
            message:"last booking!",
            status:200,
            data:data
        })
        
    } catch (error) {
        console.log("error", error.message);
        return res.status(500).json({
            message:"something went wrong!",
            status:500,
            data:{}
        })
    }
}

module.exports = { storeMovieBooking, getMovieBooking }