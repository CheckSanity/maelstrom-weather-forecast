'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
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
  startDate?: string
  endDate?: string
  forecasts?: Forecast[]
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
  loading: true,
})
export const useStore = () => useContext(StoreContext)

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true)
  const [startDate, setStartDate] = useState<string | undefined>()
  const [endDate, setEndDate] = useState<string | undefined>()
  const [forecasts, setForecasts] = useState<Forecast[] | undefined>()
  const [cookie, setCookie, removeCookie] = useCookies()

  const addForecast = (forecast: Forecast) => {
    let currentForecasts = cookie.forecasts || []

    if (currentForecasts.length > 0) {
      currentForecasts = currentForecasts.filter(
        (currentForecast: Forecast) =>
          currentForecast.latitude != forecast.latitude &&
          currentForecast.longitude != forecast.longitude
      )
    }

    currentForecasts.unshift(forecast)

    setCookie('forecasts', currentForecasts, { path: '/' })
    setForecasts(currentForecasts)
  }

  const removeForecast = (latitude: number, longitude: number) => {
    const currentForecasts = cookie.forecasts || []
    if (currentForecasts.length === 0) {
      return
    }

    const updatedForecasts = currentForecasts.filter(
      (forecast: Forecast) =>
        forecast.latitude != latitude && forecast.longitude != longitude
    )

    setCookie('forecasts', updatedForecasts, { path: '/' })
    setForecasts(updatedForecasts)
  }

  const saveDates = (startDate: string, endDate: string) => {
    setCookie('startDate', startDate, { path: '/' })
    setStartDate(startDate)

    setCookie('endDate', endDate, { path: '/' })
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
    setForecasts(cookie.forecasts)

    const startDate = cookie.startDate
    if (startDate) {
      setStartDate(getValidDate(startDate))
    }

    const endDate = cookie.endDate
    if (endDate) {
      setEndDate(getValidDate(endDate))
    }

    setLoading(false)
  }, [])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
