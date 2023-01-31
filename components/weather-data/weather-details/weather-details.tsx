import { FC } from 'react'
import { WeatherDetailsStyled } from '@/components/weather-data/weather-details/weather-details.styled'
import HourlyWeatherTable from '@/components/weather-data/weather-details/weather-table/hourly-weather-table'

const WeatherDetails: FC<{}> = (props) => {
  return (
    <WeatherDetailsStyled>
      <div>Selector</div>
      <HourlyWeatherTable />
    </WeatherDetailsStyled>
  )
}

export default WeatherDetails
