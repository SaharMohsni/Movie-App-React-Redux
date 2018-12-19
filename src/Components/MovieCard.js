import React from 'react'
import ConnectedSearchWithRate from './Rate';
import{connect} from "react-redux"
import {removeMovie} from '../Action/MOVIE_ACTION'
const MovieCard = (props) =>
    <div className="movieitem">
        <div className="rate"><ConnectedSearchWithRate edit={false} movieItemRate={props.movie_item.rate}/></div>
        <img className="moviePic" src={props.movie_item.picture} alt=""/>
        <div className="description">
            <span className="title">{props.movie_item.title}</span>
            <p className="movieDescription">{props.movie_item.label}</p>
            <div className="remove-aria">
                <button className="btnremove" bsSize="small" bsStyle="danger" onClick={() => props.removeMovie(props.movie_item.id)}>Remove</button>
            </div>
        </div>
    </div>
const mapDispatchToProps = dispatch =>({
    removeMovie: (movieID) => dispatch(removeMovie(movieID))
})
const ConnectedAddMovieCard=connect(null,mapDispatchToProps)(MovieCard);

export default ConnectedAddMovieCard