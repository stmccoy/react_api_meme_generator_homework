import React, {useState, useEffect} from 'react';
import MemeContent from '../Components/MemeContent'
import MemeChangerButton from '../Components/MemeChangerButton'
import './MemeContainer.css';



function MemeContainer(){

    const [MemeData, setMemeData] = useState(null)
    const [counter, setCounter] = useState(1);

    useEffect(() =>{
        GetMemeData();
    });

    const GetMemeData = function (){
        fetch('https://old.reddit.com/r/programmerhumor.json?limit=100')
        .then(rs => rs.json())
        .then(rs => setMemeData(rs.data.children))
    };


    const HandleButtonClick = function (){
        const RandomNumber = Math.floor((Math.random() * 100) + 1);
        setCounter(RandomNumber)
    };

    return(
        <div className='main-body'>
        <MemeContent MemeInfo={MemeData} IndexNumber={counter}/>
        <MemeChangerButton onButtonClick={HandleButtonClick}/>
        </div>
    );

};

export default MemeContainer;