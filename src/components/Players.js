import React from 'react'
import SinglePlayer from './SinglePlayer'

export default function Player(props) {
  return (
    <div>
      <h1>Players</h1>
      {props.players.map((player)=>{
        return(
          <SinglePlayer key={player._id} player={player}/>
        // <h4>{player.fname}</h4>
        )
      })}
    </div>
  )
}

