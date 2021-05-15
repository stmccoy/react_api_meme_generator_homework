import React from 'react'

function MemeTitle({MemeInfo, IndexNumber}){
    return(
        MemeInfo ? 
        <p>{MemeInfo[IndexNumber].data.title}</p>
        : 
        <div></div>
    );
};

export default MemeTitle;