import { FC } from 'react'
import { WeatherTableLoadingStyled } from '@/components/weather-data/weather-details/weather-table/weather-table-loading.styled'
import Skeleton from '@/components/common/loader/skeleton'

const WeatherTableLoading: FC<{}> = () => {
  return (
    <WeatherTableLoadingStyled>
      {[...Array(8)].map((x, i) => (
        <Skeleton key={i} fullWidth={true} active={true} size={'lg'} />
      ))}
    </WeatherTableLoadingStyled>
  )
}

export default WeatherTableLoading
