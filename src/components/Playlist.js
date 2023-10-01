import React, { useState } from "react";
import Tracklist from "./Tracklist";

function Playlist({ playlist, setPlaylist }) {
    const [playlistName, setPlaylistName] = useState("");

    const handleChange = (event) => {
        setPlaylistName(event.target.value);
    }
    const handleRemoval = (id) => {
        setPlaylist(playlist => playlist.filter((track) => {
            return track.id !== id;
        }));
        // console.log(id + " deleted")
    }
    const handlePlaylistSubmit = async (event) => {
        event.preventDefault();
        // try {
        //     const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
        //         method: 'get',
        //         headers: new Headers({
        //             "Authorization": "Bearer BQDfFF4dxUB0DPrfOIHrkpg6osGgWBgcoczAdJbJh7MvDlsz_9eBkv71W7UZbS1jpX7LYurKChQ9ZgAAv9I0qrlrlauCIVPQNqcOOSBnx2LHEUFWMDw"
        //         })
        //     });
        //     const data = await response.json();
        //     setPlaylist(data);
        // } catch (e) {
        //     console.log(e.message);
        // }
        let tracks = "";
        playlist.forEach(track => {
           tracks = tracks + track.id + " "
        });
        console.log(`Playlist {${playlistName}}: ${tracks}`);
    };

    return (
        <div className="Playlist col-md-6">
            <form onSubmit={handlePlaylistSubmit} className="w-100 d-flex flex-column align-items-center">
                <input className="w-100" type="text" value={playlistName} onChange={handleChange} placeholder="Enter playlist name" />
                <Tracklist playlist={playlist} clickHandler={handleRemoval} />
                <input type="submit" value="SAVE TO SPOTIFY" />
            </form>
        </div>
    );
}

export default Playlist;