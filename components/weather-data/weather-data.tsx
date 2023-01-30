import { FC } from 'react'
import { WeatherDataStyled } from '@/components/weather-data/weather-data.styled'
import SearchHistory from '@/components/weather-data/search-history/search-history'

const WeatherData: FC<{}> = () => {
  return (
    <WeatherDataStyled>
      <SearchHistory />
    </WeatherDataStyled>
  )
}

export default WeatherData
