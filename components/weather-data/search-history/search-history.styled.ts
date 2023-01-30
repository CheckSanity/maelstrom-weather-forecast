import styled from 'styled-components'

export const SearchHistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;

  .search-history__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: var(--color-white-80);
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .search-history__wrapper {
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .search-history__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`
