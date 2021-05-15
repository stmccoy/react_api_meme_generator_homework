import React from 'react';
import './MemeContent.css';
import LoadingImage from '../images/loading_gif.gif'

function MemeContent({MemeInfo, IndexNumber, NoImageChange}){


    return(
        MemeInfo ? 
        <div>
            <img src={MemeInfo[IndexNumber].data.url} onError={NoImageChange} ></img>
        </div>
        : 
        <div>
            <img id= 'loading-image' src={LoadingImage}></img>
        </div>
    );
};

export default MemeContent;