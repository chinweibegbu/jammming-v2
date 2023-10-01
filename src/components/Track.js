import React from "react";

function Track({ id, name, artist, album, clickHandler, iconClass }) {
    return (
        <div className="Track d-flex flex-row justify-content-between">
            <div className="d-flex flex-column">
                <p className="track-name">{name}</p>
                <p className="track-details m-0">{artist} | {album}</p>
            </div>
            <div className="d-flex align-items-center">
                <i onClick={() => clickHandler(id)} className={iconClass} />
            </div>
        </div>
    );
}

export default Track;