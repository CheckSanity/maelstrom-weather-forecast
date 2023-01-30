import { FC } from 'react'
import { Parent } from '@/components/main/content.styled'
import Header from '@/components/general/header'
import { useStore } from '@/providers/store'

const MainContent: FC<{}> = () => {
  const store = useStore()
  return (
    <Parent>
      <Header />
      <div>{JSON.stringify(store.forecasts)}</div>
    </Parent>
  )
}

export default MainContent
