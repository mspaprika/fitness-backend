import express from "express";
import * as userController from "./controllers/userController.mjs"
import * as userPrefsController from "./controllers/userPrefsController.mjs";
import * as userProfileController from "./controllers/userProfileController.mjs";
import * as testController from "./controllers/testController.mjs";
import { getUnsplashPic } from "./controllers/unsplashController.mjs";
import { getRecipe, addPicture, addRecipe, getSavedRecipes } from "./controllers/recipeController.mjs";
import { getBodyparts, getExercise } from "./controllers/exerciseController.mjs";
const router = express.Router();

// Main routes
router.post("/changepass", userController.userChangePwd); // Change user-password
router.post("/delaccount", userController.userDeleteAccount); // Delete user-account
router.get("/prefs", userPrefsController.retrieve); // Retrieve user-prefs
router.patch("/prefs/:fieldName", userPrefsController.updatePrefs); // Create or update user-prefs
router.get("/profile", userProfileController.retrieve); // Retrieve user-profile
router.patch("/profile/:fieldName", userProfileController.updateProfile); // Create or update user-profile

// API relays
router.get("/unsplash", getUnsplashPic); // Get picture from API
router.post("/addPicture", addPicture); // Add picture to database
router.get("/bodyparts", getBodyparts);
router.get("/exercises/bodypart/:bodypart", getExercise);

router.get("/recipe/:query", getRecipe); // Get recipe from API
router.post("/addRecipe", addRecipe); // Add recipe to database

router.get("/allrecipes", getSavedRecipes)

// DEVELOPMENT-ONLY
router.get("/all", testController.getAll); // GET ALL DOCUMENTS FROM DATABASE | TODO: REMOVE IN PRODUCTION!!!!!!!!

export default router;