import IMotorcycle from '../Interfaces/IMotorcycle';
import IHttpResponse from '../Interfaces/IHttpResponse';
import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';
import { badRequest } from '../utils/BadResponses';

export default class CarService {
  private motorcycleOdm: MotorcycleODM;

  constructor() {
    this.motorcycleOdm = new MotorcycleODM();
  }

  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle | null {
    if (motorcycle) {
      const newCar = new Motorcycle(motorcycle);
      return newCar;
    }
    
    return null;
  }
  
  public async createMotorcycle(motorcycle: IMotorcycle) {
    const newCar = await this.motorcycleOdm.create(motorcycle);
    
    return this.createMotorcycleDomain(newCar);
  }

  public async findAll(): Promise<Motorcycle[]> {
    const allCars = await this.motorcycleOdm.findAll();
    
    return allCars.map((car) => this.createMotorcycleDomain(car)) as Motorcycle[];
  }

  public async findOneMotorcycle(id: string): Promise<IHttpResponse<Motorcycle | string>> {
    const motorcycle = await this.motorcycleOdm.findOne(id);
    
    if (motorcycle === null) return badRequest('Motorcycle not found');
    
    const instaceMotorcycle = this.createMotorcycleDomain(motorcycle);
    
    return {
      statusCode: 200,
      body: instaceMotorcycle as Motorcycle,
    };
  }

  public async updateMotorcycle(
    id: string,
    motorcycle: IMotorcycle,
  ): Promise<IHttpResponse<Motorcycle | string>> {
    const updatedMotorcycle = await this.motorcycleOdm.update(id, motorcycle);
    
    if (updatedMotorcycle === null) return badRequest('Car not found');
    
    const instaceCar = this.createMotorcycleDomain(updatedMotorcycle);
    
    return {
      statusCode: 200,
      body: instaceCar as Motorcycle,
    };
  }
}
