/* import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import{
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
} from 'react-instantsearch-dom'
import hit from "./hit"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

export default function(){
  return(
    <div>
      <InstantSearch searchClient={searchClient} indexName="Products">
        <SearchBox autoFocus translations={{
          placeholder:'Search here...',
        }}/>
        <RefinementList
          attribute="tags"/>
        <div>
          <Hits hitComponent={hit}/>
        </div>
      </InstantSearch>

    </div>
  )
} */