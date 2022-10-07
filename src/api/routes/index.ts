import { Router } from 'express';
import moviesRouter from './movies';
import migrationsRouter from './migration';

const router = Router();

router.use('/movies', moviesRouter);
router.use('/migrations', migrationsRouter);

export default router;
