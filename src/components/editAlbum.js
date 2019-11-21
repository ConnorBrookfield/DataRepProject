import React from 'react';
import axios from "axios";

class EditAlbum extends React.Component{
    constructor(props){
        super(props);
    
        this.state = { Title:"", Year:"", Artwork:"" };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleArtworkChange = this.handleArtworkChange.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:4000/api/myAlbums/" + this.props.match.params.id)
        .then((response)=>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Artist:response.data.artist,
                Year:response.data.year,
                Artwork:response.data.artwork
            })
        })
        .catch();
    }

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
            poster: this.state.Artwork
        };

        axios.put('http://localhost:4000/api/myAlbums/', this.state._id, newAlbum) 
        .then()
        .catch();           
    
        this.setState({ Title:"", Artist:"", Year:"", Artwork:"" });    
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
                        <label>Album Artist</label>
                        <input type = 'text' className = 'form-control' value = {this.state.Artist} onChange = {this.handleArtistChange}></input>
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
                        <input type = "submit" value = "Edit Album"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditAlbum;
