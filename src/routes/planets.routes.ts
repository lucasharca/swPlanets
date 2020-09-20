import { Router } from 'express';

const planetsRouter = Router();

import PlanetsController from '../controllers/PlanetsController'
const planetController = new PlanetsController();

planetsRouter.post('/', planetController.create);
planetsRouter.get('/all', planetController.list);
planetsRouter.get('/find', planetController.findOne);
planetsRouter.delete('/delete/:id', planetController.delete);

export default planetsRouter;