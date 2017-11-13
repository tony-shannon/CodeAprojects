import React from 'react';
import './Tracklist.css';

class TrackList extends React.Component  {
 render() {
   <div className="TrackList">
    <!-- You will add a map method that renders a set of Track components  -->
      {
        this.props.tracks.map(tracks =>
          {
          return <Track track={track} key={track.id}  />
          
          })
      }
    </div>
 }
}

export default TrackList;
