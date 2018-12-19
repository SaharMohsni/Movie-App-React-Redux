import React from 'react'
import MoviesList from './MoviesList';
import{connect} from "react-redux"
import Header from './Header'
import ConnectedSearchWithName from './SearchWithName'
import SearchWithRate from './SearchWithRate';
const MoviesContainer= (   { movieList , searchValue, minRate} ) => {
 
    return (
        <div className="movieapp">
                <Header/>
                <div className="container">

                    <div className="searchAria">
                        <ConnectedSearchWithName/>
                        <SearchWithRate />
                    </div>
        <div className="moviesGallery">
            <MoviesList movies={movieList.filter(movie => movie.title.toLowerCase().includes(searchValue)&& movie.rate>=minRate)}/>
        </div>                   
    </div>
            </div>
        )
    }
 

const mapStateToProps = state =>{
    return{
        movieList:state.movieList,
        searchValue : state.searchValue,
        minRate : state.minRate

   } 
}
    
const ConnectedMovieContainer=connect(mapStateToProps,null)(MoviesContainer);

export default ConnectedMovieContainer
    
 

