import React from 'react';
import BlogItem from './BlogItem';
import PropTypes from 'prop-types';

const Blogs = (props) => {
  return (
    <div style={{ marginLeft: '100px', width: '100%' }}>
      <h2>Blogs</h2>
      {props.blogs.map((blog) => {
        // const { objectId, title, author, subject, article } = blog;
        return (
          <BlogItem
            key={blog._id}
            blog={blog}
          />

        );
        // <div
        //   //key={blog.objectId} if not destructuring
        //   key={objectId}
        //   className='ui card'
        //   style={{ width: '75%', padding: '20px' }}
        // >
        //   <div className='content'>
        //     <div className='header'>{title}</div>
        //     <br />
        //     <div className='meta'>Author: {author}</div>
        //     <br />
        //     <div className='meta'>Subject: {subject}</div>
        //     <hr />
        //     <div className='description'>{article}</div>
        //   </div>
        //   <div>
        //     <button
        //       className='ui primary button'
        //       style={{ margin: '10px 15px' }}
        //       onClick={() => {
        //         props.onDelete(blog.objectId);
        //       }}
        //     >
        //       Delete
        //     </button>
        //   </div>
        //   <div className='extra content'>
        //     <a href='/' style={{ paddingRight: '10px' }}>
        //       <i aria-hidden='true' className='thumbs up icon'></i>
        //       {blog.likes} Likes
        //     </a>
        //     <a href='/'>
        //       <i aria-hidden='true' className='comments icon'></i>
        //       {blog.comments} Comments
        //     </a>
        //   </div>
        //   <div> </div>
        // </div>
      })}
    </div>
  );
};

export default Blogs;

Blogs.propType = {
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      round: PropTypes.string,
      name2: PropTypes.string,
      round2: PropTypes.string,
      _id:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])
    })
  ),
  searchTerm: PropTypes.string
};
