import styled from 'styled-components'

export const SearchMainItemStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 32px;
  min-height: 450px;
  background: var(--color-black);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);

  .search-main-item__header {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .search-main-item__date {
    font-family: var(--font-accent);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
    color: var(--color-white-60);
  }

  .search-main-item__location {
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: var(--color-white);
  }

  .search-main-item__icon {
    width: 100px;
    height: 100px;
    margin: 0 auto;

    .icon {
      > svg {
        fill: var(--color-white-80);
      }
    }
  }

  .search-main-item__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .search-main-item__temp,
  .search-main-item__status {
    text-align: center;
    font-weight: 300;
  }

  .search-main-item__temp {
    font-size: 56px;
    line-height: 66px;
    color: var(--color-white);
  }

  .search-main-item__status {
    font-size: 22px;
    line-height: 26px;
    color: var(--color-white-60);
    text-transform: lowercase;
  }

  .search-main-item__stats {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 58px;

    .search-main-item__stats__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .search-main-item__stats__value,
    .search-main-item__stats__desc {
      font-weight: 300;
      text-align: center;
    }

    .search-main-item__stats__postfix {
      font-size: 16px;
      line-height: 30px;
      color: var(--color-white-60);
    }

    .search-main-item__stats__value {
      font-size: 26px;
      line-height: 30px;
      color: var(--color-white);
    }

    .search-main-item__stats__desc {
      font-size: 16px;
      line-height: 19px;
      color: var(--color-white-60);
    }
  }

  .search-main-item__error {
    text-align: center;
    color: var(--color-white-80);
  }

  .button-icon {
    width: 24px;
    height: 24px;
    min-width: 24px;
    position: absolute;
    top: 12px;
    right: 12px;
  }

  &.error {
    align-items: center;
    justify-content: center;
  }
`
