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
  dewpoint_2m: number[]
  apparent_temperature: number[]
  precipitation: number[]
  rain: number[]
  showers: number[]
  snowfall: number[]
  snow_depth: number[]
  freezinglevel_height: number[]
  weathercode: number[]
}

export type ForecastHourlyUnits = {
  time: string
  temperature_2m: string
  relativehumidity_2m: string
  dewpoint_2m: string
  apparent_temperature: string
  precipitation: string
  rain: string
  showers: string
  snowfall: string
  snow_depth: string
  freezinglevel_height: string
  weathercode: string
  pressure_msl: string
  surface_pressure: string
  cloudcover: string
  cloudcover_low: string
  cloudcover_mid: string
  cloudcover_high: string
  visibility: string
  evapotranspiration: string
  et0_fao_evapotranspiration: string
  vapor_pressure_deficit: string
  cape: string
  soil_temperature_0cm: string
}
