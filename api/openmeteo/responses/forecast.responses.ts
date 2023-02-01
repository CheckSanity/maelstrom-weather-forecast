import {
  CurrentWeather,
  ForecastDaily,
  ForecastDailyUnits,
  ForecastHourly,
  ForecastHourlyUnits,
} from '@/api/openmeteo/types/forecast.types'

export type GetHourlyForecastResponse = {
  hourly_units: ForecastHourlyUnits
  hourly: ForecastHourly
}

export type GetCurrentWeather = {
  current_weather: CurrentWeather
}

export type GetDailyForecastResponse = {
  daily_units: ForecastDailyUnits
  daily: ForecastDaily
}
