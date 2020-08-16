import React, { Component } from 'react';
// import loadPlayers from '../data/data';
import axios from 'axios';
import Players from './Players';
import News from './News';
import Sidebar from './Sidebar'
import Header from './Header'
import "./App.css"
// import Modal from './Modal';
// import Placeholder from './Placeholder';

class App extends Component {
  state = {
    players: [],
    searchTerm: '',
    toggle: true,
    player: {},
  };
  handleChange = (event) => {
    this.setState(
      {
        searchTerm: event.target.value,
      },
      () => {
        console.log(this.state.searchTerm);
      }
    );
  };
  async componentDidMount() {
    return await this.loadPlayers();
  }
  loadPlayers = () => {
    const url = `http://localhost:3010/positions/Rankings`;
    axios.get(url).then((dbPlayers) => {
      // console.log((dbPlayers.data.rankings).slice(0,5))
      this.setState(
        {
          players: dbPlayers.data.rankings.slice(0, 20),
        },
        () => {
          console.log(this.state.players);
        }
      );
    });
  };
  render() {
    return (
      <>
        <Header />
        <div className = "body"
        >
          <div className="innerBody">
            <div>
              <News players={this.state.players}/>
            </div>
            <div style={{width:'100%',height:'60%'}}>
              <Players players={this.state.players} />
            </div>
          </div>
          <Sidebar style={{width:"30%"}} players={this.state.players}/>
        </div>
      </>
    );
  }
}

export default App;
