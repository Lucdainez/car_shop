import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Teste da camada service MotorcycleService', function () {
  describe('Casos de sucesso', function () {
    const MODEL = 'Honda Cb 600f Hornet';
    const MOTORCYCLE_INPUT: IMotorcycle = {
      id: '6348513f34c397abcad040b2',
      model: MODEL,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
  
    it('Deveria criar uma nova moto', async function () {
      const motorcycleOutput: Motorcycle = new Motorcycle(MOTORCYCLE_INPUT);

      sinon.stub(Model, 'create').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.createMotorcycle(MOTORCYCLE_INPUT);

      expect(result).to.be.deep.equal(MOTORCYCLE_INPUT);
    });

    it('Deveria retornar todos as motos', async function () {
      const MOTORCYCLE_INPUT_ARRAY: IMotorcycle[] = [{
        id: '6348513f34c397abcad040b2',
        model: MODEL,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      }];

      sinon.stub(Model, 'find').resolves(MOTORCYCLE_INPUT_ARRAY);

      const service = new MotorcycleService();
      const result = await service.findAll();

      expect(result).to.be.deep.equal(MOTORCYCLE_INPUT_ARRAY);
    });

    it('Deveria retornar uma moto específico', async function () {
      const motorcycleOutput: Motorcycle = new Motorcycle(MOTORCYCLE_INPUT);

      sinon.stub(Model, 'findOne').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.findOneMotorcycle(MOTORCYCLE_INPUT.id as string);

      expect(result.body).to.be.deep.equal(motorcycleOutput);
    });

    it('Deveria atualizar uma moto', async function () {
      const motorcycleOutput: Motorcycle = new Motorcycle(MOTORCYCLE_INPUT);

      sinon.stub(Model, 'updateOne').resolves();
      sinon.stub(Model, 'findOne').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service
        .updateMotorcycle(MOTORCYCLE_INPUT.id as string, MOTORCYCLE_INPUT);

      expect(result.body).to.be.deep.equal(motorcycleOutput);
    });
  });

  describe('Casos de falha', function () {
    const MODEL = 'Honda Cb 600f Hornet';

    it('Deveria retornar um "Motorcycle not found", caso não encontre a moto', async function () {
      const MOTORCYCLE_INPUT: IMotorcycle = {
        id: '6348513f34c397abcad040b2',
        model: MODEL,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      };

      sinon.stub(Model, 'findOne').resolves(null);

      const service = new MotorcycleService();
      const result = await service.findOneMotorcycle(MOTORCYCLE_INPUT.id as string);

      expect(result.body).to.be.deep.equal('Motorcycle not found');
    });

    it('Deveria retornar um "Motorcycle not found", caso não atualize a moto', async function () {
      const MOTORCYCLE_INPUT: IMotorcycle = {
        id: '6348513f34c397abcad040b2',
        model: MODEL,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      };

      sinon.stub(Model, 'updateOne').resolves();
      sinon.stub(Model, 'findOne').resolves(null);

      const service = new MotorcycleService();
      const result = await service
        .updateMotorcycle(MOTORCYCLE_INPUT.id as string, MOTORCYCLE_INPUT);

      expect(result.body).to.be.deep.equal('Motorcycle not found');
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});