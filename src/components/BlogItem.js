import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const BlogItem = (props) => {
  const { name, round, name2, round2, _id:id } = props.blog;
  return (
    <div
      //key={blog.objectId} if not destructuring
      className='ui card'
      style={{ width: '75%', padding: '20px' }}
    >
      <div className='content'>
        <div className='header'>{name}</div>
        <br />
        <div className='meta'>Round: {round}</div>
        <br />
        <div className='meta'>Name2: {name2}</div>
        <hr />
        <div className='description' style={{ whiteSpace: 'pre-wrap' }}>
          {round2}
        </div>
      </div>
      <div>
        <Button
          className='ui primary button'
          onClick={() => {
            props.onDelete(id);
          }}
        >
          Delete
        </Button>
        <Button
          className='ui primary button'
          onClick={() => {
            props.onUpdate(id);
          }}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

BlogItem.propType = {
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  blog: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      subject: PropTypes.string,
      article: PropTypes.string,
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

export default BlogItem;
