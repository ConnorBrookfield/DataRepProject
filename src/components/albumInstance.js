import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import { CardDeck } from 'react-bootstrap';

class AlbumInstance extends React.Component{

  constructor(){
    super();
    this.DeleteAlbum = this.DeleteAlbum.bind(this);
  }

  DeleteAlbum(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/albums/"+this.props.album._id)
    .then(()=>{
      this.props.ReloadDataMethod();
    })
    .catch();
  }

  render(){
    return(
      <div>
          <Card className="card text-white bg-dark mb-3 text-center p-3" border="primary">
            <Card.Header>
              <h1><b><i>{this.props.album.title}</i></b></h1>
              <h3><b>{this.props.album.artist}</b></h3>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
              <img placeholder="If you can see this, the Image link is broken. Please update." height="200" width="200" src={this.props.album.artwork}></img>
                <footer>
                  <hr/>
                  <h2><i>{this.props.album.year}</i></h2>
                </footer>
              </blockquote>
            </Card.Body>
              <Link to={"/editAlbum/" + this.props.album._id} className="btn btn-primary">Edit</Link>
              <Button variant="danger" onClick={this.DeleteAlbum}>Delete</Button>
          </Card>
      </div>
    )
  }
}

export default AlbumInstance;