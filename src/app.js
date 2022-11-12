const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database");
const usersRoutes = require("./routes/users.routes")
const coursesRoutes = require("./routes/courses.routes")
const videosRoutes = require("./routes/videos.routes")
const categoriesRoutes = require("./routes/categories.routes")
const app = express();

app.use(express.json());

const PORT = 8000;

db.authenticate()
    .then(() => console.log("autenticación exitosa"))
    .catch((error) => console.log(error))

db.sync({ force: false })
    .then(() => console.log("sincronización exitosa"))
    .catch((error) => console.log(error))

initModels();

app.get("/", (req,res)=>{
    res.status(200).json("welcome to server")
});

app.use("/api/v1", usersRoutes);
app.use("/api/v1", coursesRoutes);
app.use("/api/v1", videosRoutes);
app.use("/api/v1", categoriesRoutes);

app.listen(PORT,()=>{
    console.log("corriendo servidor")
});


