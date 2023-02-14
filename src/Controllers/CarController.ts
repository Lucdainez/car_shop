import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private carService: CarService;

  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.carService = new CarService();
  }

  public async create() {
    const newCar = await this.carService.createCar(this.req.body);
    return this.res.status(201).json(newCar);
  }
}