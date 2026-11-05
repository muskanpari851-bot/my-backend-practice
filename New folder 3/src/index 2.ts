import express,{type Application} from "express";
import studentRouter from "./students/students.routes.js";

const app: Application = express();
app.use(express.json());    
app.use('/students', studentRouter);

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
 