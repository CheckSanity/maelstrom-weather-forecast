import { FC } from 'react'
import { HeaderStyled } from '@/components/general/header.styled'
import LogoSymbol from '@/assets/logo/logo_symbol.svg'
import SearchForm from '@/components/general/search-form/search-form'

const Header: FC<{}> = () => {
  return (
    <HeaderStyled>
      <span className={'logo'}>
        <LogoSymbol />
      </span>
      <SearchForm />
    </HeaderStyled>
  )
}

export default Header
