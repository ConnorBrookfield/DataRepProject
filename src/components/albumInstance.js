import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class AlbumInstance extends React.Component{

  constructor(){
    super();
    this.DeleteAlbum = this.DeleteAlbum.bind(this);
  }

  DeleteMovie(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/albums/"+this.props.album._id)
    .then()
    .catch();

  }

    render(){
        return(
            <div>
              <Card className="card text-white bg-dark mb-3" border="primary" style={{ width: '28rem'}}>
                <Card.Header>
                  <h1><b><i>{this.props.album.title}</i></b></h1>
                </Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                  <img height="400" width="300" src={this.props.album.artwork}></img>
                    <footer>
                      <hr/>
                      <h2><i>{this.props.album.year}</i></h2>
                    </footer>
                  </blockquote>
                </Card.Body>
                  <Link to={"/edit/" + this.props.album._id} className="btn btn-primary">Edit</Link>
                  <Button variant="danger" onClick={this.DeleteAlbum}>Delete</Button>
              </Card>
              <br></br>
            </div>
        )
    }
}
export default AlbumInstance;