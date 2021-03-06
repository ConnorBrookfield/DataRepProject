import React from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddAlbum extends React.Component {
  constructor(props){
    super(props);

    this.state = { Title:"", Artist:"", Year:"", Artwork:"" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleArtworkChange = this.handleArtworkChange.bind(this);
  }
  //Methods for setting variables to user input
  handleTitleChange(e){
    this.setState({Title: e.target.value});
  }

  handleArtistChange(e){
    this.setState({Artist: e.target.value});
  }

  handleYearChange(e){
    this.setState({Year: e.target.value});
  }

  handleArtworkChange(e){
    this.setState({Artwork: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    
    const newAlbum = {
      title: this.state.Title,
      artist: this.state.Artist,
      year: this.state.Year,
      artwork: this.state.Artwork
    };

    //Posts the request to the server, with the newly created album
    axios.post('http://localhost:4000/api/albums', newAlbum) 
    .then()
    .catch();

    this.setState({ Title:"", Artist:"", Year:"", Artwork:"" });    
  }

  render() {
    return (
      <div>
        <h1><b>Add an Album to your personal Library!</b></h1>
        <div class="centerElement">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Album Title</Form.Label>
              <Form.Control as="input" value={this.state.Title} onChange={this.handleTitleChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Album Artist</Form.Label>
              <Form.Control as="input" value={this.state.Artist} onChange={this.handleArtistChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Album Year</Form.Label>
              <Form.Control as="input" value={this.state.Year} onChange={this.handleYearChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Album Artwork</Form.Label>
              <Form.Control as="textarea" value={this.state.Artwork} onChange={this.handleArtworkChange}/>
            </Form.Group>

            <Button variant="primary" type="submit">Add Album</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default AddAlbum;
