'use client'

import styled from 'styled-components'
import { HeaderStyled } from '@/components/general/header.styled'
import { WeatherDataStyled } from '@/components/weather-data/weather-data.styled'

export const MainContentStyled = styled.main`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: url('/background.jpg') var(--color-black) center no-repeat;
  background-size: cover;
  padding: 24px 36px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  & > ${HeaderStyled} {
  }

  & > ${WeatherDataStyled} {
    overflow: hidden;
  }
`
