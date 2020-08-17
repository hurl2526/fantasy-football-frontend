import React, { Component } from 'react';
// import Article from './Article'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
  backgroundColor:'orange',
    margin: 'auto',
    width: '70%',
  };

  class News extends Component {
    state = {
      list: [],
      toggle: true,
    };
  componentDidMount() {
    setTimeout(() => {
      const newList = [];
      fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((data) => data.json())
        .then((data) => {
          for (let i = 0; i < 10; i++) {
            newList.push({
              title: data[i].title,
              url: data[i].url,
              image: data[i].thumbnailUrl,
            });
          }
          this.setState({
            list: newList,
          });
        });
    }, 1000);
  };
  render(){
  return (
	<div style={styles}>
		<Carousel >
    {this.state.list.map((item, idx) => {
                return (
                  <div key={idx} style={{height:'300px', width:'100%'}} >
                    <img src={item.image} alt='...'  />
                    <p className="legend">{item.title}</p>
                  </div>
                );
              })}
		</Carousel>
	</div>
  );
}}

export default News;