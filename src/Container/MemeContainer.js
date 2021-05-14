import React, {useState, useEffect} from 'react';
import MemeContent from '../Components/MemeContent'


function MemeContainer(){

    // const list = []
    const [MemeData, setMemeData] = useState(null)
    const [counter, setCounter] = useState(3);

    useEffect(() =>{
        GetMemeData();
    }, []);

    const GetMemeData = function (){
        fetch('https://old.reddit.com/r/programmerhumor.json')
        .then(rs => rs.json())
        .then(rs => setMemeData(rs.data.children[counter]))
    };

    // rs.data.children[1].data.url

    // InitialMemeDataList ={list}

    return(
        <MemeContent MemeInfo={MemeData} IndexNumber={counter}/>
    );

};

export default MemeContainer;