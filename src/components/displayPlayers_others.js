import React from 'react';

export default function DisplayOtherFivePlayer({ nickname, score, rank }) {
    return (
        <tr>
            <th>{rank}</th>
            <th>{nickname}</th>
            <th>{score}</th>
        </tr>
    )
}