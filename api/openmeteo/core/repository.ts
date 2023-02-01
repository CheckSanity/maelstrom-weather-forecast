import { OpenMeteoApiClient } from './client'

export abstract class Repository {
  protected client: OpenMeteoApiClient

  constructor(client: OpenMeteoApiClient) {
    this.client = client
  }
}
