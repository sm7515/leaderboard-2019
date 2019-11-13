import React from 'react';

export default function DisplayTopFivePlayer({rank, players}) {
    return(
        <div className={'topFive top' + rank}>
            <span className={"nickname"}>{players[rank-1].nickname}</span>
            <br/>
            <span className={"score"}>{players[rank-1].chips}</span>
        </div>
    )
}