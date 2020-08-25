import React, { Component } from 'react';
import data from '../data/data';
import './App.css';

class Table1 extends Component {
  state = {
    itemsToDisplay: [],
    itemsToUse: [],
    positions: [],
  };
  render() {
    return (
      <div>
        <div className='restfilter'>
          <div>
            Choose a position : &nbsp;
            <select id='restfilter' onChange={this.optionSelected}>
              <option value='any'>Choose Any</option>
              {this.state.positions.map((position) => {
                return <option value={position}>{position}</option>;
              })}
            </select>
          </div>
          <div>
            Sort by : &nbsp;
            <select id='sortfilter' onChange={this.sortBy}>
              <option value='ranking'>Ranking</option>
              <option value='asc'>Rating: Low to High</option>
              <option value='des'>Rating: High to Low</option>
            </select>
          </div>
        </div>
        <div className='restcontainer'>
          {this.state.itemsToDisplay.map((rest) => {
            let positions = rest['position']
              .substring(0, rest['position'].length)
              .split(',');
            return (
              <div className='rest'>
                <div className='restinfo'>
                  <i
                    className='fas fa-map-marker'
                    style={{ color: 'orangered', fontSize: '12px' }}
                  ></i>
                  &nbsp;
                  <span className='restcity'>{rest['City']}</span>
                  <br />
                  <span className='restname'>{rest['displayName']}</span>
                  <div className='restpositions'>
                    {positions.map((position) => {
                      let positionToShow = position.substring(
                        0,
                        position.length
                      );
                      positionToShow = positionToShow.includes("'")
                        ? positionToShow.substring(1, positionToShow.length)
                        : positionToShow;
                      return (
                        <div pill className='restposition' variant='light'>
                          {positionToShow}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className='sepline'></div>
                <div className='reststats'>
                  <div>
                    <i
                      style={{ fontSize: '15px' }}
                      className='far fa-comment-alt'
                    ></i>
                    &nbsp;
                    {rest['Number of Reviews']}
                  </div>
                  <div>
                    <i style={{ fontSize: '15px' }} className='far fa-star'></i>
                    &nbsp;
                    {rest['Rating']}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  filterOnSearch = (event) => {
    if (
      !event.target.value ||
      event.target.value === ' ' ||
      event.target.value === ''
    )
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else {
      let itemsToDisplay = [];
      itemsToDisplay = this.state.itemsToUse.filter((item) =>
        item['position']
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      this.setState({ itemsToDisplay });
    }
  };

  optionSelected = () => {
    const e = document.getElementById('restfilter');
    const selected = e.options[e.selectedIndex].text;

    if (selected === 'Choose Any')
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else {
      let itemsToDisplay = [];
      itemsToDisplay = this.state.itemsToUse.filter((item) =>
        item['position'].toLowerCase().includes(selected.toLowerCase())
      );
      this.setState({ itemsToDisplay });
    }
  };

  // sortBy = () => {
  //   const e = document.getElementById("sortfilter");
  //   const selected = e.options[e.selectedIndex].value;

  //   if (selected === "ranking")
  //     this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
  //   else if (selected === "asc") {
  //     let itemsToDisplay = [...this.state.itemsToDisplay];
  //     itemsToDisplay.sort(function(a, b) {
  //       return a["Rating"] - b["Rating"];
  //     });
  //     this.setState({ itemsToDisplay });
  //   } else {
  //     let itemsToDisplay = [...this.state.itemsToDisplay];
  //     itemsToDisplay.sort(function(a, b) {
  //       return b["Rating"] - a["Rating"];
  //     });
  //     this.setState({ itemsToDisplay });
  //   }
  // };

  componentDidMount() {
    this.reRenderList();
  }

  reRenderList() {
    const positions = [];
    const itemsToDisplay = [];
    for (const i = 0; i < 30; i++) {
      itemsToDisplay.push(data[i]);
      data[i]['position']
        .substring(0, data[i]['position'].length)
        .split(',')
        .forEach((position) => {
          let c = position.substring(0, position.length);
          c = c.includes("'") ? c.substring(1, c.length) : c;
          if (positions.indexOf(c) < 0) {
            positions.push(c);
          }
        });
    }

    this.setState({ positions });

    this.setState({ itemsToDisplay }, () => {
      this.setState({ itemsToUse: [...this.state.itemsToDisplay] });
    });
  }
}

export default Table1;
