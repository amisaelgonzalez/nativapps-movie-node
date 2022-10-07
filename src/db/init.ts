import { Movie } from './models';
import * as dotenv from 'dotenv';
dotenv.config();
const isDev = process.env.NODE_ENV === 'development';

// console.log(isDev);
const dbInit = () => Promise.all([
    Movie.sync({ alter: isDev }),
]);

export default dbInit;
