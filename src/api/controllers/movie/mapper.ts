import { Movie } from '../../interfaces';
import { MovieOuput } from '../../../db/models/Movie';

export const toMovie = (movie: MovieOuput): Movie => {
    return {
        id: movie.id,
        title: movie.title,
        year: movie.year,
        type: movie.type,
        poster: movie.poster,
        imdbID: movie.imdbID,
        createdAt: movie.createdAt,
        updatedAt: movie.updatedAt,
        deletedAt: movie.deletedAt,
    }
}