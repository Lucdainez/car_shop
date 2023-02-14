import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Teste da camada service CarService', function () {
  describe('Casos de sucesso', function () {
    it('Deveria criar um novo carro', async function () {
      const carInput: ICar = {
        id: '63eae650853d978f10f05228',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };

      const carOutput: Car = new Car(carInput);

      sinon.stub(Model, 'create').resolves(carOutput);

      const service = new CarService();
      const result = await service.createCar(carInput);

      expect(result).to.be.deep.equal(carOutput);
    });

    it('Deveria retornar todos os carros', async function () {
      const carInput: ICar[] = [{
        id: '63eae650853d978f10f05228',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      }];

      sinon.stub(Model, 'find').resolves(carInput);

      const service = new CarService();
      const result = await service.findAll();

      expect(result).to.be.deep.equal(carInput);
    });

    it('Deveria retornar um carro específico', async function () {
      const carInput: ICar = {
        id: '63eae650853d978f10f05228',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };

      const carOutput: Car = new Car(carInput);

      sinon.stub(Model, 'findOne').resolves(carOutput);

      const service = new CarService();
      const result = await service.findOneCar(carInput.id as string);

      expect(result.body).to.be.deep.equal(carOutput);
    });

    it('Deveria atualizar um carro', async function () {
      const carInput: ICar = {
        // id: '63eae650853d978f10f05228',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };

      const carOutput: Car = new Car(carInput);

      sinon.stub(Model, 'updateOne').resolves();
      sinon.stub(Model, 'findOne').resolves(carOutput);

      const service = new CarService();
      const result = await service.updateCar(carInput.id as string, carInput);

      expect(result.body).to.be.deep.equal(carOutput);
    });
  });

  describe('Casos de falha', function () {
    it('Deveria retornar um "Car not found", caso não encontre o carro', async function () {
      const carInput: ICar = {
        id: '63eae650853d978f10f05228',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };

      // const carOutput: Car = new Car(carInput);

      sinon.stub(Model, 'findOne').resolves(null);

      const service = new CarService();
      const result = await service.findOneCar(carInput.id as string);

      expect(result.body).to.be.deep.equal('Car not found');
    });

    it('Deveria retornar um "Car not found", caso não atualize o carro', async function () {
      const carInput: ICar = {
        // id: '63eae650853d978f10f05228',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };

      // const carOutput: Car = new Car(carInpu);

      sinon.stub(Model, 'updateOne').resolves();
      sinon.stub(Model, 'findOne').resolves(null);

      const service = new CarService();
      const result = await service.updateCar(carInput.id as string, carInput);

      expect(result.body).to.be.deep.equal('Car not found');
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});