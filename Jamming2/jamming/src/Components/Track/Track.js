import React from 'react';
import './Track.css';

class Track extends React.Component  {
component Track {
  constructor {
    super(props);
    this.addTrack = this;
    this.removeTrack = this;
  }


  render() {
    return {
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album} </p>
        </div>
        <a className="Track-action" onClick="this.addTrack">+</a>
        <a className="Track-action" onClick="this.removeTrack"> - </a>
      </div>
    }
  }

  renderAction() {
    if (isRemoval === true) {anchor : '-'}
    if (iSRemoval === false) {anchor: '+'}
  }
}

addTrack(track){
  this.props.onAdd(this.props.track);
}

removeTrack(track) {
  this.props.onRemove(this.props.track);
}

export default Track;
