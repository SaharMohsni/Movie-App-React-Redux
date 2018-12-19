import {ADD_MOVIE, SEARCH_MOVIE_WITH_RATE} from '../Action/action-types'
import {SEARCH_MOVIE} from '../Action/action-types'
import {REMOVE_MOVIE} from '../Action/action-types'


const initialState = {


movieList : [ {
  id:1,
  picture:"https://i.pinimg.com/originals/45/a8/c4/45a8c469544013cfdf7f77106995f79d.jpg",
  title:"The Meg",
  label: " 1h 53min | Action , Horror , Sci-Fi | 10 August 2018 (USA)  ",
  rate: 4
},
{
  id:2,
  picture:"https://cdn3.movieweb.com/i/movie/lGg2fMgeBi6yswQpkdBicBtCT2V8D2/384:50/The-Maze-Runner-The-Death-Cure.jpg",
  title:"The Maze Runner The Death Cure",
  label: " 2h 23min | Action , Sci-Fi , Thriller | 7 February 2018 (Tunisia) ",
  rate: 3
},
{
  id:3,
  picture:"https://i.pinimg.com/originals/63/6a/6a/636a6a88c1a9fc38bffa6d3a5c9f95c9.jpg",
  title:"Rampage",
  label: "1h 47min | Action , Adventure , Sci-Fi | 13 April 2018 (USA)  ",
  rate: 3
},
{
  id:4,
  picture:"https://i.pinimg.com/originals/ea/a2/c8/eaa2c8fb79282d227162c8e3f32c4f3f.jpg",
  title:"Runaway Romance",
  label: "1h 30min | Drama , Romance | TV Movie 7 January 2018  ",
  rate: 2
},

],

searchValue : "",
minRate : 1
}

 const MoviesRedducer = (state=initialState,action) =>{
    if(action.type===ADD_MOVIE)
    {
  return {...state, movieList : [...state.movieList , action.payload]}

    }
    if(action.type===SEARCH_MOVIE)
    {
  return     Object.assign({}, state, {
    searchValue  : action.payload
  });
    }

    if(action.type===SEARCH_MOVIE_WITH_RATE)
    {
  return     Object.assign({}, state, {
    minRate  : action.payload
  });
    }
    if(action.type===REMOVE_MOVIE)
    {
  return state.filter(movie =>movie.id!== action.payload)
    }
    return  state
  } 
  export default MoviesRedducer;
