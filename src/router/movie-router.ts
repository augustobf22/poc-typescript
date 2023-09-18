import { Router } from "express";
import movieController from "@/controller/movie-controller";
import { validateSchema } from "@/middlewares/validateJoi";
import schemaMovie from "@/schema/movie-schema";

const movieRouter = Router();

movieRouter.get("/movies", movieController.getMovie);
movieRouter.post("/movies", validateSchema(schemaMovie), movieController.createMovie); 
movieRouter.put("/movies:id", validateSchema(schemaMovie), movieController.updateMovie);
movieRouter.delete("/movies/:id", movieController.deleteMovie);

export default movieRouter;