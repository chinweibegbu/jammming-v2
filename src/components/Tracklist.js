import React from "react";
import Track from "./Track";

function Tracklist({ searchResults = {}, playlist, clickHandler }) {
    return (
        <div className="Tracklist is-scrollable w-100">
            {
                clickHandler.name === "handleAddition" &&
                Object.keys(searchResults).length > 0 &&
                (("tracks" in searchResults) === false) &&
                <div className="h-100 d-flex flex-column align-items-center justify-content-center ">
                    <h4>Access Token has Expired or is Incorrect</h4>
                    <p>Send email to chinwe.ibegbu@gmail.com</p>
                </div>
            }
            {
                clickHandler.name === "handleAddition" &&
                Object.keys(searchResults).length > 0 &&
                (("tracks" in searchResults) === true) &&
                searchResults.tracks.items.map((track) => {
                    return <Track key={track.id} id={track.id} name={track.name} artist={track.artists[0].name} album={track.album.name} clickHandler={clickHandler} iconClass="bi-plus" />
                })
            }
            {
                clickHandler.name === "handleRemoval" &&
                playlist.length > 0 &&
                playlist.map((track) => {
                    return <Track key={track.id} id={track.id} name={track.name} artist={track.artists[0].name} album={track.album.name} clickHandler={clickHandler} iconClass="bi-dash" />
                })
            }
        </div>
    );
}

export default Tracklist;