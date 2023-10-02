import React from "react";
import Tracklist from "./Tracklist";
// import singleTrack from '../singletrack';

function SearchResults({ searchResults, setPlaylist }) {
    const handleAddition = async (id) => {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
            method: 'get',
            headers: new Headers({
                "Authorization": `Bearer ${accessToken}`
            })
        });
        const addedTrack = await response.json();
        setPlaylist(playlist => playlist.concat([addedTrack]));
        // console.log(id + " added")
    }

    return (
        <div className="SearchResults col-md-6 col-lg-5 offset-lg-1 col-xl-4 offset-xl-2">
            <h4>Results</h4>
            {
                Object.keys(searchResults).length > 0 &&
                <Tracklist searchResults={searchResults} clickHandler={handleAddition} />
            }
        </div>
    );
}

export default SearchResults;