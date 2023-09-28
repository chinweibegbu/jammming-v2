import React from "react";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

function InteractionSection() {
    return ( 
        <div className="InteractionSection row border border-black">
            <SearchResults />
            <Playlist />
        </div>
    );
}

export default InteractionSection;