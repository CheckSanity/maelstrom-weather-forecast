import './search-field.styles.scss'

import { ChangeEvent, FC, useCallback, useRef } from 'react'
import PlainInput from '@/components/common/fields/plain-input'
import classNames from 'classnames'
import { Icon } from '@/components/common/icon/icon'
import SearchIcon from '@/assets/icons/search.svg'

interface Props {
  name?: string
  placeholder?: string
  className?: string
  value?: string
  disabled?: boolean
  onChange?: (value: string) => void
  onFocus: () => void
}

const SearchField: FC<Props> = (props) => {
  const className = classNames(props.className, 'search-field')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDebounce = useCallback(
    (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
      const value = e.target.value

      if (props.onChange) {
        props.onChange(value)
      }
    },
    [props.onChange]
  )

  return (
    <div className={className}>
      <Icon className={'search-field-icon'} svg={SearchIcon} />
      <PlainInput
        ref={inputRef}
        value={props.value}
        name={props.name}
        onFocus={props.onFocus}
        placeholder={props.placeholder}
        type={'text'}
        onDebounce={{ action: handleDebounce, timeout: 1000 }}
      />
    </div>
  )
}

export default SearchField
