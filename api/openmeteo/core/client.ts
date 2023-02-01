import { State } from './state'
import { Request } from './request'
import { GeocodingRepository } from '@/api/openmeteo/repositories/geocoding.repository'
import * as process from 'process'
import { ForecastRepository } from '@/api/openmeteo/repositories/forecast.repository'

export abstract class OpenMeteoApiClient {
  public state!: State
  public request!: Request
}

export class OpenMeteoApi extends OpenMeteoApiClient {
  public override state: State = new State()
  public override request: Request = new Request(this)

  public geocoding = new GeocodingRepository(this)
  public forecast = new ForecastRepository(this)

  constructor() {
    super()
    this.state.setBasePath(process.env.OPEN_METEO_API_URL as string)
    this.state.setGeocodingPath(process.env.OPEN_METEO_GEOCODING_API_URL as string)
  }
}
