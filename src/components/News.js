import React, { Component } from 'react';
// import Article from './Article'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
  backgroundColor:'none',
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
      fetch('http://newsapi.org/v2/everything?' +
      'q=fantasy AND football AND NFL&' +
      'apiKey=be6cc06bb955445c802c28ba768f9d57')
        .then((data) => data.json())
        .then((data) => {
          for (let i = 0; i < 10; i++) {
            newList.push({
              title: data.articles[i].title,
              url: data.articles[i].url,
              image: data.articles[i].urlToImage,
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
                    <p className="legend"><a href={item.url}>{item.title}</a></p>
                  </div>
                );
              })}
		</Carousel>
	</div>
  );
}}

export default News;