import { FC } from 'react'
import LoaderIcon from '@/assets/icons/loader.svg'
import classNames from 'classnames'

const Loader: FC<{ className?: string }> = (props) => {
  const className = classNames(props.className, 'loader')
  return (
    <span className={className}>
      <LoaderIcon />
    </span>
  )
}
export default Loader
