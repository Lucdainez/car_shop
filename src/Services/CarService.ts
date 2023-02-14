import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';

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
}
