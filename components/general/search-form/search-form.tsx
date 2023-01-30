'use client'

import React, { FC, useState } from 'react'
import { useOpenMeteoApi } from '@/api/hooks'
import SearchResults, {
  SearchResultData,
} from '@/components/general/search-form/search-results'
import { SearchFormContainer } from '@/components/general/search-form/search-form.styled'
import SearchField from '@/components/common/fields/search-field'

const SearchForm: FC<{}> = () => {
  const api = useOpenMeteoApi()
  const [searching, setSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<SearchResultData[] | undefined>()
  const request = async (value: string) => {
    console.log(`Searching for ${value}...`)
    if (value === '') {
      setShowResults(false)
      setSearching(false)
      return
    }

    setShowResults(true)
    setSearching(true)

    const response = await api.geocoding.search(value)
    if (response.isOk()) {
      setResults(
        response.value.results?.map((item) => {
          return {
            name: item.name,
            country: item.country,
            latitude: item.latitude,
            longitude: item.longitude,
          }
        }) || []
      )
    } else {
      setResults(undefined)
      alert(`Error searching city: ${response.error.error.message}`)
    }

    setSearching(false)
  }
  return (
    <SearchFormContainer>
      <SearchField
        onFocus={() => {
          if (results && results.length > 0) {
            setShowResults(true)
          }
        }}
        onChange={request}
        name={'search'}
        placeholder={'Enter city name, for example Gorky'}
      />
      {showResults && (
        <SearchResults
          searching={searching}
          items={results}
          onClickOutside={() => setShowResults(false)}
          onSelect={(item) => {
            alert(item.name)
            setShowResults(false)
          }}
        />
      )}
    </SearchFormContainer>
  )
}
export default SearchForm
