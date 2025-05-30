const jwt = require("jsonwebtoken");
const { model } = require("mongoose");
const ensureAuthentication=(req,res,next)=>{
    const auth=req.headers['authorization'];
    if(!auth){
        return res.status(403)
            .json({
                message:"unauthorized , Jwt token is require",
            });
    }try {
       const decoded=jwt.verify(auth,process.env.JWT_SECRET);
       req.user=decoded;
       next(); 
    } catch (error) {
        return res.status(403)
            .json({
                message:"unauthorized ,JWT token worng or expired"
            });
    }
}
module.exports=ensureAuthentication;