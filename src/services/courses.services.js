const Courses = require("../models/courses.models");
const categories = require("../models/categories.models");
const videos = require("../models/videos.models");

class coursesServices {

    static async getAllCourses(){

        try {
            const result = await Courses.findAll({
                attributes:["title", "description", "instructor"]
            })
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async getAllCoursesWithContent(){

        try {
            const result = await Courses.findAll({
              attributes:["title", "description","instructor"],
                include:{
                    model: categories,
                    as:"category",
                    attributes:["title"],
                    model:videos,
                    as:"content",
                    attributes:["title", "url"]
                }
            })
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async addCourse(newCourse) {
        try {
          const result = await Courses.create(newCourse);
          return result;
        } catch (error) {
          throw error;
        }
      }

      static async updateCourse(data, id) {
        try {
          const result = await Courses.update(data, {
            where: { 
              id
            }
          });
          return result;
        } catch (error) {
          throw error;
        }
      }

}



module.exports = coursesServices