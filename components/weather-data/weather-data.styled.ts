import styled from 'styled-components'
import { WeatherDetailsStyled } from '@/components/weather-data/weather-details/weather-details.styled'

export const WeatherDataStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;

  & > ${WeatherDetailsStyled} {
    flex: 1;
  }
`
