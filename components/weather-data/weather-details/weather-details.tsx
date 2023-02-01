'use client'
import React, { FC } from 'react'
import { WeatherDetailsStyled } from '@/components/weather-data/weather-details/weather-details.styled'
import HourlyWeatherTable from '@/components/weather-data/weather-details/weather-table/hourly-weather-table'
import { useStore } from '@/providers/store'
import { ConfigProvider, DatePicker, theme } from 'antd'
import DailyWeatherTable from '@/components/weather-data/weather-details/weather-table/daily-weather-table'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker

const WeatherDetails: FC<{}> = (props) => {
  const store = useStore()

  if (!store.forecasts || store.forecasts.length === 0) {
    return <p>Whoops</p> // TODO Error state
  }

  return (
    <WeatherDetailsStyled>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <RangePicker
          clearIcon={false}
          disabledDate={(date) => {
            // We can only get 16 days after today
            const current = dayjs()
            return !(
              date.isBefore(current) || current.add(16, 'days').isAfter(date)
            )
          }}
          defaultValue={
            (store.startDate &&
              store.endDate && [
                dayjs(new Date(store.startDate)),
                dayjs(new Date(store.endDate)),
              ]) ||
            undefined
          }
          picker="date"
          onChange={(date, strings) => {
            if (strings.length === 2) {
              store.saveDates(strings[0], strings[1])
            }
          }}
        />
      </ConfigProvider>
      {(!store.startDate && !store.endDate && <p>Pick dates</p>) ||
        (store.startDate &&
          store.endDate &&
          ((store.startDate === store.endDate && (
            <HourlyWeatherTable
              latitude={store.forecasts[0].latitude}
              longitude={store.forecasts[0].longitude}
              date={store.startDate}
            />
          )) || (
            <DailyWeatherTable
              latitude={store.forecasts[0].latitude}
              longitude={store.forecasts[0].longitude}
              startDate={store.startDate}
              endDate={store.endDate}
            />
          )))}
    </WeatherDetailsStyled>
  )
}

export default WeatherDetails
