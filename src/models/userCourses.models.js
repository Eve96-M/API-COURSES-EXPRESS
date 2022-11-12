const db = require("../utils/database");
const courses = require("./courses.models");
const users = require("./users.models");

const { DataTypes } = require("sequelize");


const userCourses = db.define("userCourses", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"user_id",
        references:{
            model:users,
            key:"id"
        }
    },
    courseId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"course_id",
        references:{
            model:courses,
            key:"id"
        }
    }
})

module.exports = userCourses