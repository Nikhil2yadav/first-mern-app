const ensureAuthentication = require('../Middleware/Auth');
const ImageDetaile = require('../Models/ImageDetaile');

const router =require('express').Router();

router.get('/', ensureAuthentication,async(req,res)=>{
    try {
         ImageDetaile.find({}).then(data=>{
            res.status(201)
                .json({
                    data:data,
                    message:"images has found",
                    success:true
                })
        })
    } catch (error) {
         res.status(500)
            .json({
                message:`internal server error,${error}`,
                success:false
            })
    }
})    
module.exports=router