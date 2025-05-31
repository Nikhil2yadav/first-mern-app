const ensureAuthentication = require('../Middleware/Auth');
const router=require('express').Router();
const ImageDetaile = require("../Models/ImageDetaile");
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../Uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, uniqueSuffix +file.originalname)
  }
})

const upload = multer({ storage: storage })
router.post("/",upload.single("image"),ensureAuthentication,async(req,res)=>{
  try {
    const imageName=req.file.filename;
    const newImage=new ImageDetaile({image:imageName})
    await newImage.save();
    res.status(201)
      .json({
        message:"Image uploaded successfully .....",
        success:true
      })
  } catch (error) {
     res.status(500)
            .json({
                message:`internal server error,${error}`,
                success:false
            })
  }
});


module.exports=router;
