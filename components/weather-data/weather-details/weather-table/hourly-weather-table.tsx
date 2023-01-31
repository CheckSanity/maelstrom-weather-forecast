import { IColumnType, Table } from '@/components/common/table/table'
import { weatherCodeToType, WeatherType } from '@/utils/weather-utils'
import WeatherTypeCell from '@/components/weather-data/weather-details/weather-table/weather-type-cell'
import { useHourlyWeather } from '@/api/swr'
import { FC } from 'react'
import moment from 'moment/moment'
import Skeleton from '@/components/common/loader/skeleton'
import { HourlyWeatherTableEmptyStyled } from '@/components/weather-data/weather-details/weather-table/hourly-weather-table.styled'

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
  startDate: string
  endDate: string
}> = (props) => {
  const { hourlyWeather, loading } = useHourlyWeather(
    props.latitude,
    props.longitude,
    props.startDate,
    props.endDate
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
    return (
      <HourlyWeatherTableEmptyStyled>
        {[...Array(8)].map((x, i) => (
          <Skeleton key={i} fullWidth={true} active={true} size={'lg'} />
        ))}
      </HourlyWeatherTableEmptyStyled>
    )
  }

  if (!hourlyWeather) {
    return <p>Error</p>
  }

  console.log(hourlyWeather)

  return (
    <Table
      columns={columns}
      data={hourlyWeather.hourly?.time.map((time, index) => {
        return {
          time: moment(time).format('HH:mm'),
          weatherType: weatherCodeToType(
            hourlyWeather.hourly?.weathercode[index]
          ),
          temperature: hourlyWeather.hourly?.temperature_2m[index].toString(),
          windSpeed: hourlyWeather.hourly?.windspeed_10m[index].toString(),
          humidity: hourlyWeather.hourly?.relativehumidity_2m[index].toString(),
          surfacePressure: 'unknown',
        }
      })}
    />
  )
}

export default HourlyWeatherTable
