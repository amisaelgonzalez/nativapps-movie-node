import { Router, Request, Response } from 'express';

import * as migrationController from '../controllers/migration';

const migrationsRouter = Router();

migrationsRouter.get('/movies', async (req: Request, res: Response) => {
  const result = await migrationController.getDataMovies();
  return res.status(200).send({
    success: result
  });
});

export default migrationsRouter;
