import React from 'react';
import TeamMember from './TeamMember';
import './App.css';

const Sidebar = (props) => {
  return (
    <div style={{ width: '100%', height: '100vh', textAlign: 'center' }}>
      <ul style={{ listStyle: 'none' }}>
        <h2 style={{ marginTop: '45px', marginBottom: '30px', color: 'white' }}>
          My Team
        </h2>
        {props.team.map((player) => {
          return <TeamMember key={player} player={player} />;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
