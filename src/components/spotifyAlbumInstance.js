import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class spotifyAlbumInstance extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Card className="card text-white bg-dark mb-3" border="primary" style={{ width: '28rem'}}>
          <Card.Header>
            <h1><b><i>{this.props.album.title}</i></b></h1>
            <h3><b>{this.props.album.artist}</b></h3>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
            <img placeholder="If you can see this, the Image link is broken. Please update." height="400" width="300" src={this.props.album.artwork}></img>
              <footer>
                <hr/>
                <h2><i>{this.props.album.year}</i></h2>
              </footer>
            </blockquote>
          </Card.Body>
            <Link to={"/addAlbum/" + this.props.album._id} className="btn btn-primary">Add to Library</Link>
        </Card>
        <br></br>
      </div>
    )
  }
}
export default spotifyAlbumInstance;