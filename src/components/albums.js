import React from 'react';
import AlbumInstance from './albumInstance';

class Albums extends React.Component{

    render(){
        return this.props.myAlbums.map((album)=>{
            return <AlbumInstance key={album._id} album={album}
            ReloadDataMethod={this.props.ReloadDataMethod}></AlbumInstance>
        });
    }
}
export default Albums;