'use client'
import styled from 'styled-components'
import { SearchFormContainer } from '@/components/general/search-form/search-form.styled'

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 64px;

  .logo {
    width: 40px;
    height: 40px;
    display: block;

    > svg {
      fill: var(--color-white);
    }
  }

  & > ${SearchFormContainer} {
    width: 450px;

    .search-field {
      padding: 6px 12px;

      .search-field-icon {
        width: 24px;
        height: 24px;
      }

      .plain-input {
        padding: 6px 12px;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
`
