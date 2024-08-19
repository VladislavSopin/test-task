export class RequestResult<T = object> {
  request_description: string
  response: T
  constructor(request_description: string, response: T) {
    this.request_description = request_description
    this.response = response
  }
}
