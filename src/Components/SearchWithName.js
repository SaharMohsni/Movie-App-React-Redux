import React from 'react'
import{connect} from "react-redux"
import {searchMovie} from '../Action/MOVIE_ACTION'
const SearchWithName = (props) =>
    <div className="search">
        <input className="search-field" type="text" onChange={(event) =>{ props.searchMovie(event.target.value)}} placeholder="Search 🔎"/>
    </div>
const mapDispatchToProps = dispatch =>({
    searchMovie: (searchedTitle) => dispatch(searchMovie(searchedTitle))
})
const ConnectedSearchWithName=connect(null,mapDispatchToProps)(SearchWithName);

export default ConnectedSearchWithName
