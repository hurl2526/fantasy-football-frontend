import React from 'react'

export default function Player(props) {
  return (
    <div>
      <h1>Players</h1>
      {props.players.map((player)=>{
        return(
        <h4>{player.fname}</h4>
        )
      })}
    </div>
  )
}
