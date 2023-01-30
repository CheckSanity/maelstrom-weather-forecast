import useSWR from 'swr'
import { Result } from 'neverthrow'
import { ErrorResponse } from './openmeteo/responses/common.responses'
import { useOpenMeteoApi } from './hooks'
import { GetCurrentWeather } from '@/api/openmeteo/responses/forecast.responses'

export function useCurrentWeather(latitude: number, longitude: number) {
  const api = useOpenMeteoApi()

  const { data, mutate, isLoading } = useSWR<
    Result<GetCurrentWeather, ErrorResponse>
  >(`/api/forecast/current/latitude=${latitude}&longitude=${longitude}`, () =>
    api.forecast.current(latitude.toString(), longitude.toString())
  )

  return {
    currentWeather: data?.isOk && data?.isOk() ? data?.value : undefined,
    error: data?.isErr && data?.isErr() ? data?.error.error : undefined,
    loading: isLoading,
    refresh: mutate,
  }
}
