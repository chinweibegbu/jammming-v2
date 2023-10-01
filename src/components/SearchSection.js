import React from "react";
// import data from '../data';

function SearchSection({ searchTerm, setSearchTerm, setSearchResults }) {
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        // console.log("form submitting");
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
                method: 'get',
                headers: new Headers({
                    "Authorization": "Bearer BQAUk-qkUo5lGLNWXswBCqmfq4wn3NeEW1VyMNGqQ0owb-qFxTv2gN5F9barldkGnYbxACYjaXB97iUDsg9Ra1ZMdz10-3JM5UPUKIp2jKx9y2NqMaM"
                })
            });
            const data = await response.json();
            // setPlaylist(playlist => playlist.concat([addedTrack]));

            setSearchResults(data);
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <form onSubmit={handleSearchSubmit} className="SearchSection row d-flex flex-column justify-content-center align-items-center">
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Enter a song title" />
            <input type="submit" value="SEARCH" />
        </form>
    );
}

export default SearchSection;