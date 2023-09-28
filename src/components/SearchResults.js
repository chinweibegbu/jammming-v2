import React from "react";
import Tracklist from "./Tracklist";
// import singleTrack from '../singletrack';

function SearchResults({ searchResults, setPlaylist }) {
    const handleAddition = async (id) => {
        const response = await fetch("https://api.spotify.com/v1/tracks/" + id, {
            method: 'get',
            headers: new Headers({
                "Authorization": "Bearer BQDfFF4dxUB0DPrfOIHrkpg6osGgWBgcoczAdJbJh7MvDlsz_9eBkv71W7UZbS1jpX7LYurKChQ9ZgAAv9I0qrlrlauCIVPQNqcOOSBnx2LHEUFWMDw"
            })
        });
        const addedTrack = await response.json();
        setPlaylist(playlist => playlist.concat([addedTrack]));
        // console.log(id + " added")
    }

    return (
        <div className="SearchResults col-md-6">
            <h2>Results</h2>
            {
                Object.keys(searchResults).length > 0 &&
                <Tracklist searchResults={searchResults} clickHandler={handleAddition} />
            }
        </div>
    );
}

export default SearchResults;