import express, { Application, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';

import routes from './api/routes';
import dbInit from './db/init';

dbInit();

dotenv.config();
const port = process.env.APP_PORT;

export const get = () => {
    const app: Application = express();

    // Body parsing Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use((req: Request, res: Response, next: NextFunction) => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
        res.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        next();
    });

    app.get('/', async(req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({ message: `Welcome to the movies API! \n Endpoints available at http://localhost:${port}/api/v1` });
    });
    
    app.use('/api/v1', routes);

    return app;
}

export const start = () => {
    const app = get();
    try {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error: any) {
        console.error(`Error occurred: ${error.message}`);
    }
}

start();
