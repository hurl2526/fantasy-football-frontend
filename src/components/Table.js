import React from 'react';
import SinglePlayer from './SinglePlayer'
import "./App.css"
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
const DatatablePage = (props) => {
  let rowsData = []
for (var index = 0; index < Rankingseed.length; index++) {
    let rowItem = {}
    rowItem["word"] = Rankingseed[index].word

    rowItem["word"] =  <a href={`/item/${Rankingseed[index].pk}`}>
                          {rowItem["word"]}
                        </a>
    rowsData.push(rowItem)
}
this.setState({
    tableRows: rowsData,
});
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
    rows: Rankingseed
      
  };

  return (
    <MDBDataTable
      scrollY
      maxHeight="20vh"
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;