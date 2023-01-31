import { FC } from 'react'
import { WeatherDetailsStyled } from '@/components/weather-data/weather-details/weather-details.styled'
import HourlyWeatherTable from '@/components/weather-data/weather-details/weather-table/hourly-weather-table'
import { useStore } from '@/providers/store'
import moment from 'moment'

const WeatherDetails: FC<{}> = (props) => {
  const store = useStore()

  if (!store.forecasts || store.forecasts.length === 0) {
    return <p>Whoops</p> // TODO Error state
  }

  return (
    <WeatherDetailsStyled>
      <div>Selector</div>
      <HourlyWeatherTable
        latitude={store.forecasts[0].latitude}
        longitude={store.forecasts[0].longitude}
        startDate={moment(new Date()).format('YYYY-MM-DD')}
        endDate={moment(new Date()).format('YYYY-MM-DD')}
      />
    </WeatherDetailsStyled>
  )
}

export default WeatherDetails
