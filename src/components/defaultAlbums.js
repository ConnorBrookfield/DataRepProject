import React from 'react';
import DefaultAlbumInstance from './defaultAlbumInstance';

class defaultAlbums extends React.Component{

    render(){
        return this.props.theDefaultAlbums.map((defaultalbum)=>{
            return <DefaultAlbumInstance key={defaultalbum._id} defaultalbum={defaultalbum}></DefaultAlbumInstance>
        });
    }
}
export default defaultAlbums;