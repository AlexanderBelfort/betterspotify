import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  const [{}, dispatch] = useDataLayerValue();

  //useEffect hooks again
  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    //console.log('I HAVE ZE TOKEN>>>', token);
    //test if this will get the token
    //will pull it from the url
    //test worked
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      //test to see if User will work
      //spotify.getMe().then(user => {
      //  console.log('person', user);
      //}
      //); test passed, got user in console
    }



  }, []);
  return (
    <div className="app">

      {
        token ? ( //if they get a token, this snippet will show
          <Player />
        ) : ( //:otherwise they will be sent back to the login
          <Login />
        )
      }


        {/*add spotify logo here*/}
        {/* add login with spotify button*/}

        


    </div>
  );
}

export default App;
