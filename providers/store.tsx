'use client'
import React, { useContext, useEffect, useState } from 'react'
import getValidDate from '@/utils/date-utils'

interface Forecast {
  city: string
  country: string
  latitude: number
  longitude: number
}

interface IStoreContext {
  addForecast: (forecast: Forecast) => void
  removeForecast: (latitude: number, longitude: number) => void
  saveDates: (startDate: string, endDate: string) => void
  startDate: string
  endDate: string
  forecasts: Forecast[]
  loading: boolean
}

const StoreContext = React.createContext<IStoreContext>({
  addForecast: () => {
    console.warn('Not implemented')
  },
  removeForecast: () => {
    console.warn('Not implemented')
  },
  saveDates: () => {
    console.warn('Not implemented')
  },
  forecasts: [],
  startDate: '',
  endDate: '',
  loading: true,
})
export const useStore = () => useContext(StoreContext)

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true)
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [forecasts, setForecasts] = useState<Forecast[]>([])
  const addForecast = (forecast: Forecast) => {
    let currentForecasts: Forecast[] =
      (localStorage.forecasts && JSON.parse(localStorage.forecasts)) || []

    if (currentForecasts.length > 0) {
      currentForecasts = currentForecasts.filter(
        (currentForecast: Forecast) =>
          currentForecast.latitude != forecast.latitude &&
          currentForecast.longitude != forecast.longitude
      )
    }

    currentForecasts.unshift(forecast)

    localStorage.setItem('forecasts', JSON.stringify(currentForecasts))
    setForecasts(currentForecasts)
  }

  const removeForecast = (latitude: number, longitude: number) => {
    const currentForecasts = localStorage.forecasts || []
    if (currentForecasts.length === 0) {
      return
    }

    const updatedForecasts = currentForecasts.filter(
      (forecast: Forecast) =>
        forecast.latitude != latitude && forecast.longitude != longitude
    )

    localStorage.setItem('forecasts', currentForecasts)
    setForecasts(updatedForecasts)
  }

  const saveDates = (startDate: string, endDate: string) => {
    localStorage.setItem('startDate', startDate)
    setStartDate(startDate)

    localStorage.setItem('endDate', endDate)
    setEndDate(endDate)
  }

  const value = {
    loading: loading,
    forecasts: forecasts,
    startDate: startDate,
    endDate: endDate,
    addForecast: addForecast,
    removeForecast: removeForecast,
    saveDates: saveDates,
  }

  useEffect(() => {
    const forecasts = localStorage.forecasts
    if (forecasts) {
      setForecasts(JSON.parse(localStorage.forecasts))
    }

    const startDate = localStorage.startDate
    setStartDate(getValidDate(startDate))

    const endDate = localStorage.endDate
    setEndDate(getValidDate(endDate))

    setLoading(false)
  }, [])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
