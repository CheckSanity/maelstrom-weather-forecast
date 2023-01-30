import { FC } from 'react'
import { SearchMainItemStyled } from '@/components/weather-data/search-history/search-main-item.styled'
import { Icon } from '@/components/common/icon/icon'
import TestIcon from '@/assets/icons/search.svg'

const SearchMainItem: FC<{}> = (props) => {
  return (
    <SearchMainItemStyled>
      <div className={`search-main-item__header`}>
        <span className={`search-main-item__date`}>3 april</span>
        <span className={`search-main-item__location`}>
          <strong>Antalya</strong>, Turkey
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
    </SearchMainItemStyled>
  )
}

export default SearchMainItem
