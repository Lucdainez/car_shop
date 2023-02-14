import { Model, Schema, model, models } from 'mongoose';

export default class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async findOne(id: string): Promise<T | null> {
    return this.model.findOne({ _id: id });
  }
  
  public async update(id: string, vehicle: Partial<T>): Promise<T | null> {
    await this.model.updateOne({ _id: id }, { ...vehicle });
    return this.model.findOne({ _id: id });
  }
}