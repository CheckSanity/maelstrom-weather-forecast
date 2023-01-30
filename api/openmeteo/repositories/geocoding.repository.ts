import { Repository } from '@/api/openmeteo/core/repository'
import { ErrorResponse } from '@/api/openmeteo/responses/common.responses'
import { Result } from 'neverthrow'
import { GeocodingResponses } from '@/api/openmeteo/responses/geocoding.responses'

export class GeocodingRepository extends Repository {

  public async search(
    query: string,
  ): Promise<Result<GeocodingResponses, ErrorResponse>> {
    return await this.client.request.get(
      this.client.state.geocodingPath,
      `search?name=${query}`,
    )
  }
}
