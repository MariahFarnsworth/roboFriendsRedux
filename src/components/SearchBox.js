import React from 'react';

const SearchBox = ({seaarchfield, searchChange}) =>{
    return(
        <div className="pa2">
            <input 
            className="pa3 ba b--green bg-light-blue"
            type="search" 
            placeholdere="search robots"
            onChange={searchChange}
            />
        </div>
        
    );
}

export default SearchBox;