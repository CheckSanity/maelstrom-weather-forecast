'use client'

import styled from 'styled-components'
import { SearchFormContainer } from '@/components/general/search-form/search-form.styled'

export const WelcomeContentContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: url('/background.jpg') var(--color-background) center no-repeat;
  background-size: cover;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    width: 700px;

    & > ${SearchFormContainer} {
      width: 100%;
    }
  }

  .logo {
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    display: block;
    margin: 0 auto;
    width: 175px;
  }
`
