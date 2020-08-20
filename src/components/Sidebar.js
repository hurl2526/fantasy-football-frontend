import React from 'react'
import TeamMember from './TeamMember'

const Sidebar = (props)=>{
  return(
    <div style={{width: '20%', height:"90vh", backgroundColor:'yellow'}}>
      <h3>My Team</h3>
      <ul style={{listStyle:"none"}}>
        {props.team.map((player)=>{
          return(
            <TeamMember key={player._id} player={player}/>
          )
        })}

      </ul>
      </div>
  )
}

export default Sidebar