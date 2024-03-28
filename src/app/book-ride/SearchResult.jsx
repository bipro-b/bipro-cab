import { Divider } from '@mui/material'
import React from 'react'
import SearchResultCard from './SearchResultCard'

function SearchResult({area_key,setActiveField,latitude_key,longitude_key}) {
  return (
    <div className='absolute top-10 left-0 right-0 z-10 bg-white rounded-md p-2 border max-h-[50vh] overflow-scroll shadow-md hide-scrollbar'>

    {
        [1,2,3,5].map((item)=>
        <>
            <SearchResultCard area_key={area_key} setActiveField={setActiveField} key={item.display_name} item={item} latitude_key={latitude_key} longitude_key={longitude_key}/>
            <Divider/>
        </>
        )
    }

    </div>
  )
}

export default SearchResult