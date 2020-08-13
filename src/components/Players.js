import React from 'react'
// import SinglePlayer from './SinglePlayer'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Player(props) {
  return (
    <div>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Position</th>
      <th>Team</th>
    </tr>
  </thead>
  <tbody>
  {props.players.map((player)=>{
        return(
          <tr key={player._id} >
          <td key={player._id}>{player.overallRank}</td>
              <td>{player.displayName}</td>
              <td>{player.position}</td>
              <td>{player.team}</td>
            </tr>
          // <SinglePlayer key={player._id} player={player}/>
          // <h4>{player.fname}</h4>
          )
        })}
        </tbody>
      </Table>
    </div>
  )
}

