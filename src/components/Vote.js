import React, { Component } from 'react';
import './App.css';

class Voter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: 'Patrick Mahomes', votes: 0 },
        { name: 'Tom Brady', votes: 0 },
        { name: 'Drew Brees', votes: 0 },
        { name: 'Lamar Jackson', votes: 0 },
      ],
    };
  }

  vote(i) {
    let newLanguages = [...this.state.languages];
    newLanguages[i].votes++;

    this.setState({ languages: newLanguages });
  }

  render() {
    return (
      <>
        <h1 style={{ marginTop: '10px' }}>Best QB in the League?</h1>
        <div className='languages'>
          {this.state.languages.map((lang, i) => (
            <div key={i} className='language'>
              <div className='voteCount'>{lang.votes}</div>
              <div className='languageName'>{lang.name}</div>
              <button onClick={this.vote.bind(this, i)}>Click Here</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Voter;
