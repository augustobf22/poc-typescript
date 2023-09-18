export type Movie = {
    id: number;
    title: string;
}

export type CreateMovie = Omit<Movie, "id">;
export type UpdateMovie = Omit<Movie, "title">;