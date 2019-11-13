import React, {useState, useEffect} from 'react';
import axois from 'axios';
import bgvideo from '../visuals/gameboard_bg.mp4'
import DisplayTopFivePlayer from '../components/displayPlayers_top5'
import DisplayOtherFivePlayer from '../components/displayPlayers_others'

export default function Home(params) {

    const [topTen, setTopTen]=useState([]);

    const getPlayer=()=>axois.get('https://game-night-management.herokuapp.com/topplayers')
        .then(res=>{
            console.log(res.data)
            setTopTen(res.data);
        })
        .catch(err=>console.log(err));

    useEffect(()=>{
        getPlayer();
    },[])

    const renderPlayer=()=>{
        return topTen.map((player, index) => {
            if(index<5){
                return <DisplayTopFivePlayer
                    key={index}
                    nickname={player.nickname}
                    score={player.chips}
                />
            }
            else{
                return <DisplayOtherFivePlayer
                    rank={index + 1}
                    key={index}
                    nickname={player.nickname}
                    score={player.chips}
                />
            }

        })
    }
    
    return(
        <div className='container'>
            <video className="background-video" muted loop autoPlay>
                <source src={bgvideo} type="video/mp4" />
            </video>
            {renderPlayer()}
        </div>
    )
}
