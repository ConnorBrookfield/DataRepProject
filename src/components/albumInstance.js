import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class AlbumInstance extends React.Component{

  constructor(){
    super();
    this.DeleteAlbum = this.DeleteAlbum.bind(this);
  }

  //Deletes an album from the database - sends a delete request to the server, which removes the specified album from the database
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
      <div >
          <Card className="bg-dark m-5" border="primary" style={{ width: '12.625rem', height: "26rem" }}>
            <Card.Img variant="top" height="200" width="200" src={this.props.album.artwork}/>
            <Card.Body>             
              <Card.Title><b>{this.props.album.title}</b></Card.Title>
              <Card.Subtitle>{this.props.album.artist} - <i>{this.props.album.year}</i></Card.Subtitle>        
            </Card.Body>
              <Link to={"/editAlbum/" + this.props.album._id} className="btn btn-primary">Edit</Link>
              <Button variant="danger" onClick={this.DeleteAlbum}>Delete</Button>
          </Card>
      </div>
    )
  }
}

export default AlbumInstance;