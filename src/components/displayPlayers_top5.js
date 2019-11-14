import React from 'react';

export default function DisplayTopFivePlayer({rank, players}) {

    let rankS="";
    switch (rank) {
        case 1:
            rankS="Joker";
            break;
        case 2:
            rankS = "Ace";
            break;
        case 3:
            rankS = "King";
            break;
        case 4:
            rankS = "Queen";
            break;
        case 5:
            rankS = "Jack";
            break;
        default:
            break;
    }

    return(
        <div className={'topFive top' + rank}>
            <span className={"rank"}>{rankS}</span>
            <span className={"nickname"}>{players[rank-1].nickname}</span>
            <span className={"score"}>{players[rank-1].chips}</span>
        </div>
    )
}