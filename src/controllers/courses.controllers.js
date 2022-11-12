const coursesServices = require("../services/courses.services");

const getAllCourses = async (req, res, next) => {
    try {
      const result = await coursesServices.getAllCourses();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  const getAllCoursesWithContent = async (req, res, next) => {
    try {
      const result = await coursesServices.getAllCoursesWithContent();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  const createCourse = async (req, res, next) => {
    try {
        const newCourse = req.body;
        const result = await coursesServices.addCourse(newCourse);
        res.status(201).json(result);
    } catch (error) {
        console.log(error)
    }
}

const updateCourse = async (req, res, next) => {
    try {
      const id = req.params.id
      const {description} = req.body
      const data = {description}
      const result = await coursesServices.updateCourse(data, id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = {getAllCourses, getAllCoursesWithContent, createCourse, updateCourse}