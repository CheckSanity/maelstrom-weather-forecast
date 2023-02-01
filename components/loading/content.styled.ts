'use client'

import styled from 'styled-components'

export const LoadingContentStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: var(--color-background);

  .loader {
    width: 250px;
    height: 250px;
  }
`
