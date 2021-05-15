import React from 'react';
import './MemeContent.css';
import LoadingImage from '../images/loading_gif.gif'

function MemeContent({MemeInfo, IndexNumber, NoImageChange}){


    return(
        MemeInfo ? 
        [<img src={MemeInfo[IndexNumber].data.url} onError={NoImageChange} ></img>,
        <p>{MemeInfo[IndexNumber].data.title}</p>]
        : 
        <div>
            <img id= 'loading-image' src={LoadingImage}></img>
        </div>
    );
};

export default MemeContent;