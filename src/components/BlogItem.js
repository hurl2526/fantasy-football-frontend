import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const BlogItem = (props) => {
  const { name, round, name2, round2, } = props.blog;
  return (
    <div
      //key={blog.objectId} if not destructuring
      className='ui card'
      style={{ width: '75%', padding: '20px' }}
    >
      <div className='content'>
        <div className='header'>Player1: {name}</div>
        <br />
        <div className='meta'>Round: {round}</div>
        <br />
        <div className='header'>Player2: {name2}</div>
        <div className='meta'>Round: {round2}</div>
      </div>
      <div>
        <Button
          className='ui primary button'
          // onClick={this.vote.bind(this, i)}
        >
          Vote Player 1
        </Button>
        <Button
          className='ui primary button'
          // onClick={this.vote.bind(this, i)}
        >
          Vote Player 2
        </Button>
      </div>
    </div>
  );
};

BlogItem.propType = {
  blog: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      round: PropTypes.string,
      name2: PropTypes.string,
      round2: PropTypes.string,
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

export default BlogItem;
