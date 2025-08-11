const express=require('express')
const {protect} =require("../middleware/authMiddleware")
const {
    registerUser,
    loginUser,
    getUserInfo
} =require('../controllers/authControllers')

const upload = require('../middleware/uploadMiddleware')

const router=express.Router()


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/getUser",protect, getUserInfo)

module.exports=router

