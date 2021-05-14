import React from 'react';
import './MemeChangerButton.css';

function MemeChangerButton({onButtonClick}){

    return(
        <button onClick={onButtonClick}>Get New Meme</button>
    );
};

export default MemeChangerButton;