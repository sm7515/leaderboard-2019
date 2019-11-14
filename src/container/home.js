import React, {useState, useEffect} from 'react';
import axois from 'axios';
import DisplayTopFivePlayer from '../components/displayPlayers_top5'
import DisplayOtherFivePlayer from '../components/displayPlayers_others'

export default function Home(params) {

    const [topTen, setTopTen]=useState([]);

    const getPlayer=()=>axois.get('https://game-night-management.herokuapp.com/topplayers')
        .then(res=>{
            setTopTen(res.data);
        })
        .catch(err=>console.log(err));

    useEffect(()=>{
        setInterval(() => {
            getPlayer();
        }, 1000);
    },[])

    const renderTopFivePlayer=()=>{
        if (topTen.length !== 10) {
            return (
                <div className="topFiveContainer"></div>
            )
        }
        return (
            <div className="topFiveContainer">
                <DisplayTopFivePlayer rank={5} players={topTen}/>
                <DisplayTopFivePlayer rank={3} players={topTen}/>
                <DisplayTopFivePlayer rank={1} players={topTen}/>
                <DisplayTopFivePlayer rank={2} players={topTen}/>
                <DisplayTopFivePlayer rank={4} players={topTen}/>
            </div>
        )
    }

    const renderOtherPlayer=()=>{
        return topTen.slice(5, 10).map((player, index) => {
            return <DisplayOtherFivePlayer
                key={index}
                rank={index + 6}
                nickname={player.nickname}
                score={player.chips}
            />
        })
    }

    return(
        <div className='container'>
            <video poster={process.env.PUBLIC_URL + '/visuals/Background.mp4'} className="background-video" playsInline muted loop autoPlay>
                <source src={process.env.PUBLIC_URL + '/visuals/Background.mp4'} type="video/mp4" />
            </video>
            <div className='cards'>
                <img className='card Jack' src={process.env.PUBLIC_URL + '/visuals/J.jpg'}></img>
                <img className='card King' src={process.env.PUBLIC_URL + '/visuals/K.jpg'}></img>
                <img className='card Joker' src={process.env.PUBLIC_URL + '/visuals/joker.jpeg'}></img>
                <img className='card Ace' src={process.env.PUBLIC_URL + '/visuals/A.png'}></img>
                <img className='card Queen' src={process.env.PUBLIC_URL + '/visuals/Q.jpg'}></img>
            </div>
            <div className="players playerInfo">
                {renderTopFivePlayer()}
                <div className="topOtherContainer">
                    {renderOtherPlayer()}
                </div>
            </div>
        </div>
    )
}
