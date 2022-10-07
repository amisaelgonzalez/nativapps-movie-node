import { Optional } from "sequelize/types"

export type CreateMovieDTO = {
    title: string;
    year: string,
    type: string,
    poster: string,
    imdbID: string,
}

export type UpdateMovieDTO = Optional<CreateMovieDTO, 'title' | 'year' | 'type' | 'poster' | 'imdbID'>

export type FilterMoviesDTO = {
    isDeleted?: boolean,
    includeDeleted?: boolean,
    page?: number,
}