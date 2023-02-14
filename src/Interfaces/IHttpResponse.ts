export default interface IHttpResponse<B> {
  statusCode: number,
  body: B
}
