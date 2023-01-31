export type CurrentWeather = {
  temperature: number
  windspeed: number
  winddirection: number
  weathercode: number
  time: string
}

export type ForecastHourly = {
  time: string[]
  temperature_2m: number[]
  relativehumidity_2m: number[]
  weathercode: number[]
  windspeed_10m: number[]
  winddirection_10m: number[]
}

export type ForecastHourlyUnits = {
  time: string
  temperature_2m: string
  relativehumidity_2m: string
  weathercode: string
  windspeed_10m: string
  winddirection_10m: string
}
