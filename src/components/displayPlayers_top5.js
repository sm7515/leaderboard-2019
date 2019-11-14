import React from 'react';

export default function DisplayTopFivePlayer({rank, players,src}) {

    let rankS="";
    switch (rank) {
        case 1:
            rankS="JOKER";
            break;
        case 2:
            rankS = "ACE";
            break;
        case 3:
            rankS = "KING";
            break;
        case 4:
            rankS = "QUEEN";
            break;
        case 5:
            rankS = "JACK";
            break;
        default:
            break;
    }

    return(
        <div className={'topFive top' + rank}>
            <img className={`card ${rankS}`} src={src} alt=""></img>
            <span className={"rank"}>{rankS}</span>
            <span className='line'><span className={"nickname"}>{players[rank - 1].nickname}</span></span>
            <span className={"score"}>{players[rank-1].chips}</span>
        </div>
    )
}