'use client'
import { FC, useCallback, useRef } from 'react'
import { SearchHistoryStyled } from '@/components/weather-data/search-history/search-history.styled'
import SearchMainItem from '@/components/weather-data/search-history/search-main-item'
import SearchItem from '@/components/weather-data/search-history/search-item'
import TestIcon from '@/assets/icons/search.svg'
import { useStore } from '@/providers/store'

const SearchHistory: FC<{}> = () => {
  const store = useStore()
  const scrollRef = useRef<HTMLDivElement>(null)

  const goToTop = useCallback(() => {
    scrollRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <SearchHistoryStyled>
      <h4 className={`search-history__title`}>Search history</h4>
      <div className={`search-history__wrapper`} ref={scrollRef}>
        <div className={`search-history__list`}>
          {store.forecasts &&
            store.forecasts.map((forecast, index) => {
              if (index === 0) {
                return (
                  <SearchMainItem
                    longitude={forecast.longitude}
                    latitude={forecast.latitude}
                    city={forecast.city}
                    country={forecast.country}
                    key={`${forecast.longitude}${forecast.latitude}`}
                    onCrossClick={() =>
                      store.removeForecast(
                        forecast.latitude,
                        forecast.longitude
                      )
                    }
                  />
                )
              } else {
                return (
                  <SearchItem
                    onClick={() => {
                      store.addForecast(forecast)
                      goToTop()
                    }}
                    key={`${forecast.longitude}${forecast.latitude}`}
                    country={forecast.country}
                    city={forecast.city}
                    latitude={forecast.latitude}
                    longitude={forecast.longitude}
                    icon={TestIcon}
                  />
                )
              }
            })}
        </div>
      </div>
    </SearchHistoryStyled>
  )
}

export default SearchHistory
