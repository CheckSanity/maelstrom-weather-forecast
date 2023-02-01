import { FC } from 'react'
import { WelcomeContentContainer } from '@/components/welcome/content.styled'
import Logo from '@/assets/logo/logo_white.svg'
import SearchForm from '@/components/general/search-form/search-form'

const WelcomeContent: FC<{}> = () => {
  return (
    <WelcomeContentContainer>
      <span className={'logo'}>
        <Logo />
      </span>
      <div className={'inner'}>
        <h1 className={`title-lg`}>
          Discover the weather in your city and plan your day correctly
        </h1>
        <SearchForm />
      </div>
    </WelcomeContentContainer>
  )
}

export default WelcomeContent
