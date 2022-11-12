const { Router } = require("express");

const {getAllCourses, 
        getAllCoursesWithContent, 
        createCourse, 
        updateCourse} 
    = require("../controllers/courses.controllers");

const router = Router(); 

router.get("/courses", getAllCourses);

router.get("/courses/content", getAllCoursesWithContent);

router.post("/courses", createCourse);

router.put("/courses/:id", updateCourse);

module.exports = router
