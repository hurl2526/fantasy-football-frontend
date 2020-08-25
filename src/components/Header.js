import React from 'react';

const Header = () => {
  const style = {
    backgroundColor:'black',
    color:'white',
    height: '60px',
    marginBottom:'2em'
  };
  return (
    <header style={style}>
      <h1 style={{ textAlign: 'center', fontSize: '2em' }}>Fantasy Football App</h1>
    </header>
  );
};

export default Header;