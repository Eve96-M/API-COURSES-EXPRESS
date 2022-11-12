const UserServices = require("../services/users.services")

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await UserServices.getById(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

const addCourseToUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const courseId = req.body.courseId
        const result = await UserServices.addCourseByUser(id, courseId)
        res.status(201).json(result)
    } catch (error) {
        console.log(error)
    }
}

const getUserWithCourses = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await UserServices.getUserJoinCourses(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.add(newUser);
        res.status(201).json(result);
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const {firstName, lastName, password} = req.body
      const dataUpdate = {firstName, lastName, password}
      const result = await UserServices.update(dataUpdate, id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  };

module.exports = { getUserById, getUserWithCourses, createUser, updateUser, addCourseToUser }