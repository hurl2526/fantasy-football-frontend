import React from 'react';
import { MDBDataTable } from 'mdbreact';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import { useState } from 'react';
// import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import "./App.css"
import Players from "../data/data"//ik i should now use data like this but its quicker than doing props.players




const DatatablePage = (props) => {
  
  const data = {
    columns: [
      {
        label: 'OverallRank',
        field: 'overallRank',
        sort: 'asc',
        width: 110
      },
      {
        label: 'Name',
        field: 'displayName',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Team',
        field: 'team',
        sort: 'asc',
        width: 100
      },
      {
        label: 'ByeWeek',
        field: 'byeWeek',
        sort: 'asc',
        width: 100
      },
      {
        label: 'PositionRank',
        field: 'positionRank',
        sort: 'asc',
        width: 100
      },
    ],
    // rows:props.players
    rows:Players
    
  };

  return (
    <MDBDataTable
      scrollX
      scrollY
      maxHeight="300px"
      striped
      bordered
      data={data}
    />
  );
}

export default DatatablePage;