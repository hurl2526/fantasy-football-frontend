import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateBlog extends Component {
  constructor() {
    super();
    this.state = {
      blog: {
        name: '',
        round: '',
        name2: '',
        round2: '',
      },
    };
  }

  handleChange = (event) => {
    // if(event.target.name ==='author')
    let updatedBlog = { ...this.state.blog };
    updatedBlog[event.target.name] = event.target.value;

    this.setState({
      blog: updatedBlog,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let emptyBlog = {
      name: '',
      round: '',
      name2: '',
      round2: '',
    };
    // console.log(this.state.blog)
    this.props.handleBlogSubmit(event, this.state.blog);

    this.setState(
      {
        blog: emptyBlog,
      }
      // event.target.reset()
    );
  };

  render() {
    return (
      <div style={{ paddingLeft: '60px', width: '100%' }}>
        <h2>Who Should I Draft?: </h2>
        <form onSubmit={this.handleSubmit} className='ui form'>
          <div
            className='equal width fields'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              width: '50%',
            }}
          >
            <div className='field'>
              <label htmlFor='name'>Player 1 Name:</label>
              <div className='ui fluid input'>
                <input
                  type='text'
                  name='name'
                  onChange={this.handleChange}
                  value={this.state.blog.name}
                />
              </div>
            </div>
            <div className='field'>
              <label htmlFor='round'>Round:</label>
              <div className='ui fluid input'>
                <input
                  type='text'
                  name='round'
                  onChange={this.handleChange}
                  value={this.state.blog.round}
                />
              </div>
            </div>
            <div className='field'>
              <label htmlFor='name2'>Player 2 Name:</label>
              <div className='ui fluid input'>
                <input
                  type='text'
                  name='name2'
                  onChange={this.handleChange}
                  value={this.state.blog.name2}
                />
              </div>
            </div>
            <div className='field'>
              <label htmlFor='name2'>Round:</label>
              <div className='ui fluid input'>
                <input
                  type='text'
                  name='round2'
                  onChange={this.handleChange}
                  value={this.state.blog.round2}
                />
              </div>
            </div>
          </div>
          <div className='field'>
            <button type='submit' className='ui button blue'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBlog;
