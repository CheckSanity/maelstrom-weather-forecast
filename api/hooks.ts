import { OpenMeteoApi } from './openmeteo/core/client'

export function useOpenMeteoApi() {
  const api = new OpenMeteoApi()
  api.state.setBasePath('/api/openmeteo/')
  api.state.setGeocodingPath('/api/geocoding/')

  return api
}
