
let accessToken = '';
const CLIENT_ID= '1347818ae0c44bada0772cc6a78d40d9';
const REDIRECT_URI= "http://localhost:3010/";



let Spotify = {
  getAccessToken () {
    if (accessToken){
      return accessToken;
    }
    const SpotifyToken = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    if(SpotifyToken && expiryTime) { // if have both token & time
      accessToken = SpotifyToken[1]; // set the token first

      const tokenExpires = Number(expiryTime[1]);  // set the expiry time

      window.setTimeout(() => accessToken = '', tokenExpires * 1000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;

    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
      window.location = accessUrl;

    }
  },


  search(term) {
     const accessToken = Spotify.getAccessToken();
     return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
       headers: {
         Authorization: `Bearer ${accessToken}`
       }
     }).then(response => {
       return response.json();
     }).then(jsonResponse => {
       if (!jsonResponse.tracks) {
         return [];
       }
       return jsonResponse.tracks.items.map(track => ({
         id: track.id,
         name: track.name,
         artist: track.artists[0].name,
         album: track.album.name,
         uri: track.uri
       }));
     });
   },


  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
    return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({uris: trackUris})
          });
        });
      });
    }


}; // end of Spotity object

export default Spotify;
