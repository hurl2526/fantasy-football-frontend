import React, { Component } from 'react';
import axios from 'axios';
import Players from './Players';
import News from './News';
import Sidebar from './Sidebar';
import DataTablePage from './TableUsing';
import Voter from './Vote';
import Toast from 'light-toast';
import CreateBlog from './CreateBlog';
import Blogs from './Blogs';
import Header from './Header';
import PropTypes from 'prop-types';
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
    team: [],
    searchTerm: '',
    toggle: true,
    player: {},
    blogs: [
      {
        name: 'Patrick Mahomes',
        round: '2nd',
        name2: 'Matt Ryan',
        round2: '4th',
      },
      {
        name: 'Joe Mixon',
        round: '3rd',
        name2: 'Adrian Peterson',
        round2: '10th',
      },
    ],
    blog: {},
  };
  async componentDidMount() {
    return (await this.loadPlayers()) && this.loadBlogs();
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
      if (x === 'QB') {
        this.setState({
          // players: `${dbPlayers.data.${x}}`
          // players: `dbPlayers.data.${x}`
          // players: dbPlayers.data[0]
          players: dbPlayers.data.qbs,
          toggle: false,
        });
      } else if (x === 'Rankings') {
        this.setState({
          players: dbPlayers.data.rankings,
          toggle: false,
        });
      } else if (x === 'RB') {
        this.setState({
          players: dbPlayers.data.rbs,
          toggle: false,
        });
      } else if (x === 'WR') {
        this.setState({
          players: dbPlayers.data.wrs,
          toggle: false,
        });
      } else if (x === 'TE') {
        this.setState({
          players: dbPlayers.data.tes,
          toggle: false,
        });
      }
    });
  };
  onUpdate = (x) => {
    this.load(x);
    // console.log(`update ${id}`)
  };

  onChange = (x, y) => {
    let newTeam = [...this.state.team];
    if (newTeam.includes(`${x} ${y}`)) {
      Toast.info('This Player Is Already On Your Team');
    } else {
      let newTeam = [...this.state.team, `${x} ${y}`];
      this.setState({
        team: newTeam,
      });
    }

    // console.log(`update ${id}`)
  };
  loadBlogs = () => {
    const url = 'http://localhost:3010/blogs/all';
    axios.get(url).then((dbBlogs) => {
      this.setState({
        blogs: dbBlogs.data,
      });
    });
  };
  handleBlogSubmit = (event, blog) => {
    event.preventDefault();
    const axiosConfig = {
      header: {
        'Content-Type': 'application/json; charset-UTF-8',
        'Access-Control-Allowed-Origin': '*',
      },
    };

    axios
      .post('http://localhost:3010/blogs/create', blog, axiosConfig)
      .then(() => {
        this.loadBlogs();
      });
  };

  render() {
    return (
      <>
        <Header />
        <div className='body'>
          <div style={{ height: '30%' }}>
            <News />
          </div>
          <div className='innerBody' style={{ height: '40%' }}>
            <div className='body2' style={{ width: '70%' }}>
              <div style={{ width: '100%' }}>
                <DataTablePage
                  className='dataStuff'
                  players={this.state.players}
                />
              </div>
              <div style={{ width: '100%', marginTop: '2em' }}>
                <Players
                  onChange={this.onChange}
                  onUpdate={this.onUpdate}
                  players={this.state.players}
                />
              </div>
            </div>
            <div className='bgImage' style={{ width: '30%', height: '100%' }}>
              <Sidebar players={this.state.players} team={this.state.team} />
            </div>
          </div>
          <div className='bottom' style={{ height: '20%' }}>
            <div
              className='bLeft'
              style={{ backgroundColor: 'green', width: '70%' }}
            >
              <div style={{ width: '50%', height: '100%' }}>
                <hr
                  style={{
                    width: '50%',
                    color: 'black',
                    margin: '50px auto 20px auto',
                  }}
                />
                <CreateBlog handleBlogSubmit={this.handleBlogSubmit} />
              </div>
              <div
                style={{
                  width: '50%',
                  color: 'black',
                  margin: '50px auto 20px auto',
                }}
              >
                <Blogs blogs={this.state.blogs} />
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'brown',
                width: '30%',
                height: '535px',
              }}
            >
              <Voter />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
