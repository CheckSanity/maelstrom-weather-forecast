import styled from 'styled-components'

export const WeatherDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;

  .table-wrapper {
    height: 100%;
    overflow-y: auto;
    flex: 1;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
