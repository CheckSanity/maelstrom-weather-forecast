import React, { FC, ForwardedRef, forwardRef } from 'react'
import classNames from 'classnames'

import './button.styles.scss'
import { Icon, IconProps } from '@/components/common/icon/icon'

export type ButtonType = 'submit' | 'reset' | 'button'

export interface BaseButtonProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  type?: ButtonType
  disabled?: boolean
  children?: React.ReactNode
  className?: string
  active?: boolean
}

export interface IconButtonProps extends BaseButtonProps {
  svg?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  icon?: IconProps
}

const IconButton: FC<IconButtonProps> = forwardRef(
  (props: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const className = classNames(props.className, 'button button-icon', {
      [`button_active`]: props.active,
    })
    return (
      <button
        ref={ref}
        className={className}
        type={props.type}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {((props.icon && <Icon {...props.icon} />) || (props.svg && <Icon svg={props.svg} />))
        }
      </button>
    )
  },
)
IconButton.displayName = 'IconButton'

export default IconButton
