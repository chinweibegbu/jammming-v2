import React from "react";
import Tracklist from "./Tracklist";
// import singleTrack from '../singletrack';

function SearchResults({ searchResults, setPlaylist }) {
    const handleAddition = async (id) => {
        const response = await fetch("https://api.spotify.com/v1/tracks/" + id, {
            method: 'get',
            headers: new Headers({
                "Authorization": "Bearer BQAUk-qkUo5lGLNWXswBCqmfq4wn3NeEW1VyMNGqQ0owb-qFxTv2gN5F9barldkGnYbxACYjaXB97iUDsg9Ra1ZMdz10-3JM5UPUKIp2jKx9y2NqMaM"
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