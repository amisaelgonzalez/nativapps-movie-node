import { Router, Request, Response } from 'express';

import * as movieController from '../controllers/movie';
import { CreateMovieDTO, FilterMoviesDTO, UpdateMovieDTO } from '../dto/movie.dto';

const moviesRouter = Router();

moviesRouter.get('/', async (req: Request, res: Response) => {
  // fetch movies
  const filters: FilterMoviesDTO = req.query;

  const results = await movieController.paginate(filters);
  return res.status(200).send(results);
});

moviesRouter.post('/', async (req: Request, res: Response) => {
  // create movie
  const payload: CreateMovieDTO = req.body;

  const result = await movieController.create(payload);
  return res.status(200).send(result);
});

moviesRouter.get('/:id', async (req: Request, res: Response) => {
  // fetch movie
  const id = Number(req.params.id);

  const result = await movieController.getById(id);
  return res.status(200).send(result);
});

moviesRouter.put('/:id', async (req: Request, res: Response) => {
  // update movie
  const id = Number(req.params.id);
  const payload: UpdateMovieDTO = req.body;

  const result = await movieController.update(id, payload);
  return res.status(201).send(result);
});

moviesRouter.delete('/:id', async (req: Request, res: Response) => {
  // delete movie
  const id = Number(req.params.id);

  const result = await movieController.deleteById(id);
  return res.status(204).send({
    success: result
  });
});

export default moviesRouter;
