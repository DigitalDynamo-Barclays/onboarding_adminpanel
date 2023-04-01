
import React, { useEffect, useState } from 'react';
import IndCard from './IndCard';

import axios from 'axios';


const Card = () => {
    const [dataList, setDataList] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:4000/onboarding/get-unvfUser')
            .then(response => {
                console.log(response.data);
                setDataList(response.data);
                console.log(dataList[0]);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div className="card-list">
            <h1>Unverified user</h1>
            <div className='scroll'>
                {dataList.map((data, index) => {
                    return (
                        <IndCard index={index} data={data} />
                    )
                })}
            </div>
        </div>
    );
};

export default Card;