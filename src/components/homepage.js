import React from 'react';
import '../App.css';

class Homepage extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome to the Music Repository!</h1>
        <br/>
        <h2>Stuck for something to Listen to? Try this album! <br/><b>*INSERT RANDOM ALBUM HERE*</b></h2>
        <br/>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Homepage;