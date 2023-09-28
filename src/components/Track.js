import React from "react";

function Track({ id, name, artist, album, clickHandler, iconClass }) {
    return (
        <div className="Track border border-info d-flex flex-row justify-content-between p-2">
            <div className="d-flex flex-column">
                <h5 className="m-0">{name}</h5>
                <p className="m-0">{artist} | {album}</p>
            </div>
            <div className="d-flex align-items-center">
                <i onClick={() => clickHandler(id)} className={iconClass} />
            </div>
        </div>
    );
}

export default Track;