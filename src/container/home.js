import React, {useState, useEffect} from 'react';
import axois from 'axios';
import bgvideo from '../visuals/gameboard_bg.mp4'
import DisplayTopFivePlayer from '../components/displayPlayers_top5'
import DisplayOtherFivePlayer from '../components/displayPlayers_others'

export default function Home(params) {

    const [topTen, setTopTen]=useState([]);
    const [refresh, setRefresh]=useState(false);

    const getPlayer=()=>axois.get('https://game-night-management.herokuapp.com/topplayers')
        .then(res=>{
            setTopTen(res.data);
        })
        .catch(err=>console.log(err));

    useEffect(()=>{
        setInterval(() => {
            getPlayer();
        }, 3000);
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
        console.log(topTen);
        return topTen.slice(5, 10).map((player, index) => {
            return <DisplayOtherFivePlayer
                key={index}
                rank={index + 6}
                nickname={player.nickname}
                score={player.chips}
            />
        })
    }

    function refreshPage() {
        window.location.reload(false);
    }
    
    return(
        <div className='container'>
            <video className="background-video" muted loop autoPlay>
                <source src={bgvideo} type="video/mp4" />
            </video>
            <div className="players playerInfo">
                {renderTopFivePlayer()}
                <div className="topOtherContainer">
                    <table className="topOtherColumn">
                        <tbody>
                            {renderOtherPlayer()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
