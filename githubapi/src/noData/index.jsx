import React from 'react';
import "./style.css"
import image from "./image.png"

function NoData(props) {
    return (
        <div className="page-body">
            <b>Ooooops !! we couldn't fetch the data</b> <br />
            <img src={image} height="50%" alt="" />   
        </div>
    );
}

export default NoData;