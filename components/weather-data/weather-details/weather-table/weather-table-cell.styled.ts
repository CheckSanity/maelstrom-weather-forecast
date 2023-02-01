import styled from 'styled-components'

export const WeatherTypeCellStyled = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  justify-content: center;

  .icon {
    width: 30px;
    height: 30px;
    min-width: 30px;

    > svg {
      fill: var(--color-white-80);
    }
  }

  .weather-type-cell__desc {
    color: var(--color-white-60);
  }
`
