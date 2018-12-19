import React  from 'react'
import{connect} from "react-redux"
import {searchMovieWithRate} from '../Action/MOVIE_ACTION'




const Rate = ({edit,movieItemRate,searchMovieWithRate}) =>{
 console.log(movieItemRate)
     var stars=[]
    for (let i=0; i<5;i++){
        if(edit){
            
        if(i<movieItemRate) {

            stars.push( <span key={i} onClick={() => searchMovieWithRate(i+1)}> &#9733;</span>)
        } else {
            stars.push( <span key={i} onClick={() => searchMovieWithRate(i+1)}> &#9734;</span>)

        }
        } else {
          
        if(i<movieItemRate) {

            stars.push( <span key={i} > &#9733;</span>)
        } else {
            stars.push( <span key={i} > &#9734;</span>)

        }   
        }
    }    
        console.log(stars)
    return (
    <div className="starsRate">
        {stars}
    </div>
)
}

const mapDispatchToProps = dispatch => ({
   
      searchMovieWithRate : (minRate) => dispatch(searchMovieWithRate(minRate)   )
})
  
const ConnectedSearchWithRate=connect(null,mapDispatchToProps)(Rate);
export default ConnectedSearchWithRate