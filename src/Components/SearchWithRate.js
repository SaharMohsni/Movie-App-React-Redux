import React from 'react'
import ConnectedSearchWithRate from './Rate'


const SearchWithRate = () =>
    <div className="searchRate">
        <span className="rateLevel">Minimum Rating</span>
        <div className="rating">
            <ConnectedSearchWithRate edit={true} />
        </div>
    </div>






export default SearchWithRate