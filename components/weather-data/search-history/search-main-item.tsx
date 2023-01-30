'use client'
import { FC } from 'react'
import { SearchMainItemStyled } from '@/components/weather-data/search-history/search-main-item.styled'
import { Icon } from '@/components/common/icon/icon'
import IconButton from '@/components/common/button/icon-button'
import CrossIcon from '@/assets/icons/cross.svg'
import { useCurrentWeather } from '@/api/swr'
import {
  degreeToDirection,
  weatherCodeToType,
  weatherTypeToDescription,
  weatherTypeToIcon,
} from '@/utils/weather-utils'
import Skeleton from '@/components/common/loader/skeleton'

function dayMonthFromDate(dateString: string): string {
  const date = new Date(dateString)
  console.log(date)
  return `${date.getDate()} ${date.toLocaleString('default', {
    month: 'long',
  })}`
}

const SearchMainItem: FC<{
  city: string
  country: string
  longitude: number
  latitude: number
  onCrossClick: () => void
}> = (props) => {
  const { currentWeather, loading, error } = useCurrentWeather(
    props.latitude,
    props.longitude
  )

  if (loading) {
    return <Loading />
  }

  if (!currentWeather) {
    return (
      <Error
        onCrossClick={props.onCrossClick}
        error={error?.message || 'Unknown error'}
      />
    )
  }

  return (
    <SearchMainItemStyled>
      <div className={`search-main-item__header`}>
        <span className={`search-main-item__date`}>
          {dayMonthFromDate(currentWeather?.current_weather.time)}{' '}
        </span>
        <span className={`search-main-item__location`}>
          <strong>{props.city}</strong>, {props.country}
        </span>
      </div>
      <div className={`search-main-item__icon`}>
        <Icon
          svg={weatherTypeToIcon(
            weatherCodeToType(currentWeather?.current_weather.weathercode)
          )}
        />
      </div>
      <div className={`search-main-item__info`}>
        <span className={`search-main-item__temp`}>
          {currentWeather?.current_weather.temperature}º
        </span>
        <span className={`search-main-item__status`}>
          {weatherTypeToDescription(
            weatherCodeToType(currentWeather?.current_weather.weathercode || 0)
          )}
        </span>
      </div>
      <div className={`search-main-item__stats`}>
        <span className={`search-main-item__stats__item`}>
          <span className={`search-main-item__stats__value`}>
            {currentWeather?.current_weather.windspeed}
            <span className={`search-main-item__stats__postfix`}> km/h</span>
          </span>
          <span className={`search-main-item__stats__desc`}>Wind speed</span>
        </span>
        <span className={`search-main-item__stats__item`}>
          <span className={`search-main-item__stats__value`}>
            {degreeToDirection(currentWeather?.current_weather.winddirection)}
          </span>
          <span className={`search-main-item__stats__desc`}>
            Wind direction
          </span>
        </span>
      </div>
      <IconButton svg={CrossIcon} onClick={props.onCrossClick} />
    </SearchMainItemStyled>
  )
}

const Loading = () => {
  return (
    <SearchMainItemStyled>
      <div className={`search-main-item__header`}>
        <span className={`search-main-item__date`}>
          <Skeleton active={true} size={'sm'} />
        </span>
        <span className={`search-main-item__location`}>
          <Skeleton fullWidth={true} active={true} size={'sm'} />
        </span>
      </div>
      <div className={`search-main-item__icon`}>
        <Skeleton active={true} size={'sm'} variant={'circle'} />
      </div>
      <div className={`search-main-item__info`}>
        <Skeleton fullWidth={true} active={true} size={'lg'} />
      </div>
      <div className={`search-main-item__stats`}>
        <Skeleton fullWidth={true} active={true} size={'lg'} />
      </div>
    </SearchMainItemStyled>
  )
}

const Error: FC<{ onCrossClick: () => void; error: string }> = (props) => {
  return (
    <SearchMainItemStyled className={'error'}>
      <span className={'search-main-item__error'}>{props.error}</span>
      <IconButton svg={CrossIcon} onClick={props.onCrossClick} />
    </SearchMainItemStyled>
  )
}

export default SearchMainItem
