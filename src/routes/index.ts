import { Router } from 'express';

import planetsRoutes from './planets.routes';

const routes = Router();

routes.use('/planets', planetsRoutes);

export default routes;
