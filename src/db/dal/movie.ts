import { Op } from 'sequelize';

import { Movie } from '../models';
import { PaginateMoviesFilters } from './types';
import { MovieInput, MovieOuput } from '../models/Movie';

export const create = async (payload: MovieInput): Promise<MovieOuput> => {
    return await Movie.create(payload);
}

export const update = async (id: number, payload: Partial<MovieInput>): Promise<MovieOuput> => {
    const movie = await Movie.findByPk(id);

    if (!movie) {
        throw new Error('not found');
    }

    return await movie.update(payload);
}

export const createOrUpdate = async (payload: MovieInput): Promise<MovieOuput> => {
    return Movie.findOne({ where: { imdbID: payload.imdbID } }).then(function(movie) {
        if(movie) {
            // update
            return movie.update(payload);
        }
        // insert
        return create(payload);
    });
}

export const getById = async (id: number): Promise<MovieOuput> => {
    const movie = await Movie.findByPk(id);

    if (!movie) {
        throw new Error('not found');
    }

    return movie;
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedMovieCount = await Movie.destroy({
        where: { id }
    });

    return !!deletedMovieCount;
}

export const paginate = async (filters?: PaginateMoviesFilters): Promise<MovieOuput[]> => {
    const limit: number = 10;
    const page: number = filters?.page ? filters.page : 1;
    const offset: number = (page - 1) * limit;
  
    return Movie.findAll({
        where: {
            ...(filters?.isTypeMovie && { type: 'movie' }),
            ...(filters?.isTypeSeries && { type: 'series' }),
            ...(filters?.isTypeEpisode && { type: 'episode' }),
            ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
        },
        limit,
        offset,
        ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
    });
}
