const { Router } = require("express");
const { Signup, Signin, Authorization } = require("../controller/User");
const { Middleware } = require("../middleware/auth");
const route = Router();

// Auth
route.post("/signup", Signup);
route.post("/signin", Signin);
route.get("/authorization", Middleware, Authorization);

module.exports = route;
