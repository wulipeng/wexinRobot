const express=require("express");
const wechat=require("wechat");
var router=express.Router();
router.get("/",wechat("secret",function(req,res,next){
    console.log(req.body);
}));