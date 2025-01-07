interface ResponseBody {
  [key: string]: any;
}

export interface CreatedResponse {
  statusCode: number;
  body: ResponseBody;
}

export const created = (body: ResponseBody): CreatedResponse => {
  return {
    statusCode: 201,
    body,
  };
};

export const badRequest = (body: ResponseBody): CreatedResponse => {
  return {
    statusCode: 400,
    body,
  };
};
