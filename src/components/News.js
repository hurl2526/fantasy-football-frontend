import React from 'react';
import Article from './Article'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '70%',
  };
  

  
  componentDidMount() {
    setTimeout(() => {
      const newList = [];
      fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((data) => data.json())
        .then((data) => {
          for (let i = 0; i < 20; i++) {
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
    }, 3000);
  }
  
function News() {
  return (
	<div style={styles}>
		<Carousel >
    {this.state.list.map((item, idx) => {
                return (
                  <div key={idx}>
                    <img src={item.picture} alt='...'/>
                    <p className="legend">{item.header}</p>
                  </div>
                );
              })}
      {/* <div>
        <Article />
      </div> */}
			{/* <div >
				<img  src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
				<p className="legend">Hong Kong</p>
			</div>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore"/>
				<p className="legend"></p>
			</div>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan"/>
				<p className="legend">Japan</p>
			</div>
			<div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
				<p className="legend">Las Vegas</p>
			</div> */}
		</Carousel>
	</div>
  );
}

export default News;