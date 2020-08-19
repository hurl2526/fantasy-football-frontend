import React from 'react';
import SinglePlayer from './SinglePlayer';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function Ranked(props) {
  return (
    <Table striped bordered hover size='lg' style={{ width: '100%' }}>
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
          .slice(0, 300)
          .map((player) => {
            return <SinglePlayer key={player._id} player={player} />;
          })}
      </tbody>
    </Table>
  );
}

export default Ranked;
