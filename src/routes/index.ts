import { Router } from 'express';

import PalindromesController from '../controllers/PalindromesController';
import TransactionsController from '../controllers/TransactionsController';
import VehiclesController from '../controllers/VehiclesController';
import ZipcodesController from '../controllers/ZipcodesController';

const routes = Router();

const palindromesController = new PalindromesController();
const transactionsController = new TransactionsController();
const vehiclesController = new VehiclesController();
const zipcodesController = new ZipcodesController();

routes.get('/palindromes', palindromesController.index);

routes.get('/transactions', transactionsController.index);

routes.get('/vehicles', vehiclesController.index);
routes.post('/vehicles', vehiclesController.create);

routes.post('/cep', zipcodesController.index);

export default routes;
