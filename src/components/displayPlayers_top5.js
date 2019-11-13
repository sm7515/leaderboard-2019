import React from 'react';

export default function DisplayTopFivePlayer({rank, players}) {
    return(
        <div className={'topFive top' + rank}>
            <span className={"score" + rank}>{players[rank-1].chips}</span>
            <br/>
            <span className={"nickname" + rank}>{players[rank-1].nickname}</span>
        </div>
    )
}