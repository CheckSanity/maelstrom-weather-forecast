import styled from 'styled-components'

export const SearchResultsContainer = styled.div`
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 200px;
  max-height: 200px;
  overflow-y: auto;
  background: var(--color-black);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
  transform: translateY(100%);
  z-index: 9;

  .search-result__empty {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 19px;
    font-weight: 300;
    color: var(--color-white-60);
  }

  .search-results__loading {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 19px;
    font-weight: 300;
    color: var(--color-white-60);

    .loader {
      width: 100px;
      height: 100px;
    }
  }

  .search-result__item {
    cursor: pointer;
    font-size: 16px;
    line-height: 19px;
    font-weight: 300;
    color: var(--color-white-60);
    padding: 12px 24px;

    .search-result__item__country {
    }

    .search-result__item__city {
      font-weight: 500;
    }

    &:hover {
      background: var(--color-black-alt);
    }
  }
`
