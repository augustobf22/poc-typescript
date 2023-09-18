import express, { Request, Response, json } from "express";
import movieRouter from "@/router/movie-router";

const app = express();
app.use(json());
app.use(movieRouter);

app.listen(5000, () => console.log(`Server is up and running or port 5000`));