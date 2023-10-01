import React from "react";

function SearchSection({ searchTerm, setSearchTerm, setSearchResults }) {
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
                method: 'get',
                headers: new Headers({
                    "Authorization": "Bearer BQAaY8ywyv95DamfWcskjYjsYp_PmwE-lop1z-TkRC7r5V1G8EjXl7X2kKb7ML4T9RdqD_hWnVa7EvhnKmo7T_Ml5yImOqwfSEgRvFLruhSco7c1pxs"
                })
            });
            const data = await response.json();
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