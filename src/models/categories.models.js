const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const courses = require("./courses.models");

const categories = db.define("categories", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
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

module.exports = categories