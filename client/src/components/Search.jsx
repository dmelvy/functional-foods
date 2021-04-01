import React from 'react'
import './Search.css'

const Search = (props) => {

  // const handleSearch = event => {
  //   const newQueriedFoods = allBikes.filter(bike => bike.model.toLowerCase().includes(event.target.value.toLowerCase()))
  //   setQueriedBikes(newQueriedBikes)
  // }

  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        name="Search"
        placeholder="Search"
        type="text"
      />
    </form>
  )
}

export default Search