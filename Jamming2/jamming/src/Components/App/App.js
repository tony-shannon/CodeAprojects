import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        name: ,
        artist: ,
        album:
      ]
    }
    this.searchResults = this.searchResults.bind(this);
    this.updatePlaylistName= this.updatePlaylistName.bind(this);
    this.search =this.search.bind(this);
  }

  this.state.searchResults = '';

  this.state.playlistName = '';
  this.state.playlistTracks = {[
    name: '';
    artist: '';
    album: '';
  ]};

  addTrack(track) {
      if (this.playlistTracks.id is new) {
      add to playlist
      }
    this= this.addTrack;
    onAdd.addTrack(track);
  }

  removeTrack(track) {
    if (this.playlistTracks.id is known) {
      remove from playlist
      }
      this= this.removeTrack;
    onRemove.removeTrack(track)
  }

  updatePlaylistName(name){
    this.state.Playlist=name;
    Playlist.onNameChange=  updatePlaylistName; // step 58
  }

  savePlaylist(){
    Spotify.savePlaylist();
    trackURIs = playlistTracks
    this.savePlaylist = this.savePlaylist.bind(this);
    playlist.name= 'New Playlist';
    searchResults: []
  }

  Spotify.search(){
    SearchResults = Spotify.search;
  }

  render() { // step 11
    return
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar onSearch={this.search}> </>
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}></>
          <Playlist tracks={this.props.searchResults}></>
          <!-- Add a Playlist component -->
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}></>
          </div>
        </div>
      </div>
  }

}
