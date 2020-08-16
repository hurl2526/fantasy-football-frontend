import React from 'react';

const Header = () => {
  const style = {
    height: '60px',
  };
  return (
    <header style={style}>
      <h1 style={{ textAlign: 'center', fontSize: '2em' }}>Fantasy Football App</h1>
    </header>
  );
};

export default Header;