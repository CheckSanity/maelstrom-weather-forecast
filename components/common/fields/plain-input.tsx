'use client'
import React, {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { debounce } from 'lodash'
import classNames from 'classnames'

type InputType = 'text' | 'email' | 'password' | 'number'

export interface PlainInputProps {
  className?: string
  id?: string
  type: InputType
  name?: string
  placeholder?: string
  ariaLabel?: string
  required?: boolean
  disabled?: boolean
  defaultValue?: string
  value?: string
  // Events
  onClick?: (e: MouseEvent | TouchEvent) => void
  onDebounce?: {
    action: (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => void
    timeout: number
  }
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const PlainInput = forwardRef(
  (props: PlainInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const className = classNames(props.className, 'plain-input')

    const [value, setValue] = useState<string>(props.defaultValue || '')

    useEffect(() => {
      setValue(props.value || '')
    }, [props.value])

    const clickHandler = useCallback(
      (e: MouseEvent | TouchEvent) => {
        if (props.onClick) {
          props.onClick(e)
        }
      },
      [props.onClick]
    )

    const focusHandler = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (props.onFocus) {
          props.onFocus(e)
        }
      },
      [props.onFocus]
    )

    const blurHandler = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (props.onBlur) {
          props.onBlur(e)
        }
      },
      [props.onBlur]
    )

    const debounceActionHandler = useCallback(
      (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
        if (props.onDebounce) {
          props.onDebounce.action(e)
        }
      },
      [props.onDebounce]
    )

    const debouncedHandler = useMemo(() => {
      return debounce(debounceActionHandler, props.onDebounce?.timeout)
    }, [])

    const changeHandler = useCallback(
      (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
        setValue(e.target.value)

        debouncedHandler(e)

        if (props.onChange) {
          props.onChange(e)
        }
      },
      [props.onChange]
    )

    return (
      <input
        ref={ref}
        className={className}
        id={props.id}
        key={`plain-input-${props.name}`}
        type={props.type}
        name={props.name}
        disabled={props.disabled}
        placeholder={props.placeholder}
        aria-label={props.ariaLabel}
        required={props.required}
        onClick={() => clickHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        onChange={changeHandler}
        value={value}
      />
    )
  }
)

PlainInput.displayName = 'PlainInput'

export default PlainInput
