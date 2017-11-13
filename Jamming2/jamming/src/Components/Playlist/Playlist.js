import React from 'react';
import './Playlist.css';


class Playlist extends React.Component {
  constructor {
    super(props);
    this.onNameChange= this.onNameChange.bind(this);
  }

  render () {
    return {
      <div className="Tracklist" tracks={this.props.playlistTracks}> // step 39
      </div>
      <div className="Playlist" onChange={this.handleNameChange}>
        <input defaultValue={'New Playlist'}/>

        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    }
  }
  handleNameChange(){
    onNameChange.target.value;
  }
}

export default Playlist;
