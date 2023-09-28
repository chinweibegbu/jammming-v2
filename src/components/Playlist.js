import React from "react";
import Tracklist from "./Tracklist";

function Playlist() {
    return (
        <div className="Playlist col-lg-6">
            <form className="w-100 d-flex flex-column align-items-center">
                <input className="w-100" type="text" placeholder="Playlist Name" />
                <Tracklist />
                <button type="submit">SAVE TO SPOTIFY</button>
            </form>
        </div>
    );
}

export default Playlist;