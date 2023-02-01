import { FC } from 'react'
import { LoadingContentStyled } from '@/components/loading/content.styled'
import Loader from '@/components/common/loader/loader'

const LoadingContent: FC<{}> = () => {
  return (
    <LoadingContentStyled>
      <Loader />
    </LoadingContentStyled>
  )
}

export default LoadingContent
