import IHttpResponse from '../Interfaces/IHttpResponse';

const badRequest = (message: string): IHttpResponse<string> => ({
  statusCode: 404,
  body: message,
});

const invalidRequest = (message: string): IHttpResponse<string> => ({
  statusCode: 422,
  body: message,
});

export { badRequest, invalidRequest };