import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

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
      setToken(_token)
    }



  }, []);
  return (
    <div className="app">

      {
        token ? ( //if they get a token, this snippet will show
          <h1>hi I am logged in and there is no player yet</h1>
        ) : ( //:otherwise they will be sent back to the login
          <Login />
        )
      }


        {/*add spotify logo here*/}
        {/* add login with spotify button*/}

        
        <Login />


    </div>
  );
}

export default App;
