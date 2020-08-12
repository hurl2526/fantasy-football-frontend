import React,{ Component } from 'react';
// import loadPlayers from '../data/data';
import axios from 'axios';
import Player from './Player'
// import Placeholder from './Placeholder';

class App extends Component {
  state={
    players:  [],
    searchTerm: '',
    toggle: true,
    player: {},
  }
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
    const url = `http://localhost:3010/positions/Rankings`
    axios.get(url).then((dbPlayers) => {
      // console.log((dbPlayers.data.rankings).slice(0,5))
      this.setState({
        players: dbPlayers.data.rankings.slice(0,15),
      },()=>{
        console.log(this.state.players)
        console.log(this.state.players[0].fname)
      });
    });
  };
  render(){
  return (
    <div>
      <div>
        hello
  {/* <Player players={this.state.players}/> */}
      </div>
    </div>
  )
}
}

export default App;