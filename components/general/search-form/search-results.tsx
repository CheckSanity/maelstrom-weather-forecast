import { FC, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import Loader from '@/components/common/loader/loader'
import { SearchResultsContainer } from '@/components/general/search-form/search-results.styled'

export type SearchResultData = {
  city: string
  country: string
  latitude: number
  longitude: number
}

const SearchResults: FC<{
  searching?: boolean
  items?: SearchResultData[]
  onSelect: (data: SearchResultData) => void
  onClickOutside: () => void
}> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(containerRef, () => props.onClickOutside())

  return (
    <SearchResultsContainer ref={containerRef}>
      {props.searching && <Loading />}
      {!props.searching &&
        props.items &&
        ((props.items.length === 0 && <Empty />) ||
          (props.items.length > 0 &&
            props.items.map((item, index) => {
              return (
                <Item
                  key={index}
                  city={item.city}
                  country={item.country}
                  onClick={() => {
                    props.onSelect(item)
                  }}
                />
              )
            })))}
    </SearchResultsContainer>
  )
}

const Loading = () => {
  // TODO Add loader
  return (
    <div className={'search-results__loading'}>
      <Loader />
    </div>
  )
}

const Empty = () => {
  return <div className={'search-result__empty'}>No cities found</div>
}

const Item: FC<{
  city: string
  country: string
  onClick: () => void
}> = (props) => {
  return (
    <div className={`search-result__item`} onClick={props.onClick}>
      <span className={`search-result__item__city`}>{props.city},</span>
      <span className={`search-result__item__country`}> {props.country}</span>
    </div>
  )
}

export default SearchResults
