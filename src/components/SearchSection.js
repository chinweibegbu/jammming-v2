import React from "react";

function SearchSection() {
    return ( 
        <form className="SearchSection row border border-black d-flex flex-column justify-content-center align-items-center">
            <input type="text" placeholder="Enter a Song Title" />
            <button type="submit">SEARCH</button>
        </form>
    );
}

export default SearchSection;