import { Repository } from '@/api/openmeteo/core/repository'
import { ErrorResponse } from '@/api/openmeteo/responses/common.responses'
import { Result } from 'neverthrow'
import { GeocodingResponses } from '@/api/openmeteo/responses/geocoding.responses'

export class ForecastRepository extends Repository {

  public async forecast(
    latitude: number,
    longitude: number,
  ): Promise<Result<GeocodingResponses, ErrorResponse>> {
    return await this.client.request.get(
      this.client.state.basePath,
      `forecast?latitude=${latitude}&longitude=${longitude}`,
    )
  }
}
