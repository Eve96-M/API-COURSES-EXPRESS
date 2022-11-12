const Users = require("../models/users.models")
const Courses = require("../models/courses.models")
const userCourses = require("../models/userCourses.models");
const Categories = require("../models/categories.models");
const initModels = require("../models/initModels")
const db = require("../utils/database");

initModels();

const users = [
    { firstName:"Evelio", lastName:"Medina", password:"123123", email:"eve@gmail.com"},
    { firstName:"Romario", lastName:"Castellanos", password:"333333", email:"Rom@gmail.com"},
    { firstName:"Djordjevic", lastName:"Mendoza", password:"444123", email:"DJ@gmail.com"},
]

const courses = [
    { title:"Como hacer pan de jamon", description:"Aprenderemos a hacer pan de jamon", instructor:"Josefina Sequera"},
    { title:"Como hacer ejercicio bien", description:"Aprenderemos a ponernos mamados", instructor:"Evelio Medina Sr."},
    { title:"Como andar en bicicleta sin bicileta", description:"Aprenderemos a volar", instructor:"Eline Jimenez"},
]

const categories =[
    {name: "Kitchen", courseId:1},
    {name: "Fitness", courseId:2},
    {name: "Spirituality", courseId:3}
]

const uc = [
    {userId: 1,courseId:1},
    {userId: 1,courseId:2},
    {userId: 2,courseId:2},
    {userId: 2,courseId:3},
    {userId: 3,courseId:2},
    {userId: 3,courseId:1},
]
db.sync({ force: true })
    .then(() => {
        console.log("Iniciando la plantación de Información");
        users.forEach((user) => Users.create(user))
        setTimeout(() => {
            courses.forEach((course) => Courses.create(course));
          }, 100);
          setTimeout(() => {
            categories.forEach((category) => Categories.create(category));
          }, 200);
          setTimeout(() => {
            uc.forEach((uc) => userCourses.create(uc));
          }, 300);
    })
    .catch((error) => console.log(error));