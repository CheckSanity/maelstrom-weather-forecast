import { IColumnType, Table } from '@/components/common/table/table'
import { weatherCodeToType, WeatherType } from '@/utils/weather-utils'
import WeatherTypeCell from '@/components/weather-data/weather-details/weather-table/weather-type-cell'
import { useDailyWeather } from '@/api/swr'
import { FC } from 'react'
import WeatherTableLoading from '@/components/weather-data/weather-details/weather-table/weather-table-loading'
import { dayMonthFromDate } from '@/utils/date-utils'

type DailyWeatherData = {
  time: string
  weatherType: WeatherType
  minTemperature: string
  maxTemperature: string
}

const DailyWeatherTable: FC<{
  latitude: number
  longitude: number
  startDate: string
  endDate: string
}> = (props) => {
  const { dailyWeather, loading } = useDailyWeather(
    props.latitude,
    props.longitude,
    props.startDate,
    props.endDate
  )

  const columns: IColumnType<DailyWeatherData>[] = [
    {
      key: 'time',
      title: 'Date',
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
      key: 'minTemperature',
      title: 'Min temp',
      dataIndex: 'minTemperature',
      width: '100px',
      align: 'center',
      render: (_, { minTemperature }) => <>{minTemperature}º</>,
    },
    {
      key: 'maxTemperature',
      title: 'Max temp',
      dataIndex: 'maxTemperature',
      width: '100px',
      align: 'center',
      render: (_, { maxTemperature }) => <>{maxTemperature}º</>,
    },
  ]

  if (loading) {
    return <WeatherTableLoading />
  }

  if (!dailyWeather) {
    return <p>Error</p> // TODO
  }

  return (
    <Table
      columns={columns}
      data={dailyWeather.daily?.time.map((time, index) => {
        return {
          time: dayMonthFromDate(time),
          weatherType: weatherCodeToType(
            dailyWeather.daily?.weathercode[index]
          ),
          minTemperature:
            dailyWeather.daily?.temperature_2m_min[index].toString(),
          maxTemperature:
            dailyWeather.daily?.temperature_2m_max[index].toString(),
        }
      })}
    />
  )
}

export default DailyWeatherTable
