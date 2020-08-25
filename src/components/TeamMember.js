import React from 'react';
import './App.css';

const TeamMember = (props) => {
  return <li className="listItem" style={{marginBottom:'8px',color:'yellow',fontWeight:'900', fontFamily:'serif'}}><h4>{props.player}</h4></li>;
};

export default TeamMember;
