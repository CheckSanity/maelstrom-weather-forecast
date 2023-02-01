import { FC } from 'react'
import Header from '@/components/general/header'
import WeatherData from '@/components/weather-data/weather-data'
import { MainContentStyled } from '@/components/main/content.styled'

const MainContent: FC<{}> = () => {
  return (
    <MainContentStyled>
      <Header />
      <WeatherData />
    </MainContentStyled>
  )
}

export default MainContent
