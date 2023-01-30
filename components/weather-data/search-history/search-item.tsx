import React, { FC } from 'react'
import { Icon } from '@/components/common/icon/icon'
import { SearchItemStyled } from '@/components/weather-data/search-history/search-item.styled'
import { useCurrentWeather } from '@/api/swr'
import { weatherCodeToType, weatherTypeToIcon } from '@/utils/weather-utils'

const SearchItem: FC<{
  latitude: number
  longitude: number
  country: string
  city: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  onClick: () => void
}> = (props) => {
  const { currentWeather, loading } = useCurrentWeather(
    props.latitude,
    props.longitude
  )

  if (loading) {
    return <p>Loading</p>
  }

  if (!currentWeather) {
    return <p>Error</p>
  }

  return (
    <SearchItemStyled onClick={props.onClick}>
      <div className={`search-item__info`}>
        <span className={`search-item__title`}>
          <strong>{props.city}</strong>, {props.country}
        </span>
        <span className={`search-item__temp`}>
          {currentWeather?.current_weather.temperature}º
        </span>
      </div>
      <div className={`search-item__icon`}>
        <Icon
          svg={weatherTypeToIcon(
            weatherCodeToType(currentWeather?.current_weather.weathercode)
          )}
        />
      </div>
    </SearchItemStyled>
  )
}

export default SearchItem
