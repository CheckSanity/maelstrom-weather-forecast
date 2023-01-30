import { FC } from 'react'
import { SearchMainItemStyled } from '@/components/weather-data/search-history/search-main-item.styled'
import { Icon } from '@/components/common/icon/icon'
import TestIcon from '@/assets/icons/search.svg'
import IconButton from '@/components/common/button/icon-button'
import CrossIcon from '@/assets/icons/cross.svg'

const SearchMainItem: FC<{
  city: string
  country: string
  longitude: number
  latitude: number
  onCrossClick: () => void
}> = (props) => {
  return (
    <SearchMainItemStyled>
      <div className={`search-main-item__header`}>
        <span className={`search-main-item__date`}>3 april</span>
        <span className={`search-main-item__location`}>
          <strong>{props.city}</strong>, {props.country}
        </span>
      </div>
      <div className={`search-main-item__icon`}>
        <Icon svg={TestIcon} />
      </div>
      <div className={`search-main-item__info`}>
        <span className={`search-main-item__temp`}>16º</span>
        <span className={`search-main-item__status`}>rain, lightning</span>
      </div>
      <div className={`search-main-item__stats`}>
        <span className={`search-main-item__stats__item`}>
          <span className={`search-main-item__stats__value`}>75%</span>
          <span className={`search-main-item__stats__desc`}>humidity</span>
        </span>
        <span className={`search-main-item__stats__item`}>
          <span className={`search-main-item__stats__value`}>75%</span>
          <span className={`search-main-item__stats__desc`}>humidity</span>
        </span>
        <span className={`search-main-item__stats__item`}>
          <span className={`search-main-item__stats__value`}>75%</span>
          <span className={`search-main-item__stats__desc`}>humidity</span>
        </span>
      </div>
      <IconButton svg={CrossIcon} onClick={props.onCrossClick} />
    </SearchMainItemStyled>
  )
}

export default SearchMainItem
