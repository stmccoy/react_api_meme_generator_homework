import React from 'react';
import './MemeContent.css';

function MemeContent({MemeInfo, IndexNumber}){


    return(
        MemeInfo ? 
        [<img src={MemeInfo[IndexNumber].data.url}></img>,
        <p>{MemeInfo[IndexNumber].data.title}</p>]
        : 
        <p>Loading</p>
    );
};

export default MemeContent;