import React from 'react';
import '../App.css';
import Albums from "./albums";
import axios from "axios";
import { CardDeck } from 'react-bootstrap';

class AlbumsLibrary extends React.Component {
    constructor(){
        super();
        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
    }
    
    state = {
        albums: []
    };

    //Sends a get request to the server, and gets back data from the database
    componentDidMount() {
        axios.get('http://localhost:4000/api/albums')
        .then((response)=>{
            this.setState({albums: response.data.albums})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    //Reloads the data after deletion
    ReloadDataMethod(){
        axios.get("http://localhost:4000/api/albums")
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
                <h1><b>My Album Library</b></h1>
                <div class="centerElement">
                    <CardDeck>
                        <Albums myAlbums={this.state.albums} ReloadDataMethod={this.ReloadDataMethod}></Albums>              
                    </CardDeck>        
                </div>    
            </div>
        );
    }
}
export default AlbumsLibrary;