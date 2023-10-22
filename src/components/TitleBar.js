import React, { useState, useEffect } from "react";

const CLIENT_ID = "4b6b77218b64431a84704d60509f7b5b";
const REDIRECT_URI = "https://jammming-v2-lsd56uydi-chinwe-ibegbus-projects.vercel.app/";
const SCOPES = ["playlist-modify-public", "playlist-modify-private", "user-read-private", "user-read-email"];
const SCOPES_URL = SCOPES.join("%20");

// Sample URL after authorisation: http://localhost:3000/#access_token=BQBxVwQwDnObxM-3fSPAsPWPuyOM_pjO8D_9hFsUf3314a60DDDmMX3LUfuj6TiNhLO5FhjKSy5EtS_JLBXGHTcT5iYLY9bGwCQHoWB3iJIZWEUycui78amkYepJXDuQHgx771LLdXaDas9oqFCT8ZLzurkW0BFkBtF_IEpmEJar-kn7Kc8JL2FhbwFmUhpfpQvAP69zPwN9yWOdUsi1ayI7YupeCjsNzY2jp_fwkUa9rrL_ZzLeYUxc1o-lFmB6&token_type=Bearer&expires_in=3600
const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
        const [key, value] = currentValue.split("=");
        accumulator[key] = value;
        return accumulator;
    }, {});

    return paramsSplitUp;
}

function TitleBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("User");

    useEffect(() => {
        async function setUser() {
            if (window.location.hash) {
                const { access_token, token_type, expires_in } = getReturnedParamsFromSpotifyAuth(window.location.hash);
    
                localStorage.clear();
                localStorage.setItem("accessToken", access_token);
                localStorage.setItem("tokenType", token_type);
                localStorage.setItem("expiresIn", expires_in);
    
                try {
                    const accessToken = localStorage.getItem('accessToken');
                    const userResponse = await fetch(`https://api.spotify.com/v1/me`, {
                        method: 'get',
                        headers: new Headers({
                            "Authorization": `Bearer ${accessToken}`
                        })
                    });
                    const userData = await userResponse.json();
                    setUsername(userData.display_name);
                } catch (e) {
                    console.log(e.message);
                }
    
                setIsLoggedIn(true);
            }
        }

        setUser();
    });

    const handleLogin = () => {
        window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_URL}&response_type=token&show_dialog=true`;
    }

    const loggedInDisplay = <p>Signed in as {username}</p>;
    const notLoggedInDisplay = <button onClick={handleLogin}>Log In</button>;

    return (
        <div className="TitleBar row-flex d-flex align-items-center justify-content-between pe-3 ps-3">
            <p className="title-name">JAMMMMING</p>
            {isLoggedIn ? loggedInDisplay : notLoggedInDisplay }
        </div>
    );
}

export default TitleBar;
