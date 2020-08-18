import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import "./App.css"
const Rankingseed = require('./RankingsF.json');

const DatatablePage = (props) => {
  const data = {
    columns: [
      {
        label: 'Rank',
        field: 'overallRank',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Name',
        field: 'displayName',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Team',
        field: 'team',
        sort: 'asc',
        width: 200
      }
    ],
    rows:Rankingseed
    
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