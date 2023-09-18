import { Movie, CreateMovie, UpdateMovie } from "@/protocol/movie-protocols";
import { connection } from "@/database/database";

async function getMovie() {
  const result = await connection.query<Movie>(`SELECT * FROM movies`);
  return result.rows;
}

async function createMovie(Movie: CreateMovie) {
  return await connection.query<CreateMovie>(`
  INSERT INTO movies (title) VALUES ($1)`, 
  [Movie.title]);
}

async function updateMovie(movie: Movie) {
    return await connection.query<Movie>(`UPDATE movies SET title=$3 WHERE id=$1`,[movie.id, movie.title]);
}

async function deleteMovie(id: UpdateMovie) {
    return await connection.query<UpdateMovie>(`DELETE * FROM movies WHERE id=$1`, [id]);
}

const movieRepository = {
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie
}

export default movieRepository;