import React from 'react'

const SearchField = ({search, setSearch}) => {
    return (
        <div className='search'>
            <input type='text' placeholder='Search . . .' value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>)
}

export default SearchField