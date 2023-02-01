import { Repository } from '@/api/openmeteo/core/repository'
import { ErrorResponse } from '@/api/openmeteo/responses/common.responses'
import { Result } from 'neverthrow'
import {
  GetCurrentWeather,
  GetDailyForecastResponse,
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
    latitude: string,
    longitude: string,
    date: string
  ): Promise<Result<GetHourlyForecastResponse, ErrorResponse>> {
    return await this.client.request.get(
      this.client.state.basePath,
      `${
        this.#resourceName
      }?latitude=${latitude}&longitude=${longitude}&start_date=${date}&end_date=${date}&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,winddirection_10m`
    )
  }

  public async daily(
    latitude: string,
    longitude: string,
    startDate: string,
    endDate: string
  ): Promise<Result<GetDailyForecastResponse, ErrorResponse>> {
    return await this.client.request.get(
      this.client.state.basePath,
      `${
        this.#resourceName
      }?latitude=${latitude}&longitude=${longitude}&timezone=GMT&start_date=${startDate}&end_date=${endDate}&daily=weathercode,temperature_2m_max,temperature_2m_min`
    )
  }
}
