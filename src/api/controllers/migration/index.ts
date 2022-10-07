import { CreateMovieDTO } from "../../dto/movie.dto";
import * as movieController from '../../controllers/movie';
import { Migration } from '../../interfaces';

// import * as mapper from './mapper';
const fetch = require('node-fetch');

export const getDataMovies = async(page: number = 1): Promise<boolean> => {
    try {
        const response = await fetch('http://www.omdbapi.com/?apikey=5eec5adc&s=love&y=2020&page='+page)
        const data = await response.json();
        // console.log('data:', data);
        if (data.Response === 'True') {
            data.Search.map((movie: Migration) => {
                const payload: CreateMovieDTO = {
                    title: movie.Title,
                    year: movie.Year,
                    type: movie.Type,
                    poster: movie.Poster,
                    imdbID: movie.imdbID,
                };
    
                movieController.createOrUpdate(payload);
            });

            return await getDataMovies(++page);
        }

        return true;
    } catch (error) {
        console.error('error: ', error);
        return false;
    }
}

