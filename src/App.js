import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./Player";
import {useDataLayerValue} from './DataLayer'

const spotify = new SpotifyWebApi();

function App() {

  //react variables
  // const [token, setToken] = useState(null);

  //using DataLayer
  const [{token}, dispatch] = useDataLayerValue();

  // Run code based on condition. When a variable changes. If [] run code once
  useEffect(() => {
    const hash = getTokenFromUrl();
    // window.location.hash = "";
    let _token = hash.access_token;
    if (_token){
      // setToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
        // console.log(user);
        // console.log(JSON.stringify(token));

        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists
          });

          spotify.getPlaylist(playlists.items[0].id).then( response => 
            dispatch({
              type: "SET_DISCOVER_WEEKLY",
              discover_weekly: response,
            }));
        });

      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
    // console.log("I HAVE A TOKEN>>>>> ", token);

  }, [token, dispatch]);


  return (
    <div className="app">
      {
        token ? (
          // <h1>I'm Logged in</h1>
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
