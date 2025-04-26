import { Router } from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    
} from "../controllers/user.controller.js"

import { googleLogin } from "../controllers/authController.js";

import {getMyProfile}  from '../controllers/user.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';  // to verify JWT token
 
// import { upload } from "../middlewares/multer.middleware.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router() 

router.route("/register").post(registerUser)
    
router.post("/login", loginUser);
router.post('/google-login', googleLogin); 
router.get('/me', verifyJWT, getMyProfile);


//secured routes
// router.route("/logout").post(verifyJWT, logoutUser)
// router.route("/refresh-token").post(refreshAccessToken)

export default router;


