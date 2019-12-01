import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../App.css';

class DefaultAlbumInstance extends React.Component{

  constructor(){
    super();
    this.AddAlbum = this.AddAlbum.bind(this);
  }

  //Add Album method, for adding a default Album to your personal list, 
  //by sending a post request to the server, thus adding an album to the database
  AddAlbum(e){
    const newAlbum = {
        title: this.props.defaultalbum.title,
        artist: this.props.defaultalbum.artist,
        year: this.props.defaultalbum.year,
        artwork: this.props.defaultalbum.artwork
    };

    axios.post('http://localhost:4000/api/albums/' + this.props.defaultalbum._id, newAlbum) 
    .then()
    .catch();   
  
    alert("Album has been added to Personal Library!");
  }

  render(){
    return(
      <div>
          <Card className="bg-dark m-5" border="primary" style={{ width: '12.625rem', height: "26rem" }}>
            <Card.Img variant="top" height="200" width="200" src={this.props.defaultalbum.artwork}/>
            <Card.Body>             
              <Card.Title><b>{this.props.defaultalbum.title}</b></Card.Title>
              <Card.Subtitle>{this.props.defaultalbum.artist} - <i>{this.props.defaultalbum.year}</i></Card.Subtitle>        
            </Card.Body>
              <Button variant="success" onClick={this.AddAlbum}>Add to my List!</Button>
          </Card>
      </div>
    )
  }
}

export default DefaultAlbumInstance;