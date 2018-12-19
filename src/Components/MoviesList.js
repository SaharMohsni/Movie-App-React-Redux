import React, {Component} from 'react'
import ConnectedAddMovieCard from './MovieCard'
import LoaderHOC from '../HOC/LoaderHOC'
import ConnectedAddMovieForm from './AddMovie'
class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    
    render() {
        return (
            <div className="movies">
                {
                    this.props.movies.map((item, i)=>
                    <div key={item.id} className="moviesitems">
                        <ConnectedAddMovieCard movie_item={item} />
                    </div>
                    )
                }
                <ConnectedAddMovieForm/>
            </div>
        )
    }
}


export default  LoaderHOC('movies')(MoviesList)