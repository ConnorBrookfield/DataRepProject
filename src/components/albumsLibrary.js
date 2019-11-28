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

    componentDidMount() {
        axios.get('http://localhost:4000/api/albums')
        .then((response)=>{
            this.setState({albums: response.data.albums})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

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
            <div class="centerElement">
                <CardDeck>
                    <Albums myAlbums={this.state.albums} ReloadDataMethod={this.ReloadDataMethod}></Albums>              
                </CardDeck>            
            </div>
        );
    }
}
export default AlbumsLibrary;