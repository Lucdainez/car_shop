import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
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

  public async findAll() {
    const allCars = await this.carService.findAll();
    return this.res.status(200).json(allCars);
  }

  public async findOneCar() {
    const { id } = this.req.params;
    
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    
    const { statusCode, body } = await this.carService.findOneCar(id);
    
    if (statusCode === 404) {
      return this.res.status(statusCode).json({ message: body });
    }

    return this.res.status(statusCode).json(body);
  }

  public async updateCar() {
    const { id } = this.req.params;
    
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    
    const { statusCode, body } = await this.carService.updateCar(id, this.req.body);
    
    if (statusCode === 404) {
      return this.res.status(statusCode).json({ message: body });
    }

    return this.res.status(statusCode).json(body);
  }
}
