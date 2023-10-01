import React from "react";
import Tracklist from "./Tracklist";
// import singleTrack from '../singletrack';

function SearchResults({ searchResults, setPlaylist }) {
    const handleAddition = async (id) => {
        const response = await fetch("https://api.spotify.com/v1/tracks/" + id, {
            method: 'get',
            headers: new Headers({
                "Authorization": "Bearer BQAaY8ywyv95DamfWcskjYjsYp_PmwE-lop1z-TkRC7r5V1G8EjXl7X2kKb7ML4T9RdqD_hWnVa7EvhnKmo7T_Ml5yImOqwfSEgRvFLruhSco7c1pxs"
            })
        });
        const addedTrack = await response.json();
        setPlaylist(playlist => playlist.concat([addedTrack]));
        // console.log(id + " added")
    }

    return (
        <div className="SearchResults col-md-6">
            <h4>Results</h4>
            {
                Object.keys(searchResults).length > 0 &&
                <Tracklist searchResults={searchResults} clickHandler={handleAddition} />
            }
        </div>
    );
}

export default SearchResults;