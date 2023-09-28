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
                    "Authorization": "Bearer BQDfFF4dxUB0DPrfOIHrkpg6osGgWBgcoczAdJbJh7MvDlsz_9eBkv71W7UZbS1jpX7LYurKChQ9ZgAAv9I0qrlrlauCIVPQNqcOOSBnx2LHEUFWMDw"
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
        <form onSubmit={handleSearchSubmit} className="SearchSection row border border-black d-flex flex-column justify-content-center align-items-center">
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Enter a Song Title" />
            <input type="submit" value="SEARCH" className="app-button" />
        </form>
    );
}

export default SearchSection;