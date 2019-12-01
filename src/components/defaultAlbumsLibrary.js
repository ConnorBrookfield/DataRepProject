import React from 'react';
import '../App.css';
import DefaultAlbums from "./defaultAlbums";
import axios from "axios";
import { CardDeck } from 'react-bootstrap';

class DefaultAlbumsLibrary extends React.Component {
    constructor(){
        super();
    }
    
    state = {
        defaultAlbums: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/defaultalbums')
        .then((response)=>{
            this.setState({defaultAlbums: response.data.defaultAlbums})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <h1><b>Welcome to the Music Repo!</b></h1>
                <div class="centerElement">
                    
                    <CardDeck>
                        <DefaultAlbums theDefaultAlbums={this.state.defaultAlbums}></DefaultAlbums>              
                    </CardDeck>            
                </div>
            </div>
        );
    }
}
export default DefaultAlbumsLibrary;