import { IColumnType, Table } from '@/components/common/table/table'
import { WeatherType } from '@/utils/weather-utils'
import WeatherTypeCell from '@/components/weather-data/weather-details/weather-table/weather-type-cell'

type HourlyWeatherData = {
  time: string
  weatherType: WeatherType
  temperature: string
  windSpeed: string
  windDirection: string
  surfacePressure: string
}

const HourlyWeatherTable = () => {
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
    },
    {
      key: 'windSpeed',
      title: 'Wind speed',
      dataIndex: 'windSpeed',
      width: '100px',
      align: 'center',
    },
    {
      key: 'surfacePressure',
      title: 'Pressure',
      dataIndex: 'surfacePressure',
      width: '100px',
      align: 'center',
    },
  ]

  const files: HourlyWeatherData[] = [
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
    {
      time: '123',
      weatherType: 'snow',
      temperature: '123',
      windSpeed: '123',
      windDirection: '123',
      surfacePressure: '123',
    },
  ]

  if (!files) {
    return <p>Error</p>
  }

  return <Table columns={columns} data={files} />
}

export default HourlyWeatherTable
