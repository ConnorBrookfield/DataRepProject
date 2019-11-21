import React from 'react'
import AlbumsLibrary from './myAlbums';
import axios from 'axios';


class Read extends React.Component{

    state = {
        myAlbums: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/albums')
        .then((response)=>{
            this.setState({myAlbums: response.data.myAlbums})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <AlbumsLibrary myAlbums={this.state.albums}></AlbumsLibrary>
            </div>
        );
    }
}
export default Read;