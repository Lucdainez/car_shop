import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

carRoutes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findOneCar(),
);

carRoutes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findAll(),
);

export default carRoutes;