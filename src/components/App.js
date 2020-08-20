import React, { Component } from 'react';
import axios from 'axios';
import Players from './Players';
import News from './News';
import Sidebar from './Sidebar';
import DataTablePage from './Table2';
import Voter from './Vote';
// import Header from './Header'
import './App.css';
// import players from '../data/data';
// import loadPlayers from '../data/data';
// import Table1 from './Table1';
// import NewTable from './Table'
// import Modal from './Modal';
// import Placeholder from './Placeholder';

class App extends Component {
  state = {
    players: [],
    team:[],
    searchTerm: '',
    toggle: true,
    player: {},
  };
  // handleChange = (event) => {
  //   this.setState(
  //     {
  //       searchTerm: event.target.value,
  //     },
  //     () => {
  //       console.log(this.state.searchTerm);
  //     }
  //   );
  // };
  async componentDidMount() {
    return await this.loadPlayers();
  }
  loadPlayers = () => {
    const url = `http://localhost:3010/positions/Rankings`;
    axios.get(url).then((dbPlayers) => {
      // console.log((dbPlayers.data.rankings).slice(0,5))
      this.setState(
        {
          players: dbPlayers.data.rankings,
        },
        () => {
          // console.log(this.state.players);
        }
      );
    });
  };
  load = (x) => {
    axios.get(`http://localhost:3010/positions/${x}`).then((dbPlayers) => {
    // console.log(dbPlayers.data)
    if(x==='QB'){
      this.setState({
        players: dbPlayers.data.qbs,
        toggle: false,
      })
    }else if(x==='Rankings'){
      this.setState({
        players: dbPlayers.data.rankings,
        toggle: false,
      })
    }else if(x==='RB'){
      this.setState({
        players: dbPlayers.data.rbs,
        toggle: false,
      })
    }else if(x==='WR'){
      this.setState({
        players: dbPlayers.data.wrs,
        toggle: false,
      })
    }else if(x==='TE'){
      this.setState({
        players: dbPlayers.data.tes,
        toggle: false,
      })
    }
    });
  };
  onUpdate = (x) => {
    
    this.load(x);
    // console.log(`update ${id}`)
  };

  onChange = (x,y) => {
    let newTeam = [...this.state.team, `${x} ${y}`]
    this.setState({
      team: newTeam
    })

    // console.log(`update ${id}`)
  };

  render() {
    return (
      <>
        {/* <Header /> */}
        <div className='body'>
          <div className='innerBody'>
            <div>
              <News players={this.state.players} />
            </div>
            <div>
              <DataTablePage players={this.state.players} />
            </div>
            <div style={{ width: '100%', height: '60%' }}>
              <Players onChange={this.onChange} onUpdate={this.onUpdate} players={this.state.players} />
            </div>
            <div>
              <Voter/>
            </div>
          </div>
          <Sidebar  style={{ width: '30%' }} players={this.state.players} team={this.state.team}/>
        </div>
      </>
    );
  }
}

export default App;
