import { FC } from 'react'
import {
  WeatherType,
  weatherTypeToDescription,
  weatherTypeToIcon,
} from '@/utils/weather-utils'
import { Icon } from '@/components/common/icon/icon'
import { WeatherTypeCellStyled } from '@/components/weather-data/weather-details/weather-table/weather-table-cell.styled'

const WeatherTypeCell: FC<{ type: WeatherType }> = (props) => {
  return (
    <WeatherTypeCellStyled>
      <Icon svg={weatherTypeToIcon(props.type)} />
      <span className={'weather-type-cell__desc'}>
        {weatherTypeToDescription(props.type)}
      </span>
    </WeatherTypeCellStyled>
  )
}

export default WeatherTypeCell
