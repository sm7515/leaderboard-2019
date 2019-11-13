import React from 'react';

export default function DisplayOtherFivePlayer({ nickname, score,rank}) {

    return(
        <div className='playerInfo otherFive'>
            <div className={`nickname otherFive`}><h2>{nickname}</h2></div>
            <div className={`score otherFive`}><h2>{score}</h2></div>
            <div className={`rank otherFive`}><h2>{rank}</h2></div>
        </div>
    )
}