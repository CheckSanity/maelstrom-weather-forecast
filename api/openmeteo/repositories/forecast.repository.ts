import { Repository } from '@/api/openmeteo/core/repository'
import { ErrorResponse } from '@/api/openmeteo/responses/common.responses'
import { Result } from 'neverthrow'
import {
  GetCurrentWeather,
  GetHourlyForecastResponse,
} from '@/api/openmeteo/responses/forecast.responses'

export class ForecastRepository extends Repository {
  #resourceName = 'forecast'

  public async current(
    latitude: string,
    longitude: string
  ): Promise<Result<GetCurrentWeather, ErrorResponse>> {
    return await this.client.request.get(
      this.client.state.basePath,
      `${
        this.#resourceName
      }?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
  }

  public async hourly(
    latitude: number,
    longitude: number
  ): Promise<Result<GetHourlyForecastResponse, ErrorResponse>> {
    return await this.client.request.get(
      this.client.state.basePath,
      `${this.#resourceName}?latitude=${latitude}&longitude=${longitude}}`
    )
  }
}
