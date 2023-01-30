import { FC } from 'react'
import Header from '@/components/general/header'
import { useStore } from '@/providers/store'
import WeatherData from '@/components/weather-data/weather-data'
import { MainContentStyled } from '@/components/main/content.styled'

const MainContent: FC<{}> = () => {
  const store = useStore()
  return (
    <MainContentStyled>
      <Header />
      <WeatherData />
    </MainContentStyled>
  )
}

export default MainContent
