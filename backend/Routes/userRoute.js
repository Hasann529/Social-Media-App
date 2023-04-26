const express = require('express')
const { register, login, followAndUnfollowUser, logout, updatePassword, updateProfile, deleteMyProfile, myProfile, getUserProfile, getAllUsers, forgotPassword, resetPassword } = require('../Controllers/userController')
const { isAuthenticated } = require('../Middleware/auth')
const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/me").get(isAuthenticated,myProfile)
router.route("/logout").get(isAuthenticated,logout)
router.route("/delete/me").get(isAuthenticated,deleteMyProfile)
router.route("/follow/:id").get(isAuthenticated,followAndUnfollowUser)
router.route("/update/password").put(isAuthenticated,updatePassword)
router.route("/update/profile").put(isAuthenticated,updateProfile)
router.route("/user/:id").get(isAuthenticated,getUserProfile)
router.route("/users").get(isAuthenticated,getAllUsers)

router.route("/forgot/password").post(forgotPassword)

router.route("/password/reset/:token").put(resetPassword)



module.exports = router