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
        const post_body = {
            name: playlistName
        };
        const access_token = localStorage.getItem('accessToken');
        try {
            // Get user_id
            const userResponse = await fetch(`https://api.spotify.com/v1/me`, {
                method: 'get',
                headers: new Headers({
                    "Authorization": `Bearer ${access_token}`
                })
            });
            const userData = await userResponse.json();
            const userId = userData.id;

            // Create playlist
            const creationResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'post',
                headers: new Headers({
                    "Authorization": `Bearer ${access_token}`
                }),
                body: JSON.stringify(post_body)
            });
            const creationData = await creationResponse.json();
            const playlistId = creationData.id;

            console.log(`Created playlist ID: ${playlistId}`);
        } catch (e) {
            console.log(e.message);
        }

        // let tracks = "";
        // playlist.forEach(track => {
        //    tracks = tracks + track.id + " "
        // });
        // console.log(`Playlist {${playlistName}}: ${tracks}`);
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