import React from 'react';
import BlogItem from './BlogItem';
import PropTypes from 'prop-types';

const Blogs = (props) => {
  return (
    <div style={{ marginLeft: '100px', width: '100%' }}>
      {props.blogs.map((blog) => {
        // const { objectId, title, author, subject, article } = blog;
        return <BlogItem key={blog._id} blog={blog} />;
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
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  searchTerm: PropTypes.string,
};
