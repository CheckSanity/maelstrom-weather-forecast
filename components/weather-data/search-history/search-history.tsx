import { FC } from 'react'
import { SearchHistoryStyled } from '@/components/weather-data/search-history/search-history.styled'
import SearchMainItem from '@/components/weather-data/search-history/search-main-item'
import SearchItem from '@/components/weather-data/search-history/search-item'
import TestIcon from '@/assets/icons/search.svg'

const SearchHistory: FC<{}> = () => {
  return (
    <SearchHistoryStyled>
      <h4 className={`search-history__title`}>Search history</h4>
      <div className={`search-history__wrapper`}>
        <div className={`search-history__list`}>
          <SearchMainItem />
          <SearchItem
            country={'Russia'}
            city={'Nizhny'}
            temperature={'16º'}
            icon={TestIcon}
          />
          <SearchItem
            country={'Russia'}
            city={'Nizhny'}
            temperature={'16º'}
            icon={TestIcon}
          />
          <SearchItem
            country={'Russia'}
            city={'Nizhny'}
            temperature={'16º'}
            icon={TestIcon}
          />
        </div>
      </div>
    </SearchHistoryStyled>
  )
}

export default SearchHistory
