import * as movie from '../../../db/services/MovieService';
import { CreateMovieDTO, UpdateMovieDTO, FilterMoviesDTO } from '../../dto/movie.dto';
import { Movie } from '../../interfaces';
import * as mapper from './mapper';

export const create = async(payload: CreateMovieDTO): Promise<Movie> => {
    return mapper.toMovie(await movie.create(payload));
}

export const update = async (id: number, payload: UpdateMovieDTO): Promise<Movie> => {
    return mapper.toMovie(await movie.update(id, payload));
}

export const createOrUpdate = async (payload: CreateMovieDTO): Promise<Movie> => {
    return mapper.toMovie(await movie.createOrUpdate(payload));
}

export const getById = async (id: number): Promise<Movie> => {
    return mapper.toMovie(await movie.getById(id));
}

export const deleteById = async(id: number): Promise<Boolean> => {
    const isDeleted = await movie.deleteById(id);

    return isDeleted;
}

export const paginate = async(filters: FilterMoviesDTO): Promise<Movie[]> => {
    return (await movie.paginate(filters)).map(mapper.toMovie);
}