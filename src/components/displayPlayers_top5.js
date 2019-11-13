import React from 'react';

export default function DisplayTopFivePlayer({ nickname, score}) {

    return(
        <div className='playerInfo topFive'>
            <div className={`nickname topFive`}><h2>{nickname}</h2></div>
            <div className={`score topFive`}><h2>{score}</h2></div>
        </div>
    )
}