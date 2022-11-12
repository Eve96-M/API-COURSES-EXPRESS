const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const UserCourses = require("../models/userCourses.models");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");

class UserServices {

    static async getById(id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: ["id", "firstName", "lastName"]
            })
            return result
        } catch (error) {
            throw (error)
        }
    }

    static async addCourseByUser(id, courseId){
      try {
        const result = await UserCourses.create({
          courseId: courseId,
          userId: id
        })
        return result
      } catch (error) {
        throw(error)
      }
    }

    static async getUserJoinCourses(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ["firstName", "lastName"],
                include: {
                    model: UserCourses,
                    as: "userCourses",
                    attributes: ["course_id"],
                    include: {
                        model: Courses,
                        as: "course",
                        attributes: ["title", "description", "instructor"]
                    }
                }
            })
            return result
        } catch (error) {
            throw (error)
        }
    }

    static async add(newUser) {
        try {
          const result = await Users.create(newUser);
          return result;
        } catch (error) {
          throw error;
        }
      }

      static async update(updateData, id) {
        try {
          const result = await Users.update(updateData, {
            where: { id },
          });
          return result;
        } catch (error) {
          throw error;
        }
      }
}

module.exports = UserServices