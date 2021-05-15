import React, {useState, useEffect} from 'react';
import MemeContent from '../Components/MemeContent'
import MemeChangerButton from '../Components/MemeChangerButton'
import MemeTitle from '../Components/MemeTitle'
import './MemeContainer.css';

function MemeContainer(){

    const [MemeData, setMemeData] = useState(null)
    const [counter, setCounter] = useState(1);

    useEffect(() =>{
        GetMemeData();
    }, [counter]);

    const GetMemeData = function (){
        fetch('https://old.reddit.com/r/programmerhumor.json?limit=100')
        .then(rs => rs.json())
        .then(rs => setMemeData(rs.data.children))
    };

    const HandleButtonClick = function (){
        counter === 100 ? setCounter(1) : setCounter(counter + 1)
    };

    return(
        <div className='main-body'>        
            <MemeContent MemeInfo={MemeData} IndexNumber={counter} NoImageChange ={HandleButtonClick}/>
            <MemeTitle MemeInfo={MemeData} IndexNumber={counter}/>
            <MemeChangerButton onButtonClick={HandleButtonClick}/>
        </div>
    );

};

export default MemeContainer;