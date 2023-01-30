import styled from 'styled-components'

export const SearchItemStyled = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px;
  gap: 24px;
  justify-content: space-between;
  background: var(--color-black);
  box-shadow: var(--shadow-default);
  transition: background-color 0.2s ease;

  &:hover {
    background: var(--color-black-alt);
  }

  .search-item__info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .search-item__temp,
  .search-item__title {
    color: var(--color-white);
    font-weight: 300;
  }

  .search-item__title {
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
  }

  .search-item__temp {
    font-size: 36px;
    line-height: 42px;
  }

  .search-item__icon {
    width: 50px;
    height: 50px;
    min-width: 50px;

    .icon {
      > svg {
        fill: var(--color-white-80);
      }
    }
  }
`
