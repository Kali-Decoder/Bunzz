const express = require("express");
const router= express.Router();


router.post("/getValue",(req,res)=>{
    let {num}= req.body;
    let data ="";
    
    if(num%3==0 && num%5==0){
        data= process.env.FIZZBUZZ;
    }
    else if(num%3==0){
       data= process.env.BUZZ; 
    }else if(num%5==0){
        data= process.env.FIZZ; 
    }
    return res.json({msg:data});
});



module.exports=router;