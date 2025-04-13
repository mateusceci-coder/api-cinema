interface ResponseBody {
  [key: string]: any;
}

export interface HttpResponse {
  statusCode: number;
  body: ResponseBody;
}

export const created = (body: ResponseBody): HttpResponse => {
  return {
    statusCode: 201,
    body,
  };
};

export const ok = (body: ResponseBody): HttpResponse => {
  return {
    statusCode: 200,
    body,
  };
};

export const notFound = (body: ResponseBody): HttpResponse => {
  return {
    statusCode: 404,
    body,
  };
};

export const badRequest = (body: ResponseBody): HttpResponse => {
  return {
    statusCode: 400,
    body,
  };
};
