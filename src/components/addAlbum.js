import React from 'react';
import axios from 'axios';

class AddAlbum extends React.Component {
  constructor(props){
    super(props);

    this.state = { Title:"", Year:"", Artwork:"" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleArtworkChange = this.handleArtworkChange.bind(this);
  }
  
  handleTitleChange(e){
    this.setState({Title: e.target.value});
  }

  handleYearChange(e){
    this.setState({Year: e.target.value});
  }

  handleArtworkChange(e){
    this.setState({Artwork: e.target.value});
  }

  handleSubmit(e){
    // /alert(this.state.Title + "      " + this.state.Year + "       "+ this.state.Artwork);
    e.preventDefault();
    
    const newAlbum = {
      title: this.state.Title,
      year: this.state.Year,
      artwork: this.state.Artwork
    };

    axios.post('http://localhost:4000/api/albums', newAlbum) 
    .then()
    .catch();

    this.setState({ Title:"", Year:"", Artwork:"" });    
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <div className ='form-group'>
            <label>Album Title</label>
            <input type = 'text' className = 'form-control' value = {this.state.Title} onChange = {this.handleTitleChange}></input>
          </div>
          <div className ='form-group'>
            <label>Album Year</label>
            <input type ='text' className ='form-control' value = {this.state.Year} onChange = {this.handleYearChange}></input>
          </div>
          <div className ='form-group'>
            <label>Album Artwork (URL)</label>
            <textarea row ='3' className ='form-control' value = {this.state.Artwork} onChange = {this.handleArtworkChange}></textarea>
          </div>
          <div>
            <input type = "submit" value = "Add Album"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default AddAlbum;