import React from 'react';
import './MemeContent.css';

function MemeContent({MemeInfo, IndexNumber, NoImageChange}){


    return(
        MemeInfo ? 
        [<img src={MemeInfo[IndexNumber].data.url ? MemeInfo[IndexNumber].data.url : {NoImageChange}}></img>,
        <p>{MemeInfo[IndexNumber].data.title}</p>]
        : 
        <p>Loading</p>
    );
};

export default MemeContent;