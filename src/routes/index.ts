import { Router } from 'express';

import PalindromesController from '../controllers/PalindromesController';
import TransactionsController from '../controllers/TransactionsController';
import ZipcodesController from '../controllers/ZipcodesController';

const routes = Router();

const palindromesController = new PalindromesController();
const transactionsController = new TransactionsController();
const zipcodesController = new ZipcodesController();

routes.get('/palindromes', palindromesController.index);

routes.get('/transactions', transactionsController.index);

routes.get('/cep', zipcodesController.index);

export default routes;
