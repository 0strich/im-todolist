import React from 'react'

const Search = () => {
    return (
        <div>
            <input type="text" placeholder="검색" />
            <button className="btn">
                <span className="glyphicon glyphicon-search"></span>
            </button>
        </div>
    )
}

export default Search