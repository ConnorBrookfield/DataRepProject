import React from 'react';
import '../App.css';
import AlbumInstance from "./albumInstance";

class MyAlbums extends React.Component {

  render() {
    return this.props.albums.map((album)=>{
      return <AlbumInstance key={album._id} album={album}></AlbumInstance>
    });
  }
}

export default MyAlbums;