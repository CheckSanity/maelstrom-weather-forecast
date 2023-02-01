import './skeleton.styles.scss'

import classNames from 'classnames'
import { FC } from 'react'

type SizeType = 'rg' | 'sm' | 'lg'
type VariantType = 'default' | 'circle'

const Skeleton: FC<{
  className?: string
  size?: SizeType
  variant?: VariantType
  active?: boolean
  fullWidth?: boolean
}> = (props) => {
  const className = classNames(props.className, 'skeleton', {
    skeleton_active: props.active,
    'skeleton_full-width': props.fullWidth,
    [`skeleton_${props.size}`]: props.size,
    [`skeleton_${props.variant}`]: props.variant,
  })
  return (
    <>
      <span className={className}></span>
    </>
  )
}

export default Skeleton
