import ICar from '../Interfaces/ICar';
import IHttpResponse from '../Interfaces/IHttpResponse';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';
import { badRequest } from '../utils/BadResponses';

export default class CarService {
  private carOdm: CarODM;

  constructor() {
    this.carOdm = new CarODM();
  }

  private createCarDomain(car: ICar): Car | null {
    if (car) {
      const newCar = new Car(car);
      return newCar;
    }
    
    return null;
  }
  
  public async createCar(car: ICar) {
    const newCar = await this.carOdm.create(car);
    
    return this.createCarDomain(newCar);
  }

  public async findAll(): Promise<Car[]> {
    const allCars = await this.carOdm.findAll();
    
    return allCars.map((car) => this.createCarDomain(car)) as Car[];
  }

  public async findOneCar(id: string): Promise<IHttpResponse<Car | string>> {
    const car = await this.carOdm.findOne(id);
    
    if (car === null) return badRequest('Car not found');
    
    const instaceCar = this.createCarDomain(car);
    
    return {
      statusCode: 200,
      body: instaceCar as Car,
    };
  }

  public async updateCar(id: string, car: ICar): Promise<IHttpResponse<Car | string>> {
    const updatedCar = await this.carOdm.update(id, car);
    
    if (updatedCar === null) return badRequest('Car not found');
    
    const instaceCar = this.createCarDomain(updatedCar);
    
    return {
      statusCode: 200,
      body: instaceCar as Car,
    };
  }
}
