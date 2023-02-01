import React from 'react'

import CloudyIcon from '@/assets/icons/weather/cloudy.svg'
import HeavyRainIcon from '@/assets/icons/weather/heavy-rain.svg'
import RainIcon from '@/assets/icons/weather/rain.svg'
import SnowIcon from '@/assets/icons/weather/snow.svg'
import SunnyIcon from '@/assets/icons/weather/sunny.svg'
import ThunderstormIcon from '@/assets/icons/weather/thunderstorm.svg'
import UnknownIcon from '@/assets/icons/weather/unknown.svg'

export type WeatherType =
  | 'clear'
  | 'partly_cloudy'
  | 'fog'
  | 'drizzle'
  | 'freezing_drizzle'
  | 'rain_slight'
  | 'freezing_rain'
  | 'snow'
  | 'snow_grains'
  | 'rain_showers'
  | 'thunderstorm'
  | 'unknown'

export function weatherCodeToType(code: number): WeatherType {
  switch (code) {
    case 0:
      return 'clear'
    case 1:
    case 2:
    case 3:
      return 'partly_cloudy'
    case 45:
    case 48:
      return 'fog'
    case 51:
    case 53:
    case 55:
      return 'drizzle'
    case 56:
    case 57:
      return 'freezing_drizzle'
    case 61:
    case 63:
    case 65:
      return 'rain_slight'
    case 66:
    case 67:
      return 'freezing_rain'
    case 71:
    case 73:
    case 75:
      return 'snow'
    case 77:
      return 'snow_grains'
    case 80:
    case 81:
    case 82:
    case 85:
    case 86:
      return 'rain_showers'
    case 95:
    case 96:
    case 99:
      return 'thunderstorm'
    default:
      return 'unknown'
  }
}

export function weatherTypeToDescription(type: WeatherType): string {
  switch (type) {
    case 'clear':
      return 'Clear'
    case 'partly_cloudy':
      return 'Mainly clear, partly cloudy'
    case 'fog':
      return 'Fog'
    case 'drizzle':
      return 'Drizzle'
    case 'freezing_drizzle':
      return 'Freezing drizzle'
    case 'rain_slight':
      return 'Rainy'
    case 'freezing_rain':
      return 'Freezing rain'
    case 'snow':
      return 'Snowy'
    case 'snow_grains':
      return 'Snow grains'
    case 'rain_showers':
      return 'Rain showers'
    case 'thunderstorm':
      return 'Thunderstorm'
    case 'unknown':
      return 'Unknown'
  }
}

export function degreeToDirection(degree: number): string {
  const val = Math.floor(degree / 22.5 + 0.5)
  const arr = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ]
  return arr[val % 16]
}

export function weatherTypeToIcon(
  type: WeatherType
): React.FunctionComponent<React.SVGProps<SVGSVGElement>> {
  switch (type) {
    case 'clear':
      return SunnyIcon
    case 'partly_cloudy':
    case 'fog':
      return CloudyIcon
    case 'drizzle':
    case 'freezing_drizzle':
    case 'rain_slight':
      return RainIcon
    case 'freezing_rain':
      return HeavyRainIcon
    case 'snow':
    case 'snow_grains':
      return SnowIcon
    case 'rain_showers':
      return HeavyRainIcon
    case 'thunderstorm':
      return ThunderstormIcon
    case 'unknown':
      return UnknownIcon
  }
}
