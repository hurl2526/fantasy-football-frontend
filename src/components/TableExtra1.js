import React, { Component } from 'react';
// import SinglePlayer from './SinglePlayer'
import './App.css';
// import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBDataTable } from 'mdbreact';

const Rankingseed = require('./RankingsF.json');
// const players= Rankingseed.map((player)=>{
//   {
//     "Rank":`${player.rank}`,
//     "Name":`${player.displayName}`,
//     "Position":`${player.position}`,
//     "Team":`${player.team}`
//   }
// })
class NewTable extends Component {
  state = {
    data: {
      columns: [
        {
          label: 'Rank',
          field: 'rank',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Name',
          field: 'displayName',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Position',
          field: 'position',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'Team',
          field: 'team',
          sort: 'asc',
          width: 200,
        },
      ],
      rows: [],
    },
  };
  DatatablePage = () => {
    let rowsData = [];
    for (let i = 0; i < Rankingseed.length; i++) {
      let rowItem = {};
      rowItem['position'] = Rankingseed[i].position;
      rowItem['key'] = Rankingseed[i].playerId;

      rowItem['position'] = (
        <a href={`/item/${Rankingseed[i].pk}`}>{rowItem['position']}</a>
      );
      rowsData.push(rowItem);
    }
    this.setState(
      {
        rows: rowsData,
      },
      () => {
        console.log(this.state.data);
      }
    );
  };
  render() {
    return (
      <MDBDataTable
        scrollY
        maxHeight='20vh'
        striped
        bordered
        small
        data={this.state.data}
      />
    );
  }
}

export default NewTable;
