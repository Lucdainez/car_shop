import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcycleService from '../Services/MotorcycleService';

export default class CarController {
  private motorcycleService: MotorcycleService;

  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motorcycleService = new MotorcycleService();
  }

  public async create() {
    const newMotorcycle = await this.motorcycleService.createMotorcycle(this.req.body);
    return this.res.status(201).json(newMotorcycle);
  }

  public async findAll() {
    const allMotorcycles = await this.motorcycleService.findAll();
    return this.res.status(200).json(allMotorcycles);
  }

  public async findOneMotorcycle() {
    const { id } = this.req.params;
    
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    
    const { statusCode, body } = await this.motorcycleService.findOneMotorcycle(id);
    
    if (statusCode === 404) {
      return this.res.status(statusCode).json({ message: body });
    }

    return this.res.status(statusCode).json(body);
  }

  public async updateMotorcycle() {
    const { id } = this.req.params;
    
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    
    const { statusCode, body } = await this.motorcycleService.updateMotorcycle(id, this.req.body);
    
    if (statusCode === 404) {
      return this.res.status(statusCode).json({ message: body });
    }

    return this.res.status(statusCode).json(body);
  }
}
