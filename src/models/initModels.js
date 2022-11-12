const Categories = require("./categories.models");
const Courses = require("./courses.models");
const UserCourses = require("./userCourses.models");
const Users = require("./users.models");
const Videos = require("./videos.models");

const initModels = () => {

    Categories;
    Courses;
    UserCourses;
    Users;
    Videos;
    //videos relations

    Videos.belongsTo(Courses, { as: "courses", foreignKey: "course_id" });
    Courses.hasMany(Videos, { as: "content", foreignKey: "course_id" });

    //Categories relations

    Categories.belongsTo(Courses, { as: "courses", foreignKey: "course_id" });
    Courses.hasMany(Categories, { as: "category", foreignKey: "course_id" });

    //userCourses relations

    //users
    UserCourses.belongsTo(Users, { as: "user", foreignKey: "user_id" });
    Users.hasMany(UserCourses, { as: "userCourses", foreignKey: "user_id" });

    //courses
    UserCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
    Courses.hasMany(UserCourses, { as: "userCourses", foreignKey: "course_id" });
    
}

module.exports = initModels