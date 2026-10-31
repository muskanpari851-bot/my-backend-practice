import express, { type Application,type Request, type Response } from "express";
import bookRoutes from "./routes/book.routes.js";

const app: Application = express();
app.use(express.json());
app.use('/books', bookRoutes);

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });