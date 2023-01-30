import { FC } from 'react'
import { Parent } from '@/components/general/header.styled'
import LogoSymbol from '@/assets/logo/logo_symbol.svg'
import SearchForm from '@/components/general/search-form/search-form'

const Header: FC<{}> = () => {
  return (
    <Parent>
      <span className={'logo'}>
        <LogoSymbol />
      </span>
      <SearchForm />
    </Parent>
  )
}

export default Header
