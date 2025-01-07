import { ObjectSchema } from "joi";

export interface JoiAdapterProps {
  validateSchema(schema: ObjectSchema, data: any): Promise<any>;
}

export class JoiAdapter implements JoiAdapterProps {
  async validateSchema(schema: ObjectSchema, data: any): Promise<any> {
    return await schema.validateAsync(data);
  }
}
