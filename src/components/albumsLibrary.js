import React from 'react';
import '../App.css';
import AlbumInstance from "./albumInstance";
import Albums from "./albums";
import axios from "axios";

class AlbumsLibrary extends React.Component {
  state = {
    albums: []
  };

  componentDidMount() {
      axios.get('http://localhost:4000/api/albums')
      .then((response)=>{
          this.setState({albums: response.data.albums})
      })
      .catch((error)=>{
          console.log(error);
      });
  }

  render(){
      return(
          <div>
              <Albums myAlbums={this.state.albums}></Albums>
          </div>
      );
  }
}
export default AlbumsLibrary;