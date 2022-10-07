import * as movieDal from '../dal/movie';
import { PaginateMoviesFilters } from '../dal/types';
import { MovieInput, MovieOuput } from '../models/Movie';

export const create = (payload: MovieInput): Promise<MovieOuput> => {
    return movieDal.create(payload);
}

export const update = (id: number, payload: Partial<MovieInput>): Promise<MovieOuput> => {
    return movieDal.update(id, payload);
}

export const createOrUpdate = (payload: MovieInput): Promise<MovieOuput> => {
    return movieDal.createOrUpdate(payload);
}

export const getById = (id: number): Promise<MovieOuput> => {
    return movieDal.getById(id);
}

export const deleteById = (id: number): Promise<boolean> => {
    return movieDal.deleteById(id);
}

export const paginate = (filters: PaginateMoviesFilters): Promise<MovieOuput[]> => {
    return movieDal.paginate(filters);
}
