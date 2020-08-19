import React from 'react';
import SinglePlayer from './SinglePlayer'
import QBPlayer from './QBPlayer'
import Button from './Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Player(props) {
  return (
    <div>
      <Button
          className='ui primary button'
          onClick={() => {
            props.onUpdate("Rankings");
          }}
        >
          All
        </Button>
      <Button
          className='ui primary button'
          onClick={() => {
            props.onUpdate("QB");
          }}
        >
          QBs
        </Button>
        <Button
          className='ui primary button'
          onClick={() => {
            props.onUpdate("RB");
          }}
        >
          RBs
        </Button>
        <Button
          className='ui primary button'
          onClick={() => {
            props.onUpdate("WR");
          }}
        >
          WRs
        </Button>
        <Button
          className='ui primary button'
          onClick={() => {
            props.onUpdate("TE");
          }}
        >
          TEs
        </Button>
    <div className="table-wrapper-scroll-y my-custom-scrollbar" style={{width:'100%'}}>
      <Table striped bordered hover size='lg' style={{width:'100%'}}>
        
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {props.players
            .sort(function (a, b) {
              return a.overallRank - b.overallRank;
            })
            .slice(0, 300).map((player) => {
              if(player.overallRank){
              return (
                <SinglePlayer key={player._id} player={player}/>
              );
              }
              else{
                return(
                  <QBPlayer key={player._id} player={player}/> 
                )
              }
            })}
        </tbody>
      </Table>
    </div>
    </div>
  );
}
