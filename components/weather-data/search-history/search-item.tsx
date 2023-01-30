import React, { FC } from 'react'
import { Icon } from '@/components/common/icon/icon'
import { SearchItemStyled } from '@/components/weather-data/search-history/search-item.styled'

const SearchItem: FC<{
  country: string
  city: string
  temperature: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  onClick: () => void
}> = (props) => {
  return (
    <SearchItemStyled onClick={props.onClick}>
      <div className={`search-item__info`}>
        <span className={`search-item__title`}>
          <strong>{props.city}</strong>, {props.country}
        </span>
        <span className={`search-item__temp`}>{props.temperature}</span>
      </div>
      <div className={`search-item__icon`}>
        <Icon svg={props.icon} />
      </div>
    </SearchItemStyled>
  )
}

export default SearchItem
