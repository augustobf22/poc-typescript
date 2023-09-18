import { Request, Response } from "express";
import movieService from "@/service/movie-service";
import { Movie, CreateMovie, UpdateMovie } from "@/protocol/movie-protocols";

function getMovie(req: Request, res: Response) {
  const movie = movieService.getMovie();
  res.send(movie);
}

function createMovie(req: Request, res: Response) {
  const movie = req.body as CreateMovie;
  movieService.createMovie(movie);
  res.sendStatus(201);
}

function updateMovie(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  const { title } = req.body as CreateMovie;
  movieService.updateMovie({id, title});
  res.sendStatus(201);
}

function deleteMovie(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  movieService.deleteMovie(id);
  res.sendStatus(201);
}

const movieController = {
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie
}

export default movieController;