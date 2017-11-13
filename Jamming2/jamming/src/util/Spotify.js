import React from 'react';

const accesstoken = '';
const CLIENT_ID= '1347818ae0c44bada0772cc6a78d40d9';
const REDIRECT_URI= "http://localhost:3000/";



Spotify {
getAccessToken(){
  if (accesstoken.value = ok){
    accesstoken: accesstoken
  }
  else {
    accesstoken = 'https://example.com/callback#access_token=NwAExz...BV3O2Tk&token_type=Bearer&expires_in=3600&state=123'
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');
  }
  else {
    redirect to 'https://accounts.spotify.com/authorize?client_id={CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri={REDIRECT_URI}';
  }
}

search(term){
  fetch(){
    GET `https://api.spotify.com/v1/search?type=track&q={term}`;
    {
      headers: {Authorization: `Bearer ${accessToken}`}
    }
    return
    {
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      URI: track.uri
    }
  }
}

savePlaylist(playlist, [trackURIs]{
  accessToken: user.accessToken,
  headers: {Authorization: `Bearer ${accessToken}`},
  userID
  fetch()
  {
    GET 'https://api.spotify.com/v1/me',
    {headers: headers},
    POST 'POST https://api.spotify.com/v1/users/{user_id}/playlists/'
    headers: { name: playlist, method: 'POST', body: response.toJSON.id= playlist.ID}
    POST 'https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/tracks'
    headers: { name: track, method: 'POST', body: response.toJSON.id= playlist.ID}
  }
}

}

export default Spotify;
