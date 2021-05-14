import React from 'react';

function MemeContent({MemeInfo, Counter}){


    return(
        MemeInfo ? [
        <img src={MemeInfo.data.url}></img>,
        <p>{MemeInfo.data.title}
        </p>] : <p>Loading</p>
    );
};

export default MemeContent;