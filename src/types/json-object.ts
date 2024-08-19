export class JsonObject<T extends object> {
  data: T
  result: object
  offset?: number
  limit?: number
  constructor(data: T) {
    this.data = data
  }
}
