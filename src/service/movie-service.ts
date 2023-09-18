import movieRepository from "@/repository/movie-repository";
import { Movie, CreateMovie, UpdateMovie } from "@/protocol/movie-protocols";

async function getMovie(): Promise<Movie[]> {
  const movie = await movieRepository.getMovie();
  return movie;
}

async function createMovie(movie: CreateMovie): Promise<void> {
  await movieRepository.createMovie(movie);
}

async function updateMovie(movie: Movie): Promise<void> {
    await movieRepository.updateMovie(movie);
}

async function deleteMovie(id: UpdateMovie): Promise<void> {
    await movieRepository.deleteMovie(id);
}

const movieService = {
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie
}

export default movieService;