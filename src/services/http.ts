import axios from 'axios'

interface IHttpClient {
  get<T>(url: string): Promise<T>
}

interface HttpClientOptions {
  readonly baseURL: string
}

export class HttpClient implements IHttpClient {
  private readonly client: ReturnType<typeof axios.create>

  constructor(options: HttpClientOptions) {
    this.client = axios.create({
      baseURL: options.baseURL
    })
  }

  public async get<T>(url: string): Promise<T> {
    const response = await this.client.get<T>(url)
    return response.data
  }
}
