import express from "express";
import userApiCalls from "../controllers/userContoller";
import authenticateToken from "../middleware";

const router = express.Router();


router.get("/getAllUsers", authenticateToken, userApiCalls.allUsers);
router.get("/getUser/:id",authenticateToken, userApiCalls.getUser);
router.post("/createUser",authenticateToken, userApiCalls.createUser);
router.post("/login", userApiCalls.loginUser);
router.put("/updateUser/:id", authenticateToken, userApiCalls.updateUser);
router.delete("/deleteUser/:id",authenticateToken, userApiCalls.deleteUser);

router.get("/loginUser",authenticateToken, userApiCalls.loginUserProfile);

// router.get("/getUserByName/:name", userApiCalls.getUserByName);
// router.get("/getUserBYNumber/:number", userApiCalls.getUserByNumber);
// router.get("/getUserBYMail/:mail", userApiCalls.getUserByMail);

export = router;