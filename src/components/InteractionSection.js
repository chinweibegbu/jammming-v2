import React from "react";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

function InteractionSection({ searchResults, playlist, setPlaylist }) {
    return (
        <div className="InteractionSection row">
            <SearchResults searchResults={searchResults} setPlaylist={setPlaylist} />
            <Playlist playlist={playlist} setPlaylist={setPlaylist} />
        </div>
    );
}

export default InteractionSection;