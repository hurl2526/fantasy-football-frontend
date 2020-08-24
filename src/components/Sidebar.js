import React from 'react'
import TeamMember from './TeamMember'

const Sidebar = (props)=>{
  return(
    <div style={{width: '100%', height:"100vh", backgroundColor:'yellow', textAlign:'center'}}>
      <ul style={{listStyle:"none"}}>
      <h3>My Team</h3>
        {props.team.map((player)=>{
          return(
            <TeamMember key={player} player={player}/>
          )
        })}

      </ul>
      </div>
  )
}

export default Sidebar