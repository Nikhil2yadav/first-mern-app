const ensureAuthentication = require('../Middleware/Auth');

const router=require('express').Router();

router.get("/",ensureAuthentication,(req,res)=>{
    console.log("------- logged in user details --------",req.user); 
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        },
        {
            name:"charger",
            price:15000 
        }
    ])
});

module.exports=router;