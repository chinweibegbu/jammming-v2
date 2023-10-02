import React from "react";

function SearchSection({ searchTerm, setSearchTerm, setSearchResults }) {
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        const accessToken = localStorage.getItem('accessToken');

        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
                method: 'get',
                headers: new Headers({
                    "Authorization": `Bearer ${accessToken}`
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