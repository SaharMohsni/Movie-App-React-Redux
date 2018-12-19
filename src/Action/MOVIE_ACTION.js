  import {ADD_MOVIE} from "./action-types"
  import {SEARCH_MOVIE} from './action-types'
  import {REMOVE_MOVIE} from './action-types'
  import {SEARCH_MOVIE_WITH_RATE} from './action-types'
  export const addMovie = (newMovie) => {
    return {
      type:ADD_MOVIE,
      payload:newMovie
    }
  }
  export const searchMovie = (searchedTitle) => {
    return {
      type:SEARCH_MOVIE,
      payload:searchedTitle
    }
  }
  export const searchMovieWithRate = (minRate) => {
    return {
      type:SEARCH_MOVIE_WITH_RATE,
      payload: minRate
    }
  }
  export const removeMovie = (MovieToRemoveId) => {
    return {
      type:REMOVE_MOVIE,
      payload:MovieToRemoveId
    }
  }

