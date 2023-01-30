import { err, ok, Result } from 'neverthrow'
import { OpenMeteoApiClient } from './client'
import { ErrorResponse } from '../responses/common.responses'

export class Request {
  constructor(private client: OpenMeteoApiClient) {
  }

  public async get<T>(path: string, endpoint: string): Promise<Result<T, ErrorResponse>> {
    return this.send(path, endpoint, 'GET')
  }

  public async send<T>(
    path: string,
    endpoint: string,
    method: string,
    body?: JSON | any,
  ): Promise<Result<T, ErrorResponse>> {
    const url = path + endpoint

    const headers: HeadersInit = {
      'Content-type': 'application/json',
      'Accept-Encoding': 'gzip',
      'Content-Encoding': 'gzip',
    }

    const config: RequestInit = {
      method: method,
      headers,
    }

    if (body) {
      config.body = JSON.stringify(body)
    }

    return fetch(url, config)
      .then(async (r) => {
        //return err({ error: { code: -1, message: 'text' } }) //await r.json()
        const json = await r.json()
        if (r.ok) {
          return ok(json)
        } else {
          return err(json)
        }
      })
      .catch((error) => {
        console.error(error)
        return err({ error: { code: -1, message: error.message } })
      })
  }
}
