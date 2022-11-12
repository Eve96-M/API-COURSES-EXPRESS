const { Router } = require("express");

const { getUserById, getUserWithCourses, createUser, updateUser, addCourseToUser } = require("../controllers/users.controllers")

const router = Router()

router.route("/users/:id")
    .get(getUserById)
    .post(addCourseToUser)
    .put(updateUser)

router.get("/users/:id/courses", getUserWithCourses);

router.post("/users", createUser);


module.exports = router