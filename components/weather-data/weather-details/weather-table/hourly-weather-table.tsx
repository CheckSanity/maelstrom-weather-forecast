import { IColumnType, Table } from '@/components/common/table/table'
import { weatherCodeToType, WeatherType } from '@/utils/weather-utils'
import WeatherTypeCell from '@/components/weather-data/weather-details/weather-table/weather-type-cell'
import { useHourlyWeather } from '@/api/swr'
import { FC } from 'react'
import WeatherTableLoading from '@/components/weather-data/weather-details/weather-table/weather-table-loading'
import dayjs from 'dayjs'

type HourlyWeatherData = {
  time: string
  weatherType: WeatherType
  temperature: string
  windSpeed: string
  humidity: string
}

const HourlyWeatherTable: FC<{
  latitude: number
  longitude: number
  date: string
}> = (props) => {
  const { hourlyWeather, loading } = useHourlyWeather(
    props.latitude,
    props.longitude,
    props.date
  )

  const columns: IColumnType<HourlyWeatherData>[] = [
    {
      key: 'time',
      title: 'Time',
      dataIndex: 'time',
      align: 'left',
      width: '100px',
    },
    {
      key: 'weather',
      title: 'Weather',
      dataIndex: 'weather',
      width: '250px',
      align: 'center',
      render: (_, { weatherType }) => <WeatherTypeCell type={weatherType} />,
    },
    {
      key: 'temperature',
      title: 'Temp',
      dataIndex: 'temperature',
      width: '100px',
      align: 'center',
      render: (_, { temperature }) => <>{temperature}º</>,
    },
    {
      key: 'windSpeed',
      title: 'Wind speed',
      dataIndex: 'windSpeed',
      width: '100px',
      align: 'center',
      render: (_, { windSpeed }) => (
        <>
          {windSpeed}
          <span style={{ fontSize: '12px', color: 'var(--color-white-60)' }}>
            {' '}
            km/h
          </span>
        </>
      ),
    },
    {
      key: 'humidity',
      title: 'Humidity',
      dataIndex: 'humidity',
      width: '100px',
      align: 'center',
      render: (_, { humidity }) => (
        <>
          {humidity}
          <span style={{ fontSize: '12px', color: 'var(--color-white-60)' }}>
            {' '}
            %
          </span>
        </>
      ),
    },
  ]

  if (loading) {
    return <WeatherTableLoading />
  }

  if (!hourlyWeather) {
    return <p>Error</p> // TODO
  }

  return (
    <Table
      columns={columns}
      data={hourlyWeather.hourly?.time.map((time, index) => {
        return {
          time: dayjs(time).format('HH:mm'),
          weatherType: weatherCodeToType(
            hourlyWeather.hourly?.weathercode[index]
          ),
          temperature: hourlyWeather.hourly?.temperature_2m[index].toString(),
          windSpeed: hourlyWeather.hourly?.windspeed_10m[index].toString(),
          humidity: hourlyWeather.hourly?.relativehumidity_2m[index].toString(),
        }
      })}
    />
  )
}

export default HourlyWeatherTable
