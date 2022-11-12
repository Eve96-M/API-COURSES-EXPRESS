const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const courses = require("./courses.models");

const videos = db.define("videos", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url:{
        type: DataTypes.STRING,
        allowNull:false
    },
    courseId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:courses,
            key:"id"
        },
        field:"course_id",
    }
})

module.exports = videos