import './icon.styles.scss'

import React, { CSSProperties } from 'react'
import classNames from 'classnames'

export interface PlainIconProps {
  fill?: string
  size?: string
  width?: string
  height?: string
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export interface IconProps {
  size?: string
  className?: string
  width?: string
  height?: string
  style?: CSSProperties
  icon?: PlainIconProps
  svg?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const Icon = (props: IconProps) => {
  const className = classNames(props.className, 'icon')
  return (
    <span
      className={className}
      style={{
        width: props.size || props.width,
        height: props.size || props.height,
        ...props.style,
      }}
    >
      {props.icon && <PlainIcon {...props.icon} /> || props.svg && <PlainIcon svg={props.svg} />}
    </span>
  )
}

export const PlainIcon = (props: PlainIconProps) => {
  return (
    <props.svg
      width={props.size || props.width}
      height={props.size || props.height}
      fill={props.fill}
    />
  )
}
