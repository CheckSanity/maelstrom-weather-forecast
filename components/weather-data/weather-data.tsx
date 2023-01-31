import { FC } from 'react'
import { WeatherDataStyled } from '@/components/weather-data/weather-data.styled'
import SearchHistory from '@/components/weather-data/search-history/search-history'
import WeatherDetails from '@/components/weather-data/weather-details/weather-details'

const WeatherData: FC<{}> = () => {
  return (
    <WeatherDataStyled>
      <SearchHistory />
      <WeatherDetails />
    </WeatherDataStyled>
  )
}

export default WeatherData
