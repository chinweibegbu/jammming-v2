import React from "react";

function Track() {
    return (
        <div className="Track border border-info d-flex flex-row justify-content-between p-2">
            <div className="d-flex flex-column">
                <h5 className="m-0">Song name</h5>
                <p className="m-0">Artist name | Album name</p>
            </div>
            <div className="d-flex align-items-center">
                <i class="bi-plus" />
            </div>
        </div>
    );
}

export default Track;