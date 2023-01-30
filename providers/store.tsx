'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

interface Forecast {
  city: string
  country: string
  latitude: number
  longitude: number
}

interface IStoreContext {
  addForecast: (forecast: Forecast) => void
  removeForecast: (latitude: number, longitude: number) => void
  forecasts?: Forecast[]
}

const StoreContext = React.createContext<IStoreContext>({
  addForecast: () => {
    console.warn('Not implemented')
  },
  removeForecast: () => {
    console.warn('Not implemented')
  },
})
export const useStore = () => useContext(StoreContext)

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [forecasts, setForecasts] = useState<Forecast[] | undefined>()
  const [cookie, setCookie, removeCookie] = useCookies()

  const addForecast = (forecast: Forecast) => {
    const currentForecasts = cookie.forecasts || []
    currentForecasts.push(forecast)
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
        forecast.latitude == latitude && forecast.longitude
    )

    setCookie('forecasts', updatedForecasts, { path: '/' })
    setForecasts(updatedForecasts)
  }

  const value = {
    forecasts: forecasts,
    addForecast: addForecast,
    removeForecast: removeForecast,
  }

  useEffect(() => {
    setForecasts(cookie.forecasts)
  }, [])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
