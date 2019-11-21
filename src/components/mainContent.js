import React from 'react';
import '../App.css';

class MainContent extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome to the Music Repository!</h1>
        <br/>
        <h2>This time is: {new Date().toLocaleTimeString()}.</h2>
        <br/>
        <h2>*INSERT CARD OF ALBUMS HERE - ADD functionality to album library (from API to personal DB)(spotifyAlbumInstance)*</h2>
      </div>
    );
  }
}

export default MainContent;