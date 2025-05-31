const mongoose=require('mongoose');
const imageDetailsSchema=new mongoose.Schema(
    {
        image:String
    },  
)

const ImageDetaile=mongoose.model("images",imageDetailsSchema);

module.exports=ImageDetaile;