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
        // Prevent the form's default action
        event.preventDefault();
        
        // Get the user's access token
        const accessToken = localStorage.getItem('accessToken');

        // Organise request body content
        const playlistCreationBody = {
            name: playlistName
        };
        const trackURIs = playlist.map(track => track.uri);
        const playlistAdditionBody = {
            uris: trackURIs
        }

        try {
            // Get user_id
            const userResponse = await fetch(`https://api.spotify.com/v1/me`, {
                method: 'get',
                headers: new Headers({
                    "Authorization": `Bearer ${accessToken}`
                })
            });
            const userData = await userResponse.json();
            const userId = userData.id;

            // Create playlist
            const creationResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'post',
                headers: new Headers({
                    "Authorization": `Bearer ${accessToken}`
                }),
                body: JSON.stringify(playlistCreationBody)
            });
            const creationData = await creationResponse.json();
            const playlistId = creationData.id;

            console.log(`Created playlist ID: ${playlistId}`);

            let tracks = "";
            playlist.forEach(track => {
                tracks = tracks + track.uri + " "
            });
            console.log(`Playlist {${playlistName}}: ${tracks}`);

            // Add to playlist
            const additionResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                method: 'post',
                headers: new Headers({
                    "Authorization": `Bearer ${accessToken}`
                }),
                body: JSON.stringify(playlistAdditionBody)
            });
            const additionData = await additionResponse.json();
            console.log(additionData);

        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className="Playlist col-md-6 col-lg-5 col-xl-4">
            <form onSubmit={handlePlaylistSubmit} className="w-100 d-flex flex-column align-items-center">
                <input className="w-100" type="text" value={playlistName} onChange={handleChange} placeholder="Enter playlist name" />
                <Tracklist playlist={playlist} clickHandler={handleRemoval} />
                <input type="submit" value="SAVE TO SPOTIFY" />
            </form>
        </div>
    );
}

export default Playlist;