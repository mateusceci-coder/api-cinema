import { ObjectSchema } from "joi";

export class JoiAdapter {
  async validateSchema(schema: ObjectSchema, data: any): Promise<any> {
    return await schema.validateAsync(data);
  }
}
